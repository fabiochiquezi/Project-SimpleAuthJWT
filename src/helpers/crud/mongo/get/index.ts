import { scssDBMsgs } from './../scssDBMsgs'
import { errDBMsgs } from './../errDBMsgs'
import { props } from './types'

export const getApi: props = async Domain => {
    try {
        const docs = await Domain.find()
        return { get: true, message: scssDBMsgs.get, docs }
    } catch (e: any) {
        return {
            get: false,
            message: errDBMsgs.err,
            docs: null
        }
    }
}
