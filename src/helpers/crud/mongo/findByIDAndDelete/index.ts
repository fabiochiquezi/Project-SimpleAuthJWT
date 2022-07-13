import { errDBMsgs } from './../errDBMsgs'
import { scssDBMsgs } from './../scssDBMsgs'
import { props } from './types'

export const findByIDAndDeleteApi: props = Domain => async id => {
    try {
        await Domain.findByIdAndDelete(id)
        return {
            del: true,
            message: scssDBMsgs.del
        }
    } catch (e: any) {
        return {
            del: false,
            message: errDBMsgs.notFoundOrDatabaseOff
        }
    }
}
