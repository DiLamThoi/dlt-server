const express = require("express")
const morgan = require("morgan")
const routes  = require('./routes')

const db = require('./src/config/db')
db.connect()

const app = express()

// MiddleWare
app.use(morgan('combined'))
app.use(express.json())

// router
routes(app);

app.listen("8080", () => {
    console.log('Server is running ...');
})