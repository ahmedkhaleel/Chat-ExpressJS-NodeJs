var express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
var messages = [
    {name: 'ahmed khaleel', message: 'my name ahmed khaleel'},
    {name: 'omar khaleel', message: 'my name omar khaleel'}
]
app.get('/messages',(req, res) =>{
    res.send(messages)
})

app.post('/messages', (req, res) => {
    console.log(req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

var server = app.listen(3001, () => {
    console.log('Server running', server.address().port)
})