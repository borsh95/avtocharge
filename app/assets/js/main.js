"use strict";

// break points site
const breakPoint = {
	desctop: 1920,
	desctopMid: 1450,
	desctopMin: 1230,
	table: 1024,
	mobile: 768,
	tel: 480,
}

/***** INITIALIZING PLUGINS ******/
if (isElem('.fixblock')) {
	const fixblockNodes = document.querySelectorAll('.fixblock');
	const mediaQuery = window.matchMedia(`(min-width: ${breakPoint.table}px)`);

	for (const fixblock of fixblockNodes) {
		let a = fixedBlock(fixblock);
		let isInit = false;

		mediaHandler();

		mediaQuery.addListener(mediaHandler);

		function mediaHandler() {
			if (mediaQuery.matches) {
				a.init();
				isInit = true;
			} else if (isInit) {
				a.destroy();
			}
		}
	}


}

if (window.$ && typeof window.$.fn.customSelect === 'function') {
	$('select').customSelect();
}

// скрол страницы к нужной координате
let scrollingWindow = scrollWindow();

document.addEventListener('click', function (e) {
	if (e.target.closest('.scroll-to[href*="#"]')) {
		const link = e.target.closest('.scroll-to[href*="#"]');
		const id = link.hash;
		const $section = document.querySelector(id);

		if (!$section) return;

		e.preventDefault();

		const $header = document.querySelector('.header') || document.querySelector('header');
		let coordsSection = window.pageYOffset + $section.getBoundingClientRect().top;

		coordsSection = coordsSection - $header.offsetHeight;

		scrollingWindow.startAmimationScroll(coordsSection);
	}
})

// 	main slider 
if (isElem('.main-slider')) {
	const sliderNode = document.querySelector('.main-slider');

	const swiper = new Swiper(sliderNode, {
		effect: "coverflow",
		grabCursor: true,
		speed: 700,
		spaceBetween: 20,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			el: sliderNode.parentElement.querySelector('.slider-pagination'),
			clickable: true,
		}
	});
}

// products slider	
if (isElem('.products-slider')) {
	const $sliderNodes = document.querySelectorAll('.products-slider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			//loop: true,
			grabCursor: true,
			loopAdditionalSlides: 1,
			slidesPerView: 'auto',
			spaceBetween: 30,
			noSwipingClass: 'product-card__bottom',
			watchSlidesProgress: true,
			watchOverflow: true,
			breakpoints: {
				300: {
					spaceBetween: 20,
				},
				769: {
					spaceBetween: 30,
				},
				1025: {
					spaceBetween: 25,
				},
				1231: {
					spaceBetween: 40,
				}
			},
			pagination: {
				el: $sliderNode.parentElement.querySelector('.slider-pagination'),
				clickable: true,
			}
		});
	}
}

if (isElem('.img-slider')) {
	const $sliderNodes = document.querySelectorAll('.img-slider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			pagination: {
				el: $sliderNode.parentElement.querySelector('.slider-pagination'),
				type: "fraction",
			},
			navigation: {
				nextEl: $sliderNode.parentElement.querySelector('.slider-arr--next'),
				prevEl: $sliderNode.parentElement.querySelector('.slider-arr--prev'),
			}
		});
	}
}

// heading slider	
if (isElem('.hiding-slider')) {
	const $sliderNodes = document.querySelectorAll('.hiding-slider');

	for (let $sliderNode of $sliderNodes) {
		const swiper = new Swiper($sliderNode, {
			loopAdditionalSlides: 1,
			noSwipingClass: 'btn-go',
			watchSlidesProgress: true,
			watchOverflow: true,
			dynamicBullets: true,
			breakpoints: {
				300: {
					slidesPerView: 'auto',
					spaceBetween: 23,
				},
				[breakPoint.table + 1]: {
					slidesPerView: 3,
					spaceBetween: 30,
					grabCursor: true,
				},
				[breakPoint.desctopMin + 1]: {
					grabCursor: false,
					slidesPerView: 3,
					spaceBetween: 30,
				},
				[breakPoint.desctopMid + 1]: {
					slidesPerView: 3,
					spaceBetween: 43,
				}
			},
		});
	}
}

//production slider	
if (isElem('.image-slider')) {
	const sliderClass = '.image-slider'
	const productionSilderContainer = document.querySelector(sliderClass);

	const productionSlider = new Swiper(productionSilderContainer, {
		slidesPerView: 1,
		spaceBetween: 35,
		dynamicBullets: true,

		breakpoints: {
			320: {
				spaceBetween: 29,
				slidesPerGroup: 1,
				slidesPerView: 1,
			},
			701: {
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 25,
			},
			[breakPoint.table + 1]: {
				slidesPerGroup: 3,
				slidesPerView: 3,
				spaceBetween: 30,
				height: 2000,
			}
		},

		navigation: {
			nextEl: `${sliderClass}-wrap .slider-arr--next`,
			prevEl: `${sliderClass}-wrap .slider-arr--prev`,
		},

		pagination: {
			el: `${sliderClass}-wrap .slider-pagination`,
			clickable: true,
		}
	})

	productionSlider.on('resize', productionSlider.update);
}

//fullscreen slider	
if (isElem('.full-screen-slider')) {
	const sliderClass = '.full-screen-slider'
	const $sliderEl = document.querySelector(sliderClass);

	let swiper = new Swiper($sliderEl, {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 100,
		dynamicBullets: true,
		autoHeight: true,
		pagination: {
			el: `${sliderClass}-wrap .slider-pagination`,
			clickable: true,
		}
	});
}

// advantages slider
if (isElem('.slider-sm')) {
	const $sliderNodes = document.querySelectorAll('.slider-sm');

	for (const $slider of $sliderNodes) {
		const swiper = new Swiper($slider, {
			slidesPerView: 1,
			spaceBetween: 200,
			autoHeight: true,
			breakpoints: {
				320: {
					grabCursor: true,
					enabled: true,
					spaceBetween: 200,
				},
				[breakPoint.mobile + 1]: {
					enabled: false,
					spaceBetween: 0,
				}
			},
			pagination: {
				el: $slider.parentElement.querySelector('.slider-pagination'),
				clickable: true,
			},
		})
	}
}

//fullscreen slider	
if (isElem('.content-img-slider')) {
	const sliderClass = '.content-img-slider'
	const $sliderEls = document.querySelectorAll(sliderClass);

	for (const $sliderEl of $sliderEls) {
		let swiper = new Swiper($sliderEl, {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,

			pagination: {
				el: $sliderEl.parentElement.querySelector(`.slider-pagination`),
				clickable: true,
			}
		});
	}
}

// js-incomplete-list
if (isElem('.compatibility-b__list.js-incomplete-list')) {
	const listItems = document.querySelectorAll('.compatibility-b__list.js-incomplete-list');

	for (const $item of listItems) {
		incompleteList($item, {
			btnClasses: "compatibility-b__toggle",
			positionToggle: 'inside',
			moreBtnContent: `
				<span>
					Еще
				</span>
				${toSvgToggle()}
			`,
			lessBtnContent: `
				<span>
					Скрыть
				</span>
				${toSvgToggle()}
			`,
		});
	}

	function toSvgToggle() {
		return `
				<svg svg viewBox = "0 0 44 26" xmlns = "http://www.w3.org/2000/svg" >
					<path d="M22.0001 25.2867C22.7727 25.2867 23.5452 24.9917 24.1343 24.4029L42.6703 5.86673C43.8494 4.6876 43.8494 2.77584 42.6703 1.59719C41.4916 0.418532 39.5802 0.418532 38.401 1.59719L22.0001 17.999L5.59914 1.59776C4.42001 0.419108 2.50882 0.419109 1.33026 1.59776C0.150555 2.77642 0.150555 4.68818 1.33026 5.86731L19.866 24.4035C20.4553 24.9924 21.2278 25.2867 22.0001 25.2867Z" fill="inherit" />
				</svg>
				`
	}
}

// number slider
if (isElem('.number-slider')) {
	const numberSliders = document.querySelectorAll('.number-slider');

	for (const slider of numberSliders) {
		numberSlider(slider);
	}
}

// gallery slider	
if (isElem('.gallery')) {
	const $galleries = document.querySelectorAll('.gallery');

	for (const $gallery of $galleries) {
		gallery($gallery);
	}
}


/****** CUSTOM PLUGIN ******/

//fixed header
if (isElem('header')) {
	let fixedHeader = showHeader('header');

	function showHeader(el) {
		const $el = (typeof el === 'string') ? document.querySelector(el) : el;
		const htmlEl = document.documentElement;
		let offsetTopEl = $el.offsetHeight;
		let isFixed = false;

		window.addEventListener('scroll', function () {
			if (window.pageYOffset > offsetTopEl + 40) {
				show();
			} else if (window.pageYOffset < offsetTopEl / 2) {
				fixed();
			}
		}, {})

		window.addEventListener('resize', function () {
			offsetTopEl = $el.offsetHeight;
		})

		function show() {
			if (isFixed) return;

			htmlEl.style.paddingTop = $el.offsetHeight + "px";
			$el.classList.add('fixed');
			isFixed = true;
		}

		function fixed() {
			if (!isFixed) return;

			$el.classList.remove('fixed');
			htmlEl.style.paddingTop = '';
			isFixed = false;
		}

		return {
			show,
			fixed,
		}
	}
}

//Hamburger открытия мобильного меню
if (isElem('.header__hamburger')) {

	const hamburgerClassName = '.header__hamburger';
	const burgerBlockClassName = '.header__burger';
	const burgerInnerClassName = '.header__burger-inner';
	const $body = document.querySelector('body');
	const $header = document.querySelector('header');
	const $hamburger = document.querySelector(hamburgerClassName);
	const $burgerBlock = document.querySelector(burgerBlockClassName);
	const $burgerInner = document.querySelector(burgerInnerClassName);

	document.addEventListener('click', function (e) {
		if (e.target.closest(hamburgerClassName)) {
			const offsetRight = window.innerWidth - $body.offsetWidth;
			$hamburger.classList.toggle('active');

			let isActive = $hamburger.classList.contains('active');
			$burgerBlock.classList[isActive ? 'add' : 'remove']('open');
			$burgerBlock.style.maxHeight = (isActive) ? `calc(100vh - ${$header.offsetHeight}px)` : '';
			$body.style.overflow = (isActive) ? 'hidden' : '';
		} else if ($burgerBlock.classList.contains('open') && !e.target.closest(burgerBlockClassName)) {
			$hamburger.classList.remove('active');
			$burgerBlock.classList.remove('open');
			$body.style.overflow = '';
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 1230 && $burgerBlock.classList.contains('open')) {
			$hamburger.classList.remove('active');
			$burgerBlock.classList.remove('open');
			$body.style.overflow = '';
			document.documentElement.style.paddingRight = '';
		}
	});
}

