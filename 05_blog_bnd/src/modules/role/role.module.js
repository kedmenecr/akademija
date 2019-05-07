import express from 'express'

const roleModule = express()

roleModule.get('', require('./hooks/get-role'))
roleModule.get('/bik', require('./hooks/get-role'))


module.exports = roleModule