// check off specific todos by clicking
$('ul').on("click", "li", function () {
	//use .complete class to toggle the clicked text with CSS effects
	$(this).toggleClass("completed");
});

// click on X to delete todo
$('ul').on("click", "span", function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function (event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new LI and add to UL
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$('.fa-pencil-alt').click(function () {
	$("input[type='text']").fadeToggle();
})