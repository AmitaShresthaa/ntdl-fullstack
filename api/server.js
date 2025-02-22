import express from "express"
import { connectToMongoDb } from "./config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express()
const PORT = 3000

app.use(express.json());
// connect to mongodb
connectToMongoDb()

app.use('/api/tasks', taskRouter)


app.listen(PORT, (error) => {
    error
    ? console.log("Error", error)
    : console.log("Server running on http://localhost:" + PORT);
})