const userModule = require('../modules/user/user.module')

module.exports = [
	{
		route: '/users',
		module: userModule
	}

]