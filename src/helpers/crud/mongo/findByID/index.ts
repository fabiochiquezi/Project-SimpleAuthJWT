import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessages } from './../successDatabaseMessages'
import { props } from './types'

export const findByIDApi: props = Domain => async id => {
    try {
        const toDo = await Domain.findById(id)
        return {
            findByID: true,
            message: successDatabaseMessages.getByID,
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
