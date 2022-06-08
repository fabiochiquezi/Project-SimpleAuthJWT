import { props } from './types'

export const findByIDAndDeleteApi: props = Domain => async id => {
    try {
        await Domain.findByIdAndDelete(id)
        return {
            del: true,
            message: 'Item found successfully'
        }
    } catch (e: any) {
        return { del: false, message: 'Item not Found' }
    }
}
