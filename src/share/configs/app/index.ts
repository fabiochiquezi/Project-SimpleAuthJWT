import { props } from './types'
import * as dotenv from 'dotenv'
import pathEnv from './pathEnv'
import express, { Application } from 'express'
import { errrorHandler } from '../../middlewares/errorMiddleware'

const makeApp: props = (databaseConnect) => {
    dotenv.config({ path: pathEnv() })
    const app: Application = express()
    databaseConnect()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(errrorHandler)
    return app
}

export default makeApp
