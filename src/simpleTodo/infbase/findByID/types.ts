import { domain } from '../../domain/types'
import { Document, Model } from 'mongoose'

export type findBtIDReturn = {
    findByID: boolean
    message: string
    doc: Document<unknown, any, domain> | null
}
export type props = (
    Domain: Model<domain>
) => (id: string) => Promise<findBtIDReturn>
