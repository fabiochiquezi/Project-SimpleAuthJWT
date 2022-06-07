import { domain } from '../../domain/types'
import { Document } from 'mongoose'

export type returnT = {
    update: boolean
    message: string
}

export type props = (
    doc: Document<domain>
) => (data: domain) => Promise<returnT>
