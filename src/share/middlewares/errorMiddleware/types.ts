import { NextFunction, Request, Response } from 'express'

export type props = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => void
