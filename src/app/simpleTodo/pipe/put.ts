import { put } from '../archTypes'
import { errMessages } from '../../share'
import { SimpleTodoDomain } from '../domain'
import asyncHandler from 'express-async-handler'
import { responseStd, validReq } from '../../../helpers'

const putFn: put = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
        }
    })

export const putPipe = putFn(SimpleTodoDomain, validReq, responseStd)
