import { errMessages } from './../../share/messages/errors'
import { reqJest } from '../../../helpers/test/request.ignore'
import { successMessage } from '../../share/messages/successes'

describe('Post /simpleTodo', () => {
    const url = 'http://localhost:5000/api/simple-todo'
    let docID: string

    describe('given a error or mistake', () => {
        it('as miss required data¹', async () => {
            try {
                const data = {}
                await reqJest(url, 'post', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data²', async () => {
            try {
                const data = { name: 'test', conten: 'test' }
                await reqJest(url, 'post', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as miss required data³', async () => {
            try {
                const data = { content: '' }
                await reqJest(url, 'post', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })

        it('as wrong type date', async () => {
            try {
                const data = { content: 222 }
                await reqJest(url, 'post', data)
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.requestDataErr)
            }
        })
    })

    describe('given a success request', () => {
        it('should: save + status 200', async () => {
            const data = { content: 'test' }
            const resp = await reqJest(url, 'post', data)
            docID = resp.data.data._id

            expect(resp.status).toBe(200)
            expect(resp.data.ok).toBe(true)
            expect(resp.data.message).toBe(successMessage.post)
            expect(resp.data.data.content).toBe('test')
        })
    })

    afterAll(async () => {
        await reqJest(`${url}/${docID}`, 'delete')
    })
})
