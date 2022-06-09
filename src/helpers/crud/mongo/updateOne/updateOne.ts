import { props } from './types'

export const updateOneApi:props = (doc) => async data => {
    try {
        doc.updateOne({ content: data.content })
        return { update: true, message: 'Item updated successfully' }
    } catch (e: any) {
        return { update: false, message: 'Error on update in the database' }
    }
}
