import { object, string, ref, boolean, array, number } from 'yup'
const payload = {
    body: object({
        roomId: string().required(),
    }),
}

export const inserSchema = object({
    body: object({
        x1: number().required(),
        y1: number().required(),
        x2: number().required(),
        y2: number().required(),
    }),
})
