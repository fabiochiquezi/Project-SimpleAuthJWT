import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessage } from './../successDatabaseMessages'
import { props } from './types'

export const findByIDApi: props = Domain => async id => {
    try {
        const toDo = await Domain.findById(id)
        return {
            findByID: true,
            message: successDatabaseMessage.getByID,
            doc: toDo
        }
    } catch (e: any) {
        return {
            findByID: false,
            message: errDatabaseMessages.notFoundOrDatabaseOff,
            doc: null
        }
    }
}
