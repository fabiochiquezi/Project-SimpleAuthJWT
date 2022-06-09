import { ResponseStd } from '../../../../helpers/response/types'
import { domain } from '../../domain/types'
import { RequestHandler } from 'express'
import { Model } from 'mongoose'

export type del = (
    Domain: Model<domain>,
    responseFn: ResponseStd
) => RequestHandler
