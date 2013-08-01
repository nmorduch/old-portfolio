$(function(){
	$(document.body).on("show", ".collapse", function (event) {
		var $this = $(this);
		if ($this.prev().find(".collapse-handle").size() > 0) {
			$this.prev().find(".collapse-handle").removeClass("icon-chevron-down").addClass("icon-remove");
		}
	});
	$(document.body).on("hide", ".collapse", function (event) {
		var $this = $(this);
		if ($this.prev().find(".collapse-handle").size() > 0) {
			$this.prev().find(".collapse-handle").removeClass("icon-remove").addClass("icon-chevron-down");
		}
	});
});
