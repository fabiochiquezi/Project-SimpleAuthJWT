export const successesrResp = (message: string) => {
    return {
        ok: true,
        message
    }
}


export const successFn = {
    post: (item: string) => successesrResp(`${item} was successfully inserted`)
}
