const responseService = require('../../../services/response.service')
const roleService = require('../../../services/role.service')


const deleteRole = async (req, res) => {


	try {
		const result = await roleService.delRole(req.params.id)


		if (result.success) {
			res.send(responseService.formatResponseData(result.data))
		} else {
			responseService.send(responseService.formatResponseError('not found'))
		}
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = deleteRole