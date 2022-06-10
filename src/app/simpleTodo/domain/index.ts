import mongoose from 'mongoose'
import { domain } from '../archTypes'

const fields = {
    content: {
        type: String,
        require: [true, 'Please add a text value']
    }
}

const timeStamps = { timestamps: true }
const simpleTodoSchema = new mongoose.Schema<domain>(fields, timeStamps)
export const SimpleTodoDomain = mongoose.model('simpleTodo', simpleTodoSchema)
