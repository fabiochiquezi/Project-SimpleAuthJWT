import { reqJest, testURL } from '../../../helpers/test'
import { scssDBMsgs } from '../../../helpers'
import { errMessages } from './../../share'

describe('PUT /simpleTodo:id', () => {
    const url = `${testURL}/simple-todo`
    let toDo: any

    beforeAll(async () => {
        const data = { content: 'test' }
        toDo = await reqJest(url, 'post', data)
    })

    describe('given a error or mistake', () => {
        it('as miss required data¹', async () => {
            expect.assertions(3)
            try {
                const id = toDo.data.data._id
                const uri = `${url}/${id}`
                const data = {}
                await reqJest(uri, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data²', async () => {
            expect.assertions(3)
            try {
                const id = toDo.data.data._id
                const uri = `${url}/${id}`
                const data = { name: 'test', conten: 'test' }
                await reqJest(uri, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data³', async () => {
            expect.assertions(3)
            try {
                const id = toDo.data.data._id
                const uri = `${url}/${id}`
                const data = { content: '' }
                await reqJest(uri, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as wrong type date', async () => {
            expect.assertions(3)
            try {
                const id = toDo.data.data._id
                const uri = `${url}/${id}`
                const data = { content: 222 }
                await reqJest(uri, 'put', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as a problem in the database', async () => {})
    })

    describe.only('given a success request', () => {
        it.only('should: update + status 200', async () => {
            const id = toDo.data.data._id
            const uri = `${url}/${id}`
            const data = { content: 'update' }
            const resp = await reqJest(uri, 'put', data)

            console.log(resp.data)
            expect(resp.data.ok).toBeTruthy()
            expect(resp.data.message).toBe(scssDBMsgs.put)
            expect(resp.data.data.content).toBe('update')
        })
    })

    afterAll(async () => {
        await reqJest(`${url}/${toDo.data.data._id}`, 'delete')
    })
})
