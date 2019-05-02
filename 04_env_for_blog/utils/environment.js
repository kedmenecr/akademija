class Environment {
    constructor() {

        this.DEVELOPMENT = "DEVELOPMENT"
        this.STAGING = "STAGING"
        this.PRODUCTION = "PRODUCTION"

        this.environments = {
            "DEVELOPMENT": require("./environments/development.json"),
            "STAGING": require("./environments/staging.json"),
            "PRODUCTION": require("./environments/production.json")
        }

        this.verifyEnvironments()

    }

    getCurrent() {
        return this.current
    }

    apply(env) {
        if (this.check(env)) {
            this.current = env
        }


        Object.keys(this.environments[env]).forEach(key => {
            console.log(key, this.environments[env][key])
            this[key] = this.environments[env][key]

        })

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
                console.log(`Env defined without enum key : ${environment}`)
                process.exit(0)
            }

        })
    }
}



module.exports = new Environment()