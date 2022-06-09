import { post } from './types'
import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'
import { postApi } from '../../../../helpers/crud/mongo/post'
import { successMessage } from './../../../share/messages/successes'

const postPipe: post = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
            return
        }

        const { post, item } = await postApi(Domain)(req.body)
        if (!post) {
            responseFn(res, 500, false, errMessages.database.err, errors)
            return
        }

        responseFn(res, 200, true, successMessage.post, item)
    })

export { postPipe }
