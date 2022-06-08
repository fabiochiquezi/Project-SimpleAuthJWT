import { Response } from 'express'

export type ResponseStd = (
    res: Response,
    status: number,
    ok: boolean,
    message?: string,
    data?: any
) => Response
