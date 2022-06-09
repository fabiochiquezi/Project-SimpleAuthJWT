import { findByIDAndDeleteApi } from '../../../../helpers/crud/mongo/findByIDAndDelete'
import asyncHandler from 'express-async-handler'
import { del } from './types'

const deletePipe: del = (Domain, responseFn) =>
    asyncHandler(async (req, res) => {
        const reqID = req.params.id
        const findDeleteFn = findByIDAndDeleteApi(Domain)
        const { del, message } = await findDeleteFn(reqID)
        if (!del) {
            responseFn(res, 400, false, message)
            return
        }

        responseFn(res, 200, true, message)
    })

export { deletePipe }
