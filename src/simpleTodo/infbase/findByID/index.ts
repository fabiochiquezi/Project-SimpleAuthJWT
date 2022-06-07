import { props } from './types'

export const findByIDApi: props = Domain => async id => {
    try {
        const toDo = await Domain.findById(id)
        return { find: true, message: 'Item found successfully', item: toDo }
    } catch (e: any) {
        return { find: false, message: 'Item not Found', item: null }
    }
}
