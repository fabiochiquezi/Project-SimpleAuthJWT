import { post } from '../archTypes'
import { errMessages } from '../../share'
import { SimpleTodoDomain } from '../domain'
import asyncHandler from 'express-async-handler'
import { postApi, responseStd, validReq } from '../../../helpers'

const postFn: post = (Domain, validationFn, responseFn) =>
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

        responseFn(res, 201, true, message, item)
    })

export const postPipe = postFn(SimpleTodoDomain, validReq, responseStd)
