import { Document, Model } from 'mongoose'

type resp = {
    get: boolean
    message: string
    docs: Document<unknown, any>[] | null
}

export type props = (Domain: Model<any>) => Promise<resp>
