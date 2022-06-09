import { Document, Model } from 'mongoose'

export type postReturn = {
    post: boolean
    message: string
    item: Document<unknown, any> | null
}

export type props = (Domain: Model<any>) => (data: any) => Promise<postReturn>
