const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const next = require('next')

const dev =process.env.NODE_ENV !== 'production'
const nextApp = next({dev})
const nextHandler = nextApp.getRequestHandler()

const messages = []

io.on('connection', socket => {
    socket.on('message', (data) => {
        messages.push(data)
        socket.broadcast.emit('message', data)
    });
});

nextApp.prepare().then(() => {
    app.get('/messages', (rep, res) => {
        res.json(messages)
    });
});

app.get('*', (req, res) => {
    return nextHandler(req, res)
});

server.listen(3000, (err) => {
    if(err) throw errconsole.log('> Ready on http://localhost:3000')
});