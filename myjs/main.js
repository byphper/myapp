seajs.config({
	base: 'http://localhost/mvc/',
	charset: 'utf-8',
	alias: {
		'underscore': 'js/Underscore',
		'backbone':'js/backbone',
		'bootstrap':'js/bootstrap'
	}

});


seajs.use(['myjs/app'], function(obj) {

});