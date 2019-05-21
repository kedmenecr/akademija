import dbService from './database.service'

class RoleService {

	getAllRoles() {
		return dbService.query('SELECT * FROM role')
	}

	getRole(id) {
		return dbService.query(`SELECT * FROM role WHERE roleId = ${id};`)
	}

	async updateRole(data) {
		let buildString = ''
		const actions = ['role', 'level', 'userId']
		for (const item of Object.keys(data)) {
			if (actions.includes(item)) {
				buildString += item + '=' + data[item] + ','
			}
		}
		let setValues = buildString.slice(0, buildString.length - 1)
		// console.log(fetchedResult.data[0].role)
		return dbService.query(`
		UPDATE blog.role
		SET ${setValues}
		WHERE roleId=${data.id};
		`)
	}

	insertRole(data) {
		let patrik = ''
		const item = ['role', 'level', 'userId']
		
		for (const klokan of item) {
			patrik += klokan + ', '
		}
		let setValues = patrik.slice(0, patrik.length - 2)
		console.log(setValues)
		 
		return dbService.query(`
		INSERT INTO role ('role', 'level', 'userID')
		VALUES ("OMod", 93845, 4);
		`)
	}

	delRole(id) {
		return dbService.query(`
		DELETE FROM role WHERE roleId = ${id}
		`)
	}
}



module.exports = new RoleService()