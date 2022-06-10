import { reqJest, testURL } from '../../../helpers/test'
import { successDatabaseMessages } from './../../../helpers'

describe('GET /simpleTodo', () => {
    const url = `${testURL}/simple-todo`

    let toDo1: any
    let toDo2: any

    beforeAll(async () => {
        const data1 = { content: 'test 1' }
        const data2 = { content: 'test 2' }
        toDo1 = await reqJest(url, 'post', data1)
        toDo2 = await reqJest(url, 'post', data2)
    })

    describe('given a error or mistake', () => {
        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: send all Simple ToDo  + status 200', async () => {
            const get = await reqJest(url, 'get')

            expect(get.data.ok).toBe(true)
            expect(get.data.message).toBe(successDatabaseMessages.get)
            expect(get.data.data[0].content).toBe('test 1')
            expect(get.data.data[1].content).toBe('test 2')
        })
    })

    afterAll(async () => {
        const toDo1ID = toDo1.data.data._id
        const toDo2ID = toDo2.data.data._id
        await reqJest(`${url}/${toDo1ID}`, 'delete')
        await reqJest(`${url}/${toDo2ID}`, 'delete')
    })
})
