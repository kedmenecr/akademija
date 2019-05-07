const responseService = require('../../../services/response.service')
const userService = require('../../../services/user.service')


const updateUser = async (req, res) => {


	try {
		const result = await userService.updateUser(req.body)


		if (result.success) {
			res.send(responseService.formatResponseData(result.data))
		} else {
			responseService.send(responseService.formatResponseError('not found'))
		}
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = updateUser