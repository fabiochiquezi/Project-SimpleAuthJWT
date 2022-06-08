// import { errMessages } from './../../share/messages/errors'
// import { successMessage } from '../../share/messages/successes'
import { reqJest } from '../../helpers/test/request.ignore'
import { successMessage } from '../../share/messages/successes'

describe('GET /simpleTodo', () => {
    const url = 'http://localhost:5000/api/simple-todo'

    afterAll(async () => {
        // TODO console.log('TODO clear database')
    })

    describe('given a error or mistake', () => {
        it('as a problem in the database', async () => {})
    })

    describe('given a success request', () => {
        it('should: send all Simple ToDo  + status 200', async () => {
            const get = await reqJest(url, 'get')

            expect(get.data.ok).toBe(true)
            expect(get.data.message).toBe(successMessage.get)
        })
    })
})
