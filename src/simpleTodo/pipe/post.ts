import { successFn } from '../../share/messages/successes'
import { errFn } from '../../share/messages/errors'
import { post } from './useCases'
import asyncHandler from 'express-async-handler'
import { postApi } from '../infbase/post'

const postPipe: post = Domain => asyncHandler(async (req, res) => {
    const createNewItem = postApi(Domain, req.body)
    if (!createNewItem) throw errFn.databaseErr()

    const successMessage = successFn.post('ToDo')
    res
        .status(200)
        .json(successMessage)
})

export { postPipe }
