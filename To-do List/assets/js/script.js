//Check Off Specific Todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation(); //stops event bubbling
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newItem = $(this).val();
		$(this).val("");
		//create new li
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newItem + "</li>");
	}
});

$("#show").click(function(){
	if($("#show").attr("class") === "fa fa-minus"){
		$("#show").removeClass("fa fa-minus");
		$("#show").addClass("fa fa-plus");
	}
	else{
		$("#show").removeClass("fa fa-plus");
		$("#show").addClass("fa fa-minus");	
	}
	$("input[type='text']").fadeToggle();
	
});