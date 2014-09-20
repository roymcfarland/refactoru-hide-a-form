$(document).on('ready', function() {	

  $(document).on('click', '.submit', function(e){
  		e.preventdefault();
  });

  $('.button').on('click', function() {
  		if($(this).text() === 'Show Form') {
		$('.form-container').removeClass('hidden');
  		$('.button').text("Hide Form");
  		} else {
  			$('.form-container').addClass('hidden');
  			$('.button').text('Show Form');
  		}
  });

  $(document).on('click', '.submit-button', function() {
  		var nameText = $('.nameText').val();
  		console.log('This is my name text', nameText);
  		var bioText = $('.bioText').val();
  		console.log('This is my bio text', bioText);
  		var booksText = $('.booksText').val();
  		console.log('This is my books text', booksText);
  		var javascriptText = $('.javascriptText').val();

  		$('.name').text(nameText);
  		$('.bio').text(bioText);
  		$('.books').text(booksText);
  		$('.libraries').text(javascriptText);	

  })


});