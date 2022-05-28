import * as dotenv from 'dotenv'
import express, { Application } from 'express'
import { simpleTodoRouter } from './routes/simpleTodoRoute'
import { errrorHandler } from './middleware/errorMiddleware'

dotenv.config()
const app: Application = express()
const port = process.env.PORT || 5000
console.log(process.env.NODE_ENV, 'aaaaaaaaaaaa')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/simple-todo', simpleTodoRouter)
app.use(errrorHandler)

app.listen(port, () => console.log(`App listening port ${port}`))
