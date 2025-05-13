const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const knowledgeRoutes = require('./routes/knowledgeRoutes')
const logRoutes = require('./routes/logRoutes')

const app = express()
app.use(bodyParser.json())

app.use('/api/knowledge', knowledgeRoutes)
app.use('/api/logs', logRoutes)

app.listen(3000, () => {
  console.log('server is live')
})
