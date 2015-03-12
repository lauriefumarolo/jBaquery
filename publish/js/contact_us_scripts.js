$(document).ready(function() {
	// setup for jQuery UI button
	$('input[type="submit"]').button();

	// setup for jQuery UI dialog
	$('#dialog').dialog({
		autoOpen: false,
		width: 300,
		height: 220,
		resizable: false,
		modal: true,
		buttons: {
			Ok: function() {
				$(this).dialog('close');
			}
		}
	}); // end setup for jQuery UI dialog

	// setup for jquery validation plugin
	$('form').validate({
		// rules - name, email, and message fields are required
		// email should be a valid email address
		rules: {
			name : {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		// error messages
		messages: {
			name: {
				required: "Please give your name."
			},
			email: {
				required: "Please supply your email address.",
				email: "This is not a valid email address."
			},
			message: {
				required: "Please write a message."
			}
		},
		// called if form data is valid
		submitHandler: function(form) {
			// show user a thank you dialog
			$('#dialog').dialog('open');

			// clear all form fields
			form.reset();

			return false;
		}
	}); // end setup for jquery validation plugin

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
