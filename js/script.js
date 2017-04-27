$(function(){
	$('#scene').parallax({
	  calibrateX: false,
	  calibrateY: true,
	  invertX: false,
	  invertY: false,
	  limitX: true,
	  limitY: false,
	  scalarX: 2,
	  scalarY: 8,
	  frictionX: 0.2,
	  frictionY: 0.1,
	  originX: 0.0,
	  originY: 1.0
	});
	
	$('.burger').click(function() {
		if($('.nav-trigger').is(':checked')) {
			$('.main').animate({'right':0},10);
		} else {
			$('.main').animate({'right':200},10);
		}
	});
});