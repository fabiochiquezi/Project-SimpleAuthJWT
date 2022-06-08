import { RequestHandler } from 'express'
import { Model } from 'mongoose'
import { ResponseStd } from '../../../helpers/response/types'
import { domain } from '../../domain/types'

export type get = (
    Domain: Model<domain>,
    responseFn: ResponseStd
) => RequestHandler
