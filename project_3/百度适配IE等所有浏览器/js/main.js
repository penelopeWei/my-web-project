$(document).ready(function() {
	/*更多产品*/
	$(".all-products").mouseover(function() {
		$(".list-products").show();
	});

	$(".list-products").mouseover(function() {
		$(".list-products").show();
	});

	$(".list-products").mouseout(function() {
		$(".list-products").hide();
	});
	/*end 更多产品*/

	/*设置*/
	$(".setting").mouseover(function() {
		$(".preferences-list").show();
	});
//	$(".setting").mouseout(function() {
//		$(".preferences-list").hide();
//	});
	$(".preferences-list").mouseout(function() {
		$(".preferences-list").hide();
	});

	$(".preferences-list").mouseover(function() {
		$(".preferences-list").show();
	
	});

	/*end 设置*/
});