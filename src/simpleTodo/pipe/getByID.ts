import asyncHandler from 'express-async-handler'

const getByID = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'get' })
})

export { getByID }
