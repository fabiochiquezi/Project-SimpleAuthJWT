import { body } from 'express-validator'

export const dataValid = [body('content').notEmpty().isString()]
