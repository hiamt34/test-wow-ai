import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { EntityRouter } from './routers/entity,router'
dotenv.config()
const allowedOrigins = '*'
const PORT = process.env.PORT_API_GATEWAY || 3000

const options: cors.CorsOptions = {
    origin: allowedOrigins,
}
const app = express()
app.use(cors(options))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log('api-gateway running on port ' + PORT)
    EntityRouter(app)
})
