(function($){
	$(document).ready(function (){
		var $msgbtn = $('.msg');
		var $msgbox = $('.msgBox');
		var worker = new SharedWorker('./assets/js/test.js');
		worker.port.onmessage = function(e) {
			//console.log(e.data);
			$msgbox.append('<p>'+ e.data +'</p>');
		};
		console.log(worker);



		$('.send').on('click', function(e){
			var msg = $msgbtn.val();
			worker.port.postMessage(msg);
			$msgbtn.val('');
		});
	});
})(window.jQuery);