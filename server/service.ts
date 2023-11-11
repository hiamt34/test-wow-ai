import { handleUnaryCall } from '@grpc/grpc-js'
import { EntityServiceHandlers } from '../protos/interfaces/entity/EntityService'
import { CheckResult } from '../protos/interfaces/entity/CheckResult'
import { Entity } from '../protos/interfaces/entity/Entity'
import { EntityId__Output } from '../protos/interfaces/entity/EntityId'
import { EntityInsert__Output } from '../protos/interfaces/entity/EntityInsert'
import { v4 as uuidv4 } from 'uuid'
import { EntityList } from '../protos/interfaces/entity/EntityList'
import { Empty__Output } from '../protos/interfaces/google/protobuf/Empty'
import { EntityResult } from '../protos/interfaces/entity/EntityResult'
import { db } from './db/database'
import { UpdateStatus__Output } from '../protos/interfaces/entity/UpdateStatus'
import { EntityInsertList__Output } from '../protos/interfaces/entity/EntityInsertList'

class EntityService implements EntityServiceHandlers {
    [name: string]: import('@grpc/grpc-js').UntypedHandleCall
    Check: handleUnaryCall<EntityId__Output, CheckResult> = (
        call,
        callback
    ) => {
        callback(null, { result: db.checkStatusML() })
    }
    Insert: handleUnaryCall<EntityInsert__Output, EntityResult> = (
        call,
        callback
    ) => {
        const payload = call.request
        const data = db.insert(payload)
        callback(null, { entity: data })
    }
    GetAll: handleUnaryCall<Empty__Output, EntityList> = (call, callback) => {
        callback(null, { entitys: db.GetAll() })
    }
    UpdateStatus: handleUnaryCall<UpdateStatus__Output, CheckResult> = (
        call,
        callback
    ) => {
        const payload = call.request
        const data = db.updateStatus(payload.status)
        callback(null, { result: payload.status })
    }
    InsertMany: handleUnaryCall<EntityInsertList__Output, EntityList> = (
        call,
        callback
    ) => {
        const payload = call.request
        const data = db.insertMany(payload)
        callback(null, { entitys: data })
    }
}
const entityService = new EntityService()
export default entityService
