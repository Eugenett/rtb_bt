$(document).ready(function(){
	
	// INPUT[TYPE=RANGE]
	$('.range').change(function() {
		var val = $('.range').val();
		$('.value-holder').html(val);

		$('.count-clicks').html(val);
		var maxVal = 500000;
		if(val >= maxVal) {
			$('.value-click').html(' $ 0.3');
			$('.amount-value').html((Math.round(val) * 0.3).toFixed(0));
		} else {
			$('.value-click').html(' $ 0.5');
			$('.amount-value').html((Math.round(val) * 0.5).toFixed(0));
		}
	})
	//***
	//POP-UP
		$('.btn-enter').click(function() {
		
		$('.enter-popup').css('display', 'block');
		$('#overlay-popup').css('display', 'block');
			$('.close1').click(function() {
				$('.enter-popup').css('display', 'none');
				$('#overlay-popup').css('display', 'none');
			})
			return false;
	});

	$('.btn-count').click(function() {
		$('.order-action').css('display', 'block');
		$('#overlay-popup').css('display', 'block');
			$('.close3').click(function() {
				$('.order-action').css('display', 'none');
				$('#overlay-popup').css('display', 'none');
			})
			return false;
	});
	//***
})