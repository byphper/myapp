define(function(require, exports, model) {

	var TestModel = Backbone.Model.extend({
		_validate:function(atr){alert(atr['age'])},
		change:function(atr){alert(456)}
	});

	return TestModel;
})