import dbService from './database.service'

class RoleService {

	getRole() {
        return dbService.query('SELECT * FROM role')
	}
    
}



module.exports = new RoleService()