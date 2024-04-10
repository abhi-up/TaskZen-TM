import express from "express"
import userRoutes from "./userRoutes.js"

const router = express.Router()

router.use("/user", userRoutes) //api/user/login

export default router
