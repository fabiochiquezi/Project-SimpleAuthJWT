import { validReq } from '../helpers/validation/expressValid/validation'
import { responseStd } from './../helpers/response/index'
import { SimpleTodoDomain } from './domain'
import { deletePipe } from './pipe/delete'
import { postPipe } from './pipe/post'
import { getPipe } from './pipe/get'
import { validation } from './valid'
import express from 'express'

const simpleTodoRouter = express.Router()

// POST
const postFn = postPipe(SimpleTodoDomain, validReq, responseStd)
simpleTodoRouter.post('/', validation, postFn)

// GET
const getFn = getPipe(SimpleTodoDomain, responseStd)
simpleTodoRouter.get('/', getFn)

// GET BY ID
// simpleTodoRouter.get('/:123', getPipe(SimpleTodoDomain))

// DELETE
const delFn = deletePipe(SimpleTodoDomain, responseStd)
simpleTodoRouter.delete('/:id', delFn)

export { simpleTodoRouter }
