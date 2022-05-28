import mongoose from 'mongoose'

const connectMongo = async () => {
    try {
        const dburi = (process.env.MONGO_DB_URI as string)
        const conn = await mongoose.connect(dburi)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export { connectMongo }
