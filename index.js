const cp = require('child_process')
const fs = require('fs')
const async = require('async')

exports.setGitMessage = function (filepath, callback) {
	const gitDir = process.cwd() + '/.git'
	async.series([
		(callback) => fs.access(filepath, callback),
		(callback) => fs.access(gitDir, callback),
		(callback) => cp.exec(`git config --local commit.template ${filepath}`, callback)
	], callback)
}
