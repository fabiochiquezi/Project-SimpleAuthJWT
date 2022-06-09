import { Document } from 'mongoose'

export type returnT = {
    update: boolean
    message: string
}

export type props = (doc: Document<any>) => (data: any) => Promise<returnT>
