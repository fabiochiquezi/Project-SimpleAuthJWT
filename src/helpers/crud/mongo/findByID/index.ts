import { props } from './types'

export const findByIDApi: props = Domain => async id => {
    try {
        const toDo = await Domain.findById(id)
        return {
            findByID: true,
            message: 'Item found successfully',
            doc: toDo
        }
    } catch (e: any) {
        return { findByID: false, message: 'Item not Found', doc: null }
    }
}
