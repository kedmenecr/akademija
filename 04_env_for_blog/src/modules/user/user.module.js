import express from 'express'

const userModule = express()

userModule.get('', require('./hooks/get-users'))
// userModule.get('/:id', require('./hooks/get-user'))

module.exports = userModule