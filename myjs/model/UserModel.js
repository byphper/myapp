define(function(require, exports, model) {

	var UserModel = Backbone.Model.extend({
		url:'server/index.php/index/index',
	});

	return UserModel;
})