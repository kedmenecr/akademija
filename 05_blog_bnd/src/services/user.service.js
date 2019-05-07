import dbService from './database.service'

class UserService {

	getAllUsers() {
		return dbService.query('SELECT * FROM user')
	}

	getSingleuser(id) {
		return dbService.query(`SELECT * FROM user WHERE userId = ${id}`)
	}

	updateUser(data) {

		// UPDATE `blog`.`user` SET `username`='matko', `firstName`='matkolatko', `lastName`='matkoci', `email`='mmokic', `password`='newpw' WHERE `userId`='3';

		return dbService.query(`UPDATE blog.user 
		SET username='${data.username}', 
		firstName='matkolatko', 
		lastName='matkoci', email='mmokic', 
		password='testPWW' 
		WHERE userId='3';`)
		// return dbService.query(
		// 	`UPDATE user 
		// 	SET username = ${data.username},
		// 	 firstName = ${data.firstName},
		// 	 lastName = ${data.lastName},
		// 	 email = ${data.email},
		// 	 password = ${data.password}
		// 	 WHERE userId = ${data.id}
		// 	`)
	}
	deleteUser(id) {
		return dbService.query(`SELECT * FROM user WHERE userId = ${id}`)
	}

}

module.exports = new UserService()