import { domain } from '../../domain/types'
import { Model } from 'mongoose'

export type findDeleteReturn = {
    del: boolean
    message: string
}
export type props = (
    Domain: Model<domain>
) => (id: string) => Promise<findDeleteReturn>
