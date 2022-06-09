import { Document, Model } from 'mongoose'

export type findByIDReturn = {
    findByID: boolean
    message: string
    doc: Document<unknown, any> | null
}
export type props = (
    Domain: Model<any>
) => (id: string) => Promise<findByIDReturn>
