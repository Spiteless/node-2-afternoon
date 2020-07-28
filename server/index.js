const express = require('express')
const msgCtrl = require('./messages_controller/messages_controller.js')

const app = express()
app.use(express.json())

const port = 3001;

const messageBaseUrl = '/api/messages'

app.post(messageBaseUrl,  msgCtrl.create)
app.get(messageBaseUrl, msgCtrl.read)
app.put(`${messageBaseUrl}/:id`, msgCtrl.update)
app.delete(`${messageBaseUrl}/:id`, msgCtrl.delete)

// app.put(messageBaseUrl, msgCtrl.getTodos)
// app.put('messageBaseUrl/complete/:id', msgCtrl.completeTodo)
// app.put('messageBaseUrl/title/:id', msgCtrl.updateTodoTitle)

app.listen(port, ()=> console.log(`Server listening on ${port}`))