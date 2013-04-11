var log = require('./xqnode-logger');
log.setLevel('info');	


log.error('Error message');
log.warn('Just a warning');
log.info('Hello, I\'m an info');
log.info('Info with data', {
	drink: 'Beer',
	kind: 'Augustiner',
	taste: 'delicious'
});
log.data({
	drink: 'Beer',
	kind: 'Augustiner',
	taste: 'delicious'
});