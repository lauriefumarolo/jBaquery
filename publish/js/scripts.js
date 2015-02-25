$(document).ready(function() {
	// setup for sidr (responsive site navigation drawer) plugin
	$('#responsive-menu-button').sidr({
		name: 'sidr',
		side: 'right', // open drawer on right side of screen
		source: '#mainNav' // use same navigation links as non-responsive navigation
	}); // end setup for sidr plugin
}); // end document.ready()
