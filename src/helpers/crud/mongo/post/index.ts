import { errDBMsgs } from './../errDBMsgs'
import { scssDBMsgs } from './../scssDBMsgs'
import { props } from './types'

export const postApi: props = Domain => async data => {
    try {
        const toDo = new Domain(data)
        await toDo.save()
        return { post: true, message: scssDBMsgs.post, item: toDo }
    } catch (e: any) {
        return { post: false, message: errDBMsgs.err, item: null }
    }
}
