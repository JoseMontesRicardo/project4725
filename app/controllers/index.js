module.exports = function (req, res){
	res.render('index', { user_session: req.session.username });
}