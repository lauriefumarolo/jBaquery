$(document).ready(function() {
	// setup for nano gallery plugin
	$("#nanoGallery").nanoGallery({
		thumbnailHeight: 'auto', // thumbnails aren't all the same height
		colorScheme: 'light',
		// when hovering over a thumbnail,
		// show label and transparent black background
		thumbnailHoverEffect: [{
			name: 'labelAppear75',
			duration: 300
		}],
		// when hovering over a thumbnail,
		// label should show in center of thumbnail
		thumbnailLabel: {
			display: true,
			position: 'overImageOnMiddle',
			align: 'center'
		}
	}); // end setup for nano gallery plugin
}); // end document.ready()
