module.exports = (function() {
	var winston = require('winston');
	winston.cli();
	var logger = new (winston.Logger)({
		transports: [
			new (winston.transports.Console)({
				colorize: true,
				prettyPrint: true
			})
			//new (winston.transports.File)({ filename: 'logfiles/application.log' })
		]
	});

	logger.dev = function(msg, data) {
		logger.log('info', msg, data);
	};
	
	logger.req = function(url, data) {
		logger.log('request', msg, data);
	};

	logger.res = function(msg, data) {
		logger.log('response', msg, data);
	};

	logger.data = function(data) {
		logger.log('data', data);
	};

	/**
	 * Set log level
	 */
	logger.setLevel = function(level) {
		logger.transports.console.level = level;
	};


	/**
	 * Express middleware
	 */
	logger.__express = function(req, res, next) {
		logger.req(req.path + ' ' + req.method);
		if (req.body) {
			logger.data(req.body);
		}

		next();
	};

	logger.cli();

	return logger;
})();