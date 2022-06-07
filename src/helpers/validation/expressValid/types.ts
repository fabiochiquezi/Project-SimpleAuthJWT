import { Request } from 'express'
import { ValidationError } from 'express-validator'

type resp = { valid: boolean; errors: ValidationError[] }
export type ValidReq = (req: Request) => resp
