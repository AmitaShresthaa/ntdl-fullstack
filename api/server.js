import express from "express"
import { connectToMongoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";
import 'dotnev/config'
import cors from "cors"

const app = express()
const PORT = 3000

app.use(express.json());

const corsOption = {
    credential: true,
    origin: true //Normally an array with the list of whitelist domains 
}
app.use(cors(corsOption))
// connect to mongodb
connectToMongoDb()

app.use('/api/tasks', taskRouter)


app.listen(PORT, (error) => {
    error
    ? console.log("Error", error)
    : console.log("Server running on http://localhost:" + PORT);
})