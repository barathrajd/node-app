const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express()

require("dotenv").config()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/', (req, res) => {
  res.json({"welcome": "Hello World"})
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`)
})