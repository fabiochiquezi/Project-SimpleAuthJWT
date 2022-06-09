import { findByIDApi } from '../../../../helpers/crud/mongo/findByID/index'
import asyncHandler from 'express-async-handler'
import { getOneByID } from './types'

const getOneByIDPipe: getOneByID = (Domain, responseFn) =>
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

export { getOneByIDPipe }