// search
if (isElem('[data-search-toggle]') && isElem('[data-search-panel]')) {
	const panelSelector = '[data-search-panel]';
	const searchBtnSelector = '[data-search-toggle]';
	const closePanelSelector = '[data-search-close]';
	const $searchPanel = document.querySelector(panelSelector);
	const $searchInput = $searchPanel.querySelector('.search__input');
	const toggleClass = 'open';

	document.addEventListener('click', function (e) {
		if (e.target.closest(searchBtnSelector)) {
			$searchPanel.classList.toggle(toggleClass);
			$searchInput.focus();
		}
		else if (e.target.closest(closePanelSelector)
			|| (!e.target.closest(panelSelector) && $searchPanel.classList.contains(toggleClass))) {
			$searchPanel.classList.remove(toggleClass);
		}
	})
}

// под меню с гамбургером внутри основного меню
if (isElem('.menu__item--drop')) {
	const menuDrop = document.querySelector('.menu__item--drop');
	const toggle = menuDrop.querySelector('.menu__item-toggle');
	const linkbtn = menuDrop.querySelector('.menu__item-toggle ~ .menu__link');
	const itemMenuList = document.querySelectorAll('.menu__item:not(.menu__item--drop)');


	toggle.addEventListener('click', function () {
		toggle.classList.toggle('active');
		menuDrop.classList.toggle('active');
	});

	linkbtn.addEventListener('click', function () {
		toggle.classList.toggle('active');
		menuDrop.classList.toggle('active');
	});

	document.addEventListener('click', function (ev) {
		if (!ev.target.closest('.menu__item--drop')) {
			if (menuDrop.classList.contains('active')) {
				toggle.classList.remove('active');
				menuDrop.classList.remove('active');
			}
		}
	})
}

// bTabs
if (isElem('.b-tabs')) {
	const tabs = document.querySelectorAll('.b-tabs');

	for (const tab of tabs) {

		bTabs(tab);
	}
}

// window modal
if (isElem('.v-modal')) {
	modalWindow();
}

// js-selection-scrollable
(function () {
	if (isElem('.js-selection-brand')) {

		const select = document.querySelector('.js-selection-brand');
		const btn = document.querySelector('.js-selection-action');
		const tableBlockWrap = document.querySelector('.js-brand-tables');
		const tableBlocks = tableBlockWrap.querySelectorAll('.js-brand-tables > *');

		for (const block of tableBlocks) {
			block.classList.add('hidden');
		}

		btn.addEventListener('click', function () {
			if (select.value === '') return false;

			const hash = '#' + select.value;
			const section = tableBlockWrap.querySelector(hash);

			for (const block of tableBlocks) {
				block.classList.add('hidden');
			}

			if (!section) return;

			section.classList.remove('hidden');
		})
	}
}());

// v-up кнопка вверх
(function () {
	document.querySelector('body').insertAdjacentHTML('afterbegin', `
		<div class="v-up"></div>
	`);

	const btnDown = document.querySelector('.v-up');
	let vUpTriggerTimer = 0;

	vUp(btnDown, getScroledWindow);

	btnDown.addEventListener('click', function () {
		scrollingWindow.startAmimationScroll(1);
	});

	window.addEventListener('scroll', function () {
		clearTimeout(vUpTriggerTimer);
		vUpTriggerTimer = setTimeout(() => {
			vUp(btnDown, getScroledWindow);
		}, 200)
	});

	//пролистываине окна вверх при клике на кнопку
	function vUp(btn, scroled) {
		if (scroled() > (window.innerHeight / 2)) {
			btn.classList.add('active');
		} else if (scroled() < (window.innerHeight / 2) || btn.classList.contains('active')) {
			btn.classList.remove('active');
		}
	}

	//на сколько прокручено окно
	function getScroledWindow() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
}());

//video
(function () {
	findVideos();

	function findVideos() {
		let videos = document.querySelectorAll('.video');

		for (let i = 0; i < videos.length; i++) {
			setupVideo(videos[i]);
		}
	}

	// ленивая загрузка видео 
	function setupVideo(video) {
		let link = video.querySelector('.video__link');
		const hrefLink = link.href;
		let media = video.querySelector('.video__media');
		let button = video.querySelector('.video__button');
		let deletedLength = 'https://youtu.be/'.length;
		let videoId = hrefLink.substring(deletedLength, hrefLink.length);
		let youtubeImgSrc = 'https://i.ytimg.com/vi/' + videoId + '/maxresdefault.jpg';

		media.src = youtubeImgSrc;
		video.addEventListener('click', () => {
			let iframe = createIframe(videoId);

			link.remove();
			button.remove();
			video.appendChild(iframe);
		});

		link.removeAttribute('href');
		video.classList.add('video--enabled');
	}

	function createIframe(id) {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write;');
		iframe.setAttribute('src', generateURL(id));
		iframe.classList.add('video__media');

		return iframe;
	}

	function generateURL(id) {
		let query = '?rel=0&showinfo=1&autoplay=1';

		return 'https://www.youtube.com/embed/' + id + query;
	}
}());

/***** FUNCTION PLUGIN ******/

//	modal window
function modalWindow() {
	const body = document.querySelector('body'),
		modalEls = document.querySelectorAll('.v-modal'),
		btnOpenClassName = "js-openModal",
		btnCloseClassName = 'js-closeModal';

	document.addEventListener('click', function (e) {
		if (e.target.closest(`.${btnOpenClassName}`) && e.target.dataset.typeModal) {
			e.preventDefault();
			const typeModal = e.target.dataset['typeModal'];

			for (let $modal of modalEls) {

				if ($modal.dataset && $modal.dataset['typeModal'] === typeModal) {
					$modal.classList.add('active');

					e.preventDefault();
					const scrollBarWidth = window.innerWidth - body.offsetWidth;
					body.style.overflow = 'hidden';
					body.style.paddingRight = scrollBarWidth + "px";
					break;
				}
			}
		}
		else if (e.target.classList.contains('v-modal__inner') || e.target.closest(`.${btnCloseClassName}`)) {
			e.target.closest('.v-modal').classList.remove('active');
			body.style.overflow = '';
			body.style.paddingRight = "";
		}
	});
}

// Меню дерево, применятся непосредственно 
// на DOM эелементе ul
// function treeeMenu(selector) {
// 	const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
// 	const isAccordionType = $el.dataset.typeMenu === 'accordion';
// 	const openItemClass = 'js-tree-menu__item--open';

// 	const setings = {
// 		openItemClass: 'js-tree-menu__item--open',
// 		openSelector: '.js-tree-menu__btn'
// 	}

// 	$el.onclick = function (e) {
// 		const $btn = e.target.closest(setings.openSelector);

// 		if (!$btn) return;

// 		let $parentElement = $btn.closest('li');
// 		let $childrenContainer = $parentElement.querySelector('ul');

// 		if (!$childrenContainer) return;

// 		const isOpenCurrentItem = $parentElement.classList.contains(setings.openItemClass);

// 		if (!isOpenCurrentItem && $el.querySelector('.js-tree-menu__item--open')) {
// 			$el.querySelector('.js-tree-menu__item--open').classList.remove('js-tree-menu__item--open');
// 			$el.querySelector('.js-tree-menu__btn.active').classList.remove('active');
// 		}

// 		$parentElement.classList[isOpenCurrentItem ? 'remove' : 'add'](setings.openItemClass);
// 		$btn.classList[isOpenCurrentItem ? 'remove' : 'add']('active');
// 		$childrenContainer.style.minHeight = !isOpenCurrentItem ? $childrenContainer.scrollHeight + "px" : "";
// 	}
// }

let treeMenu = (function () {
	let $menus = document.querySelectorAll('.js-tree-menu');

	for (let i = 0; i < $menus.length; i++) {
		setupTreeMenu($menus[i]);
	}

	function setupTreeMenu(selector, options = {}) {
		const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
		let opens = false;
		const isAccordionType = $el.dataset.typeMenu === 'accordion';

		const setings = {
			openItemClass: 'js-tree-menu__item--open',
			openSelector: '.js-tree-menu__btn'
		}

		let $mobileCloseItem = $el.querySelectorAll('.js-tree-menu__item--mobile-close');

		for (let openItem of document.getElementsByClassName(setings.openItemClass)) {
			const $childrenUl = openItem.querySelector('ul');
			$childrenUl.style.height = 'auto';
			$childrenUl.style.minHeight = 'auto';
		}

		$el.addEventListener('click', function (e) {
			const $btn = e.target.closest(setings.openSelector);
			if (!$btn || opens) return;

			let $parentElement = $btn.closest('li');
			let $childrenContainer = $parentElement.querySelector('ul');

			if (!$childrenContainer) return;

			opens = true;
			const isOpenItem = $parentElement.classList.contains(setings.openItemClass);

			if (isAccordionType && window.matchMedia(`(min-width: 1450px)`).matches) {
				let activeThisLevelEl = $parentElement.parentElement.querySelector('.js-tree-menu__item--open');

				if (activeThisLevelEl) {
					const childrenUl = activeThisLevelEl.querySelector('ul');
					activeThisLevelEl.classList.remove('js-tree-menu__item--open');

					childrenUl.style.height = '';
				}
			}

			// if (!isAccordionType && $el.querySelector('.js-tree-menu__item--open')) {
			// 	$el.querySelector('.js-tree-menu__item--open').classList.remove('js-tree-menu__item--open');
			// 	$el.querySelector('.js-tree-menu__btn.active').classList.remove('active');
			// }

			$parentElement.classList[isOpenItem ? 'remove' : 'add'](setings.openItemClass);
			$childrenContainer.style.minHeight = isOpenItem ? $childrenContainer.scrollHeight + "px" : "";
			setTimeout(function () {
				$childrenContainer.style.minHeight = !isOpenItem ? $childrenContainer.scrollHeight + "px" : "";
			}, 10)

			if (isOpenItem) {
				$childrenContainer.style.height = '';
				opens = false;
			} else {
				setTimeout(() => {
					$childrenContainer.style.height = 'auto';
					$childrenContainer.style.minHeight = 'auto';
					opens = false;
				}, 500)
			}
		})
	}
}());

