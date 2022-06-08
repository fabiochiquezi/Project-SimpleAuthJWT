import { successMessage } from './../../../share/messages/successes'
import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'
import { findByIDAndDeleteApi } from '../../infbase/findByIDAndDelete'
import { del } from './types'

const deletePipe: del = (Domain, responseFn) =>
    asyncHandler(async (req, res) => {
        const reqID = req.params.id
        const findDeleteFn = findByIDAndDeleteApi(Domain)
        const { del } = await findDeleteFn(reqID)
        if (!del) {
            responseFn(res, 400, false, errMessages.database.docNotFound)
            return
        }

        responseFn(res, 200, true, successMessage.del)
    })

export { deletePipe }
