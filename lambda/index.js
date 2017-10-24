const getProjects = require('./getProjects')
const putProjects = require('./putProjects')

if (!process.env.FIREBASE_URL)
	throw new Error('Required environment variable FIREBASE_URL is not set')

module.exports = {
	getProjects,
	putProjects
}
