import { findByIDApi } from './../../infbase/findByID/index'
import asyncHandler from 'express-async-handler'
import { getOneByID } from './types'
import { errMessages } from '../../../share/messages/errors'
import { successMessage } from '../../../share/messages/successes'

const getOneByIDPipe: getOneByID = (Domain, responseFn) =>
    asyncHandler(async (req, res) => {
        const reqID = req.params.id
        const findFn = findByIDApi(Domain)
        const { findByID, doc } = await findFn(reqID)
        if (!findByID) {
            const err = errMessages.database.notFoundOrDatabaseOff
            responseFn(res, 400, false, err)
            return
        }

        responseFn(res, 200, true, successMessage.get, doc)
    })

export { getOneByIDPipe }
