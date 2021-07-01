var mp = MpJ$('alex', 'gadaix')
console.log(mp)

$('#loginBtn').click(function () {
	var firstname = $('#firstname').val()
	var lastname = $('#lastname').val()
	var checkboxFormal = $('#formal')[0].checked
	console.log(firstname)
	console.log(checkboxFormal)
	console.log($('#formal')[0].checked)
	if (firstname === '' || !lastname === '') {
		$('#greeting').html('Please provide your firstname and lastname');
		return;
	}
	var loginGrtr = MpJ$(firstname,lastname);
	loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', checkboxFormal).log()
})

$('#lang').click(function () {
	$('#greeting').html('')
})

$('#formal').click(function () {
	$('#greeting').html('')
})