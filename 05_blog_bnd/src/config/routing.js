const userModule = require('../modules/user/user.module')

module.exports = [
	{
		route: '/user',
		module: userModule
	}

]