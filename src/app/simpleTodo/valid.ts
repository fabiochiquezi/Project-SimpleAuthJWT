import { body } from 'express-validator'

export const validation = [body('content').notEmpty().isString()]
