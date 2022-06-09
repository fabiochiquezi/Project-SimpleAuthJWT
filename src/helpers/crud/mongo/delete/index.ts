import { props } from './types'

export const deleteApi: props = Domain => async id => {
    try {
        await Domain.deleteOne({ id })
        return {
            delete: true,
            message: 'Doc deleted successfully'
        }
    } catch (e: any) {
        return { delete: false, message: 'error on database' }
    }
}
