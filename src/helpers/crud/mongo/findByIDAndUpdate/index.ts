import { scssDBMsgs } from '../scssDBMsgs'
import { errDBMsgs } from '../errDBMsgs'
import { props } from './types'

export const findByIDAndUpdateApi: props = Domain => async (id, data) => {
    try {
        const filter = { _id: id }
        const doc = await Domain.findOneAndUpdate(filter, { data })
        return {
            update: true,
            message: scssDBMsgs.put,
            doc
        }
    } catch (e: any) {
        return {
            update: false,
            message: errDBMsgs.notFoundOrDatabaseOff,
            doc: {}
        }
    }
}
