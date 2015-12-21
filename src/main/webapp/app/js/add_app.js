
$(document).ready(
		function(){
			$("#submit").on(
				"click",
				function(){
					var js_appName = "smartCAR";
					
					$.ajax({
					
						url : '/app/list_appinfo',
						data: {
							appName : js_appName
						},
						dataType : 'json',
						success : 
							function(data){
							   var listAppInfo = "";
							   $.each(data.listAppInfo, function(i,item){
								listAppInfo = listAppInfo 
								              + "<li class="
								              +"\""
								              +"m110"
								              +"\">"
								              + "<img class="
								              +"\""
								              +"m120"
								              +"\"" 
								              +" src="
								              + "\""
								              +item.PATH
								              +"\">"
								              +"<span class="
								              +"\""
								              +"ml30"
								              +"\">"
								              + item.APPNAME
								              +"</span>"             
								              +"<button class="
								              +"\""
								              + "btn btn-default m140"
								              +"\">"
								              +"安装"
								              +"</button>"
								              + "</li>"
								              
							    });
							   $("#p_text").html(listAppInfo);
								console.log("app add success");
						    },
						error : 
							function(data){
								console.log("app add failed");
					    }
					});
				}
			)
		}
);

