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
function treeeMenu(selector) {
	const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
	const isAccordionType = $el.dataset.typeMenu === 'accordion';
	const openItemClass = 'js-tree-menu__item--open';

	const setings = {
		openItemClass: 'js-tree-menu__item--open',
		openSelector: '.js-tree-menu__btn'
	}

	$el.onclick = function (e) {
		const $btn = e.target.closest(setings.openSelector);

		if (!$btn) return;

		let $parentElement = $btn.closest('li');
		let $childrenContainer = $parentElement.querySelector('ul');

		if (!$childrenContainer) return;

		const isOpenCurrentItem = $parentElement.classList.contains(setings.openItemClass);

		if (!isOpenCurrentItem && $el.querySelector('.js-tree-menu__item--open')) {
			$el.querySelector('.js-tree-menu__item--open').classList.remove('js-tree-menu__item--open');
			$el.querySelector('.js-tree-menu__btn.active').classList.remove('active');
		}

		$parentElement.classList[isOpenCurrentItem ? 'remove' : 'add'](setings.openItemClass);
		$btn.classList[isOpenCurrentItem ? 'remove' : 'add']('active');
		$childrenContainer.style.minHeight = !isOpenCurrentItem ? $childrenContainer.scrollHeight + "px" : "";
	}
}

let treeMenu = (function () {
	let $menus = document.querySelectorAll('.js-tree-menu');
	const mediaQuery = window.matchMedia(`(max-width: ${breakPoint.table}px)`);

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

			if (isAccordionType) {
				let activeThisLevelEl = $parentElement.parentElement.querySelector('.js-tree-menu__item--open');
				console.log(activeThisLevelEl);
				if (activeThisLevelEl) {
					activeThisLevelEl.classList.remove('js-tree-menu__item--open');
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

		mobileCloseItem();

		function mobileCloseItem() {
			if ($mobileCloseItem.length && mediaQuery.matches) {
				_utils.forEach($mobileCloseItem, $item => {
					if (!$item.classList.contains(setings.openItemClass)) return;

					const childUl = $item.querySelector('ul');
					$item.classList.remove(setings.openItemClass);
					childUl.style.minHeight = '';
					childUl.style.height = '';
				});
			}
		}
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
