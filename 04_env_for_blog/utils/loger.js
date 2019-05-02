import moment from 'moment'

class Loger {

    static log(type, ...args) {
        const entry = {
            time: moment().format('MMMM Do YYYY, h:mm:ss a'),
            type,
            args
        }
        console.log(JSON.stringify(entry))
    }

    static error(...args) {
        this.log('error', ...args)
    }

    static warn(...args) {
        this.log('warning', ...args)
    }
    static debug(...args) {
        this.log('debug', ...args)
    }
}

module.exports = Loger