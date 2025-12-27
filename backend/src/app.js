import express from "express"
import cors from "cors"
import connectMongo from "./db/mongo.js"

import assignmentsRoutes from "./routes/assignments.routes.js"
import executeRoutes from "./routes/execute.routes.js"
import hintRoutes from "./routes/hint.routes.js"

const app = express()

connectMongo()

app.use(cors())
app.use(express.json({ limit: "50kb" }))
app.use(express.urlencoded({ limit: "50kb", extended: true }))

app.use("/api/v1/assignments", assignmentsRoutes)
app.use("/api/v1/execute", executeRoutes)
app.use("/api/v1/hint", hintRoutes)

export default app