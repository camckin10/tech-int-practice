function quote_machine(){
	var q1 = document.getElementById('one').value;
	var q2 = document.getElementById('two').value;

	var html = q1 + '<p>' + "says" + '</p>' + q2;

	document.getElementById('answer').innerHTML = html;

	document.getElementById('submit').addEventListener('click', quote_machine);
}