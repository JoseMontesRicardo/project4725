var indexController = require('../controllers/index')
	indexRouter = function (router){
		router.get('/', indexController)
	}
module.exports = indexRouter;