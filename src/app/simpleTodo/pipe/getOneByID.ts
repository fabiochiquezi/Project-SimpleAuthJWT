import { findByIDApi, responseStd } from '../../../helpers'
import asyncHandler from 'express-async-handler'
import { SimpleTodoDomain } from '../domain'
import { getOneByID } from '../archTypes'

const getOneByIDFn: getOneByID = (Domain, responseFn) =>
    asyncHandler(async (req, res) => {
        const reqID = req.params.id
        const findFn = findByIDApi(Domain)
        const { findByID, doc, message } = await findFn(reqID)
        if (!findByID) {
            responseFn(res, 400, false, message)
            return
        }

        responseFn(res, 200, true, message, doc)
    })

export const getOneByIDPipe = getOneByIDFn(SimpleTodoDomain, responseStd)
