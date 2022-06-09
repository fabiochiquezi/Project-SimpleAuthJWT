import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessage } from './../successDatabaseMessages'
import { props } from './types'

export const deleteApi: props = Domain => async id => {
    try {
        await Domain.deleteOne({ id })
        return {
            delete: true,
            message: successDatabaseMessage.del
        }
    } catch (e: any) {
        return { delete: false, message: errDatabaseMessages.err }
    }
}
