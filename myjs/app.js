define(function(require,exports,model){
	
		var UserModel=require("myjs/model/UserModel");

		var user=new UserModel({});
		user.fetch({success:function(model,res){
				 model.set(res);
				 alert(user.get('name')+"\r\n"+user.get('age'));
				 alert(user.get('cid'))
		}});

		
		
		


		
})