import * as express from "express"
import {connectToDatabase} from "./server"
import {router} from "./routes/properties"
import * as dotenv from "dotenv"

declare let process : {
  env: {
    DAB_CONN_STRING: string
    DB_COLLECTION: string
    DB_NAME: string
    PORT:number
  }
}
dotenv.config()
const app = express()
connectToDatabase()
  .then(() => {
    app.use("/", router)

    app.listen(process.env.PORT, () => {
      console.log(`Server started at http://localhost:${process.env.PORT}`)
    })
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error)
  })