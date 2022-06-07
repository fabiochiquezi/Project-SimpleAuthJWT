import { validationResult } from 'express-validator'
import { ValidReq } from './types'

export const validReq: ValidReq = req => {
    const errors = validationResult(req)
    const thereAreErrors = !errors.isEmpty()
    if (thereAreErrors) return { valid: false, errors: errors.array() }
    return { valid: true, errors: [] }
}
