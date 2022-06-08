import { post } from './types'
import { postApi } from '../../infbase/post'
import asyncHandler from 'express-async-handler'
import { errMessages } from '../../../share/messages/errors'
import { successMessage } from './../../../share/messages/successes'

const postPipe: post = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
            return
        }

        const { post } = await postApi(Domain)(req.body)
        if (!post) {
            responseFn(res, 500, false, errMessages.databaseErr, errors)
            return
        }

        responseFn(res, 200, true, successMessage.post)
    })

export { postPipe }
