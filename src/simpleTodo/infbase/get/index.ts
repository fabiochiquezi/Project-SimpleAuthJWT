import { props } from './types'

export const getApi: props = async Domain => {
    try {
        const docs = await Domain.find()
        return { get: true, message: 'Item created succesfully!', docs }
    } catch (e: any) {
        return {
            get: false,
            message: 'Ocurred an error on the database',
            docs: null
        }
    }
}
