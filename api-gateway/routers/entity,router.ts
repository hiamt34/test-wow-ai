import { Express, Request, Response, Router } from 'express'
import { client } from '../../client/entity-client'
import { validate } from '../middleware/validateRequest.middleware'
import { inserSchema } from '../middleware/entity.middleware'
import { EntityInsert } from '../../protos/interfaces/entity/EntityInsert'
import multer from 'multer'
import { MLStatus } from '../../protos/interfaces/entity/MLStatus'
import util from 'util'
const route = Router()
const upload = multer()
export const EntityRouter = (app: Express) => {
    app.use('/', route)
    route.get('/get-all', async (req: Request, res: Response) => {
        client.GetAll({}, (err, data) => {
            if (!err) {
                return res.status(200).json({
                    status: true,
                    data: data?.entitys,
                })
            } else {
                return res.status(500).json({
                    code: err?.code,
                    message: err?.details,
                    status: false,
                })
            }
        })
    })
    route.post(
        '/predict',
        validate(inserSchema),
        async (req: Request, res: Response) => {
            const data: EntityInsert = req.body
            client.Insert(data, (err, data) => {
                if (!err) {
                    return res.status(201).json({
                        status: true,
                        data: data?.entity,
                    })
                } else {
                    return res.status(500).json({
                        code: err?.code,
                        message: err?.details,
                        status: false,
                    })
                }
            })
        }
    )
    route.get('/check-status', async (req: Request, res: Response) => {
        client.Check({}, (err, data) => {
            if (!err) {
                return res.status(201).json({
                    status: true,
                    data: data?.result,
                })
            } else {
                return res.status(500).json({
                    code: err?.code,
                    message: err?.details,
                    status: false,
                })
            }
        })
    })
    route.post(
        '/upload',
        upload.array('files', 1000),
        async (req: Request, res: Response) => {
            // const updateStatusAsync = util.promisify(client.UpdateStatus)
            try {
                // await updateStatusAsync({ status: MLStatus.train })
                await new Promise((resolve, reject) => {
                    client.UpdateStatus(
                        { status: MLStatus.train },
                        (err, data) => {
                            if (err) {
                                reject(err)
                            } else resolve(data)
                        }
                    )
                })
                const files = req.files as Express.Multer.File[]
                for (let i = 0; i < files.length; i++) {
                    const file = files[i]

                    const data = JSON.parse(file.buffer.toString())
                    // mo ta qua trinh train nhieu data
                    await new Promise((resolve, reject) => {
                        setTimeout(() => {
                            try {
                                if (Array.isArray(data)) {
                                    client.InsertMany(
                                        data as any,
                                        (err, data) => {
                                            if (!err) {
                                                resolve(data)
                                            } else {
                                                reject(err)
                                            }
                                        }
                                    )
                                } else {
                                    client.Insert(data as any, (err, data) => {
                                        if (!err) {
                                            resolve(data)
                                        } else {
                                            reject(err)
                                        }
                                    })
                                }
                            } catch (error) {
                                reject(error)
                            }
                        }, 1000)
                    })
                }
                await new Promise((resolve, reject) => {
                    client.UpdateStatus(
                        { status: MLStatus.idle },
                        (err, data) => {
                            if (err) {
                                reject(err)
                            } else resolve(data)
                        }
                    )
                })
                return
            } catch (err: any) {
                console.log(err)
                await new Promise((resolve, reject) => {
                    client.UpdateStatus(
                        { status: MLStatus.idle },
                        (err, data) => {
                            if (err) {
                                reject(err)
                            } else resolve(data)
                        }
                    )
                })
                return res.status(500).json({
                    code: err?.code,
                    message: err?.details || err.message,
                    status: false,
                })
            }
        }
    )
}
