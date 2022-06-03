import { del, getAll, getByID, post, put } from './pipe'
import { SimpleTodoDomain } from './domain'
import { putValidation } from './valid'
import express from 'express'

const simpleTodoRouter = express.Router()

simpleTodoRouter
    .route('/')
        .get(getAll)
        .post(post(SimpleTodoDomain))

simpleTodoRouter
    .put('/:id', putValidation, put(SimpleTodoDomain))

simpleTodoRouter
    .route('/:id')
        // .put(put(SimpleTodoDomain))
        .delete(del)
        .get(getByID)

export { simpleTodoRouter }
