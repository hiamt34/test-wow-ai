import { handleUnaryCall } from '@grpc/grpc-js'
import { EntityModel } from '../models/entity.model'
import { EntityServiceHandlers } from '../protos/interfaces/entity/EntityService'
import { CheckResult } from '../protos/interfaces/entity/CheckResult'
import { Entity } from '../protos/interfaces/entity/Entity'
import { EntityId__Output } from '../protos/interfaces/entity/EntityId'
import { EntityInsert__Output } from '../protos/interfaces/entity/EntityInsert'
import { db } from '.'
import { v4 as uuidv4 } from 'uuid'
import { EntityList } from '../protos/interfaces/entity/EntityList'
import { Empty__Output } from '../protos/interfaces/google/protobuf/Empty'
import { EntityResult } from '../protos/interfaces/entity/EntityResult'

class EntityService implements EntityServiceHandlers {
    [name: string]: import('@grpc/grpc-js').UntypedHandleCall
    Check: handleUnaryCall<EntityId__Output, CheckResult> = async (
        call,
        callback
    ) => {
        callback(null, { result: db.statusML })
    }
    Insert: handleUnaryCall<EntityInsert__Output, EntityResult> = async (
        call,
        callback
    ) => {
        const payload = call.request
        const data = {
            ...payload,
            _id: uuidv4(),
        }
        db.datas.push(data)
        callback(null, { entity: data })
    }
    GetAll: handleUnaryCall<Empty__Output, EntityList> = async (
        call,
        callback
    ) => {
        callback(null, { entitys: db.datas })
    }
}
const entityService = new EntityService()
export default entityService
