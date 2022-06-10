import { findByIDAndDeleteApi, responseStd } from '../../../helpers'
import asyncHandler from 'express-async-handler'
import { SimpleTodoDomain } from '../domain'
import { del } from '../archTypes'

const delFn: del = (Domain, responseFn) =>
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

export const deletePipe = delFn(SimpleTodoDomain, responseStd)
