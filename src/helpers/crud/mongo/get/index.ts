import { successDatabaseMessages } from './../successDatabaseMessages'
import { errDatabaseMessages } from './../errDatabaseMessages'
import { props } from './types'

export const getApi: props = async Domain => {
    try {
        const docs = await Domain.find()
        return { get: true, message: successDatabaseMessages.get, docs }
    } catch (e: any) {
        return {
            get: false,
            message: errDatabaseMessages.err,
            docs: null
        }
    }
}
