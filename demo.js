var config = require('./config'),
	Github = require('github'),
	git = new Github({debug: true, version: '3.0.0'});

git.authenticate({
	type: 'basic',
	username: config.github.username,
	password: config.github.password
});

git.repos.create({name: 'my-node-generated-repo', description: 'a repo created with node.js', private: false}, function(err, res) {
	console.log('err ?', err);
	console.dir(res);
});