import { errDatabaseMessages } from './../errDatabaseMessages'
import { successDatabaseMessage } from './../successDatabaseMessages'
import { props } from './types'

export const postApi: props = Domain => async data => {
    try {
        const toDo = new Domain(data)
        await toDo.save()
        return { post: true, message: successDatabaseMessage.post, item: toDo }
    } catch (e: any) {
        return { post: false, message: errDatabaseMessages.err, item: null }
    }
}
