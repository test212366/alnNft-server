const Router = require("express")
const router = new Router()
const userRouter = require('./userRouter')

// api/user
router.use('/user', userRouter)

module.exports = router