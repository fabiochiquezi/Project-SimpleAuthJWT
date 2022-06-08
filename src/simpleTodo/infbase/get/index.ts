import { props } from './types'

export const getApi: props = async Domain => {
    try {
        const items = await Domain.find()
        return { get: true, message: 'Item created succesfully!', items }
    } catch (e: any) {
        return {
            get: false,
            message: 'Ocurred an error on the database',
            items: null
        }
    }
}
