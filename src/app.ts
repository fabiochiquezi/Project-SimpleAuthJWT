import * as dotenv from 'dotenv'
import makeApp from './share/configs/app'
import pathEnv from './share/configs/app/pathEnv'
import { connectMongo } from './share/configs/database/mongo'

dotenv.config({ path: pathEnv() })
connectMongo()
const app = makeApp()
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening port ${port}`))
