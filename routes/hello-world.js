
function getHelloWord(req, res){
	
	console.log("In getHelloWord Method Call..");
	var response_string = { "message": "Hello World"};
	res.send(JSON.stringify(response_string));
	res.end();
}

exports.getHelloWord = getHelloWord;