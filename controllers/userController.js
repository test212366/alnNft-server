const { validationResult } = require('express-validator')

class UserController {
	async login(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) return res.status(401).json({ message: 'некорректные данные пользователя', errors: errors.array() })
			return res.json({ message: 'user login' })
		} catch (e) {
			console.log(e)
			return res.status(501).json({ message: 'server ERROR' })
		}
	}
	async register(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) return res.status(401).json('некорректные данные пользователя')
			return res.status(201).json({ message: 'user crated' })
		} catch (e) {
			console.log(e)
			return res.status(501).json({ message: 'server ERROR' })
		}
	}
}
module.exports = new UserController()