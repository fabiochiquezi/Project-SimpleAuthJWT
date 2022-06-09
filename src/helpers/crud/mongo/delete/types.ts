import { Model } from 'mongoose'

export type deleteReturn = {
    delete: boolean
    message: string
}
export type props = (
    Domain: Model<any>
) => (id: string) => Promise<deleteReturn>
