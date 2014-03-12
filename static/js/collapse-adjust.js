$(function(){
	$(document.body).on("show", ".collapse", function (event) {
		var $this = $(this);
		if ($this.prev().find(".collapse-handle").size() > 0) {
			$this.prev().find(".collapse-handle").removeClass("fa-chevron-down").addClass("fa-times");
		}
	});
	$(document.body).on("hide", ".collapse", function (event) {
		var $this = $(this);
		if ($this.prev().find(".collapse-handle").size() > 0) {
			$this.prev().find(".collapse-handle").removeClass("fa-times").addClass("fa-chevron-down");
		}
	});
});
