import { errDBMsgs } from './../errDBMsgs'
import { scssDBMsgs } from './../scssDBMsgs'
import { props } from './types'

export const deleteApi: props = Domain => async id => {
    try {
        await Domain.deleteOne({ id })
        return {
            delete: true,
            message: scssDBMsgs.del
        }
    } catch (e: any) {
        return { delete: false, message: errDBMsgs.err }
    }
}
