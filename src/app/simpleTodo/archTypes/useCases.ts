import { ValidReq } from '../../../helpers/validation/expressValid/types'
import { ResponseStd } from '../../../helpers/response/types'
import { RequestHandler } from 'express'
import { Model } from 'mongoose'
import { domain } from './domain'

type simplePipe = (
    Domain: Model<domain>,
    responseFn: ResponseStd
) => RequestHandler

type validPipe = (
    Domain: Model<domain>,
    validationFn: ValidReq,
    responseFn: ResponseStd
) => RequestHandler

export type del = simplePipe
export type get = simplePipe
export type getOneByID = simplePipe
export type post = validPipe
export type put = validPipe
