const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');

if (menuToggle && mainMenu) {
	menuToggle.addEventListener('click', function () {
		const isOpen = mainMenu.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', isOpen);
	});
}

const appointmentForm = document.getElementById('appointment-form');

function showError(fieldId, message) {
	const errorElement = document.getElementById(fieldId + '-error');
	if (errorElement) {
		errorElement.textContent = message;
	}
}

function clearErrors() {
	document.querySelectorAll('.error-message').forEach(function (errorElement) {
		errorElement.textContent = '';
	});
}

if (appointmentForm) {
	appointmentForm.addEventListener('submit', function (event) {
		event.preventDefault();
		clearErrors();
		const successMessage = document.getElementById('success-message');
		successMessage.textContent = '';

		let isValid = true;
		const patientName = document.getElementById('patient-name');
		const email = document.getElementById('email');
		const phone = document.getElementById('phone');
		const appointmentDate = document.getElementById('appointment-date');
		const doctor = document.getElementById('doctor');
		const appointmentType = document.getElementById('appointment-type');
		const reason = document.getElementById('reason');
		const password = document.getElementById('password');
		const confirmPassword = document.getElementById('confirm-password');
		const terms = document.getElementById('terms');
		const gender = document.querySelector('input[name="gender"]:checked');

		if (!patientName.value.trim()) {
			showError('patient-name', 'Please enter the patient name.');
			isValid = false;
		}

		if (!email.value.trim()) {
			showError('email', 'Please enter an email address.');
			isValid = false;
		} else if (!email.validity.valid) {
			showError('email', 'Please enter a valid email address.');
			isValid = false;
		}

		if (!phone.value.trim()) {
			showError('phone', 'Please enter a phone number.');
			isValid = false;
		} else if (!/^01[3-9]\d{8}$/.test(phone.value.trim())) {
			showError('phone', 'Use an 11-digit Bangladesh phone number starting with 013-019.');
			isValid = false;
		}

		if (!appointmentDate.value) {
			showError('appointment-date', 'Please choose an appointment date.');
			isValid = false;
		}

		if (!doctor.value) {
			showError('doctor', 'Please choose a doctor.');
			isValid = false;
		}

		if (!appointmentType.value) {
			showError('appointment-type', 'Please choose an appointment type.');
			isValid = false;
		}

		if (!gender) {
			showError('gender', 'Please select a gender.');
			isValid = false;
		}

		if (!reason.value.trim()) {
			showError('reason', 'Please enter the reason for your visit.');
			isValid = false;
		}

		if (password.value.length < 6) {
			showError('password', 'Password must be at least 6 characters long.');
			isValid = false;
		}

		if (confirmPassword.value !== password.value) {
			showError('confirm-password', 'Passwords do not match.');
			isValid = false;
		}

		if (!terms.checked) {
			showError('terms', 'Please agree to the clinic appointment terms.');
			isValid = false;
		}

		if (isValid) {
			appointmentForm.dataset.valid = 'true';
			successMessage.textContent = 'Appointment request submitted successfully for ' + patientName.value.trim() + ' on ' + appointmentDate.value + '.';
		}
	});

	appointmentForm.addEventListener('reset', function () {
		window.setTimeout(function () {
			clearErrors();
			document.getElementById('success-message').textContent = '';
			appointmentForm.dataset.valid = 'false';
		}, 0);
	});
}
