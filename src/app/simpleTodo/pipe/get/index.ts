import { getApi } from '../../../../helpers/crud/mongo/get'
import asyncHandler from 'express-async-handler'
import { get } from './types'

const getPipe: get = (Domain, responseFn) =>
    asyncHandler(async (_req, res) => {
        const { get, docs, message } = await getApi(Domain)
        if (!get) {
            responseFn(res, 500, false, message)
            return
        }

        responseFn(res, 200, true, message, docs)
    })

export { getPipe }
