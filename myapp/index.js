const express = require('express')
const app = express()
app.get('/page', (request, response) => {
  response.send('./page.html', {root: __dirname})
})

app.listen(3000)
