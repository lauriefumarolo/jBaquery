$(document).ready(function() {
	// setup for blueimp gallery plugin
	$('#links').click(function(event) {
		event = event || window.event;

		var target = event.target || event.srcElement,
			link = target.src ? target.parentNode : target;

		blueimp.Gallery($('#links a'), {
			index: link,
			event: event
		});
	}); // end setup for blueimp gallery plugin
}); // end document.ready()
