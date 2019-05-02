import loger from "../utils/loger"
import environment from "../utils/environment"



const buildConfig = () => {

    const args = process.argv

    const env = args.find(arg => { arg.includes("env") })

    if (env && env.indexOf("=") > 0) {
        const parsedEnv = env.substring(env.indexOf("=") + 1, env.length)

        if (!environment.check(parsedEnv)) {
            loger.error(parsedEnv, "is not supported")
            process.exit(0)
        } else {
            environment.apply(parsedEnv)
        }
    } else {
        environment.apply(environment.DEVELOPMENT)
    }

}


module.exports = buildConfig