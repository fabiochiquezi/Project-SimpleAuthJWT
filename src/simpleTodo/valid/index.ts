import { body } from 'express-validator'

export const putValidation = [
    body('content').notEmpty()
]
