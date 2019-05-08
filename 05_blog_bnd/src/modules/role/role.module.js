import express from 'express'

const roleModule = express()

roleModule.get('', require('./hooks/get-roles'))
roleModule.get('/:id', require('./hooks/get-role'))
roleModule.put('', require('./hooks/put-role'))
roleModule.post('/update', require('./hooks/post-role'))
roleModule.delete('/:id', require('./hooks/delete-role'))


module.exports = roleModule