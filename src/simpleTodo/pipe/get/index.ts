import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'
import { successMessage } from '../../../share/messages/successes'
import { getApi } from '../../infbase/get'
import { get } from './types'

const getPipe: get = (Domain, responseFn) =>
    asyncHandler(async (_req, res) => {
        const { get, items } = await getApi(Domain)
        if (!get) {
            responseFn(res, 500, false, errMessages.databaseErr)
            return
        }

        responseFn(res, 200, true, successMessage.get, items)
    })

export { getPipe }
