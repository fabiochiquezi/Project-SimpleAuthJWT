import { RequestHandler } from 'express'
import { domain } from '../domain/types'
import { Model } from 'mongoose'

type getByID = (Domain: Model<domain>) => RequestHandler
type put = (Domain: Model<domain>) => RequestHandler
type del = (Domain: Model<domain>) => RequestHandler

export { getByID, put, del }
