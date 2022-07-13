import { Document, Model } from 'mongoose'

export type props = (Domain: Model<any>) => <T>(
    id: string,
    data: T
) => Promise<{
    update: boolean
    message: string
    doc: Document<unknown, any> | Record<any, any>
}>
