import { put } from '../archTypes'
import { errMessages } from '../../share'
import { SimpleTodoDomain } from '../domain'
import asyncHandler from 'express-async-handler'
import { responseStd, validReq } from '../../../helpers'

const putFn: put = (Domain, validationFn, responseFn) =>
    asyncHandler(async (req, res) => {
        const { valid, errors } = validationFn(req)
        // const id = req.params.id
        const data = req.body

        if (!valid) {
            responseFn(res, 400, false, errMessages.requestDataErr, errors)
        }

        const filter = { _id: 'fdsazfsdzf' }
        const up = await Domain.findOneAndUpdate(filter, { data })
        responseFn(res, 200, true, 'message', up)

        /*
        const updateFn = findByIDAndUpdateApi(Domain)
        const { update, message, doc } = await updateFn(id, data)
        if (!update) {
            responseFn(res, 500, false, message, errors)
            return
        }

        responseFn(res, 200, true, message, doc)
        */
    })

export const putPipe = putFn(SimpleTodoDomain, validReq, responseStd)