// анимация скрола окна браузера
function scrollWindow() {
	if (scrollWindow.instance) {
		return func.instance;
	}

	let scrollAnimationId = 0;
	let currentScroll = window.pageYOffset;
	let scrolls = false;

	function _startAmimationScroll(newScrollY, callback) {
		if (!scrolls) {
			currentScroll = window.pageYOffset;
			scrolls = true;
		}

		scrollAnimationId++;
		const deltaScroll = (newScrollY - currentScroll);

		currentScroll += deltaScroll * 0.15;
		window.scrollTo(0, currentScroll);

		if (Math.abs(deltaScroll) > 5) {
			scrollAnimationId = window.requestAnimationFrame(function () {
				_startAmimationScroll(newScrollY);
			})
		} else {
			window.scrollTo(0, newScrollY);
			stopAnimationScroll();

			if (typeof callback === 'function') callback();
		}
	}

	function stopAnimationScroll() {
		window.cancelAnimationFrame(scrollAnimationId);
		scrollAnimationId = undefined;
		scrolls = false;
	}

	return scrollWindow.instance = {
		get scrollAnimationId() {
			return scrollAnimationId;
		},
		startAmimationScroll() {
			stopAnimationScroll();
			_startAmimationScroll.apply(this, arguments);
		},
		stopAnimationScroll,
	}
}

// number slider 
function numberSlider(selector) {
	const $el = typeof selector === 'string' ? document.querySelector(selector)
		: selector,
		$input = $el.querySelector('.js-number-slider-input'),
		minValue = +$input.getAttribute('min') || 1;

	$el.addEventListener('click', clickHander);

	function clickHander(e) {
		if (e.target.closest('.js-number-slider-add')) {
			const old = +parseFloat($input.value) + 1;
			$input.value = isFinite(old) ? old : minValue;
		} else if (e.target.closest('.js-number-slider-reduce')) {
			let oldValue = parseFloat($input.value);
			if (isNaN(oldValue)) return $input.value = minValue;
			$input.value = (oldValue - 1 <= minValue) ? minValue : --oldValue;
		}
	}
}

// incomplete list
function incompleteList(selector, options) {
	let $el = (typeof selector === 'string') ? document.querySelector(selector) : selector,
		$hiddenEls,
		$toggle,
		visibleCount;

	const baseClass = 'js-incomplete';
	const listClass = baseClass + '-list';
	const itemClass = baseClass + '-item';
	const expandedListClass = listClass + '--expanded';
	const hiddenItemClass = itemClass + '--hide';
	const btnToggleClass = baseClass + '-toggle';
	const btnToggleMoreClass = btnToggleClass + '--more';

	const settings = {
		visibleBlocks: 8,
		positionToggle: 'outside',
		moreBtnContent: "Показать все",
		lessBtnContent: "Скрыть",
	}

	Object.assign(settings, options);

	visibleCount = $el.dataset.incompleteNum || settings.visibleBlocks;

	if ($el.children.length <= +visibleCount) return false;

	$hiddenEls = Array.from($el.children).filter(($item, idx) => {
		$item.classList.add(itemClass);
		if (idx > visibleCount - 1) {
			$item.classList.add(hiddenItemClass);
			return $item;
		}
	});

	$toggle = document.createElement('button');
	$toggle.innerHTML = settings.moreBtnContent;
	$toggle.className = btnToggleClass + " " + btnToggleMoreClass;

	if (typeof settings.btnClasses === 'string') {
		$toggle.className = settings.btnClasses + " " + $toggle.className;
	}

	if (settings.positionToggle === 'inside') {
		$el.insertAdjacentElement('beforeend', $toggle);
	} else {
		$el.insertAdjacentElement('aftereend', $toggle);
	}

	$toggle.addEventListener('click', function (e) {
		if ($el.classList.contains(expandedListClass)) {
			$toggle.classList.add(btnToggleMoreClass);
			$el.classList.remove(expandedListClass);
			$hiddenEls.map(item => { item.classList.add(hiddenItemClass) });
			$toggle.innerHTML = settings.moreBtnContent;
		} else {
			$toggle.classList.remove(btnToggleMoreClass);
			$el.classList.add(expandedListClass);
			$hiddenEls.map(item => { item.classList.remove(hiddenItemClass) });
			$toggle.innerHTML = settings.lessBtnContent;
		}
	});
}

// bTabs
function bTabs(target) {
	let _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
		_eventTabsShow,
		_showTab = function (tabsLinkTarget) {
			var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
			tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
			tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.b-tabs__link.active');
			tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.b-tabs__pane.active');
			// если следующая вкладка равна активной, то завершаем работу
			if (tabsLinkTarget === tabsLinkActive) return;
			// удаляем классы у текущих активных элементов
			if (tabsLinkActive !== null) tabsLinkActive.classList.remove('active');

			if (tabsPaneShow !== null) tabsPaneShow.classList.remove('active');
			// добавляем классы к элементам (в завимости от выбранной вкладки)
			tabsLinkTarget.classList.add('active');
			tabsPaneTarget.classList.add('active');
			document.dispatchEvent(_eventTabsShow);
		},
		_switchTabTo = function (tabsLinkIndex) {
			var tabsLinks = _elemTabs.querySelectorAll('.b-tabs__link');
			if (tabsLinks.length > 0) {
				if (tabsLinkIndex > tabsLinks.length) {
					tabsLinkIndex = tabsLinks.length;
				} else if (tabsLinkIndex < 1) {
					tabsLinkIndex = 1;
				}
				_showTab(tabsLinks[tabsLinkIndex - 1]);
			}
		};

	_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

	_elemTabs.addEventListener('click', function (e) {
		var tabsLinkTarget = e.target;
		// завершаем выполнение функции, если кликнули не по ссылке
		if (!tabsLinkTarget.classList.contains('b-tabs__link')) return;

		e.preventDefault();
		_showTab(tabsLinkTarget);
	});

	return {
		showTab: function (target) {
			_showTab(target);
		},
		switchTabTo: function (index) {
			_switchTabTo(index);
		}
	}

};

