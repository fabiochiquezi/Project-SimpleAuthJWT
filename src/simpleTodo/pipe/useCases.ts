import { RequestHandler } from 'express'
import { domain } from '../domain/types'
import { Model } from 'mongoose'

type post = (Domain: Model<domain>) => RequestHandler
type getByID = (Domain: Model<domain>) => RequestHandler
type getAll = (Domain: Model<domain>) => RequestHandler
type put = (Domain: Model<domain>) => RequestHandler
type del = (Domain: Model<domain>) => RequestHandler

export { post, getByID, getAll, put, del }
