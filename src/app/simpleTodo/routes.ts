import { getOneByIDPipe, postPipe, putPipe, getPipe, deletePipe } from './pipe'
import { dataValid } from './dataValid'
import express from 'express'

const simpleTodoRouter = express.Router()

simpleTodoRouter.post('/', dataValid, postPipe)
simpleTodoRouter.put('/:id', dataValid, putPipe)
simpleTodoRouter.get('/', getPipe)
simpleTodoRouter.get('/:id', getOneByIDPipe)
simpleTodoRouter.delete('/:id', deletePipe)

export { simpleTodoRouter }
