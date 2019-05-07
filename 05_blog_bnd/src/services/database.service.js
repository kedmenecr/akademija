import environment from '../utils/environment'
import loger from '../utils/loger'
import mysql from 'mysql'
import responseService from './response.service'


class DatabaseService {
	constructor() {

		const options = {
			host: environment.databaseHost,
			user: "root",
			password: "",
			database: environment.databaseName
		}

		this.connection = mysql.createConnection(options)
		try {
			this.connection.connect((err, ...args) => {
				if (err) {
					loger.error(err)
					process.exit(1)
				} else {
					loger.log('Connected to mysql!', ...args)
				}
			})
		} catch (e) {
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