import { reqJest } from '../../helpers/test/request.ignore'
import { errMessages } from '../../share/messages/errors'

describe('PUT /simpleTodo:id', () => {
    const url = 'http://localhost:5000/api/simple-todo'
    let toDo: any

    beforeAll(async () => {
        const data = { content: 'test' }
        toDo = await reqJest(url, 'post', data)
    })

    describe('given a error or mistake', () => {
        it('as miss data on the database', async () => {
            try {
                await reqJest(`${url}/000`, 'put')
            } catch (e: any) {
                const { data, status } = e.response

                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(errMessages.database.docNotFound)
            }
        })

        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: delete + status 200', async () => {
            /*
            const id = toDo.data.data._id
            const toDoURL = `${url}/${id}`
            const resp = await reqJest(toDoURL, 'delete')

            expect(resp.status).toBe(200)
            expect(resp.data.ok).toBe(true)
            expect(resp.data.message).toBe(successMessage.del)
            */
        })
    })

    afterAll(async () => {
        await reqJest(`${url}/${toDo.data.data._id}`, 'delete')
    })
})
