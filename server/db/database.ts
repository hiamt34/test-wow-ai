import { MLStatus } from '../../protos/interfaces/entity/MLStatus'
import { Entity } from '../../protos/interfaces/entity/Entity'
import { EntityInsert } from '../../protos/interfaces/entity/EntityInsert'
import { v4 as uuidv4 } from 'uuid'
import { EntityInsertList } from '../../protos/interfaces/entity/EntityInsertList'

class Datebase {
    private statusML: MLStatus
    private datas: Entity[]
    constructor(statusML: MLStatus, datas: Entity[]) {
        this.datas = datas
        this.statusML = statusML
    }
    checkStatusML() {
        return this.statusML
    }
    updateStatus(status: MLStatus = MLStatus.idle) {
        return (this.statusML = status)
    }
    insert(data: EntityInsert) {
        const nData = {
            ...data,
            _id: uuidv4(),
        }
        this.datas.push(nData)
        return nData
    }
    insertMany(datas: EntityInsertList) {
        const nDatas = datas.entitys?.map((entity) => {
            this.datas.push({
                ...entity,
                _id: uuidv4(),
            })
            return {
                ...entity,
                _id: uuidv4(),
            }
        })
        return nDatas
    }
    GetAll() {
        return this.datas
    }
    build() {
        this.datas = []
        this.statusML = MLStatus.idle
    }
}

export const db = new Datebase(MLStatus.idle, [])
