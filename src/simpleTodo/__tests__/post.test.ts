import { errMessages } from './../../share/messages/errors'
import { reqJest } from '../../helpers/test/request.ignore'
import { successMessage } from '../../share/messages/successes'

describe('Post /simpleTodo', () => {
    const url = 'http://localhost:5000/api/simple-todo'

    afterAll(async () => {
        console.log('TODO clear database')
    })

    describe('given a request with wrong data', () => {
        it('miss required data - throw error¹', async () => {
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

        it('miss required data - throw error²', async () => {
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

        it('miss required data - throw error³', async () => {
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

        it('wrong type date - throw error', async () => {
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

    describe('given a request w/ right data', () => {
        it('should: save + status 200', async () => {
            const data = { content: 'xxx' }
            const resp = await reqJest(url, 'post', data)

            expect(resp.status).toBe(200)
            expect(resp.data.ok).toBe(true)
            expect(resp.data.message).toBe(successMessage.post)
        })
    })
})
