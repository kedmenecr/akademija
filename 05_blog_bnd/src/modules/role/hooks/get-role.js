const responseService = require('../../../services/response.service')
const roleService = require('../../../services/role.service')


const getRole = async (req, res) => {

	try {

		const result = await roleService.getSingleRole(req.params.id)


		if (result.success) {
            const role = result.data.length >= 1 ? result.data : null
			if (role) {
				res.send(responseService.formatResponseData(role))
			} else {
				res.send(responseService.formatResponseError('not found'))
			}
		} else {
			responseService.send(responseService.formatResponseError('not found'))
		}
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = getRole