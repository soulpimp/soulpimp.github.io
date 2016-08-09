$('document').ready(function(){
	//	Professional experience progress bars
	setTimeout(function() {
		$('.progress-bar').each(function(){
			var me = $(this);
			var width = me.attr('aria-valuenow');

			var current_width = 0;

			var progress = setInterval(function(){
				if(current_width >= width){
					clearInterval(progress);
				} else {
					current_width +=1;
					me.css('width', (current_width)+'%');
				}
			}, 10);
		});
	}, 300);
	//	Timeline containers slide open / closed
	$('.timeline-container').each(function(){
		var $timeline = $(this);

		$('.more', $timeline).on('click', function(e){
		
			e.preventDefault();

			$div = $('.content-wrap', $timeline);

			$div.slideToggle();
			$('.content-wrap').not($div).slideUp();

			if(!$(this).hasClass('active')) {
				$(this).addClass('active');
				$('.more').not(this).removeClass('active');
			} else {
				$(this).removeClass('active');
			}
			
			return false;			
		});
	});
	// Click outside of the container to close
	$('html').on('click', function(){
		$('.content-wrap').slideUp();
		$('.more').removeClass('active');
	});


	//	Form Validation
	$('#contactForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'checkmark',
            invalid: 'error',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'Please tell me your name'
                    }
                }
            },
            _replyto: {
                validators: {
                    notEmpty: {
                        message: 'An email address is required'
                    },
                    emailAddress: {
                        message: 'Please use a valid email address'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Send me some details about your project'
                    }
                }
            }
        }
    });
	//	Contact form (formspree.io)
	var message = "";

	$("#sendMessage").on("click", function() {
	    message = $("#contactForm").serialize();
	    $.ajax({
	        url: "https://formspree.io/craig@forsythdesign.ca", 
	        type: "POST",
	        data: {message: message},
	        dataType: "json"
	    })
	    .done(function() { // this happens after the form submit
	    	var name = $('#name').val();
	    	$('#contactForm').hide(0).delay(5001).show(0)[0].reset();
 			$('.message_box').html('<h2>Hi ' + name +', thanks for reaching out! I will try to get back to you as soon as I can.</h2>').show(0).delay(5000).hide(0);   
    		$('#contactForm').bootstrapValidator('resetForm', true);
    	});
	    
	    //alert('Thanks for the email, we\'ll be in touch promptly.');
	    return false;
	});

	//	Testimonials

	$('.carousel').carousel({
		interval: 15000
	});

	$('#props').find('.item').first().addClass('active');

	$('.carousel.work').carousel({
		interval: 2000
	});
	$('#work-slider-babyzone').find('.item').first().addClass('active');
	$('#work-slider-tgam').find('.item').first().addClass('active');
	$('#work-slider-hawaiiantropic').find('.item').first().addClass('active');
	$('#work-slider-schick-canada').find('.item').first().addClass('active');
	$('#work-slider-schick-hydro').find('.item').first().addClass('active');
	$('#work-slider-showeryoursenses').find('.item').first().addClass('active');
	$('#work-slider-skintimate').find('.item').first().addClass('active');
	$('#work-slider-sundancechannel').find('.item').first().addClass('active');
	$('#work-slider-method').find('.item').first().addClass('active');


	// var url = 'https://api.linkedin.com/v1/people/~:(recommendations-received)?format=json';
	// $.ajax({
	// 	type: "GET",
	// 	url: url,
	// 	jsonpCallback: 'callback',
 //    	contentType: "application/json",
 //    	dataType: 'jsonp',
 //    	success: function(json) {
 //    		console.log(JSON.stringify(json.recommendationsReceived));	
 //    	}
	// });
	
});