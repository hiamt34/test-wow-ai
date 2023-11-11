import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../protos/interfaces/entity'
import dotenv from 'dotenv'
import catchErrors from './ultis/catchError'
import { EntityServiceHandlers } from '../protos/interfaces/entity/EntityService'
import { db } from './db/database'
import entityService from './service'
dotenv.config()
const PORT = process.env.PORT_SEVER || 3001
const PROTO_FILE = '../protos/entity.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))

export const grpcObj = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType
const entityPackage = grpcObj.entity
const connectAndInitDB = () => {
    return db
}
function getServer() {
    const server = new grpc.Server()
    server.addService(entityPackage.EntityService.service, {
        Check: catchErrors(entityService.Check),
        Insert: catchErrors(entityService.Insert),
        GetAll: catchErrors(entityService.GetAll),
        UpdateStatus: catchErrors(entityService.UpdateStatus),
        InsertMany: catchErrors(entityService.InsertMany),
    } as EntityServiceHandlers)
    return server
}

function runServer() {
    const server = getServer()
    server.bindAsync(
        `server-container`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(err)
                return
            }
            console.info('grpc-server running ' + `server-container`)
            server.start()
        }
    )
    connectAndInitDB()
}

runServer()
