import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../protos/interfaces/entity'
const PORT = process.env.PORT_SEVER || 3001
const PROTO_FILE = '../protos/entity.proto'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE), {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
})

const grpcObj = grpc.loadPackageDefinition(
    packageDef
) as unknown as ProtoGrpcType

export const client = new grpcObj.entity.EntityService(
    `server-container`,
    grpc.credentials.createInsecure()
)
