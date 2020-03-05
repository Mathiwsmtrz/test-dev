module.exports = io => { 
    let history = [];
    io.on('connection', socket => {
        console.log('nuevo usuario conectado');
        
        history.forEach(element => {
            io.emit('set_draw_line',element);
        });
        
        socket.on('draw_line', (data)=>{
            history.push(data);
            io.emit('set_draw_line',data);
        });
    });
}