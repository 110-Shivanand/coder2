const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path'); // Import path module

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Attach socket.io to the server

app.set('view engine', 'ejs');

// Correct way to serve static files
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection',function(socket){
    console.log('connected')
    socket.on('send-location',function(data){
        io.emit('receive-location',{id:socket.id,...data})
    })
})

app.get('/', (req, res) => {
    res.render('index');
});

// io.on('connection', (socket) => {
//     console.log('A user connected');
    
//     socket.on('disconnect', () => {
//         console.log('User disconnected');
//     });
// });

server.listen(3000, () => {
    console.log('App is running on port 3000');
});
