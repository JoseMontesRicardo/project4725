var formController = require('../controllers/form')
	formRouter = function(router){
		router.get('/form', formController)
	}
module.exports = formRouter;