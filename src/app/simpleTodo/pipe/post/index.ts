import { post } from './types'
import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'
import { postApi } from '../../../../helpers/crud/mongo/post'

const postPipe: post = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
            return
        }

        const { post, item, message } = await postApi(Domain)(req.body)
        if (!post) {
            responseFn(res, 500, false, message, errors)
            return
        }

        responseFn(res, 200, true, message, item)
    })

export { postPipe }
