import asyncHandler from 'express-async-handler'

const getAllSimpleTodo = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'getAll' })
})

// @ts-ignore
const getSimpleTodo = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'get' })
})

const postSimpleTodo = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'post' })
})

const putSimpleTodo = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'put' })
})

const deleteSimpleTodo = asyncHandler(async (req, res) => {
    console.log(req.url)
    res.status(200).json({ ok: 'delete' })
})

export {
    getSimpleTodo,
    postSimpleTodo,
    putSimpleTodo,
    deleteSimpleTodo,
    getAllSimpleTodo
}