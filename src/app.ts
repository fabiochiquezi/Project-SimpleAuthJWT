import 'dotenv/config'
import express, { Application } from 'express'
import { simpleTodoRouter } from './routes/simpleTodoRoute'

const app: Application = express()
app.use(express.json())

app.use('/api/simple-todo', simpleTodoRouter)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})
