const express   =   require('express')
      app       =   express()
      http      =   require('http').createServer(app)  
      io        =   require('socket.io')(http);

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname +'/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

// socket

io.on('connection',(socket)=>{
    console.log("connected..");

    socket.on('message', (msg)=>{
        socket.broadcast.emit('message', msg);
    })

})



http.listen(PORT , ()=>{
    console.log(`server is started on port ${PORT}`);
})