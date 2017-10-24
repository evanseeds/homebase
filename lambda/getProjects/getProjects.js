const axios = require('axios')

module.exports.handler = (event, context) => {
	axios({
		url: process.env.FIREBASE_URL
	})
	.then((response) => {
		const projects = response.data;
		context.succeed(projects)
	}).catch(context.fail);
}
