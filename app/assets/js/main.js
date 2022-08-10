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
		const count = $sliderNode.closest('.index-pg') ? 4 : 3;

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
					slidesPerView: count,
					spaceBetween: 30,
				},
				[breakPoint.desctopMid + 1]: {
					slidesPerView: count,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGJyZWFrIHBvaW50cyBzaXRlXHJcbmNvbnN0IGJyZWFrUG9pbnQgPSB7XHJcblx0ZGVzY3RvcDogMTkyMCxcclxuXHRkZXNjdG9wTWlkOiAxNDUwLFxyXG5cdGRlc2N0b3BNaW46IDEyMzAsXHJcblx0dGFibGU6IDEwMjQsXHJcblx0bW9iaWxlOiA3NjgsXHJcblx0dGVsOiA0ODAsXHJcbn1cclxuXHJcbi8qKioqKiBJTklUSUFMSVpJTkcgUExVR0lOUyAqKioqKiovXHJcbmlmIChpc0VsZW0oJy5maXhibG9jaycpKSB7XHJcblx0Y29uc3QgZml4YmxvY2tOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhibG9jaycpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHticmVha1BvaW50LnRhYmxlfXB4KWApO1xyXG5cclxuXHRmb3IgKGNvbnN0IGZpeGJsb2NrIG9mIGZpeGJsb2NrTm9kZXMpIHtcclxuXHRcdGxldCBhID0gZml4ZWRCbG9jayhmaXhibG9jayk7XHJcblx0XHRsZXQgaXNJbml0ID0gZmFsc2U7XHJcblxyXG5cdFx0bWVkaWFIYW5kbGVyKCk7XHJcblxyXG5cdFx0bWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihtZWRpYUhhbmRsZXIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lZGlhSGFuZGxlcigpIHtcclxuXHRcdFx0aWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG5cdFx0XHRcdGEuaW5pdCgpO1xyXG5cdFx0XHRcdGlzSW5pdCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNJbml0KSB7XHJcblx0XHRcdFx0YS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuaWYgKHdpbmRvdy4kICYmIHR5cGVvZiB3aW5kb3cuJC5mbi5jdXN0b21TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcclxuXHQkKCdzZWxlY3QnKS5jdXN0b21TZWxlY3QoKTtcclxufVxyXG5cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zY3JvbGwtdG9baHJlZio9XCIjXCJdJykpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2Nyb2xsLXRvW2hyZWYqPVwiI1wiXScpO1xyXG5cdFx0Y29uc3QgaWQgPSBsaW5rLmhhc2g7XHJcblx0XHRjb25zdCAkc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuXHRcdGlmICghJHNlY3Rpb24pIHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuXHRcdGxldCBjb29yZHNTZWN0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgJHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRcdGNvb3Jkc1NlY3Rpb24gPSBjb29yZHNTZWN0aW9uIC0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdFx0c2Nyb2xsaW5nV2luZG93LnN0YXJ0QW1pbWF0aW9uU2Nyb2xsKGNvb3Jkc1NlY3Rpb24pO1xyXG5cdH1cclxufSlcclxuXHJcbi8vIFx0bWFpbiBzbGlkZXIgXHJcbmlmIChpc0VsZW0oJy5tYWluLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcicpO1xyXG5cclxuXHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNsaWRlck5vZGUsIHtcclxuXHRcdGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuXHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRzcGVlZDogNzAwLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0XHRyb3RhdGU6IDUwLFxyXG5cdFx0XHRzdHJldGNoOiAwLFxyXG5cdFx0XHRkZXB0aDogMTAwLFxyXG5cdFx0XHRtb2RpZmllcjogMSxcclxuXHRcdFx0c2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gcHJvZHVjdHMgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLnByb2R1Y3RzLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ3Byb2R1Y3QtY2FyZF9fYm90dG9tJyxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njk6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI1OiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI1LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIzMToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0MCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKGlzRWxlbSgnLmltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0dHlwZTogXCJmcmFjdGlvblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdFx0cHJldkVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gaGVhZGluZyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaGlkaW5nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGluZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBjb3VudCA9ICRzbGlkZXJOb2RlLmNsb3Nlc3QoJy5pbmRleC1wZycpID8gNCA6IDM7XHJcblxyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0bm9Td2lwaW5nQ2xhc3M6ICdidG4tZ28nLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC50YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5kZXNjdG9wTWluICsgMV06IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogY291bnQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQuZGVzY3RvcE1pZCArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiBjb3VudCxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogNDMsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vL3Byb2R1Y3Rpb24gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmltYWdlLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmltYWdlLXNsaWRlcidcclxuXHRjb25zdCBwcm9kdWN0aW9uU2lsZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDbGFzcyk7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3Rpb25TbGlkZXIgPSBuZXcgU3dpcGVyKHByb2R1Y3Rpb25TaWxkZXJDb250YWluZXIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRzcGFjZUJldHdlZW46IDM1LFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyOSxcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3MDE6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdH0sXHJcblx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0aGVpZ2h0OiAyMDAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLWFyci0tbmV4dGAsXHJcblx0XHRcdHByZXZFbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1hcnItLXByZXZgLFxyXG5cdFx0fSxcclxuXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLXBhZ2luYXRpb25gLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0cHJvZHVjdGlvblNsaWRlci5vbigncmVzaXplJywgcHJvZHVjdGlvblNsaWRlci51cGRhdGUpO1xyXG59XHJcblxyXG4vL2Z1bGxzY3JlZW4gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmZ1bGwtc2NyZWVuLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmZ1bGwtc2NyZWVuLXNsaWRlcidcclxuXHRjb25zdCAkc2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNsYXNzKTtcclxuXHJcblx0bGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlckVsLCB7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAwLFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1wYWdpbmF0aW9uYCxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBhZHZhbnRhZ2VzIHNsaWRlclxyXG5pZiAoaXNFbGVtKCcuc2xpZGVyLXNtJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLXNtJyk7XHJcblxyXG5cdGZvciAoY29uc3QgJHNsaWRlciBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlciwge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwMCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5tb2JpbGUgKyAxXToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuLy9mdWxsc2NyZWVuIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5jb250ZW50LWltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckNsYXNzID0gJy5jb250ZW50LWltZy1zbGlkZXInXHJcblx0Y29uc3QgJHNsaWRlckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2xpZGVyQ2xhc3MpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRzbGlkZXJFbCBvZiAkc2xpZGVyRWxzKSB7XHJcblx0XHRsZXQgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyRWwsIHtcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyRWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyLXBhZ2luYXRpb25gKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8ganMtaW5jb21wbGV0ZS1saXN0XHJcbmlmIChpc0VsZW0oJy5jb21wYXRpYmlsaXR5LWJfX2xpc3QuanMtaW5jb21wbGV0ZS1saXN0JykpIHtcclxuXHRjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGF0aWJpbGl0eS1iX19saXN0LmpzLWluY29tcGxldGUtbGlzdCcpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRpdGVtIG9mIGxpc3RJdGVtcykge1xyXG5cdFx0aW5jb21wbGV0ZUxpc3QoJGl0ZW0sIHtcclxuXHRcdFx0YnRuQ2xhc3NlczogXCJjb21wYXRpYmlsaXR5LWJfX3RvZ2dsZVwiLFxyXG5cdFx0XHRwb3NpdGlvblRvZ2dsZTogJ2luc2lkZScsXHJcblx0XHRcdG1vcmVCdG5Db250ZW50OiBgXHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHTQldGJ0LVcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0JHt0b1N2Z1RvZ2dsZSgpfVxyXG5cdFx0XHRgLFxyXG5cdFx0XHRsZXNzQnRuQ29udGVudDogYFxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx00KHQutGA0YvRgtGMXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdCR7dG9TdmdUb2dnbGUoKX1cclxuXHRcdFx0YCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG9TdmdUb2dnbGUoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdDxzdmcgc3ZnIHZpZXdCb3ggPSBcIjAgMCA0NCAyNlwiIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiID5cclxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjIuMDAwMSAyNS4yODY3QzIyLjc3MjcgMjUuMjg2NyAyMy41NDUyIDI0Ljk5MTcgMjQuMTM0MyAyNC40MDI5TDQyLjY3MDMgNS44NjY3M0M0My44NDk0IDQuNjg3NiA0My44NDk0IDIuNzc1ODQgNDIuNjcwMyAxLjU5NzE5QzQxLjQ5MTYgMC40MTg1MzIgMzkuNTgwMiAwLjQxODUzMiAzOC40MDEgMS41OTcxOUwyMi4wMDAxIDE3Ljk5OUw1LjU5OTE0IDEuNTk3NzZDNC40MjAwMSAwLjQxOTEwOCAyLjUwODgyIDAuNDE5MTA5IDEuMzMwMjYgMS41OTc3NkMwLjE1MDU1NSAyLjc3NjQyIDAuMTUwNTU1IDQuNjg4MTggMS4zMzAyNiA1Ljg2NzMxTDE5Ljg2NiAyNC40MDM1QzIwLjQ1NTMgMjQuOTkyNCAyMS4yMjc4IDI1LjI4NjcgMjIuMDAwMSAyNS4yODY3WlwiIGZpbGw9XCJpbmhlcml0XCIgLz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRgXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyXHJcbmlmIChpc0VsZW0oJy5udW1iZXItc2xpZGVyJykpIHtcclxuXHRjb25zdCBudW1iZXJTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCBzbGlkZXIgb2YgbnVtYmVyU2xpZGVycykge1xyXG5cdFx0bnVtYmVyU2xpZGVyKHNsaWRlcik7XHJcblx0fVxyXG59XHJcblxyXG4vLyBnYWxsZXJ5IHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5nYWxsZXJ5JykpIHtcclxuXHRjb25zdCAkZ2FsbGVyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKTtcclxuXHJcblx0Zm9yIChjb25zdCAkZ2FsbGVyeSBvZiAkZ2FsbGVyaWVzKSB7XHJcblx0XHRnYWxsZXJ5KCRnYWxsZXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKioqKioqIENVU1RPTSBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9maXhlZCBoZWFkZXJcclxuaWYgKGlzRWxlbSgnaGVhZGVyJykpIHtcclxuXHRsZXQgZml4ZWRIZWFkZXIgPSBzaG93SGVhZGVyKCdoZWFkZXInKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0hlYWRlcihlbCkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgaXNGaXhlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRUb3BFbCArIDQwKSB7XHJcblx0XHRcdFx0c2hvdygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IG9mZnNldFRvcEVsIC8gMikge1xyXG5cdFx0XHRcdGZpeGVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHt9KVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9mZnNldFRvcEVsID0gJGVsLm9mZnNldEhlaWdodDtcclxuXHRcdH0pXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvdygpIHtcclxuXHRcdFx0aWYgKGlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHRcdGlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoIWlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0XHRpc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdyxcclxuXHRcdFx0Zml4ZWQsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vL0hhbWJ1cmdlciDQvtGC0LrRgNGL0YLQuNGPINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5oZWFkZXJfX2hhbWJ1cmdlcicpKSB7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckNsYXNzTmFtZSA9ICcuaGVhZGVyX19oYW1idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyLWlubmVyJztcclxuXHRjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblx0Y29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFtYnVyZ2VyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlckJsb2NrQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcklubmVyQ2xhc3NOYW1lKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoaGFtYnVyZ2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRjb25zdCBvZmZzZXRSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gJGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSAkaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGlzQWN0aXZlKSA/IGBjYWxjKDEwMHZoIC0gJHskaGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0XHR9IGVsc2UgaWYgKCRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSAmJiAhZS50YXJnZXQuY2xvc2VzdChidXJnZXJCbG9ja0NsYXNzTmFtZSkpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMzAgJiYgJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gc2VhcmNoXHJcbmlmIChpc0VsZW0oJ1tkYXRhLXNlYXJjaC10b2dnbGVdJykgJiYgaXNFbGVtKCdbZGF0YS1zZWFyY2gtcGFuZWxdJykpIHtcclxuXHRjb25zdCBwYW5lbFNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC1wYW5lbF0nO1xyXG5cdGNvbnN0IHNlYXJjaEJ0blNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC10b2dnbGVdJztcclxuXHRjb25zdCBjbG9zZVBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLWNsb3NlXSc7XHJcblx0Y29uc3QgJHNlYXJjaFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYW5lbFNlbGVjdG9yKTtcclxuXHRjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoUGFuZWwucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuXHRjb25zdCB0b2dnbGVDbGFzcyA9ICdvcGVuJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3Qoc2VhcmNoQnRuU2VsZWN0b3IpKSB7XHJcblx0XHRcdCRzZWFyY2hQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZUNsYXNzKTtcclxuXHRcdFx0JHNlYXJjaElucHV0LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KGNsb3NlUGFuZWxTZWxlY3RvcilcclxuXHRcdFx0fHwgKCFlLnRhcmdldC5jbG9zZXN0KHBhbmVsU2VsZWN0b3IpICYmICRzZWFyY2hQYW5lbC5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlQ2xhc3MpKSkge1xyXG5cdFx0XHQkc2VhcmNoUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRsaW5rYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0dG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0bWVudURyb3AuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2KSB7XHJcblx0XHRpZiAoIWV2LnRhcmdldC5jbG9zZXN0KCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0XHRcdGlmIChtZW51RHJvcC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0dG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdG1lbnVEcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8gYlRhYnNcclxuaWYgKGlzRWxlbSgnLmItdGFicycpKSB7XHJcblx0Y29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXRhYnMnKTtcclxuXHJcblx0Zm9yIChjb25zdCB0YWIgb2YgdGFicykge1xyXG5cclxuXHRcdGJUYWJzKHRhYik7XHJcblx0fVxyXG59XHJcblxyXG4vLyB3aW5kb3cgbW9kYWxcclxuaWYgKGlzRWxlbSgnLnYtbW9kYWwnKSkge1xyXG5cdG1vZGFsV2luZG93KCk7XHJcbn1cclxuXHJcbi8vIGpzLXNlbGVjdGlvbi1zY3JvbGxhYmxlXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0aWYgKGlzRWxlbSgnLmpzLXNlbGVjdGlvbi1icmFuZCcpKSB7XHJcblxyXG5cdFx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlbGVjdGlvbi1icmFuZCcpO1xyXG5cdFx0Y29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlbGVjdGlvbi1hY3Rpb24nKTtcclxuXHRcdGNvbnN0IHRhYmxlQmxvY2tXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJyYW5kLXRhYmxlcycpO1xyXG5cdFx0Y29uc3QgdGFibGVCbG9ja3MgPSB0YWJsZUJsb2NrV3JhcC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYnJhbmQtdGFibGVzID4gKicpO1xyXG5cclxuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgdGFibGVCbG9ja3MpIHtcclxuXHRcdFx0YmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAoc2VsZWN0LnZhbHVlID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdFx0Y29uc3QgaGFzaCA9ICcjJyArIHNlbGVjdC52YWx1ZTtcclxuXHRcdFx0Y29uc3Qgc2VjdGlvbiA9IHRhYmxlQmxvY2tXcmFwLnF1ZXJ5U2VsZWN0b3IoaGFzaCk7XHJcblxyXG5cdFx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHRhYmxlQmxvY2tzKSB7XHJcblx0XHRcdFx0YmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghc2VjdGlvbikgcmV0dXJuO1xyXG5cclxuXHRcdFx0c2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuXHRcdH0pXHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy8gdi11cCDQutC90L7Qv9C60LAg0LLQstC10YDRhVxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwidi11cFwiPjwvZGl2PlxyXG5cdGApO1xyXG5cclxuXHRjb25zdCBidG5Eb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnYtdXAnKTtcclxuXHRsZXQgdlVwVHJpZ2dlclRpbWVyID0gMDtcclxuXHJcblx0dlVwKGJ0bkRvd24sIGdldFNjcm9sZWRXaW5kb3cpO1xyXG5cclxuXHRidG5Eb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0c2Nyb2xsaW5nV2luZG93LnN0YXJ0QW1pbWF0aW9uU2Nyb2xsKDEpO1xyXG5cdH0pO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHZVcFRyaWdnZXJUaW1lcik7XHJcblx0XHR2VXBUcmlnZ2VyVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0dlVwKGJ0bkRvd24sIGdldFNjcm9sZWRXaW5kb3cpO1xyXG5cdFx0fSwgMjAwKVxyXG5cdH0pO1xyXG5cclxuXHQvL9C/0YDQvtC70LjRgdGC0YvQstCw0LjQvdC1INC+0LrQvdCwINCy0LLQtdGA0YUg0L/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YNcclxuXHRmdW5jdGlvbiB2VXAoYnRuLCBzY3JvbGVkKSB7XHJcblx0XHRpZiAoc2Nyb2xlZCgpID4gKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpKSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdH0gZWxzZSBpZiAoc2Nyb2xlZCgpIDwgKHdpbmRvdy5pbm5lckhlaWdodCAvIDIpIHx8IGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8v0L3QsCDRgdC60L7Qu9GM0LrQviDQv9GA0L7QutGA0YPRh9C10L3QviDQvtC60L3QvlxyXG5cdGZ1bmN0aW9uIGdldFNjcm9sZWRXaW5kb3coKSB7XHJcblx0XHRyZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0fVxyXG59KCkpO1xyXG5cclxuLy92aWRlb1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGZpbmRWaWRlb3MoKTtcclxuXHJcblx0ZnVuY3Rpb24gZmluZFZpZGVvcygpIHtcclxuXHRcdGxldCB2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8nKTtcclxuXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZpZGVvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRzZXR1cFZpZGVvKHZpZGVvc1tpXSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyDQu9C10L3QuNCy0LDRjyDQt9Cw0LPRgNGD0LfQutCwINCy0LjQtNC10L4gXHJcblx0ZnVuY3Rpb24gc2V0dXBWaWRlbyh2aWRlbykge1xyXG5cdFx0bGV0IGxpbmsgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2xpbmsnKTtcclxuXHRcdGNvbnN0IGhyZWZMaW5rID0gbGluay5ocmVmO1xyXG5cdFx0bGV0IG1lZGlhID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19tZWRpYScpO1xyXG5cdFx0bGV0IGJ1dHRvbiA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fYnV0dG9uJyk7XHJcblx0XHRsZXQgZGVsZXRlZExlbmd0aCA9ICdodHRwczovL3lvdXR1LmJlLycubGVuZ3RoO1xyXG5cdFx0bGV0IHZpZGVvSWQgPSBocmVmTGluay5zdWJzdHJpbmcoZGVsZXRlZExlbmd0aCwgaHJlZkxpbmsubGVuZ3RoKTtcclxuXHRcdGxldCB5b3V0dWJlSW1nU3JjID0gJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvJyArIHZpZGVvSWQgKyAnL21heHJlc2RlZmF1bHQuanBnJztcclxuXHJcblx0XHRtZWRpYS5zcmMgPSB5b3V0dWJlSW1nU3JjO1xyXG5cdFx0dmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdGxldCBpZnJhbWUgPSBjcmVhdGVJZnJhbWUodmlkZW9JZCk7XHJcblxyXG5cdFx0XHRsaW5rLnJlbW92ZSgpO1xyXG5cdFx0XHRidXR0b24ucmVtb3ZlKCk7XHJcblx0XHRcdHZpZGVvLmFwcGVuZENoaWxkKGlmcmFtZSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsaW5rLnJlbW92ZUF0dHJpYnV0ZSgnaHJlZicpO1xyXG5cdFx0dmlkZW8uY2xhc3NMaXN0LmFkZCgndmlkZW8tLWVuYWJsZWQnKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShpZCkge1xyXG5cdFx0bGV0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cclxuXHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93ZnVsbHNjcmVlbicsICcnKTtcclxuXHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ2FsbG93JywgJ2FjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7Jyk7XHJcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBnZW5lcmF0ZVVSTChpZCkpO1xyXG5cdFx0aWZyYW1lLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvX19tZWRpYScpO1xyXG5cclxuXHRcdHJldHVybiBpZnJhbWU7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZW5lcmF0ZVVSTChpZCkge1xyXG5cdFx0bGV0IHF1ZXJ5ID0gJz9yZWw9MCZzaG93aW5mbz0xJmF1dG9wbGF5PTEnO1xyXG5cclxuXHRcdHJldHVybiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkICsgcXVlcnk7XHJcblx0fVxyXG59KCkpO1xyXG5cclxuLyoqKioqIEZVTkNUSU9OIFBMVUdJTiAqKioqKiovXHJcblxyXG4vL1x0bW9kYWwgd2luZG93XHJcbmZ1bmN0aW9uIG1vZGFsV2luZG93KCkge1xyXG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXHJcblx0XHRtb2RhbEVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52LW1vZGFsJyksXHJcblx0XHRidG5PcGVuQ2xhc3NOYW1lID0gXCJqcy1vcGVuTW9kYWxcIixcclxuXHRcdGJ0bkNsb3NlQ2xhc3NOYW1lID0gJ2pzLWNsb3NlTW9kYWwnO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdChgLiR7YnRuT3BlbkNsYXNzTmFtZX1gKSAmJiBlLnRhcmdldC5kYXRhc2V0LnR5cGVNb2RhbCkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGNvbnN0IHR5cGVNb2RhbCA9IGUudGFyZ2V0LmRhdGFzZXRbJ3R5cGVNb2RhbCddO1xyXG5cclxuXHRcdFx0Zm9yIChsZXQgJG1vZGFsIG9mIG1vZGFsRWxzKSB7XHJcblxyXG5cdFx0XHRcdGlmICgkbW9kYWwuZGF0YXNldCAmJiAkbW9kYWwuZGF0YXNldFsndHlwZU1vZGFsJ10gPT09IHR5cGVNb2RhbCkge1xyXG5cdFx0XHRcdFx0JG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBib2R5Lm9mZnNldFdpZHRoO1xyXG5cdFx0XHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0XHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArIFwicHhcIjtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2LW1vZGFsX19pbm5lcicpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bkNsb3NlQ2xhc3NOYW1lfWApKSB7XHJcblx0XHRcdGUudGFyZ2V0LmNsb3Nlc3QoJy52LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdFx0Ym9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyDQnNC10L3RjiDQtNC10YDQtdCy0L4sINC/0YDQuNC80LXQvdGP0YLRgdGPINC90LXQv9C+0YHRgNC10LTRgdGC0LLQtdC90L3QviBcclxuLy8g0L3QsCBET00g0Y3QtdC70LXQvNC10L3RgtC1IHVsXHJcbi8vIGZ1bmN0aW9uIHRyZWVlTWVudShzZWxlY3Rvcikge1xyXG4vLyBcdGNvbnN0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcbi8vIFx0Y29uc3QgaXNBY2NvcmRpb25UeXBlID0gJGVsLmRhdGFzZXQudHlwZU1lbnUgPT09ICdhY2NvcmRpb24nO1xyXG4vLyBcdGNvbnN0IG9wZW5JdGVtQ2xhc3MgPSAnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJztcclxuXHJcbi8vIFx0Y29uc3Qgc2V0aW5ncyA9IHtcclxuLy8gXHRcdG9wZW5JdGVtQ2xhc3M6ICdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nLFxyXG4vLyBcdFx0b3BlblNlbGVjdG9yOiAnLmpzLXRyZWUtbWVudV9fYnRuJ1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0JGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG4vLyBcdFx0Y29uc3QgJGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3Qoc2V0aW5ncy5vcGVuU2VsZWN0b3IpO1xyXG5cclxuLy8gXHRcdGlmICghJGJ0bikgcmV0dXJuO1xyXG5cclxuLy8gXHRcdGxldCAkcGFyZW50RWxlbWVudCA9ICRidG4uY2xvc2VzdCgnbGknKTtcclxuLy8gXHRcdGxldCAkY2hpbGRyZW5Db250YWluZXIgPSAkcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuLy8gXHRcdGlmICghJGNoaWxkcmVuQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4vLyBcdFx0Y29uc3QgaXNPcGVuQ3VycmVudEl0ZW0gPSAkcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHJcbi8vIFx0XHRpZiAoIWlzT3BlbkN1cnJlbnRJdGVtICYmICRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJykpIHtcclxuLy8gXHRcdFx0JGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKTtcclxuLy8gXHRcdFx0JGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2J0bi5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuLy8gXHRcdH1cclxuXHJcbi8vIFx0XHQkcGFyZW50RWxlbWVudC5jbGFzc0xpc3RbaXNPcGVuQ3VycmVudEl0ZW0gPyAncmVtb3ZlJyA6ICdhZGQnXShzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG4vLyBcdFx0JGJ0bi5jbGFzc0xpc3RbaXNPcGVuQ3VycmVudEl0ZW0gPyAncmVtb3ZlJyA6ICdhZGQnXSgnYWN0aXZlJyk7XHJcbi8vIFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gIWlzT3BlbkN1cnJlbnRJdGVtID8gJGNoaWxkcmVuQ29udGFpbmVyLnNjcm9sbEhlaWdodCArIFwicHhcIiA6IFwiXCI7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG5sZXQgdHJlZU1lbnUgPSAoZnVuY3Rpb24gKCkge1xyXG5cdGxldCAkbWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdHJlZS1tZW51Jyk7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgJG1lbnVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRzZXR1cFRyZWVNZW51KCRtZW51c1tpXSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXR1cFRyZWVNZW51KHNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcclxuXHRcdGNvbnN0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblx0XHRsZXQgb3BlbnMgPSBmYWxzZTtcclxuXHRcdGNvbnN0IGlzQWNjb3JkaW9uVHlwZSA9ICRlbC5kYXRhc2V0LnR5cGVNZW51ID09PSAnYWNjb3JkaW9uJztcclxuXHJcblx0XHRjb25zdCBzZXRpbmdzID0ge1xyXG5cdFx0XHRvcGVuSXRlbUNsYXNzOiAnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJyxcclxuXHRcdFx0b3BlblNlbGVjdG9yOiAnLmpzLXRyZWUtbWVudV9fYnRuJ1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCAkbW9iaWxlQ2xvc2VJdGVtID0gJGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW1vYmlsZS1jbG9zZScpO1xyXG5cclxuXHRcdGZvciAobGV0IG9wZW5JdGVtIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2V0aW5ncy5vcGVuSXRlbUNsYXNzKSkge1xyXG5cdFx0XHRjb25zdCAkY2hpbGRyZW5VbCA9IG9wZW5JdGVtLnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblx0XHRcdCRjaGlsZHJlblVsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHRcdFx0JGNoaWxkcmVuVWwuc3R5bGUubWluSGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0fVxyXG5cclxuXHRcdCRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGNvbnN0ICRidG4gPSBlLnRhcmdldC5jbG9zZXN0KHNldGluZ3Mub3BlblNlbGVjdG9yKTtcclxuXHRcdFx0aWYgKCEkYnRuIHx8IG9wZW5zKSByZXR1cm47XHJcblxyXG5cdFx0XHRsZXQgJHBhcmVudEVsZW1lbnQgPSAkYnRuLmNsb3Nlc3QoJ2xpJyk7XHJcblx0XHRcdGxldCAkY2hpbGRyZW5Db250YWluZXIgPSAkcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cclxuXHRcdFx0aWYgKCEkY2hpbGRyZW5Db250YWluZXIpIHJldHVybjtcclxuXHJcblx0XHRcdG9wZW5zID0gdHJ1ZTtcclxuXHRcdFx0Y29uc3QgaXNPcGVuSXRlbSA9ICRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG5cclxuXHRcdFx0aWYgKGlzQWNjb3JkaW9uVHlwZSAmJiB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogMTQ1MHB4KWApLm1hdGNoZXMpIHtcclxuXHRcdFx0XHRsZXQgYWN0aXZlVGhpc0xldmVsRWwgPSAkcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKTtcclxuXHJcblx0XHRcdFx0aWYgKGFjdGl2ZVRoaXNMZXZlbEVsKSB7XHJcblx0XHRcdFx0XHRjb25zdCBjaGlsZHJlblVsID0gYWN0aXZlVGhpc0xldmVsRWwucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHRcdFx0XHRcdGFjdGl2ZVRoaXNMZXZlbEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpO1xyXG5cclxuXHRcdFx0XHRcdGNoaWxkcmVuVWwuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiAoIWlzQWNjb3JkaW9uVHlwZSAmJiAkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpKSB7XHJcblx0XHRcdC8vIFx0JGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKS5jbGFzc0xpc3QucmVtb3ZlKCdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKTtcclxuXHRcdFx0Ly8gXHQkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9fYnRuLmFjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQvLyB9XHJcblxyXG5cdFx0XHQkcGFyZW50RWxlbWVudC5jbGFzc0xpc3RbaXNPcGVuSXRlbSA/ICdyZW1vdmUnIDogJ2FkZCddKHNldGluZ3Mub3Blbkl0ZW1DbGFzcyk7XHJcblx0XHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBpc09wZW5JdGVtID8gJGNoaWxkcmVuQ29udGFpbmVyLnNjcm9sbEhlaWdodCArIFwicHhcIiA6IFwiXCI7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAhaXNPcGVuSXRlbSA/ICRjaGlsZHJlbkNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyBcInB4XCIgOiBcIlwiO1xyXG5cdFx0XHR9LCAxMClcclxuXHJcblx0XHRcdGlmIChpc09wZW5JdGVtKSB7XHJcblx0XHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcnO1xyXG5cdFx0XHRcdG9wZW5zID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcclxuXHRcdFx0XHRcdG9wZW5zID0gZmFsc2U7XHJcblx0XHRcdFx0fSwgNTAwKVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxufSgpKTtcclxuXHJcbi8vINCw0L3QuNC80LDRhtC40Y8g0YHQutGA0L7Qu9CwINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LBcclxuZnVuY3Rpb24gc2Nyb2xsV2luZG93KCkge1xyXG5cdGlmIChzY3JvbGxXaW5kb3cuaW5zdGFuY2UpIHtcclxuXHRcdHJldHVybiBmdW5jLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0bGV0IHNjcm9sbEFuaW1hdGlvbklkID0gMDtcclxuXHRsZXQgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRsZXQgc2Nyb2xscyA9IGZhbHNlO1xyXG5cclxuXHRmdW5jdGlvbiBfc3RhcnRBbWltYXRpb25TY3JvbGwobmV3U2Nyb2xsWSwgY2FsbGJhY2spIHtcclxuXHRcdGlmICghc2Nyb2xscykge1xyXG5cdFx0XHRjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRzY3JvbGxzID0gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRzY3JvbGxBbmltYXRpb25JZCsrO1xyXG5cdFx0Y29uc3QgZGVsdGFTY3JvbGwgPSAobmV3U2Nyb2xsWSAtIGN1cnJlbnRTY3JvbGwpO1xyXG5cclxuXHRcdGN1cnJlbnRTY3JvbGwgKz0gZGVsdGFTY3JvbGwgKiAwLjE1O1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGN1cnJlbnRTY3JvbGwpO1xyXG5cclxuXHRcdGlmIChNYXRoLmFicyhkZWx0YVNjcm9sbCkgPiA1KSB7XHJcblx0XHRcdHNjcm9sbEFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0X3N0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFkpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIG5ld1Njcm9sbFkpO1xyXG5cdFx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsKCk7XHJcblxyXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RvcEFuaW1hdGlvblNjcm9sbCgpIHtcclxuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShzY3JvbGxBbmltYXRpb25JZCk7XHJcblx0XHRzY3JvbGxBbmltYXRpb25JZCA9IHVuZGVmaW5lZDtcclxuXHRcdHNjcm9sbHMgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzY3JvbGxXaW5kb3cuaW5zdGFuY2UgPSB7XHJcblx0XHRnZXQgc2Nyb2xsQW5pbWF0aW9uSWQoKSB7XHJcblx0XHRcdHJldHVybiBzY3JvbGxBbmltYXRpb25JZDtcclxuXHRcdH0sXHJcblx0XHRzdGFydEFtaW1hdGlvblNjcm9sbCgpIHtcclxuXHRcdFx0c3RvcEFuaW1hdGlvblNjcm9sbCgpO1xyXG5cdFx0XHRfc3RhcnRBbWltYXRpb25TY3JvbGwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuXHRcdH0sXHJcblx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsLFxyXG5cdH1cclxufVxyXG5cclxuLy8gbnVtYmVyIHNsaWRlciBcclxuZnVuY3Rpb24gbnVtYmVyU2xpZGVyKHNlbGVjdG9yKSB7XHJcblx0Y29uc3QgJGVsID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcblx0XHQ6IHNlbGVjdG9yLFxyXG5cdFx0JGlucHV0ID0gJGVsLnF1ZXJ5U2VsZWN0b3IoJy5qcy1udW1iZXItc2xpZGVyLWlucHV0JyksXHJcblx0XHRtaW5WYWx1ZSA9ICskaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSB8fCAxO1xyXG5cclxuXHQkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRlcik7XHJcblxyXG5cdGZ1bmN0aW9uIGNsaWNrSGFuZGVyKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1hZGQnKSkge1xyXG5cdFx0XHRjb25zdCBvbGQgPSArcGFyc2VGbG9hdCgkaW5wdXQudmFsdWUpICsgMTtcclxuXHRcdFx0JGlucHV0LnZhbHVlID0gaXNGaW5pdGUob2xkKSA/IG9sZCA6IG1pblZhbHVlO1xyXG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuanMtbnVtYmVyLXNsaWRlci1yZWR1Y2UnKSkge1xyXG5cdFx0XHRsZXQgb2xkVmFsdWUgPSBwYXJzZUZsb2F0KCRpbnB1dC52YWx1ZSk7XHJcblx0XHRcdGlmIChpc05hTihvbGRWYWx1ZSkpIHJldHVybiAkaW5wdXQudmFsdWUgPSBtaW5WYWx1ZTtcclxuXHRcdFx0JGlucHV0LnZhbHVlID0gKG9sZFZhbHVlIC0gMSA8PSBtaW5WYWx1ZSkgPyBtaW5WYWx1ZSA6IC0tb2xkVmFsdWU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBpbmNvbXBsZXRlIGxpc3RcclxuZnVuY3Rpb24gaW5jb21wbGV0ZUxpc3Qoc2VsZWN0b3IsIG9wdGlvbnMpIHtcclxuXHRsZXQgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcixcclxuXHRcdCRoaWRkZW5FbHMsXHJcblx0XHQkdG9nZ2xlLFxyXG5cdFx0dmlzaWJsZUNvdW50O1xyXG5cclxuXHRjb25zdCBiYXNlQ2xhc3MgPSAnanMtaW5jb21wbGV0ZSc7XHJcblx0Y29uc3QgbGlzdENsYXNzID0gYmFzZUNsYXNzICsgJy1saXN0JztcclxuXHRjb25zdCBpdGVtQ2xhc3MgPSBiYXNlQ2xhc3MgKyAnLWl0ZW0nO1xyXG5cdGNvbnN0IGV4cGFuZGVkTGlzdENsYXNzID0gbGlzdENsYXNzICsgJy0tZXhwYW5kZWQnO1xyXG5cdGNvbnN0IGhpZGRlbkl0ZW1DbGFzcyA9IGl0ZW1DbGFzcyArICctLWhpZGUnO1xyXG5cdGNvbnN0IGJ0blRvZ2dsZUNsYXNzID0gYmFzZUNsYXNzICsgJy10b2dnbGUnO1xyXG5cdGNvbnN0IGJ0blRvZ2dsZU1vcmVDbGFzcyA9IGJ0blRvZ2dsZUNsYXNzICsgJy0tbW9yZSc7XHJcblxyXG5cdGNvbnN0IHNldHRpbmdzID0ge1xyXG5cdFx0dmlzaWJsZUJsb2NrczogOCxcclxuXHRcdHBvc2l0aW9uVG9nZ2xlOiAnb3V0c2lkZScsXHJcblx0XHRtb3JlQnRuQ29udGVudDogXCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtVwiLFxyXG5cdFx0bGVzc0J0bkNvbnRlbnQ6IFwi0KHQutGA0YvRgtGMXCIsXHJcblx0fVxyXG5cclxuXHRPYmplY3QuYXNzaWduKHNldHRpbmdzLCBvcHRpb25zKTtcclxuXHJcblx0dmlzaWJsZUNvdW50ID0gJGVsLmRhdGFzZXQuaW5jb21wbGV0ZU51bSB8fCBzZXR0aW5ncy52aXNpYmxlQmxvY2tzO1xyXG5cclxuXHRpZiAoJGVsLmNoaWxkcmVuLmxlbmd0aCA8PSArdmlzaWJsZUNvdW50KSByZXR1cm4gZmFsc2U7XHJcblxyXG5cdCRoaWRkZW5FbHMgPSBBcnJheS5mcm9tKCRlbC5jaGlsZHJlbikuZmlsdGVyKCgkaXRlbSwgaWR4KSA9PiB7XHJcblx0XHQkaXRlbS5jbGFzc0xpc3QuYWRkKGl0ZW1DbGFzcyk7XHJcblx0XHRpZiAoaWR4ID4gdmlzaWJsZUNvdW50IC0gMSkge1xyXG5cdFx0XHQkaXRlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbkl0ZW1DbGFzcyk7XHJcblx0XHRcdHJldHVybiAkaXRlbTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JHRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubW9yZUJ0bkNvbnRlbnQ7XHJcblx0JHRvZ2dsZS5jbGFzc05hbWUgPSBidG5Ub2dnbGVDbGFzcyArIFwiIFwiICsgYnRuVG9nZ2xlTW9yZUNsYXNzO1xyXG5cclxuXHRpZiAodHlwZW9mIHNldHRpbmdzLmJ0bkNsYXNzZXMgPT09ICdzdHJpbmcnKSB7XHJcblx0XHQkdG9nZ2xlLmNsYXNzTmFtZSA9IHNldHRpbmdzLmJ0bkNsYXNzZXMgKyBcIiBcIiArICR0b2dnbGUuY2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcblx0aWYgKHNldHRpbmdzLnBvc2l0aW9uVG9nZ2xlID09PSAnaW5zaWRlJykge1xyXG5cdFx0JGVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlZW5kJywgJHRvZ2dsZSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdCRlbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZWVuZCcsICR0b2dnbGUpO1xyXG5cdH1cclxuXHJcblx0JHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoJGVsLmNsYXNzTGlzdC5jb250YWlucyhleHBhbmRlZExpc3RDbGFzcykpIHtcclxuXHRcdFx0JHRvZ2dsZS5jbGFzc0xpc3QuYWRkKGJ0blRvZ2dsZU1vcmVDbGFzcyk7XHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKGV4cGFuZGVkTGlzdENsYXNzKTtcclxuXHRcdFx0JGhpZGRlbkVscy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2xhc3NMaXN0LmFkZChoaWRkZW5JdGVtQ2xhc3MpIH0pO1xyXG5cdFx0XHQkdG9nZ2xlLmlubmVySFRNTCA9IHNldHRpbmdzLm1vcmVCdG5Db250ZW50O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKGJ0blRvZ2dsZU1vcmVDbGFzcyk7XHJcblx0XHRcdCRlbC5jbGFzc0xpc3QuYWRkKGV4cGFuZGVkTGlzdENsYXNzKTtcclxuXHRcdFx0JGhpZGRlbkVscy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShoaWRkZW5JdGVtQ2xhc3MpIH0pO1xyXG5cdFx0XHQkdG9nZ2xlLmlubmVySFRNTCA9IHNldHRpbmdzLmxlc3NCdG5Db250ZW50O1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBiVGFic1xyXG5mdW5jdGlvbiBiVGFicyh0YXJnZXQpIHtcclxuXHRsZXQgX2VsZW1UYWJzID0gKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0KSxcclxuXHRcdF9ldmVudFRhYnNTaG93LFxyXG5cdFx0X3Nob3dUYWIgPSBmdW5jdGlvbiAodGFic0xpbmtUYXJnZXQpIHtcclxuXHRcdFx0dmFyIHRhYnNQYW5lVGFyZ2V0LCB0YWJzTGlua0FjdGl2ZSwgdGFic1BhbmVTaG93O1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFic0xpbmtUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG5cdFx0XHR0YWJzTGlua0FjdGl2ZSA9IHRhYnNMaW5rVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fbGluay5hY3RpdmUnKTtcclxuXHRcdFx0dGFic1BhbmVTaG93ID0gdGFic1BhbmVUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYi10YWJzX19wYW5lLmFjdGl2ZScpO1xyXG5cdFx0XHQvLyDQtdGB0LvQuCDRgdC70LXQtNGD0Y7RidCw0Y8g0LLQutC70LDQtNC60LAg0YDQsNCy0L3QsCDQsNC60YLQuNCy0L3QvtC5LCDRgtC+INC30LDQstC10YDRiNCw0LXQvCDRgNCw0LHQvtGC0YNcclxuXHRcdFx0aWYgKHRhYnNMaW5rVGFyZ2V0ID09PSB0YWJzTGlua0FjdGl2ZSkgcmV0dXJuO1xyXG5cdFx0XHQvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGB0Ysg0YMg0YLQtdC60YPRidC40YUg0LDQutGC0LjQstC90YvRhSDRjdC70LXQvNC10L3RgtC+0LJcclxuXHRcdFx0aWYgKHRhYnNMaW5rQWN0aXZlICE9PSBudWxsKSB0YWJzTGlua0FjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdGlmICh0YWJzUGFuZVNob3cgIT09IG51bGwpIHRhYnNQYW5lU2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHRiyDQuiDRjdC70LXQvNC10L3RgtCw0LwgKNCyINC30LDQstC40LzQvtGB0YLQuCDQvtGCINCy0YvQsdGA0LDQvdC90L7QuSDQstC60LvQsNC00LrQuClcclxuXHRcdFx0dGFic0xpbmtUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KF9ldmVudFRhYnNTaG93KTtcclxuXHRcdH0sXHJcblx0XHRfc3dpdGNoVGFiVG8gPSBmdW5jdGlvbiAodGFic0xpbmtJbmRleCkge1xyXG5cdFx0XHR2YXIgdGFic0xpbmtzID0gX2VsZW1UYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLXRhYnNfX2xpbmsnKTtcclxuXHRcdFx0aWYgKHRhYnNMaW5rcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0aWYgKHRhYnNMaW5rSW5kZXggPiB0YWJzTGlua3MubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0YWJzTGlua0luZGV4ID0gdGFic0xpbmtzLmxlbmd0aDtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRhYnNMaW5rSW5kZXggPCAxKSB7XHJcblx0XHRcdFx0XHR0YWJzTGlua0luZGV4ID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0X3Nob3dUYWIodGFic0xpbmtzW3RhYnNMaW5rSW5kZXggLSAxXSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdF9ldmVudFRhYnNTaG93ID0gbmV3IEN1c3RvbUV2ZW50KCd0YWIuc2hvdycsIHsgZGV0YWlsOiBfZWxlbVRhYnMgfSk7XHJcblxyXG5cdF9lbGVtVGFicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHR2YXIgdGFic0xpbmtUYXJnZXQgPSBlLnRhcmdldDtcclxuXHRcdC8vINC30LDQstC10YDRiNCw0LXQvCDQstGL0L/QvtC70L3QtdC90LjQtSDRhNGD0L3QutGG0LjQuCwg0LXRgdC70Lgg0LrQu9C40LrQvdGD0LvQuCDQvdC1INC/0L4g0YHRgdGL0LvQutC1XHJcblx0XHRpZiAoIXRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYi10YWJzX19saW5rJykpIHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRfc2hvd1RhYih0YWJzTGlua1RhcmdldCk7XHJcblx0fSk7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzaG93VGFiOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcblx0XHRcdF9zaG93VGFiKHRhcmdldCk7XHJcblx0XHR9LFxyXG5cdFx0c3dpdGNoVGFiVG86IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cdFx0XHRfc3dpdGNoVGFiVG8oaW5kZXgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5mdW5jdGlvbiBnYWxsZXJ5KHNlbGVjdG9yKSB7XHJcblx0Y29uc3QgJGdhbGxlcnkgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cclxuXHRjb25zdCAkdGh1bWJzU2xpZGVyID0gJGdhbGxlcnkucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3RodW1icycpLFxyXG5cdFx0JGZ1bGxTbGlkZXIgPSAkZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fc2xpZGVyJyk7XHJcblxyXG5cclxuXHQvKiB0aHVtYnMgKi9cclxuXHRsZXQgZ2FsbGVyeVRodW1icyA9IG5ldyBTd2lwZXIoJHRodW1ic1NsaWRlciwge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdGZyZWVNb2RlOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdHN0aWNreTogdHJ1ZSxcclxuXHRcdH0sXHJcblx0XHRrZXlib2FyZDoge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRvbmx5SW5WaWV3cG9ydDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHRtb3VzZXdoZWVsOiB0cnVlLFxyXG5cdH0pO1xyXG5cclxuXHRsZXQgZ2FsbGVyeUZ1bGwgPSBuZXcgU3dpcGVyKCRmdWxsU2xpZGVyLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHQvLyBhdXRvcGxheToge1xyXG5cdFx0Ly8gXHRkZWxheTogNTAwMFxyXG5cdFx0Ly8gfSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0cHJldkVsOiAkZnVsbFNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdG5leHRFbDogJGZ1bGxTbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tbmV4dCcpLFxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdHRodW1iczoge1xyXG5cdFx0XHRzd2lwZXI6IGdhbGxlcnlUaHVtYnMsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBmaXhlZCBibG9ja1xyXG5mdW5jdGlvbiBmaXhlZEJsb2NrKHNlbGVjdG9yLCBvcHRpb24gPSB7fSkge1xyXG5cdGNvbnN0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuXHRcdDogc2VsZWN0b3I7XHJcblx0bGV0ICRvZmZzZXRQYXJlbnQgPSBudWxsO1xyXG5cdGNvbnN0ICRoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XHJcblx0bGV0IGhlaWdodEhlYWRlciA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRsZXQgcG9pbnRvbllwb3NpdGlvbmluZyA9IDA7XHJcblx0bGV0IHRvcFBvc0VsLCB3aWR0aEVsID0gbnVsbDtcclxuXHJcblx0Y29uc3QgcGFyYW1ldHJzID0ge1xyXG5cdFx0aW5pdCgpIHtcclxuXHRcdFx0JGVsLnN0eWxlLnRvcCA9IGAke2hlaWdodEhlYWRlciArIDMwfXB4YDtcclxuXHRcdFx0Ly8gJG9mZnNldFBhcmVudCA9ICRlbC5vZmZzZXRQYXJlbnQ7XHJcblxyXG5cdFx0XHQvLyBpZiAoISRvZmZzZXRQYXJlbnQpIHJldHVybjtcclxuXHJcblx0XHRcdC8vIHRvcFBvc0VsID0gX2dldFRvcE9mZnNldCgkZWwpOyAvLyDQvdCw0YfQsNC70YzQvdC+0LUg0L/QvtC70L7QttC10L3QuNC1INGB0LLQtdGA0YXRgyDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHRgtGA0LDQvdC40YbRi1xyXG5cdFx0XHQvLyB3aWR0aEVsID0gJG9mZnNldFBhcmVudC5jbGllbnRXaWR0aDtcclxuXHRcdFx0Ly8gaGVhZGVySGVpZ2h0ID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdFx0XHQvLyBzY3JvbGxpbmdIYW5kbGVyKCk7XHJcblx0XHRcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemluZ0hhbmRsZXIpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsaW5nSGFuZGxlcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGRlc3Ryb3koKSB7XHJcblx0XHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemluZ0hhbmRsZXIpO1xyXG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsaW5nSGFuZGxlcik7XHJcblxyXG5cdFx0XHQvLyBwb2ludG9uWXBvc2l0aW9uaW5nID0gMDtcclxuXHRcdFx0Ly8gdG9wUG9zRWwsIHdpZHRoRWwsIGhlYWRlckhlaWdodCA9IG51bGw7XHJcblxyXG5cdFx0XHQvLyBpZiAoJG9mZnNldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykpICRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZml4ZWQnKVxyXG5cdFx0XHQvLyAkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3NpdGlvbmVkJyk7XHJcblx0XHRcdC8vICRlbC5jbGFzc05hbWUgPSAkZWwuY2xhc3NOYW1lLnJlcGxhY2UoL2ZpeGVkfHBvc2l0aW9uZWQvZywgJycpO1xyXG5cdFx0XHQvLyAkZWwuc3R5bGUuY3NzVGV4dCA9ICcnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVzaXppbmdIYW5kbGVyKGUpIHtcclxuXHRcdHdpZHRoRWwgPSAkb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0aGVhZGVySGVpZ2h0ID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHRcdHdpZHRoOiAke3dpZHRoRWx9cHg7XHJcblx0XHRgO1xyXG5cclxuXHRcdHNjcm9sbGluZ0hhbmRsZXIoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNjcm9sbGluZ0hhbmRsZXIoKSB7XHJcblx0XHRpZiAoaGVpZ2h0SGVhZGVyID09ICRoZWFkZXIub2Zmc2V0SGVpZ2h0KSByZXR1cm47XHJcblx0XHRoZWlnaHRIZWFkZXIgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHRcdCRlbC5zdHlsZS50b3AgPSBgJHtoZWlnaHRIZWFkZXIgKyAzMH1weGA7XHJcblx0XHQvLyBpZiAodG9wUG9zRWwgPCAod2luZG93LnBhZ2VZT2Zmc2V0ICsgaGVhZGVySGVpZ2h0KSkge1xyXG5cclxuXHRcdC8vIFx0aWYgKCEkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkge1xyXG5cdFx0Ly8gXHRcdCRlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG5cdFx0Ly8gXHRcdFx0dG9wOiAke2hlYWRlckhlaWdodH1weDtcclxuXHRcdC8vIFx0XHRcdHdpZHRoOiAke3dpZHRoRWx9cHg7XHJcblx0XHQvLyBcdFx0YDtcclxuXHJcblx0XHQvLyBcdFx0JG9mZnNldFBhcmVudC5jbGFzc0xpc3QuYWRkKCdpcy1maXhlZCcpO1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG5cdFx0Ly8gXHR9XHJcblxyXG5cdFx0Ly8gXHRpZiAoX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJGVsKSA+IF9nZXRUb3BPZmZzZXRGcm9tQm90dG9tKCRvZmZzZXRQYXJlbnQpKSB7XHJcblx0XHQvLyBcdFx0aWYgKCgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3NpdGlvbmVkJykpKSByZXR1cm47XHJcblx0XHQvLyBcdFx0cG9pbnRvbllwb3NpdGlvbmluZyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ3Bvc2l0aW9uZWQnKTtcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuXHJcblx0XHQvLyBcdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHQvLyBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHQvLyBcdFx0XHR0b3A6IGF1dG87XHJcblx0XHQvLyBcdFx0XHRib3R0b206IDBweDtcclxuXHRcdC8vIFx0XHRcdHdpZHRoOiAke3dpZHRoRWx9cHg7XHJcblx0XHQvLyBcdFx0YDtcclxuXHRcdC8vIFx0fSBlbHNlIGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3NpdGlvbmVkJykgJiYgd2luZG93LnBhZ2VZT2Zmc2V0IDw9IHBvaW50b25ZcG9zaXRpb25pbmcpIHtcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LnJlbW92ZSgncG9zaXRpb25lZCcpXHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHQvLyBcdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHQvLyBcdFx0XHR0b3A6ICR7aGVhZGVySGVpZ2h0fXB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cdFx0Ly8gXHR9XHJcblxyXG5cdFx0Ly8gfSBlbHNlIGlmICgkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkge1xyXG5cdFx0Ly8gXHQkZWwuY2xhc3NMaXN0LnJlbW92ZSgnZml4ZWQnKTtcclxuXHRcdC8vIFx0JG9mZnNldFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFRvcE9mZnNldChlKSB7XHJcblx0XHR2YXIgeSA9IDA7XHJcblx0XHRkbyB7IHkgKz0gZS5vZmZzZXRUb3A7IH0gd2hpbGUgKGUgPSBlLm9mZnNldFBhcmVudCk7XHJcblx0XHRyZXR1cm4geTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRUb3BPZmZzZXRGcm9tQm90dG9tKCRlbCkge1xyXG5cdFx0cmV0dXJuICRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcGFyYW1ldHJzXHJcbn1cclxuXHJcbi8qKioqKiogVVRJTFMgKioqKioqL1xyXG5mdW5jdGlvbiBpc0VsZW0oc2VsZWN0b3IpIHtcclxuXHRyZXR1cm4gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSA/IHRydWUgOiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gX3Rocm90dGxlKGZ1bmMsIG1zID0gMTAwKSB7XHJcblx0bGV0IGxvY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGxvY2tlZCkgcmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IGNvbnRleHQgPSB0aGlzO1xyXG5cdFx0Y29uc3QgYXJncyA9IGFyZ3VtZW50cztcclxuXHRcdGxvY2tlZCA9IHRydWU7XHJcblxyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHRcdGxvY2tlZCA9IGZhbHNlO1xyXG5cdFx0fSwgbXMpXHJcblx0fVxyXG59XHJcbiJdfQ==
