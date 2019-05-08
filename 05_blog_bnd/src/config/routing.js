const userModule = require('../modules/user/user.module');
const roleModule = require('../modules/role/role.module');

module.exports = [
	{
		route: '/users',
		module: userModule
	},
	{
		route: '/roles',
		module: roleModule
	}

]