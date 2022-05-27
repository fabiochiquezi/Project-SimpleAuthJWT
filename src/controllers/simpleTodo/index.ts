import { Request, Response } from 'express'

const getAllSimpleTodo = (req: Request, res: Response) => {
    console.log(req.url)
    res.status(200).json({ ok: 'getAll' })
}
const getSimpleTodo = (req: Request, res: Response) => {
    console.log(req.url)
    res.status(200).json({ ok: 'get' })
}
const postSimpleTodo = (req: Request, res: Response) => {
    console.log(req.url)
    res.status(200).json({ ok: 'set' })
}
const putSimpleTodo = (req: Request, res: Response) => {
    console.log(req.url)
    res.status(200).json({ ok: 'update' })
}
const deleteSimpleTodo = (req: Request, res: Response) => {
    console.log(req.url)
    res.status(200).json({ ok: 'delete' })
}

export {
    getSimpleTodo,
    postSimpleTodo,
    putSimpleTodo,
    deleteSimpleTodo,
    getAllSimpleTodo
}
