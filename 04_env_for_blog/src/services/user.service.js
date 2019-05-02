import dbService from './database.service'

class UserService {

	getAllUsers() {
		return dbService.query('SELECT * FROM user')
	}

	getSingleuser(id) {
		return dbService.query(`SELECT * FROM user WHERE id = ${id}`)
	}

}

module.exports = new UserService()