const express = require('express')
const bodyParser = require('body-parser')
const port = 3500
const ctrl = require('./controller')


const app = express()

app.use(bodyParser.json())

let url = `/api/posts`

app.post(url, ctrl.create)
app.get(url, ctrl.read)
app.put(`${url}/:id`, ctrl.update)
app.delete(`${url}/:id`, ctrl.delete)



app.listen(port, () => console.log(`Server listening on port ${port}`))