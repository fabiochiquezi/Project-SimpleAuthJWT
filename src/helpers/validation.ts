import { Request } from 'express'
import { ValidationError, validationResult } from 'express-validator'

type resp = {valid: boolean, errors: ValidationError[]}
type props = (req: Request) => resp

export const validReq: props = (req) => {
    const errors = validationResult(req)
    const thereAreErrors = !errors.isEmpty()
    if (thereAreErrors) return { valid: false, errors: errors.array() }
    return { valid: true, errors: [] }
}
