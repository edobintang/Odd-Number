// require necessarily stack
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000

// require route and define app
const router = require('./routes')
const app = express()

// define options url caused CORS issue
const corsOption = {
    origin: 'http://localhost:8080'
}

// setting cors and json body-parser
app.use(cors(corsOption))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routing
app.use(router)

// listening
app.listen(PORT, () => {
    console.log('listening on port', PORT)
})