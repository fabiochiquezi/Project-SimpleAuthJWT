import { errDBMsgs } from './../errDBMsgs'
import { scssDBMsgs } from './../scssDBMsgs'
import { props } from './types'

export const updateOneApi: props = doc => async data => {
    try {
        doc.updateOne({ content: data.content })
        return { update: true, message: scssDBMsgs.put }
    } catch (e: any) {
        return {
            update: false,
            message: errDBMsgs.notFoundOrDatabaseOff
        }
    }
}
