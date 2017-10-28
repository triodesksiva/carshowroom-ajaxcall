var res = "";
var res1 = "";
var res2 = "";
var res3 = "";
var res4 = "";
var res5 = "";
var res6 = "";
var res7 = "";
var res8 = "";
var res9 = "";
var z;
var carsdetails = "";
$(document).ready(function(){
	$.ajax({
		type: "GET",
		url: "https://59edf105ff7d5d00128e08b1.mockapi.io/cars",
		dataType:"json",

		success: function(result) {
			var txt  = "<option value=''>" + "Choose car..." + "</option>";
			var mod = "<option value=''>" + "Choose model..." + "</option>";
			var coun = "<option value=''>" + "Choose country..." + "</option>";
			var city = "<option value=''>" + "Choose city..." + "</option>";
			var type = "<option value=''>" + "Choose type..." + "</option>";
			var minyear = "<option value=''>" + "Choose year..." + "</option>";
			var maxyear = "<option value=''>" + "Choose year..." + "</option>";
			var color = "<option value=''>" + "Choose color..." + "</option>";
			var low = "<option value=''>" + "Choose price..." + "</option>";
			var high = "<option value=''>" + "Choose price..." + "</option>";

            z = result;
			for(var i = 0; i < z.length; i++) {
                  
				txt += "<option>" + z[i].car + "</option>";
				mod +=  "<option>" + z[i].model + "</option>";
				coun += "<option>" + z[i].country + "</option>";
				city +=  "<option>" + z[i].city + "</option>";
				type +=  "<option>" + z[i].types + "</option>";
				minyear +=  "<option>" + z[i].minyr + "</option>";
				maxyear +=  "<option>" + z[i].maxyr + "</option>";
				color +=  "<option>" + z[i].color + "</option>";
				low +=  "<option>" + z[i].minprice + "</option>";
				high +=  "<option>" + z[i].maxprice + "</option>";
			}
			$("#carselection").html(txt);
			$("#modelselection").html(mod);
			$("#countryselection").html(coun);
			$("#cityselection").html(city);
			$("#typeselection").html(type);
			$("#min").html(minyear);
			$("#max").html(maxyear);
			$("#Color").html(color);
			$("#low").html(low);
			$("#high").html(high);
			
		}
	});
	
	$("#carselection").change(function(){
        res = $("#carselection").val();
        console.log(res);
        
    });
    $("#modelselection").change(function(){
        res1 = $("#modelselection").val();
        console.log(res1)
    });
    $("#countryselection").change(function(){
        res2 = $("#countryselection").val();
        console.log(res2)
    });
    $("#cityselection").change(function(){
        res3 = $("#cityselection").val();
        console.log(res3)
    });
    $("#typeselection").change(function(){
        res4 = $("#typeselection").val();
        console.log(res4)
    });
    $("#min").change(function(){
        res5 = $("#min").val();
        console.log(res5)
    });
    $("#max").change(function(){
        res6 = $("#max").val();
        console.log(res6)
    });
    $("#Color").change(function(){
        res7 = $("#Color").val();
        console.log(res7)
    });
    $("#low").change(function(){
        res8 = $("#low").val();
        console.log(res8)
    });
    $("#high").change(function(){
        res9 = $("#high").val();
        console.log(res9)
    });
    



	$("button").click(function(){
         
        $("#form1").validate({
            rules: {
            	carselection: "required",
            	modelselection: "required",
            	countryselection: "required",
            	cityselection: "required",
            	typeselection: "required",
            	min: "required",
            	max: "required",
            	Color: "required",
            	low: "required",
            	high: "required"
            },
            messages: {
            	carselection: "Plase chooose.....",
            	modelselection: "Plase chooose.....",
            	countryselection: "Plase chooose.....",
            	cityselection: "Plase chooose.....",
            	typeselection: "Plase chooose.....",
            	min: "Plase chooose.....",
            	max: "Plase chooose.....",
            	Color: "Plase chooose.....",
            	low: "Plase chooose.....",
            	high: "Plase chooose....."
            },
            
            submitHandler:function(form) {
			 	carsdetails = {
    				car: res,
    				model:res1,
    				country:res2,
    				city:res3,
    				types:res4,
    				minyr:res5,
    				maxyr:res6,
    				color:res7,
    				minprice:res8,
    				maxprice:res9
    			}

    			$.post("https://59eedf77684745001253e7d6.mockapi.io/mycars",carsdetails,function(){
    				$("#carselection").val(""),
    				$("#modelselection").val(""),
    				$("#countryselection").val(""),
    				$("#cityselection").val(""),
    				$("#typeselection").val(""),
    				$("#min").val(""),
    				$("#max").val(""),
    				$("#Color").val(""),
    				$("#low").val(""),
    				$("#high").val("")

    			})
         		for(var j = 0; j < z.length; j++) {
           		if(carsdetails.car == z[j].car && carsdetails.model == z[j].model && carsdetails.country == z[j].country && carsdetails.city == z[j].city && carsdetails.types == z[j].types && carsdetails.minyr == z[j].minyr && carsdetails.maxyr == z[j].maxyr && carsdetails.color == z[j].color && carsdetails.minprice == z[j].minprice && carsdetails.maxprice == z[j].maxprice) {
           			document.getElementById('res').innerHTML = "Sure Car is Available....";
           			break;
           		}
           		else {
           			document.getElementById('res').innerHTML = "Sorry sold out....";

           	     	}
            	} 
          
       		}
       	});
	});

	$("form").click(function(){
		document.getElementById('res').innerHTML = "";
	})
        
});
 
