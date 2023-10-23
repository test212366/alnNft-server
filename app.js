require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes/index')



app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api', router)

const start = () => {
	const PORT = process.env.PORT || 5000

	try {
		app.listen(PORT, () => {
			console.log('server started in port:' + PORT)
		})
	} catch (e) {
		console.log(e)
		process.exit(1)
	}
}

start()