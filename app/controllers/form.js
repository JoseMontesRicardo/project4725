module.exports = function (req, res){
	res.render('form' , { user_session: req.session.username });
}