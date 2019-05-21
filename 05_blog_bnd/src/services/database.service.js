import environment from '../utils/environment'
import loger from '../utils/loger'
import mysql from 'mysql'
import responseService from './response.service'


class DatabaseService {
	constructor() {


		const options = {
			host: environment.databaseHost,
			user: environment.databaseUser,
			password: environment.databasePassword,
			database: environment.databaseName
		}



		if (environment.getCurrent() === environment.STAGING || environment.getCurrent() === environment.PRODUCTION) {
			options.socketPath = `/cloudsql/${environment.databaseInstanceConnectionName}`
		}
		this.connection = mysql.createConnection(options)
		try {
			this.connection.connect((err) => {
				if (err) {
					loger.error('Failed to connect to mysql!')
					loger.log(err)
					process.exit(1)
				} else {
					loger.log('Connected to mysql!')
				}
			})
		} catch (e) {
			loger.log('Failed to connect to database:', options)
			loger.error(e)
		}
	}

	query(query) {
		return new Promise((resolve, reject) => {

			this.connection.query(query, (error, results) => {
				if (error) reject(responseService.formatResponseError(error))
				resolve(responseService.formatResponseData(results))
			})
		})
	}

	singleQuery(query) {
		return new Promise((resolve, reject) => {

			this.connection.query(query, (error, results) => {
				if (error) reject(responseService.formatResponseError(error))
				resolve(responseService.formatResponseData((results && results.length > 0) ? results[0] : null))
			})
		})
	}
}

module.exports = new DatabaseService()