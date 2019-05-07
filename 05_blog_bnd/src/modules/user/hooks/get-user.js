const responseService = require('../../../services/response.service')
const userService = require('../../../services/user.service')


const getUser = async (req, res) => {

	try {

		const result = await userService.getSingleuser(req.params.id)


		if (result.success) {
			const users = result.data.length >= 1 ? result.data : null
			if (users) {
				res.send(responseService.formatResponseData(users))
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

module.exports = getUser