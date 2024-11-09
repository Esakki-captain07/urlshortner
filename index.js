import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import routes from './src/router/index.js'

const PORT = process.env.PORT

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(PORT,()=>console.log(`server is literning ${PORT}`))