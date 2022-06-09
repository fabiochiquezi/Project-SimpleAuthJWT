import { successDatabaseMessage } from './../../../helpers/crud/mongo/successDatabaseMessages'
import { errDatabaseMessages } from './../../../helpers/crud/mongo/errDatabaseMessages'
import { reqJest } from '../../../helpers/test/request.ignore'
import { testURL } from '../../../helpers/test/vars'

describe('GET /simple-todo/:id', () => {
    const url = `${testURL}/simple-todo`
    let toDo: any

    beforeAll(async () => {
        const data1 = { content: 'test' }
        toDo = await reqJest(url, 'post', data1)
    })

    describe('given a error or mistake', () => {
        it('as if doc did not exist', async () => {
            try {
                await reqJest(`${url}/000`, 'get')
            } catch (e: any) {
                const { data, status } = e.response
                expect(status).toBe(400)
                expect(data.ok).toBe(false)
                expect(data.message).toBe(
                    errDatabaseMessages.notFoundOrDatabaseOff
                )
            }
        })

        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: send a SimpleToDo Doc + status 200', async () => {
            const docID = toDo.data.data._id
            const get = await reqJest(`${url}/${docID}`, 'get')

            expect(get.data.ok).toBe(true)
            expect(get.data.message).toBe(successDatabaseMessage.getByID)
            expect(get.data.data._id).toBe(docID)
            expect(get.data.data.content).toBe('test')
        })
    })

    afterAll(async () => {
        const docID = toDo.data.data._id
        await reqJest(`${url}/${docID}`, 'delete')
    })
})
