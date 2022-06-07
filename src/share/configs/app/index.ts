import express, { Application } from 'express'
import { simpleTodoRouter } from '../../../simpleTodo/routes'
import { errrorHandler } from '../../middlewares/errorMiddleware'

const makeApp = () => {
    const app: Application = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))

    app.use('/api/simple-todo', simpleTodoRouter)

    app.use(errrorHandler)
    return app
}

export default makeApp
