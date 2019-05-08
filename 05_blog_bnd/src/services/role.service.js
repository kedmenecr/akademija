import dbService from './database.service'

class RoleService {

	getAllRole() {
        return dbService.query('SELECT * FROM role')
	}

	getSingleRole(id) {
		return dbService.query(`SELECT * FROM role WHERE roleId = ${id};`)
	}

	updateRole(data) {
		return dbService.query(`
		UPDATE blog.role
		SET role='mod', 
		level=444, 
		userId= 2
		WHERE roleId='3';
		`);	
	}
	
	insertRole() {
		return dbService.query(`
		INSERT INTO role (role, level, userId)
		VALUES ("Owner", 9999999, 3);
		`)
	}

	delRole(id) {
		return dbService.query(`
		DELETE FROM role WHERE roleId = ${id}
		`)
	}
}



module.exports = new RoleService()