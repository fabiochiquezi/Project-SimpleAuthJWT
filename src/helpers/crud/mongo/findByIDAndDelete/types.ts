import { Model } from 'mongoose'

export type findDeleteReturn = {
    del: boolean
    message: string
}
export type props = (
    Domain: Model<any>
) => (id: string) => Promise<findDeleteReturn>
