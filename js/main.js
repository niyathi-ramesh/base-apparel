function submitData(event) {
	// Prevents unwanted navigation on submission.
	event.preventDefault();

	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(subscriptionForm.email.value)) {
		showValid();
	} else {
		showInvalid();
	}
}

/**
 * Sets style for valid email input.
 */
function showValid() {
	document.getElementById('error-icon').style.display = 'none';
	document.getElementById('error-message').style.visibility = 'hidden';
	document.getElementById('email').classList.remove('invalid-input');
}

/**
 * Sets style for invalid email input.
 */
function showInvalid() {
	document.getElementById('error-icon').style.display = 'block';
	document.getElementById('error-message').style.visibility = 'visible';
	document.getElementById('email').classList.add('invalid-input');
}