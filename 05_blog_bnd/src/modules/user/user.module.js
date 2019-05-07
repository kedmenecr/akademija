import express from 'express'

const userModule = express()

userModule.get('', require('./hooks/get-users'))
userModule.get('/:id', require('./hooks/get-user'))
userModule.put('', require('./hooks/put-user'))
userModule.delete('', require('./hooks/del-user'))

module.exports = userModule