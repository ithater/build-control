const header = () => {
	// adaptive
	const headerContainer = document.querySelector('.header__container'),
		menu = document.querySelector('.header__mobile-menu'),
		nav = document.querySelector('.header__nav'),
		orderBtn = document.querySelector('.header__button');

	const mql = window.matchMedia('(max-width: 720px)');

	const moveToMenu = () => {
		menu.append(nav);
		menu.append(orderBtn);
	};

	const moveFromMenu = () => {
		if (nav.parentElement === headerContainer) return;
		headerContainer.append(nav);
		headerContainer.append(orderBtn);
	};

	const change = () => (mql.matches === true ? moveToMenu() : moveFromMenu());

	mql.addEventListener('change', change);
	change();

	// toggle menu
	const burgerBtn = document.querySelector('.button-burger'),
		closeBtn = document.querySelector('.header__button-close');

	const openMenu = () => menu.classList.add('header__mobile-menu--active');
	const closeMenu = () => menu.classList.remove('header__mobile-menu--active');

	burgerBtn.addEventListener('click', openMenu);
	closeBtn.addEventListener('click', closeMenu);


};

export default header;
