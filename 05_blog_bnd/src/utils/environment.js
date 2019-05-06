import loger from '../utils/loger'
class Environment {
	/**
	 *Creates an instance of Environment.
	 * @memberof Environment
	 */
	constructor() {

		this.DEVELOPMENT = 'DEVELOPMENT'
		this.STAGING = 'STAGING'
		this.PRODUCTION = 'PRODUCTION'

		this.environments = {
			'DEVELOPMENT': require('./environments/development.json'),
			'STAGING': require('./environments/staging.json'),
			'PRODUCTION': require('./environments/production.json')
		}
		this.verifyEnvironments()
	}

	/**
	 * @returns the current env
	 * @memberof Environment
	 */
	getCurrent() {
		return this.current
	}

	apply(env) {
		if (this.check(env)) {
			this.current = env

			Object.keys(this.environments[env]).forEach(key => {
				this[key] = this.environments[env][key]
			})

			loger.log('current environment is set to :', env)
		} else {
			loger.log('Unsuported environment : ', env)
			process.exit(0)
		}

	}

	check(env) {
		if (env === this.DEVELOPMENT || env === this.STAGING || env === this.PRODUCTION) {
			return true
		} else {
			return false
		}
	}

	verifyEnvironments() {
		Object.keys(this.environments).forEach(environment => {
			if (!this[environment]) {
				loger.log(`Environment defined without enum key: ${environment}`)
				process.exit(0)
			}
		})
	}
}

module.exports = new Environment()