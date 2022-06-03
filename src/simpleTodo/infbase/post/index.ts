import { props } from './types'

export const postApi: props = (Domain, data) => {
    try {
        const todo = new Domain(data)
        todo.save()
        console.log('postApi Success!')
        return true
    } catch (e: any) {
        console.log(e.message)
        return false
    }
}
