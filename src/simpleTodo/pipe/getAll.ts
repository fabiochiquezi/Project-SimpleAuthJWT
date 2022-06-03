import asyncHandler from 'express-async-handler'

const getAll = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'getAll' })
})


export { getAll }
