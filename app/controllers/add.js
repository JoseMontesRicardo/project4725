var addController = function(server, conn){

server.post('/add', function (req, res){
	var object = req.body;
	conn.query( "insert into user_table set ?", object, function (error, results){
		if (error){
			//throw error;
			res.render('message', { user_session: req.session.username, mensajeError: 'ERROR: '+error, mensaje: '' })
		} else res.render('message',{  user_session: req.session.username, mensaje: 'El Usuario: '+object.var_4+' '+object.var_6+' se agrego Correctamente!!', mensajeError: '' });
		})
	});
}

module.exports = addController;
