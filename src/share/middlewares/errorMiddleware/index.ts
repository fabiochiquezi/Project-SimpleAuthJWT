import { NextFunction, Request, Response } from 'express'

type props = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => void

const errrorHandler: props = (err, _req, res, _next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

export { errrorHandler }