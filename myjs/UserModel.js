define(function(require, exports, model) {

	var UserModel = Backbone.Model.extend({
		check: function(attrs) {
			for (var key in attrs) {
				if (attrs[key] == '') {
					return key + "不能为空";
				}
			}
		}
	});

	return UserModel;
})