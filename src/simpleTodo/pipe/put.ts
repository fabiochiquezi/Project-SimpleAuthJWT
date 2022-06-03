import { domain } from '../domain/types'
import { validReq } from '../../helpers/validation'
import { responseStd } from '../../helpers/response'
import { put } from './useCases'
import asyncHandler from 'express-async-handler'
import { findByIdApi } from '../infbase/findByID'
import { updateOneApi } from '../infbase/updateOne'
import { Document } from 'mongoose'

const put: put = Domain => asyncHandler(async (req, res) => {
    const data: domain = req.body
    const id = req.url.substring(1)

    const { valid, errors } = validReq(req)
    if (!valid) responseStd(res, 400, false, 'Request invalid', errors)

    const { find, message, item } = await findByIdApi(Domain)(id)
    if (!find) responseStd(res, 400, false, message)

    const itemType = (item as Document<domain>)
    const { update, doc, messageUpdt } = await updateOneApi(itemType)(data)
    if (!update) responseStd(res, 400, false, messageUpdt)

    responseStd(res, 200, true, messageUpdt, doc)
})

export { put }
