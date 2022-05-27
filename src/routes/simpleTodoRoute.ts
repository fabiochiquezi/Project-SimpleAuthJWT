import express from 'express'
import {
    deleteSimpleTodo,
    getSimpleTodo,
    postSimpleTodo,
    putSimpleTodo
} from '../controllers/simpleTodo'

const simpleTodoRouter = express.Router()

simpleTodoRouter
    .route('/')
    .get(getSimpleTodo)
    .post(postSimpleTodo)

simpleTodoRouter
    .route('/:id')
    .put(putSimpleTodo)
    .delete(deleteSimpleTodo)

export { simpleTodoRouter }
