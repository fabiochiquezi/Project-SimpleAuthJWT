import { ResponseStd } from './types'

export const responseStd: ResponseStd = (
    res,
    status = 500,
    ok,
    message,
    data
) => {
    return res
        .status(status)
        .json({
            ok,
            message,
            data
        })
        .end()
}
