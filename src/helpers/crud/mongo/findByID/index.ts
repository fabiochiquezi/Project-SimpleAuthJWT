import { errDBMsgs } from './../errDBMsgs'
import { scssDBMsgs } from './../scssDBMsgs'
import { props } from './types'

export const findByIDApi: props = Domain => async id => {
    try {
        const toDo = await Domain.findById(id)
        return {
            findByID: true,
            message: scssDBMsgs.getByID,
            doc: toDo
        }
    } catch (e: any) {
        return {
            findByID: false,
            message: errDBMsgs.notFoundOrDatabaseOff,
            doc: null
        }
    }
}
