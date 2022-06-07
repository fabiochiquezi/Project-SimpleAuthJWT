import { Document, Model } from 'mongoose'
import { domain } from '../../domain/types'

export type postReturn = {
    post: boolean
    message: string
    item: Document<unknown, any, domain> | null
}

export type props = (
    Domain: Model<domain>
) => (data: domain) => Promise<postReturn>