function gallery(selector) {
	const $gallery = (typeof selector === 'string') ? document.querySelector(selector) : selector;

	const $thumbsSlider = $gallery.querySelector('.gallery__thumbs'),
		$fullSlider = $gallery.querySelector('.gallery__slider');


	/* thumbs */
	let galleryThumbs = new Swiper($thumbsSlider, {
		spaceBetween: 20,
		slidesPerView: "auto",
		watchSlidesProgress: true,
		freeMode: {
			enabled: true,
			sticky: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		mousewheel: true,
	});

	let galleryFull = new Swiper($fullSlider, {
		spaceBetween: 10,
		slidesPerView: "auto",
		// autoplay: {
		// 	delay: 5000
		// },
		navigation: {
			prevEl: $fullSlider.parentElement.querySelector('.slider-arr--prev'),
			nextEl: $fullSlider.parentElement.querySelector('.slider-arr--next'),
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});
}

// fixed block
function fixedBlock(selector, option = {}) {
	const $el = (typeof selector === "string") ? document.querySelector(selector)
		: selector;
	let $offsetParent = null;
	const $header = document.querySelector('.header');
	let heightHeader = $header.offsetHeight;

	let pointonYpositioning = 0;
	let topPosEl, widthEl = null;

	const parametrs = {
		init() {
			$el.style.top = `${heightHeader + 30}px`;
			// $offsetParent = $el.offsetParent;

			// if (!$offsetParent) return;

			// topPosEl = _getTopOffset($el); // начальное положение сверху относительно страницы
			// widthEl = $offsetParent.clientWidth;
			// headerHeight = $header.offsetHeight;

			// scrollingHandler();
			// window.addEventListener('resize', resizingHandler);
			window.addEventListener('scroll', scrollingHandler);
		},

		destroy() {
			// window.removeEventListener('resize', resizingHandler);
			window.removeEventListener('scroll', scrollingHandler);

			// pointonYpositioning = 0;
			// topPosEl, widthEl, headerHeight = null;

			// if ($offsetParent.classList.contains('is-fixed')) $offsetParent.classList.remove('is-fixed')
			// $el.classList.contains('positioned');
			// $el.className = $el.className.replace(/fixed|positioned/g, '');
			// $el.style.cssText = '';
		}
	}

	function resizingHandler(e) {
		widthEl = $offsetParent.clientWidth;
		headerHeight = $header.offsetHeight;

		$el.style.cssText = `
			width: ${widthEl}px;
		`;

		scrollingHandler();
	}

	function scrollingHandler() {
		if (heightHeader == $header.offsetHeight) return;
		heightHeader = $header.offsetHeight;
		$el.style.top = `${heightHeader + 30}px`;
		// if (topPosEl < (window.pageYOffset + headerHeight)) {

		// 	if (!$offsetParent.classList.contains('is-fixed')) {
		// 		$el.style.cssText = `
		// 			top: ${headerHeight}px;
		// 			width: ${widthEl}px;
		// 		`;

		// 		$offsetParent.classList.add('is-fixed');
		// 		$el.classList.add('fixed');
		// 	}

		// 	if (_getTopOffsetFromBottom($el) > _getTopOffsetFromBottom($offsetParent)) {
		// 		if (($el.classList.contains('positioned'))) return;
		// 		pointonYpositioning = window.pageYOffset;

		// 		$el.classList.add('positioned');
		// 		$el.classList.remove('fixed');

		// 		$el.style.cssText = `
		// 			position: absolute;
		// 			top: auto;
		// 			bottom: 0px;
		// 			width: ${widthEl}px;
		// 		`;
		// 	} else if ($el.classList.contains('positioned') && window.pageYOffset <= pointonYpositioning) {
		// 		$el.classList.remove('positioned')
		// 		$el.classList.add('fixed');
		// 		$el.style.cssText = `
		// 			top: ${headerHeight}px;
		// 			width: ${widthEl}px;
		// 		`;
		// 	}

		// } else if ($offsetParent.classList.contains('is-fixed')) {
		// 	$el.classList.remove('fixed');
		// 	$offsetParent.classList.remove('is-fixed');
		// }
	}

	function _getTopOffset(e) {
		var y = 0;
		do { y += e.offsetTop; } while (e = e.offsetParent);
		return y;
	}

	function _getTopOffsetFromBottom($el) {
		return $el.getBoundingClientRect().bottom;
	}

	return parametrs
}

/****** UTILS ******/
function isElem(selector) {
	return (document.querySelector(selector)) ? true : false;
}

function _throttle(func, ms = 100) {
	let locked = false;

	return function () {
		if (locked) return;

		const context = this;
		const args = arguments;
		locked = true;

		setTimeout(() => {
			func.apply(context, args);
			locked = false;
		}, ms)
	}
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gYnJlYWsgcG9pbnRzIHNpdGVcclxuY29uc3QgYnJlYWtQb2ludCA9IHtcclxuXHRkZXNjdG9wOiAxOTIwLFxyXG5cdGRlc2N0b3BNaWQ6IDE0NTAsXHJcblx0ZGVzY3RvcE1pbjogMTIzMCxcclxuXHR0YWJsZTogMTAyNCxcclxuXHRtb2JpbGU6IDc2OCxcclxuXHR0ZWw6IDQ4MCxcclxufVxyXG5cclxuLyoqKioqIElOSVRJQUxJWklORyBQTFVHSU5TICoqKioqKi9cclxuaWYgKGlzRWxlbSgnLmZpeGJsb2NrJykpIHtcclxuXHRjb25zdCBmaXhibG9ja05vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpeGJsb2NrJyk7XHJcblx0Y29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke2JyZWFrUG9pbnQudGFibGV9cHgpYCk7XHJcblxyXG5cdGZvciAoY29uc3QgZml4YmxvY2sgb2YgZml4YmxvY2tOb2Rlcykge1xyXG5cdFx0bGV0IGEgPSBmaXhlZEJsb2NrKGZpeGJsb2NrKTtcclxuXHRcdGxldCBpc0luaXQgPSBmYWxzZTtcclxuXHJcblx0XHRtZWRpYUhhbmRsZXIoKTtcclxuXHJcblx0XHRtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKG1lZGlhSGFuZGxlcik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWVkaWFIYW5kbGVyKCkge1xyXG5cdFx0XHRpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcblx0XHRcdFx0YS5pbml0KCk7XHJcblx0XHRcdFx0aXNJbml0ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc0luaXQpIHtcclxuXHRcdFx0XHRhLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5pZiAod2luZG93LiQgJiYgdHlwZW9mIHdpbmRvdy4kLmZuLmN1c3RvbVNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdCQoJ3NlbGVjdCcpLmN1c3RvbVNlbGVjdCgpO1xyXG59XHJcblxyXG4vLyDRgdC60YDQvtC7INGB0YLRgNCw0L3QuNGG0Ysg0Log0L3Rg9C20L3QvtC5INC60L7QvtGA0LTQuNC90LDRgtC1XHJcbmxldCBzY3JvbGxpbmdXaW5kb3cgPSBzY3JvbGxXaW5kb3coKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnNjcm9sbC10b1tocmVmKj1cIiNcIl0nKSkge1xyXG5cdFx0Y29uc3QgbGluayA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zY3JvbGwtdG9baHJlZio9XCIjXCJdJyk7XHJcblx0XHRjb25zdCBpZCA9IGxpbmsuaGFzaDtcclxuXHRcdGNvbnN0ICRzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XHJcblxyXG5cdFx0aWYgKCEkc2VjdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cdFx0bGV0IGNvb3Jkc1NlY3Rpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQgKyAkc2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG5cdFx0Y29vcmRzU2VjdGlvbiA9IGNvb3Jkc1NlY3Rpb24gLSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRzY3JvbGxpbmdXaW5kb3cuc3RhcnRBbWltYXRpb25TY3JvbGwoY29vcmRzU2VjdGlvbik7XHJcblx0fVxyXG59KVxyXG5cclxuLy8gXHRtYWluIHNsaWRlciBcclxuaWYgKGlzRWxlbSgnLm1haW4tc2xpZGVyJykpIHtcclxuXHRjb25zdCBzbGlkZXJOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2xpZGVyJyk7XHJcblxyXG5cdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoc2xpZGVyTm9kZSwge1xyXG5cdFx0ZWZmZWN0OiBcImNvdmVyZmxvd1wiLFxyXG5cdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdHNwZWVkOiA3MDAsXHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0Y292ZXJmbG93RWZmZWN0OiB7XHJcblx0XHRcdHJvdGF0ZTogNTAsXHJcblx0XHRcdHN0cmV0Y2g6IDAsXHJcblx0XHRcdGRlcHRoOiAxMDAsXHJcblx0XHRcdG1vZGlmaWVyOiAxLFxyXG5cdFx0XHRzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBwcm9kdWN0cyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcucHJvZHVjdHMtc2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdHMtc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHQvL2xvb3A6IHRydWUsXHJcblx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdG5vU3dpcGluZ0NsYXNzOiAncHJvZHVjdC1jYXJkX19ib3R0b20nLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2OToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEwMjU6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMjMxOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDQwLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoaXNFbGVtKCcuaW1nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHR0eXBlOiBcImZyYWN0aW9uXCIsXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdFx0XHRwcmV2RWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBoZWFkaW5nIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5oaWRpbmctc2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlkaW5nLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0bG9vcEFkZGl0aW9uYWxTbGlkZXM6IDEsXHJcblx0XHRcdG5vU3dpcGluZ0NsYXNzOiAnYnRuLWdvJyxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQudGFibGUgKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQuZGVzY3RvcE1pbiArIDFdOiB7XHJcblx0XHRcdFx0XHRncmFiQ3Vyc29yOiBmYWxzZSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQuZGVzY3RvcE1pZCArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0MyxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vcHJvZHVjdGlvbiBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaW1hZ2Utc2xpZGVyJykpIHtcclxuXHRjb25zdCBzbGlkZXJDbGFzcyA9ICcuaW1hZ2Utc2xpZGVyJ1xyXG5cdGNvbnN0IHByb2R1Y3Rpb25TaWxkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNsYXNzKTtcclxuXHJcblx0Y29uc3QgcHJvZHVjdGlvblNsaWRlciA9IG5ldyBTd2lwZXIocHJvZHVjdGlvblNpbGRlckNvbnRhaW5lciwge1xyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMzUsXHJcblx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDI5LFxyXG5cdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdH0sXHJcblx0XHRcdDcwMToge1xyXG5cdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNSxcclxuXHRcdFx0fSxcclxuXHRcdFx0W2JyZWFrUG9pbnQudGFibGUgKyAxXToge1xyXG5cdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRoZWlnaHQ6IDIwMDAsXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRuZXh0RWw6IGAke3NsaWRlckNsYXNzfS13cmFwIC5zbGlkZXItYXJyLS1uZXh0YCxcclxuXHRcdFx0cHJldkVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLWFyci0tcHJldmAsXHJcblx0XHR9LFxyXG5cclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IGAke3NsaWRlckNsYXNzfS13cmFwIC5zbGlkZXItcGFnaW5hdGlvbmAsXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHRwcm9kdWN0aW9uU2xpZGVyLm9uKCdyZXNpemUnLCBwcm9kdWN0aW9uU2xpZGVyLnVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vZnVsbHNjcmVlbiBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuZnVsbC1zY3JlZW4tc2xpZGVyJykpIHtcclxuXHRjb25zdCBzbGlkZXJDbGFzcyA9ICcuZnVsbC1zY3JlZW4tc2xpZGVyJ1xyXG5cdGNvbnN0ICRzbGlkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ2xhc3MpO1xyXG5cclxuXHRsZXQgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyRWwsIHtcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAxMDAsXHJcblx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLXBhZ2luYXRpb25gLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGFkdmFudGFnZXMgc2xpZGVyXHJcbmlmIChpc0VsZW0oJy5zbGlkZXItc20nKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItc20nKTtcclxuXHJcblx0Zm9yIChjb25zdCAkc2xpZGVyIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMjAwLFxyXG5cdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50Lm1vYmlsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRlbmFibGVkOiBmYWxzZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fVxyXG59XHJcblxyXG4vL2Z1bGxzY3JlZW4gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmNvbnRlbnQtaW1nLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmNvbnRlbnQtaW1nLXNsaWRlcidcclxuXHRjb25zdCAkc2xpZGVyRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzbGlkZXJDbGFzcyk7XHJcblxyXG5cdGZvciAoY29uc3QgJHNsaWRlckVsIG9mICRzbGlkZXJFbHMpIHtcclxuXHRcdGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJFbCwge1xyXG5cdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXJFbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zbGlkZXItcGFnaW5hdGlvbmApLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBqcy1pbmNvbXBsZXRlLWxpc3RcclxuaWYgKGlzRWxlbSgnLmNvbXBhdGliaWxpdHktYl9fbGlzdC5qcy1pbmNvbXBsZXRlLWxpc3QnKSkge1xyXG5cdGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYXRpYmlsaXR5LWJfX2xpc3QuanMtaW5jb21wbGV0ZS1saXN0Jyk7XHJcblxyXG5cdGZvciAoY29uc3QgJGl0ZW0gb2YgbGlzdEl0ZW1zKSB7XHJcblx0XHRpbmNvbXBsZXRlTGlzdCgkaXRlbSwge1xyXG5cdFx0XHRidG5DbGFzc2VzOiBcImNvbXBhdGliaWxpdHktYl9fdG9nZ2xlXCIsXHJcblx0XHRcdHBvc2l0aW9uVG9nZ2xlOiAnaW5zaWRlJyxcclxuXHRcdFx0bW9yZUJ0bkNvbnRlbnQ6IGBcclxuXHRcdFx0XHQ8c3Bhbj5cclxuXHRcdFx0XHRcdNCV0YnQtVxyXG5cdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQke3RvU3ZnVG9nZ2xlKCl9XHJcblx0XHRcdGAsXHJcblx0XHRcdGxlc3NCdG5Db250ZW50OiBgXHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHTQodC60YDRi9GC0YxcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0JHt0b1N2Z1RvZ2dsZSgpfVxyXG5cdFx0XHRgLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0b1N2Z1RvZ2dsZSgpIHtcclxuXHRcdHJldHVybiBgXHJcblx0XHRcdFx0PHN2ZyBzdmcgdmlld0JveCA9IFwiMCAwIDQ0IDI2XCIgeG1sbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgPlxyXG5cdFx0XHRcdFx0PHBhdGggZD1cIk0yMi4wMDAxIDI1LjI4NjdDMjIuNzcyNyAyNS4yODY3IDIzLjU0NTIgMjQuOTkxNyAyNC4xMzQzIDI0LjQwMjlMNDIuNjcwMyA1Ljg2NjczQzQzLjg0OTQgNC42ODc2IDQzLjg0OTQgMi43NzU4NCA0Mi42NzAzIDEuNTk3MTlDNDEuNDkxNiAwLjQxODUzMiAzOS41ODAyIDAuNDE4NTMyIDM4LjQwMSAxLjU5NzE5TDIyLjAwMDEgMTcuOTk5TDUuNTk5MTQgMS41OTc3NkM0LjQyMDAxIDAuNDE5MTA4IDIuNTA4ODIgMC40MTkxMDkgMS4zMzAyNiAxLjU5Nzc2QzAuMTUwNTU1IDIuNzc2NDIgMC4xNTA1NTUgNC42ODgxOCAxLjMzMDI2IDUuODY3MzFMMTkuODY2IDI0LjQwMzVDMjAuNDU1MyAyNC45OTI0IDIxLjIyNzggMjUuMjg2NyAyMi4wMDAxIDI1LjI4NjdaXCIgZmlsbD1cImluaGVyaXRcIiAvPlxyXG5cdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdGBcclxuXHR9XHJcbn1cclxuXHJcbi8vIG51bWJlciBzbGlkZXJcclxuaWYgKGlzRWxlbSgnLm51bWJlci1zbGlkZXInKSkge1xyXG5cdGNvbnN0IG51bWJlclNsaWRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubnVtYmVyLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGNvbnN0IHNsaWRlciBvZiBudW1iZXJTbGlkZXJzKSB7XHJcblx0XHRudW1iZXJTbGlkZXIoc2xpZGVyKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGdhbGxlcnkgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmdhbGxlcnknKSkge1xyXG5cdGNvbnN0ICRnYWxsZXJpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeScpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRnYWxsZXJ5IG9mICRnYWxsZXJpZXMpIHtcclxuXHRcdGdhbGxlcnkoJGdhbGxlcnkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbi8qKioqKiogQ1VTVE9NIFBMVUdJTiAqKioqKiovXHJcblxyXG4vL2ZpeGVkIGhlYWRlclxyXG5pZiAoaXNFbGVtKCdoZWFkZXInKSkge1xyXG5cdGxldCBmaXhlZEhlYWRlciA9IHNob3dIZWFkZXIoJ2hlYWRlcicpO1xyXG5cclxuXHRmdW5jdGlvbiBzaG93SGVhZGVyKGVsKSB7XHJcblx0XHRjb25zdCAkZWwgPSAodHlwZW9mIGVsID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xyXG5cdFx0Y29uc3QgaHRtbEVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG5cdFx0bGV0IG9mZnNldFRvcEVsID0gJGVsLm9mZnNldEhlaWdodDtcclxuXHRcdGxldCBpc0ZpeGVkID0gZmFsc2U7XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldFRvcEVsICsgNDApIHtcclxuXHRcdFx0XHRzaG93KCk7XHJcblx0XHRcdH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgb2Zmc2V0VG9wRWwgLyAyKSB7XHJcblx0XHRcdFx0Zml4ZWQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwge30pXHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0b2Zmc2V0VG9wRWwgPSAkZWwub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0fSlcclxuXHJcblx0XHRmdW5jdGlvbiBzaG93KCkge1xyXG5cdFx0XHRpZiAoaXNGaXhlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0aHRtbEVsLnN0eWxlLnBhZGRpbmdUb3AgPSAkZWwub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdFx0aXNGaXhlZCA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZml4ZWQoKSB7XHJcblx0XHRcdGlmICghaXNGaXhlZCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJyc7XHJcblx0XHRcdGlzRml4ZWQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRzaG93LFxyXG5cdFx0XHRmaXhlZCxcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vSGFtYnVyZ2VyINC+0YLQutGA0YvRgtC40Y8g0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LzQtdC90Y5cclxuaWYgKGlzRWxlbSgnLmhlYWRlcl9faGFtYnVyZ2VyJykpIHtcclxuXHJcblx0Y29uc3QgaGFtYnVyZ2VyQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2hhbWJ1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VyQmxvY2tDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyJztcclxuXHRjb25zdCBidXJnZXJJbm5lckNsYXNzTmFtZSA9ICcuaGVhZGVyX19idXJnZXItaW5uZXInO1xyXG5cdGNvbnN0ICRib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cdGNvbnN0ICRoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuXHRjb25zdCAkaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihoYW1idXJnZXJDbGFzc05hbWUpO1xyXG5cdGNvbnN0ICRidXJnZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnVyZ2VyQmxvY2tDbGFzc05hbWUpO1xyXG5cdGNvbnN0ICRidXJnZXJJbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnVyZ2VySW5uZXJDbGFzc05hbWUpO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdChoYW1idXJnZXJDbGFzc05hbWUpKSB7XHJcblx0XHRcdGNvbnN0IG9mZnNldFJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSAkYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdGxldCBpc0FjdGl2ZSA9ICRoYW1idXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdFtpc0FjdGl2ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdvcGVuJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5zdHlsZS5tYXhIZWlnaHQgPSAoaXNBY3RpdmUpID8gYGNhbGMoMTAwdmggLSAkeyRoZWFkZXIub2Zmc2V0SGVpZ2h0fXB4KWAgOiAnJztcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAoaXNBY3RpdmUpID8gJ2hpZGRlbicgOiAnJztcclxuXHRcdH0gZWxzZSBpZiAoJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpICYmICFlLnRhcmdldC5jbG9zZXN0KGJ1cmdlckJsb2NrQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHQkaGFtYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG5cdFx0XHQkYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTIzMCAmJiAkYnVyZ2VyQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9ICcnO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBzZWFyY2hcclxuaWYgKGlzRWxlbSgnW2RhdGEtc2VhcmNoLXRvZ2dsZV0nKSAmJiBpc0VsZW0oJ1tkYXRhLXNlYXJjaC1wYW5lbF0nKSkge1xyXG5cdGNvbnN0IHBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLXBhbmVsXSc7XHJcblx0Y29uc3Qgc2VhcmNoQnRuU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLXRvZ2dsZV0nO1xyXG5cdGNvbnN0IGNsb3NlUGFuZWxTZWxlY3RvciA9ICdbZGF0YS1zZWFyY2gtY2xvc2VdJztcclxuXHRjb25zdCAkc2VhcmNoUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhbmVsU2VsZWN0b3IpO1xyXG5cdGNvbnN0ICRzZWFyY2hJbnB1dCA9ICRzZWFyY2hQYW5lbC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xyXG5cdGNvbnN0IHRvZ2dsZUNsYXNzID0gJ29wZW4nO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdChzZWFyY2hCdG5TZWxlY3RvcikpIHtcclxuXHRcdFx0JHNlYXJjaFBhbmVsLmNsYXNzTGlzdC50b2dnbGUodG9nZ2xlQ2xhc3MpO1xyXG5cdFx0XHQkc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoY2xvc2VQYW5lbFNlbGVjdG9yKVxyXG5cdFx0XHR8fCAoIWUudGFyZ2V0LmNsb3Nlc3QocGFuZWxTZWxlY3RvcikgJiYgJHNlYXJjaFBhbmVsLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGVDbGFzcykpKSB7XHJcblx0XHRcdCRzZWFyY2hQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vLyDQv9C+0LQg0LzQtdC90Y4g0YEg0LPQsNC80LHRg9GA0LPQtdGA0L7QvCDQstC90YPRgtGA0Lgg0L7RgdC90L7QstC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5tZW51X19pdGVtLS1kcm9wJykpIHtcclxuXHRjb25zdCBtZW51RHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLS1kcm9wJyk7XHJcblx0Y29uc3QgdG9nZ2xlID0gbWVudURyb3AucXVlcnlTZWxlY3RvcignLm1lbnVfX2l0ZW0tdG9nZ2xlJyk7XHJcblx0Y29uc3QgbGlua2J0biA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZSB+IC5tZW51X19saW5rJyk7XHJcblx0Y29uc3QgaXRlbU1lbnVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnVfX2l0ZW06bm90KC5tZW51X19pdGVtLS1kcm9wKScpO1xyXG5cclxuXHJcblx0dG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0dG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudURyb3AuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdGxpbmtidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHR0b2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0XHRtZW51RHJvcC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcclxuXHRcdGlmICghZXYudGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19pdGVtLS1kcm9wJykpIHtcclxuXHRcdFx0aWYgKG1lbnVEcm9wLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHR0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdFx0bWVudURyb3AuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG4vLyBiVGFic1xyXG5pZiAoaXNFbGVtKCcuYi10YWJzJykpIHtcclxuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmItdGFicycpO1xyXG5cclxuXHRmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XHJcblxyXG5cdFx0YlRhYnModGFiKTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIHdpbmRvdyBtb2RhbFxyXG5pZiAoaXNFbGVtKCcudi1tb2RhbCcpKSB7XHJcblx0bW9kYWxXaW5kb3coKTtcclxufVxyXG5cclxuLy8ganMtc2VsZWN0aW9uLXNjcm9sbGFibGVcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoaXNFbGVtKCcuanMtc2VsZWN0aW9uLWJyYW5kJykpIHtcclxuXHJcblx0XHRjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VsZWN0aW9uLWJyYW5kJyk7XHJcblx0XHRjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VsZWN0aW9uLWFjdGlvbicpO1xyXG5cdFx0Y29uc3QgdGFibGVCbG9ja1dyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYnJhbmQtdGFibGVzJyk7XHJcblx0XHRjb25zdCB0YWJsZUJsb2NrcyA9IHRhYmxlQmxvY2tXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1icmFuZC10YWJsZXMgPiAqJyk7XHJcblxyXG5cdFx0Zm9yIChjb25zdCBibG9jayBvZiB0YWJsZUJsb2Nrcykge1xyXG5cdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdH1cclxuXHJcblx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChzZWxlY3QudmFsdWUgPT09ICcnKSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0XHRjb25zdCBoYXNoID0gJyMnICsgc2VsZWN0LnZhbHVlO1xyXG5cdFx0XHRjb25zdCBzZWN0aW9uID0gdGFibGVCbG9ja1dyYXAucXVlcnlTZWxlY3RvcihoYXNoKTtcclxuXHJcblx0XHRcdGZvciAoY29uc3QgYmxvY2sgb2YgdGFibGVCbG9ja3MpIHtcclxuXHRcdFx0XHRibG9jay5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCFzZWN0aW9uKSByZXR1cm47XHJcblxyXG5cdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vLyB2LXVwINC60L3QvtC/0LrQsCDQstCy0LXRgNGFXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJ2LXVwXCI+PC9kaXY+XHJcblx0YCk7XHJcblxyXG5cdGNvbnN0IGJ0bkRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudi11cCcpO1xyXG5cdGxldCB2VXBUcmlnZ2VyVGltZXIgPSAwO1xyXG5cclxuXHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblxyXG5cdGJ0bkRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRzY3JvbGxpbmdXaW5kb3cuc3RhcnRBbWltYXRpb25TY3JvbGwoMSk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodlVwVHJpZ2dlclRpbWVyKTtcclxuXHRcdHZVcFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblx0XHR9LCAyMDApXHJcblx0fSk7XHJcblxyXG5cdC8v0L/RgNC+0LvQuNGB0YLRi9Cy0LDQuNC90LUg0L7QutC90LAg0LLQstC10YDRhSDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRg1xyXG5cdGZ1bmN0aW9uIHZVcChidG4sIHNjcm9sZWQpIHtcclxuXHRcdGlmIChzY3JvbGVkKCkgPiAod2luZG93LmlubmVySGVpZ2h0IC8gMikpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIGlmIChzY3JvbGVkKCkgPCAod2luZG93LmlubmVySGVpZ2h0IC8gMikgfHwgYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly/QvdCwINGB0LrQvtC70YzQutC+INC/0YDQvtC60YDRg9GH0LXQvdC+INC+0LrQvdC+XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xlZFdpbmRvdygpIHtcclxuXHRcdHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vL3ZpZGVvXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0ZmluZFZpZGVvcygpO1xyXG5cclxuXHRmdW5jdGlvbiBmaW5kVmlkZW9zKCkge1xyXG5cdFx0bGV0IHZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlbycpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHNldHVwVmlkZW8odmlkZW9zW2ldKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vINC70LXQvdC40LLQsNGPINC30LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviBcclxuXHRmdW5jdGlvbiBzZXR1cFZpZGVvKHZpZGVvKSB7XHJcblx0XHRsZXQgbGluayA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fbGluaycpO1xyXG5cdFx0Y29uc3QgaHJlZkxpbmsgPSBsaW5rLmhyZWY7XHJcblx0XHRsZXQgbWVkaWEgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX21lZGlhJyk7XHJcblx0XHRsZXQgYnV0dG9uID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19idXR0b24nKTtcclxuXHRcdGxldCBkZWxldGVkTGVuZ3RoID0gJ2h0dHBzOi8veW91dHUuYmUvJy5sZW5ndGg7XHJcblx0XHRsZXQgdmlkZW9JZCA9IGhyZWZMaW5rLnN1YnN0cmluZyhkZWxldGVkTGVuZ3RoLCBocmVmTGluay5sZW5ndGgpO1xyXG5cdFx0bGV0IHlvdXR1YmVJbWdTcmMgPSAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8nICsgdmlkZW9JZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnO1xyXG5cclxuXHRcdG1lZGlhLnNyYyA9IHlvdXR1YmVJbWdTcmM7XHJcblx0XHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlmcmFtZSA9IGNyZWF0ZUlmcmFtZSh2aWRlb0lkKTtcclxuXHJcblx0XHRcdGxpbmsucmVtb3ZlKCk7XHJcblx0XHRcdGJ1dHRvbi5yZW1vdmUoKTtcclxuXHRcdFx0dmlkZW8uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxpbmsucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHR2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby0tZW5hYmxlZCcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlSWZyYW1lKGlkKSB7XHJcblx0XHRsZXQgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblxyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAnYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsnKTtcclxuXHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdlbmVyYXRlVVJMKGlkKSk7XHJcblx0XHRpZnJhbWUuY2xhc3NMaXN0LmFkZCgndmlkZW9fX21lZGlhJyk7XHJcblxyXG5cdFx0cmV0dXJuIGlmcmFtZTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdlbmVyYXRlVVJMKGlkKSB7XHJcblx0XHRsZXQgcXVlcnkgPSAnP3JlbD0wJnNob3dpbmZvPTEmYXV0b3BsYXk9MSc7XHJcblxyXG5cdFx0cmV0dXJuICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyBxdWVyeTtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vKioqKiogRlVOQ1RJT04gUExVR0lOICoqKioqKi9cclxuXHJcbi8vXHRtb2RhbCB3aW5kb3dcclxuZnVuY3Rpb24gbW9kYWxXaW5kb3coKSB7XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuXHRcdG1vZGFsRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnYtbW9kYWwnKSxcclxuXHRcdGJ0bk9wZW5DbGFzc05hbWUgPSBcImpzLW9wZW5Nb2RhbFwiLFxyXG5cdFx0YnRuQ2xvc2VDbGFzc05hbWUgPSAnanMtY2xvc2VNb2RhbCc7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5PcGVuQ2xhc3NOYW1lfWApICYmIGUudGFyZ2V0LmRhdGFzZXQudHlwZU1vZGFsKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y29uc3QgdHlwZU1vZGFsID0gZS50YXJnZXQuZGF0YXNldFsndHlwZU1vZGFsJ107XHJcblxyXG5cdFx0XHRmb3IgKGxldCAkbW9kYWwgb2YgbW9kYWxFbHMpIHtcclxuXHJcblx0XHRcdFx0aWYgKCRtb2RhbC5kYXRhc2V0ICYmICRtb2RhbC5kYXRhc2V0Wyd0eXBlTW9kYWwnXSA9PT0gdHlwZU1vZGFsKSB7XHJcblx0XHRcdFx0XHQkbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHRcdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhcldpZHRoICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3YtbW9kYWxfX2lubmVyJykgfHwgZS50YXJnZXQuY2xvc2VzdChgLiR7YnRuQ2xvc2VDbGFzc05hbWV9YCkpIHtcclxuXHRcdFx0ZS50YXJnZXQuY2xvc2VzdCgnLnYtbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vINCc0LXQvdGOINC00LXRgNC10LLQviwg0L/RgNC40LzQtdC90Y/RgtGB0Y8g0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+IFxyXG4vLyDQvdCwIERPTSDRjdC10LvQtdC80LXQvdGC0LUgdWxcclxuLy8gZnVuY3Rpb24gdHJlZWVNZW51KHNlbGVjdG9yKSB7XHJcbi8vIFx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuLy8gXHRjb25zdCBpc0FjY29yZGlvblR5cGUgPSAkZWwuZGF0YXNldC50eXBlTWVudSA9PT0gJ2FjY29yZGlvbic7XHJcbi8vIFx0Y29uc3Qgb3Blbkl0ZW1DbGFzcyA9ICdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nO1xyXG5cclxuLy8gXHRjb25zdCBzZXRpbmdzID0ge1xyXG4vLyBcdFx0b3Blbkl0ZW1DbGFzczogJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicsXHJcbi8vIFx0XHRvcGVuU2VsZWN0b3I6ICcuanMtdHJlZS1tZW51X19idG4nXHJcbi8vIFx0fVxyXG5cclxuLy8gXHQkZWwub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcbi8vIFx0XHRjb25zdCAkYnRuID0gZS50YXJnZXQuY2xvc2VzdChzZXRpbmdzLm9wZW5TZWxlY3Rvcik7XHJcblxyXG4vLyBcdFx0aWYgKCEkYnRuKSByZXR1cm47XHJcblxyXG4vLyBcdFx0bGV0ICRwYXJlbnRFbGVtZW50ID0gJGJ0bi5jbG9zZXN0KCdsaScpO1xyXG4vLyBcdFx0bGV0ICRjaGlsZHJlbkNvbnRhaW5lciA9ICRwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblxyXG4vLyBcdFx0aWYgKCEkY2hpbGRyZW5Db250YWluZXIpIHJldHVybjtcclxuXHJcbi8vIFx0XHRjb25zdCBpc09wZW5DdXJyZW50SXRlbSA9ICRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG5cclxuLy8gXHRcdGlmICghaXNPcGVuQ3VycmVudEl0ZW0gJiYgJGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKSkge1xyXG4vLyBcdFx0XHQkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpO1xyXG4vLyBcdFx0XHQkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9fYnRuLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4vLyBcdFx0fVxyXG5cclxuLy8gXHRcdCRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdFtpc09wZW5DdXJyZW50SXRlbSA/ICdyZW1vdmUnIDogJ2FkZCddKHNldGluZ3Mub3Blbkl0ZW1DbGFzcyk7XHJcbi8vIFx0XHQkYnRuLmNsYXNzTGlzdFtpc09wZW5DdXJyZW50SXRlbSA/ICdyZW1vdmUnIDogJ2FkZCddKCdhY3RpdmUnKTtcclxuLy8gXHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAhaXNPcGVuQ3VycmVudEl0ZW0gPyAkY2hpbGRyZW5Db250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIDogXCJcIjtcclxuLy8gXHR9XHJcbi8vIH1cclxuXHJcbmxldCB0cmVlTWVudSA9IChmdW5jdGlvbiAoKSB7XHJcblx0bGV0ICRtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10cmVlLW1lbnUnKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAkbWVudXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHNldHVwVHJlZU1lbnUoJG1lbnVzW2ldKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldHVwVHJlZU1lbnUoc2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHRcdGxldCBvcGVucyA9IGZhbHNlO1xyXG5cdFx0Y29uc3QgaXNBY2NvcmRpb25UeXBlID0gJGVsLmRhdGFzZXQudHlwZU1lbnUgPT09ICdhY2NvcmRpb24nO1xyXG5cclxuXHRcdGNvbnN0IHNldGluZ3MgPSB7XHJcblx0XHRcdG9wZW5JdGVtQ2xhc3M6ICdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nLFxyXG5cdFx0XHRvcGVuU2VsZWN0b3I6ICcuanMtdHJlZS1tZW51X19idG4nXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0ICRtb2JpbGVDbG9zZUl0ZW0gPSAkZWwucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRyZWUtbWVudV9faXRlbS0tbW9iaWxlLWNsb3NlJyk7XHJcblxyXG5cdFx0Zm9yIChsZXQgb3Blbkl0ZW0gb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpKSB7XHJcblx0XHRcdGNvbnN0ICRjaGlsZHJlblVsID0gb3Blbkl0ZW0ucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0JGNoaWxkcmVuVWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHQkY2hpbGRyZW5VbC5zdHlsZS5taW5IZWlnaHQgPSAnYXV0byc7XHJcblx0XHR9XHJcblxyXG5cdFx0JGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0Y29uc3QgJGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3Qoc2V0aW5ncy5vcGVuU2VsZWN0b3IpO1xyXG5cdFx0XHRpZiAoISRidG4gfHwgb3BlbnMpIHJldHVybjtcclxuXHJcblx0XHRcdGxldCAkcGFyZW50RWxlbWVudCA9ICRidG4uY2xvc2VzdCgnbGknKTtcclxuXHRcdFx0bGV0ICRjaGlsZHJlbkNvbnRhaW5lciA9ICRwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblxyXG5cdFx0XHRpZiAoISRjaGlsZHJlbkNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuXHRcdFx0b3BlbnMgPSB0cnVlO1xyXG5cdFx0XHRjb25zdCBpc09wZW5JdGVtID0gJHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHNldGluZ3Mub3Blbkl0ZW1DbGFzcyk7XHJcblxyXG5cdFx0XHRpZiAoaXNBY2NvcmRpb25UeXBlICYmIHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAxNDUwcHgpYCkubWF0Y2hlcykge1xyXG5cdFx0XHRcdGxldCBhY3RpdmVUaGlzTGV2ZWxFbCA9ICRwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRpZiAoYWN0aXZlVGhpc0xldmVsRWwpIHtcclxuXHRcdFx0XHRcdGNvbnN0IGNoaWxkcmVuVWwgPSBhY3RpdmVUaGlzTGV2ZWxFbC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cdFx0XHRcdFx0YWN0aXZlVGhpc0xldmVsRWwuY2xhc3NMaXN0LnJlbW92ZSgnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0Y2hpbGRyZW5VbC5zdHlsZS5oZWlnaHQgPSAnJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmICghaXNBY2NvcmRpb25UeXBlICYmICRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJykpIHtcclxuXHRcdFx0Ly8gXHQkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpO1xyXG5cdFx0XHQvLyBcdCRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19idG4uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdCRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdFtpc09wZW5JdGVtID8gJ3JlbW92ZScgOiAnYWRkJ10oc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IGlzT3Blbkl0ZW0gPyAkY2hpbGRyZW5Db250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIDogXCJcIjtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICFpc09wZW5JdGVtID8gJGNoaWxkcmVuQ29udGFpbmVyLnNjcm9sbEhlaWdodCArIFwicHhcIiA6IFwiXCI7XHJcblx0XHRcdH0sIDEwKVxyXG5cclxuXHRcdFx0aWYgKGlzT3Blbkl0ZW0pIHtcclxuXHRcdFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdFx0b3BlbnMgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdFx0b3BlbnMgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy8g0LDQvdC40LzQsNGG0LjRjyDRgdC60YDQvtC70LAg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG5mdW5jdGlvbiBzY3JvbGxXaW5kb3coKSB7XHJcblx0aWYgKHNjcm9sbFdpbmRvdy5pbnN0YW5jZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRsZXQgc2Nyb2xsQW5pbWF0aW9uSWQgPSAwO1xyXG5cdGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdGxldCBzY3JvbGxzID0gZmFsc2U7XHJcblxyXG5cdGZ1bmN0aW9uIF9zdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZLCBjYWxsYmFjaykge1xyXG5cdFx0aWYgKCFzY3JvbGxzKSB7XHJcblx0XHRcdGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdHNjcm9sbHMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkKys7XHJcblx0XHRjb25zdCBkZWx0YVNjcm9sbCA9IChuZXdTY3JvbGxZIC0gY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0Y3VycmVudFNjcm9sbCArPSBkZWx0YVNjcm9sbCAqIDAuMTU7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0aWYgKE1hdGguYWJzKGRlbHRhU2Nyb2xsKSA+IDUpIHtcclxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRfc3RhcnRBbWltYXRpb25TY3JvbGwobmV3U2Nyb2xsWSk7XHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgbmV3U2Nyb2xsWSk7XHJcblx0XHRcdHN0b3BBbmltYXRpb25TY3JvbGwoKTtcclxuXHJcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wQW5pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbklkKTtcclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkID0gdW5kZWZpbmVkO1xyXG5cdFx0c2Nyb2xscyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNjcm9sbFdpbmRvdy5pbnN0YW5jZSA9IHtcclxuXHRcdGdldCBzY3JvbGxBbmltYXRpb25JZCgpIHtcclxuXHRcdFx0cmV0dXJuIHNjcm9sbEFuaW1hdGlvbklkO1xyXG5cdFx0fSxcclxuXHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsKCk7XHJcblx0XHRcdF9zdGFydEFtaW1hdGlvblNjcm9sbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdHN0b3BBbmltYXRpb25TY3JvbGwsXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyIFxyXG5mdW5jdGlvbiBudW1iZXJTbGlkZXIoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuXHRcdDogc2VsZWN0b3IsXHJcblx0XHQkaW5wdXQgPSAkZWwucXVlcnlTZWxlY3RvcignLmpzLW51bWJlci1zbGlkZXItaW5wdXQnKSxcclxuXHRcdG1pblZhbHVlID0gKyRpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDE7XHJcblxyXG5cdCRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGVyKTtcclxuXHJcblx0ZnVuY3Rpb24gY2xpY2tIYW5kZXIoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLWFkZCcpKSB7XHJcblx0XHRcdGNvbnN0IG9sZCA9ICtwYXJzZUZsb2F0KCRpbnB1dC52YWx1ZSkgKyAxO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSBpc0Zpbml0ZShvbGQpID8gb2xkIDogbWluVmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLXJlZHVjZScpKSB7XHJcblx0XHRcdGxldCBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbHVlKTtcclxuXHRcdFx0aWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuICRpbnB1dC52YWx1ZSA9IG1pblZhbHVlO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSAob2xkVmFsdWUgLSAxIDw9IG1pblZhbHVlKSA/IG1pblZhbHVlIDogLS1vbGRWYWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIGluY29tcGxldGUgbGlzdFxyXG5mdW5jdGlvbiBpbmNvbXBsZXRlTGlzdChzZWxlY3Rvciwgb3B0aW9ucykge1xyXG5cdGxldCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxyXG5cdFx0JGhpZGRlbkVscyxcclxuXHRcdCR0b2dnbGUsXHJcblx0XHR2aXNpYmxlQ291bnQ7XHJcblxyXG5cdGNvbnN0IGJhc2VDbGFzcyA9ICdqcy1pbmNvbXBsZXRlJztcclxuXHRjb25zdCBsaXN0Q2xhc3MgPSBiYXNlQ2xhc3MgKyAnLWxpc3QnO1xyXG5cdGNvbnN0IGl0ZW1DbGFzcyA9IGJhc2VDbGFzcyArICctaXRlbSc7XHJcblx0Y29uc3QgZXhwYW5kZWRMaXN0Q2xhc3MgPSBsaXN0Q2xhc3MgKyAnLS1leHBhbmRlZCc7XHJcblx0Y29uc3QgaGlkZGVuSXRlbUNsYXNzID0gaXRlbUNsYXNzICsgJy0taGlkZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlQ2xhc3MgPSBiYXNlQ2xhc3MgKyAnLXRvZ2dsZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlTW9yZUNsYXNzID0gYnRuVG9nZ2xlQ2xhc3MgKyAnLS1tb3JlJztcclxuXHJcblx0Y29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0XHR2aXNpYmxlQmxvY2tzOiA4LFxyXG5cdFx0cG9zaXRpb25Ub2dnbGU6ICdvdXRzaWRlJyxcclxuXHRcdG1vcmVCdG5Db250ZW50OiBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCIsXHJcblx0XHRsZXNzQnRuQ29udGVudDogXCLQodC60YDRi9GC0YxcIixcclxuXHR9XHJcblxyXG5cdE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIG9wdGlvbnMpO1xyXG5cclxuXHR2aXNpYmxlQ291bnQgPSAkZWwuZGF0YXNldC5pbmNvbXBsZXRlTnVtIHx8IHNldHRpbmdzLnZpc2libGVCbG9ja3M7XHJcblxyXG5cdGlmICgkZWwuY2hpbGRyZW4ubGVuZ3RoIDw9ICt2aXNpYmxlQ291bnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0JGhpZGRlbkVscyA9IEFycmF5LmZyb20oJGVsLmNoaWxkcmVuKS5maWx0ZXIoKCRpdGVtLCBpZHgpID0+IHtcclxuXHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaXRlbUNsYXNzKTtcclxuXHRcdGlmIChpZHggPiB2aXNpYmxlQ291bnQgLSAxKSB7XHJcblx0XHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaGlkZGVuSXRlbUNsYXNzKTtcclxuXHRcdFx0cmV0dXJuICRpdGVtO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHQkdG9nZ2xlLmNsYXNzTmFtZSA9IGJ0blRvZ2dsZUNsYXNzICsgXCIgXCIgKyBidG5Ub2dnbGVNb3JlQ2xhc3M7XHJcblxyXG5cdGlmICh0eXBlb2Ygc2V0dGluZ3MuYnRuQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdCR0b2dnbGUuY2xhc3NOYW1lID0gc2V0dGluZ3MuYnRuQ2xhc3NlcyArIFwiIFwiICsgJHRvZ2dsZS5jbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRpZiAoc2V0dGluZ3MucG9zaXRpb25Ub2dnbGUgPT09ICdpbnNpZGUnKSB7XHJcblx0XHQkZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCAkdG9nZ2xlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JGVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlZW5kJywgJHRvZ2dsZSk7XHJcblx0fVxyXG5cclxuXHQkdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGV4cGFuZGVkTGlzdENsYXNzKSkge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5hZGQoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubW9yZUJ0bkNvbnRlbnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubGVzc0J0bkNvbnRlbnQ7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmZ1bmN0aW9uIGJUYWJzKHRhcmdldCkge1xyXG5cdGxldCBfZWxlbVRhYnMgPSAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQpLFxyXG5cdFx0X2V2ZW50VGFic1Nob3csXHJcblx0XHRfc2hvd1RhYiA9IGZ1bmN0aW9uICh0YWJzTGlua1RhcmdldCkge1xyXG5cdFx0XHR2YXIgdGFic1BhbmVUYXJnZXQsIHRhYnNMaW5rQWN0aXZlLCB0YWJzUGFuZVNob3c7XHJcblx0XHRcdHRhYnNQYW5lVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJzTGlua1RhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcblx0XHRcdHRhYnNMaW5rQWN0aXZlID0gdGFic0xpbmtUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYi10YWJzX19saW5rLmFjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVNob3cgPSB0YWJzUGFuZVRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX3BhbmUuYWN0aXZlJyk7XHJcblx0XHRcdC8vINC10YHQu9C4INGB0LvQtdC00YPRjtGJ0LDRjyDQstC60LvQsNC00LrQsCDRgNCw0LLQvdCwINCw0LrRgtC40LLQvdC+0LksINGC0L4g0LfQsNCy0LXRgNGI0LDQtdC8INGA0LDQsdC+0YLRg1xyXG5cdFx0XHRpZiAodGFic0xpbmtUYXJnZXQgPT09IHRhYnNMaW5rQWN0aXZlKSByZXR1cm47XHJcblx0XHRcdC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRgyDRgtC10LrRg9GJ0LjRhSDQsNC60YLQuNCy0L3Ri9GFINGN0LvQtdC80LXQvdGC0L7QslxyXG5cdFx0XHRpZiAodGFic0xpbmtBY3RpdmUgIT09IG51bGwpIHRhYnNMaW5rQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0aWYgKHRhYnNQYW5lU2hvdyAhPT0gbnVsbCkgdGFic1BhbmVTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINC6INGN0LvQtdC80LXQvdGC0LDQvCAo0LIg0LfQsNCy0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0YDQsNC90L3QvtC5INCy0LrQu9Cw0LTQutC4KVxyXG5cdFx0XHR0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2V2ZW50VGFic1Nob3cpO1xyXG5cdFx0fSxcclxuXHRcdF9zd2l0Y2hUYWJUbyA9IGZ1bmN0aW9uICh0YWJzTGlua0luZGV4KSB7XHJcblx0XHRcdHZhciB0YWJzTGlua3MgPSBfZWxlbVRhYnMucXVlcnlTZWxlY3RvckFsbCgnLmItdGFic19fbGluaycpO1xyXG5cdFx0XHRpZiAodGFic0xpbmtzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFic0xpbmtJbmRleCA+IHRhYnNMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSB0YWJzTGlua3MubGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGFic0xpbmtJbmRleCA8IDEpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfc2hvd1RhYih0YWJzTGlua3NbdGFic0xpbmtJbmRleCAtIDFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0X2V2ZW50VGFic1Nob3cgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RhYi5zaG93JywgeyBkZXRhaWw6IF9lbGVtVGFicyB9KTtcclxuXHJcblx0X2VsZW1UYWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdHZhciB0YWJzTGlua1RhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0Ly8g0LfQsNCy0LXRgNGI0LDQtdC8INCy0YvQv9C+0LvQvdC10L3QuNC1INGE0YPQvdC60YbQuNC4LCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LUg0L/QviDRgdGB0YvQu9C60LVcclxuXHRcdGlmICghdGFic0xpbmtUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLXRhYnNfX2xpbmsnKSkgcmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdF9zaG93VGFiKHRhYnNMaW5rVGFyZ2V0KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHNob3dUYWI6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuXHRcdFx0X3Nob3dUYWIodGFyZ2V0KTtcclxuXHRcdH0sXHJcblx0XHRzd2l0Y2hUYWJUbzogZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdF9zd2l0Y2hUYWJUbyhpbmRleCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnkoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZ2FsbGVyeSA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblxyXG5cdGNvbnN0ICR0aHVtYnNTbGlkZXIgPSAkZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGh1bWJzJyksXHJcblx0XHQkZnVsbFNsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKTtcclxuXHJcblxyXG5cdC8qIHRodW1icyAqL1xyXG5cdGxldCBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcigkdGh1bWJzU2xpZGVyLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0c3RpY2t5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1vdXNld2hlZWw6IHRydWUsXHJcblx0fSk7XHJcblxyXG5cdGxldCBnYWxsZXJ5RnVsbCA9IG5ldyBTd2lwZXIoJGZ1bGxTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdC8vIGF1dG9wbGF5OiB7XHJcblx0XHQvLyBcdGRlbGF5OiA1MDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRwcmV2RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0bmV4dEVsOiAkZnVsbFNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzOiB7XHJcblx0XHRcdHN3aXBlcjogZ2FsbGVyeVRodW1icyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGZpeGVkIGJsb2NrXHJcbmZ1bmN0aW9uIGZpeGVkQmxvY2soc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSB7XHJcblx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcjtcclxuXHRsZXQgJG9mZnNldFBhcmVudCA9IG51bGw7XHJcblx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHRsZXQgaGVpZ2h0SGVhZGVyID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdGxldCBwb2ludG9uWXBvc2l0aW9uaW5nID0gMDtcclxuXHRsZXQgdG9wUG9zRWwsIHdpZHRoRWwgPSBudWxsO1xyXG5cclxuXHRjb25zdCBwYXJhbWV0cnMgPSB7XHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHQkZWwuc3R5bGUudG9wID0gYCR7aGVpZ2h0SGVhZGVyICsgMzB9cHhgO1xyXG5cdFx0XHQvLyAkb2Zmc2V0UGFyZW50ID0gJGVsLm9mZnNldFBhcmVudDtcclxuXHJcblx0XHRcdC8vIGlmICghJG9mZnNldFBhcmVudCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Ly8gdG9wUG9zRWwgPSBfZ2V0VG9wT2Zmc2V0KCRlbCk7IC8vINC90LDRh9Cw0LvRjNC90L7QtSDQv9C+0LvQvtC20LXQvdC40LUg0YHQstC10YDRhdGDINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdC8vIHdpZHRoRWwgPSAkb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHQvLyBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRcdC8vIHNjcm9sbGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVzdHJveSgpIHtcclxuXHRcdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHJcblx0XHRcdC8vIHBvaW50b25ZcG9zaXRpb25pbmcgPSAwO1xyXG5cdFx0XHQvLyB0b3BQb3NFbCwgd2lkdGhFbCwgaGVhZGVySGVpZ2h0ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmICgkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkgJG9mZnNldFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpXHJcblx0XHRcdC8vICRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKTtcclxuXHRcdFx0Ly8gJGVsLmNsYXNzTmFtZSA9ICRlbC5jbGFzc05hbWUucmVwbGFjZSgvZml4ZWR8cG9zaXRpb25lZC9nLCAnJyk7XHJcblx0XHRcdC8vICRlbC5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZXNpemluZ0hhbmRsZXIoZSkge1xyXG5cdFx0d2lkdGhFbCA9ICRvZmZzZXRQYXJlbnQuY2xpZW50V2lkdGg7XHJcblx0XHRoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdGA7XHJcblxyXG5cdFx0c2Nyb2xsaW5nSGFuZGxlcigpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2Nyb2xsaW5nSGFuZGxlcigpIHtcclxuXHRcdGlmIChoZWlnaHRIZWFkZXIgPT0gJGhlYWRlci5vZmZzZXRIZWlnaHQpIHJldHVybjtcclxuXHRcdGhlaWdodEhlYWRlciA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0JGVsLnN0eWxlLnRvcCA9IGAke2hlaWdodEhlYWRlciArIDMwfXB4YDtcclxuXHRcdC8vIGlmICh0b3BQb3NFbCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyBoZWFkZXJIZWlnaHQpKSB7XHJcblxyXG5cdFx0Ly8gXHRpZiAoISRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHQvLyBcdFx0XHR0b3A6ICR7aGVhZGVySGVpZ2h0fXB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cclxuXHRcdC8vIFx0XHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyBcdGlmIChfZ2V0VG9wT2Zmc2V0RnJvbUJvdHRvbSgkZWwpID4gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJG9mZnNldFBhcmVudCkpIHtcclxuXHRcdC8vIFx0XHRpZiAoKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSkpIHJldHVybjtcclxuXHRcdC8vIFx0XHRwb2ludG9uWXBvc2l0aW9uaW5nID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdC8vIFx0XHRcdHRvcDogYXV0bztcclxuXHRcdC8vIFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cdFx0Ly8gXHR9IGVsc2UgaWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gcG9pbnRvbllwb3NpdGlvbmluZykge1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3NpdGlvbmVkJylcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHRvcDogJHtoZWFkZXJIZWlnaHR9cHg7XHJcblx0XHQvLyBcdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0Ly8gXHRcdGA7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyB9IGVsc2UgaWYgKCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0Ly8gXHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0VG9wT2Zmc2V0KGUpIHtcclxuXHRcdHZhciB5ID0gMDtcclxuXHRcdGRvIHsgeSArPSBlLm9mZnNldFRvcDsgfSB3aGlsZSAoZSA9IGUub2Zmc2V0UGFyZW50KTtcclxuXHRcdHJldHVybiB5O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJGVsKSB7XHJcblx0XHRyZXR1cm4gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJhbWV0cnNcclxufVxyXG5cclxuLyoqKioqKiBVVElMUyAqKioqKiovXHJcbmZ1bmN0aW9uIGlzRWxlbShzZWxlY3Rvcikge1xyXG5cdHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfdGhyb3R0bGUoZnVuYywgbXMgPSAxMDApIHtcclxuXHRsZXQgbG9ja2VkID0gZmFsc2U7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAobG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XHJcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0bG9ja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0bG9ja2VkID0gZmFsc2U7XHJcblx0XHR9LCBtcylcclxuXHR9XHJcbn1cclxuIl19
