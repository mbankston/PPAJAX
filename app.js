
var showList = ["red","cyan","purple","magenta","green","blue","yellow"];
$(document).ready(function() {
 $.ajax('data.json', {
        success: function(response){
        	for (var i=0; i < showList.length; i++){
        	
        	
            	$.each(response, function(index, data) {
            		var colorList=data.color;
            		if(showList[i]==data.color){
                	$('body').append("<div class='col-md-4'><p>Color " + data.color + "</p></div>");
                	$('body').children().last().css('background-color', data.value);
                }else{   	
                }
            })
           	 }
        	},
       	 error: function(request, errorType, errorMessage){
            	alert(errorType + " " + errorMessage);
        }
    	});

	});


