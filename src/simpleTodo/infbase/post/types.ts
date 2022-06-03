import { Model } from 'mongoose'
import { domain } from '../../domain/types'

export type postReturn = {
    post: boolean,
    message: string,
}

export type props = (Domain: Model<domain>, data: domain) => boolean
