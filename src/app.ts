import makeApp from './share/configs/app'
import { simpleTodoRouter } from './simpleTodo/routes'
import { connectMongo } from './share/configs/database/mongo'

const app = makeApp(connectMongo)
app.use('/api/simple-todo', simpleTodoRouter)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`App listening port ${port}`))
