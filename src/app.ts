import * as dotenv from 'dotenv'
import makeApp from './app/index'
import pathEnv from './configs/pathEnv'
import { connectMongo } from './configs/database/mongo'

dotenv.config({ path: pathEnv() })
connectMongo()
const app = makeApp()
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening port ${port}`))
