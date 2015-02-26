$(document).ready(function() {
	// setup for jQuery UI button
	$('input[type="submit"]').button();

	// setup for jQuery UI dialog
	$('#dialog').dialog({
		autoOpen: false,
		width: 400,
		height: 250,
		resizable: false,
		modal: true,
		buttons: {
			Ok: function() {
				$(this).dialog('close');
			}
		}
	}); // end setup for jQuery UI dialog

	// when user submits form, show a thank you dialog
	// also, clear all form fields
	$('form').submit(function() {
		$('#dialog').dialog('open');

		// have to clear form fields manually or dialog disappears
		$('input:not([type="submit"])').val('');
		$('textarea').val('');

		return false;
	}); // end form submit

	// helper function that initializes Google map of bakery location
	function initializeMap() {
		// get map point with latitude and longitude
		var mapPoint = new google.maps.LatLng(41.8838972, -87.628465);

		// create map and show in #map-canvas
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
			center: mapPoint,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		// create marker that shows bakery address
		var marker = new google.maps.Marker({
			position: mapPoint,
			map: map,
			title: "jBaquery"
		});
	}

	// initialize map
	google.maps.event.addDomListener(window, 'load', initializeMap);
}); // end document.ready()
