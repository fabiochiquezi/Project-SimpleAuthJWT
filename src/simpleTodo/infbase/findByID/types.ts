import { domain } from '../../domain/types'
import { Document, Model } from 'mongoose'

export type findBtIDReturn = {
    find: boolean
    message: string
    item: Document<unknown, any, domain> | null
}
export type props = (
    Domain: Model<domain>
) => (id: string) => Promise<findBtIDReturn>
