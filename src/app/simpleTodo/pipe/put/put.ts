import { put } from './types'
import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'

const putPipe: put = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
        }
    })

export { putPipe }
