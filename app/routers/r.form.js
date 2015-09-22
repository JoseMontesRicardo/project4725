var formController = require('../controllers/form')
	formRouter = function(router){
		var isntLoggIn = function(req, res, next){
			if(!req.session.username){
				res.redirect('/')
				return
			}
			next()
		}
		router.get('/form', isntLoggIn, formController)
	}
module.exports = formRouter;