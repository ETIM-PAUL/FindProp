import * as express from "express"
import { showProperties, selectedProperties, showProperty } from "../controllers/properties"

export const router = express.Router()
router.use(express.json())

//routers
router.get("/properties", showProperties)
router.get("/property/:_id", showProperty)
router.get("/selectedProperties", selectedProperties)

