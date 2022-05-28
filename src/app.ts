import * as dotenv from 'dotenv'
import express, { Application } from 'express'
import { simpleTodoRouter } from './simpleTodo/routes'
import { connectMongo } from './share/configs/database/mongo'
import { errrorHandler } from './share/middlewares/errorMiddleware'

dotenv.config()
connectMongo()
const app: Application = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/simple-todo', simpleTodoRouter)
app.use(errrorHandler)

app.listen(port, () => console.log(`App listening port ${port}`))
