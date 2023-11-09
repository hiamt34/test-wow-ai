import mongoose from 'mongoose'
export interface EntityDocument extends mongoose.Document {
    x1: number
    x2: number
    y1: number
    y2: number
}
const EntitySchema = new mongoose.Schema(
    {
        x1: { type: Number },
        x2: { type: Number },
        y1: { type: Number },
        y2: { type: Number },
    },
    { timestamps: true }
)

export const EntityModel = mongoose.model<EntityDocument>(
    'Entity',
    EntitySchema
)
