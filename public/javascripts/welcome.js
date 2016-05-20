$(document).ready(function(){
	var logo = $('div[data-role="page"]');
	$(logo).css('background','#BAEA12');
	$('.landingLogo').find('img').slideDown(1000,function(){
		$('.landingLogo').find('h1').fadeIn();
		$('.landingLogo').find('p').fadeIn();
		$('.landingD').first().fadeIn(500,function(){
			$('.landingD:eq(1)').fadeIn(500,function(){
				$('.landingD').last().fadeIn(500,function(){
					window.location.href='/login';
				});
			});
		});
	});
});