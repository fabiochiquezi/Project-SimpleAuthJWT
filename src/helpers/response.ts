import { Response } from 'express'

type props = (
    res: Response,
    status: number,
    ok: boolean,
    message?: string,
    data?: Record<any, any>
) => void

export const responseStd: props = (res, status = 500, ok, message, data) => {
    res.status(status)
    res.json({
        ok,
        message,
        data
    })
}
