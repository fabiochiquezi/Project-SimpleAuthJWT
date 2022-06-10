import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessages } from './../successDatabaseMessages'
import { props } from './types'

export const deleteApi: props = Domain => async id => {
    try {
        await Domain.deleteOne({ id })
        return {
            delete: true,
            message: successDatabaseMessages.del
        }
    } catch (e: any) {
        return { delete: false, message: errDatabaseMessages.err }
    }
}
