const Router = require('express')
const router = new Router
const controller = require('../controllers/userController')

const { check } = require('express-validator')

// api/user/login
router.post('/login',
	[
		check('email').isEmail(),
		check('password').isLength({ min: 8, map: 16 })
	]
	, controller.login)
// api/user/register
router.post('/login',
	[
		check('email').isEmail(),
		check('password').isLength({ min: 8, map: 16 })
	]
	, controller.register)


module.exports = router