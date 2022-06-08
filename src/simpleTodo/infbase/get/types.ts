import { Document, Model } from 'mongoose'
import { domain } from '../../domain/types'

type resp = {
    get: boolean
    message: string
    items: Document<unknown, any, domain>[] | null
}

export type props = (Domain: Model<domain>) => Promise<resp>
