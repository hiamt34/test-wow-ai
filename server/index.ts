import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../protos/interfaces/entity'
import dotenv from 'dotenv'
import catchErrors from '../ultis/catchError'
import { Entity } from '../protos/interfaces/entity/Entity'
import { MLStatus } from '../protos/interfaces/entity/MLStatus'
import { EntityServiceHandlers } from '../protos/interfaces/entity/EntityService'
dotenv.config()
const PORT = process.env.PORT || 3000
const PROTO_FILE = '../protos/entity.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))

export const grpcObj = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType
const entityPackage = grpcObj.entity
interface IDB {
    statusML: MLStatus
    datas: Entity[]
}
export let db: IDB
const connectAndInitDB = (): IDB => {
    return {
        statusML: MLStatus.idle,
        datas: [],
    }
}
function getServer() {
    const server = new grpc.Server()
    server.addService(entityPackage.EntityService.service, {
        // Insert: catchErrors(roomService.Insert),
        // InsertUserForRoom: catchErrors(roomService.InsertUserForRoom),
        // GetRoomById: catchErrors(roomService.GetRoomById),
        // OutRoom: catchErrors(roomService.OutRoom),
    } as EntityServiceHandlers)
    return server
}

function runServer() {
    const server = getServer()
    server.bindAsync(
        `127.0.0.1:${PORT}`,
        grpc.ServerCredentials.createInsecure(),
        (err, port) => {
            if (err) {
                console.error(err)
                return
            }
            console.info('room-server running ' + `127.0.0.1:${PORT}`)
            server.start()
        }
    )
    db = connectAndInitDB()
}

runServer()
