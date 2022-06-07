import { responseStd } from './../helpers/response/index'
import { validReq } from '../helpers/validation/expressValid/validation'
import { getByID } from './pipe'
import express from 'express'
import { SimpleTodoDomain } from './domain'
import { validation } from './valid'
import { postPipe } from './pipe/post'

const simpleTodoRouter = express.Router()

const postFn = postPipe(SimpleTodoDomain, validReq, responseStd)
simpleTodoRouter.post('/', validation, postFn)

simpleTodoRouter.route('/:id').get(getByID)

export { simpleTodoRouter }
