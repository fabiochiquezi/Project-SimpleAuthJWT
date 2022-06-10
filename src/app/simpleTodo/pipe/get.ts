import { getApi, responseStd } from '../../../helpers'
import asyncHandler from 'express-async-handler'
import { SimpleTodoDomain } from '../domain'
import { get } from '../archTypes'

const getFn: get = (Domain, responseFn) =>
    asyncHandler(async (_req, res) => {
        const { get, docs, message } = await getApi(Domain)
        if (!get) {
            responseFn(res, 500, false, message)
            return
        }

        responseFn(res, 200, true, message, docs)
    })

export const getPipe = getFn(SimpleTodoDomain, responseStd)
