import { validReq } from '../helpers/validation/expressValid/validation'
import { responseStd } from './../helpers/response/index'
import { getOneByIDPipe } from './pipe/getOneByID'
import { SimpleTodoDomain } from './domain'
import { deletePipe } from './pipe/delete'
import { putPipe } from './pipe/put/put'
import { postPipe } from './pipe/post'
import { getPipe } from './pipe/get'
import { validation } from './valid'
import express from 'express'

const simpleTodoRouter = express.Router()

const postFn = postPipe(SimpleTodoDomain, validReq, responseStd)
const putFn = putPipe(SimpleTodoDomain, validReq, responseStd)
const getFn = getPipe(SimpleTodoDomain, responseStd)
const getOneByIDFn = getOneByIDPipe(SimpleTodoDomain, responseStd)
const delFn = deletePipe(SimpleTodoDomain, responseStd)

simpleTodoRouter.post('/', validation, postFn)
simpleTodoRouter.put('/:id', validation, putFn)
simpleTodoRouter.get('/', getFn)
simpleTodoRouter.get('/:id', getOneByIDFn)
simpleTodoRouter.delete('/:id', delFn)

export { simpleTodoRouter }
