const responseService = require('../../../services/response.service')
const roleService = require('../../../services/role.service')


const postRole = async (req, res) => {


	try {
		const result = await roleService.insertRole(req.body)


		if (result.success) {
			res.send(responseService.formatResponseData(result.data))
		} else {
			responseService.send(responseService.formatResponseError('not found'))
		}
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = postRole