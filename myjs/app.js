define(function(require,exports,model){
		var und=require("underscore");
		var backbone=require("backbone");
		var UserModel=require("myjs/UserModel");
		
		var user=new UserModel({id:'',name:"joy"});
		alert(user.check(user));
})