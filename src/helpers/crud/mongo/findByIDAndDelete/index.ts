import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessages } from './../successDatabaseMessages'
import { props } from './types'

export const findByIDAndDeleteApi: props = Domain => async id => {
    try {
        await Domain.findByIdAndDelete(id)
        return {
            del: true,
            message: successDatabaseMessages.del
        }
    } catch (e: any) {
        return {
            del: false,
            message: errDatabaseMessages.notFoundOrDatabaseOff
        }
    }
}
