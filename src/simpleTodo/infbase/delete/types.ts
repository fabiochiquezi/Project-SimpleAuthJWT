import { domain } from '../../domain/types'
import { Model } from 'mongoose'

export type deleteReturn = {
    delete: boolean
    message: string
}
export type props = (
    Domain: Model<domain>
) => (id: string) => Promise<deleteReturn>
