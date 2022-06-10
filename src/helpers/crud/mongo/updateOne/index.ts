import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessages } from './../successDatabaseMessages'
import { props } from './types'

export const updateOneApi: props = doc => async data => {
    try {
        doc.updateOne({ content: data.content })
        return { update: true, message: successDatabaseMessages.put }
    } catch (e: any) {
        return {
            update: false,
            message: errDatabaseMessages.notFoundOrDatabaseOff
        }
    }
}
