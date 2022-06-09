import { props } from './types'

export const postApi: props = Domain => async data => {
    try {
        const toDo = new Domain(data)
        await toDo.save()
        return { post: true, message: 'Item created succesfully!', item: toDo }
    } catch (e: any) {
        return { post: false, message: 'Ocurred an error on the database', item: null }
    }
}
