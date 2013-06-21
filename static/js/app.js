(function (win, body, $, undefined) {
	var $win = $(win);
	
	// set class="window-height-plus" to the window height plus 10px
	// set class="window-width" to the full width of the window
	$win.on('ready resize', function () {
		//On desktop screens, take the full height of the screen plus 10px. On mobile, only take half.
		var height = $win.outerHeight(),
			heightplus = ($win.outerWidth() > $win.outerHeight()) ? $win.outerHeight() + 10 : ($win.outerHeight() / 2 + 10),
			heightminus = ($win.outerHeight() - 80),
			width = $win.outerWidth();
		$('.max-height').css("max-height", heightminus + 'px');
		$('.window-height').css("min-height", height + 'px');
		$('.window-height-plus').css("min-height", heightplus + 'px');
		$('.window-width').width(width);
	});

	// backstretch it up
	$('[data-backstretch-image]').each(function(){
		var $this = $(this),
			img_src = $this.data('backstretch-image');
		if (Modernizr.backgroundsize) {
			// if background size is supported, there's a declaration in the CSS to make the images cover
			$this.css({'background-image': "url('"+img_src+"')"});
		} else {
			$this.backstretch(img_src);
			// for IE7
			$win.on('load', function () { $this.data('backstretch').resize(); });
		}
	});

	// Add smooth scrolling anchors
	$(body).on('click', '[data-smooth-scroll]', function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},500,"linear");
		if (Modernizr.history) window.history.pushState({}, this.hash, this.hash);
	});

}(this, document.body, window.jQuery));