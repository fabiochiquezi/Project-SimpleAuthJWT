import asyncHandler from 'express-async-handler'

const del = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'delete' })
})

export { del }
