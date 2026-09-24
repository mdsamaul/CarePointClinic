const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');

if (menuToggle && mainMenu) {
	menuToggle.addEventListener('click', function () {
		const isOpen = mainMenu.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', isOpen);
	});
}
