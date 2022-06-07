import { Model } from 'mongoose'
import { RequestHandler } from 'express'
import { domain } from '../../domain/types'
import { ResponseStd } from '../../../helpers/response/types'
import { ValidReq } from '../../../helpers/validation/expressValid/types'

type post = (
    Domain: Model<domain>,
    validationFn: ValidReq,
    responseFn: ResponseStd
) => RequestHandler

export { post }
