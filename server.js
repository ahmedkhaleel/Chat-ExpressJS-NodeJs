var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)


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
    io.emit('message', req.body)
    messages.push(req.body)
    res.sendStatus(200)
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(3001, () => {
    console.log('Server running', server.address().port)
})