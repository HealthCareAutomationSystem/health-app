$(document).ready(function() {
	$('.chat_icon').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});

$(document).ready(function() {
	$('.quick-chat').click(function() {
		$('.chat_box').toggleClass('active');
	});

	$('.my-conv-form-wrapper').convform({selectInputStyle: 'disable'})
});
