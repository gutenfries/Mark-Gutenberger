window.onerror = function (msg, url, lineNo, columnNo, error) {
	var string = msg.toLowerCase();
	var substring = "script error";
	if (string.indexOf(substring) > -1) {
		alert('Script Error');
	} else {
		var message = [
			'\nMessage: ' + msg,
			'\nURL: ' + url,
			'\nLine: ' + lineNo,
			'\nColumn: ' + columnNo,
			'\nError object: ' + JSON.stringify(error)
		].join(' - ');

		alert(message);
	}

	return false;
};
function captureError(err) {
	var errorData = {
		name: err.name,
		message: err.line,
		url: document.location.href,
		stack: err.stack
	};
	$.post('/logs/', {
		data: errorData
	});
}
