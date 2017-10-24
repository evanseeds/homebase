const axios = require('axios')

module.exports.handler = (event, context) => {
	const projects = event.projects

	axios({
		url: process.env.FIREBASE_URL,
		method: 'put',
		data: projects
	})
	.then((response) => {
		context.succeed(projects)
	}).catch(context.fail);
}
