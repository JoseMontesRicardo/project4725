var indexController = require('../controllers/index')
	indexRouter = function (router){
		var isntLoggIn = function(req, res, next){
			if(!req.session.username){
				res.redirect('/')
				return
			}
			next()
		}
		router.get('/index', isntLoggIn, indexController)
	}
module.exports = indexRouter;