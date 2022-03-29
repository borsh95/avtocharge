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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGJyZWFrIHBvaW50cyBzaXRlXHJcbmNvbnN0IGJyZWFrUG9pbnQgPSB7XHJcblx0ZGVzY3RvcDogMTkyMCxcclxuXHRkZXNjdG9wTWlkOiAxNDUwLFxyXG5cdGRlc2N0b3BNaW46IDEyMzAsXHJcblx0dGFibGU6IDEwMjQsXHJcblx0bW9iaWxlOiA3NjgsXHJcblx0dGVsOiA0ODAsXHJcbn1cclxuXHJcbi8qKioqKiBJTklUSUFMSVpJTkcgUExVR0lOUyAqKioqKiovXHJcbmlmIChpc0VsZW0oJy5maXhibG9jaycpKSB7XHJcblx0Y29uc3QgZml4YmxvY2tOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhibG9jaycpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHticmVha1BvaW50LnRhYmxlfXB4KWApO1xyXG5cclxuXHRmb3IgKGNvbnN0IGZpeGJsb2NrIG9mIGZpeGJsb2NrTm9kZXMpIHtcclxuXHRcdGxldCBhID0gZml4ZWRCbG9jayhmaXhibG9jayk7XHJcblx0XHRsZXQgaXNJbml0ID0gZmFsc2U7XHJcblxyXG5cdFx0bWVkaWFIYW5kbGVyKCk7XHJcblxyXG5cdFx0bWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihtZWRpYUhhbmRsZXIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lZGlhSGFuZGxlcigpIHtcclxuXHRcdFx0aWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG5cdFx0XHRcdGEuaW5pdCgpO1xyXG5cdFx0XHRcdGlzSW5pdCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNJbml0KSB7XHJcblx0XHRcdFx0YS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuaWYgKHdpbmRvdy4kICYmIHR5cGVvZiB3aW5kb3cuJC5mbi5jdXN0b21TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcclxuXHQkKCdzZWxlY3QnKS5jdXN0b21TZWxlY3QoKTtcclxufVxyXG5cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zY3JvbGwtdG9baHJlZio9XCIjXCJdJykpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2Nyb2xsLXRvW2hyZWYqPVwiI1wiXScpO1xyXG5cdFx0Y29uc3QgaWQgPSBsaW5rLmhhc2g7XHJcblx0XHRjb25zdCAkc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuXHRcdGlmICghJHNlY3Rpb24pIHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuXHRcdGxldCBjb29yZHNTZWN0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgJHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRcdGNvb3Jkc1NlY3Rpb24gPSBjb29yZHNTZWN0aW9uIC0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdFx0c2Nyb2xsaW5nV2luZG93LnN0YXJ0QW1pbWF0aW9uU2Nyb2xsKGNvb3Jkc1NlY3Rpb24pO1xyXG5cdH1cclxufSlcclxuXHJcbi8vIFx0bWFpbiBzbGlkZXIgXHJcbmlmIChpc0VsZW0oJy5tYWluLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcicpO1xyXG5cclxuXHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNsaWRlck5vZGUsIHtcclxuXHRcdGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuXHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRzcGVlZDogNzAwLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0XHRyb3RhdGU6IDUwLFxyXG5cdFx0XHRzdHJldGNoOiAwLFxyXG5cdFx0XHRkZXB0aDogMTAwLFxyXG5cdFx0XHRtb2RpZmllcjogMSxcclxuXHRcdFx0c2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gcHJvZHVjdHMgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLnByb2R1Y3RzLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ3Byb2R1Y3QtY2FyZF9fYm90dG9tJyxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njk6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI1OiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI1LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIzMToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0MCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKGlzRWxlbSgnLmltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0dHlwZTogXCJmcmFjdGlvblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdFx0cHJldkVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gaGVhZGluZyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaGlkaW5nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGluZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ2J0bi1nbycsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LmRlc2N0b3BNaW4gKyAxXToge1xyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogZmFsc2UsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LmRlc2N0b3BNaWQgKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogNDMsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vL3Byb2R1Y3Rpb24gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmltYWdlLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmltYWdlLXNsaWRlcidcclxuXHRjb25zdCBwcm9kdWN0aW9uU2lsZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDbGFzcyk7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3Rpb25TbGlkZXIgPSBuZXcgU3dpcGVyKHByb2R1Y3Rpb25TaWxkZXJDb250YWluZXIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRzcGFjZUJldHdlZW46IDM1LFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyOSxcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3MDE6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdH0sXHJcblx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0aGVpZ2h0OiAyMDAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLWFyci0tbmV4dGAsXHJcblx0XHRcdHByZXZFbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1hcnItLXByZXZgLFxyXG5cdFx0fSxcclxuXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLXBhZ2luYXRpb25gLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0cHJvZHVjdGlvblNsaWRlci5vbigncmVzaXplJywgcHJvZHVjdGlvblNsaWRlci51cGRhdGUpO1xyXG59XHJcblxyXG4vL2Z1bGxzY3JlZW4gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmZ1bGwtc2NyZWVuLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmZ1bGwtc2NyZWVuLXNsaWRlcidcclxuXHRjb25zdCAkc2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNsYXNzKTtcclxuXHJcblx0bGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlckVsLCB7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAwLFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1wYWdpbmF0aW9uYCxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBhZHZhbnRhZ2VzIHNsaWRlclxyXG5pZiAoaXNFbGVtKCcuc2xpZGVyLXNtJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLXNtJyk7XHJcblxyXG5cdGZvciAoY29uc3QgJHNsaWRlciBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlciwge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwMCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5tb2JpbGUgKyAxXToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuLy9mdWxsc2NyZWVuIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5jb250ZW50LWltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckNsYXNzID0gJy5jb250ZW50LWltZy1zbGlkZXInXHJcblx0Y29uc3QgJHNsaWRlckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2xpZGVyQ2xhc3MpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRzbGlkZXJFbCBvZiAkc2xpZGVyRWxzKSB7XHJcblx0XHRsZXQgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyRWwsIHtcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyRWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyLXBhZ2luYXRpb25gKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8ganMtaW5jb21wbGV0ZS1saXN0XHJcbmlmIChpc0VsZW0oJy5jb21wYXRpYmlsaXR5LWJfX2xpc3QuanMtaW5jb21wbGV0ZS1saXN0JykpIHtcclxuXHRjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGF0aWJpbGl0eS1iX19saXN0LmpzLWluY29tcGxldGUtbGlzdCcpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRpdGVtIG9mIGxpc3RJdGVtcykge1xyXG5cdFx0aW5jb21wbGV0ZUxpc3QoJGl0ZW0sIHtcclxuXHRcdFx0YnRuQ2xhc3NlczogXCJjb21wYXRpYmlsaXR5LWJfX3RvZ2dsZVwiLFxyXG5cdFx0XHRwb3NpdGlvblRvZ2dsZTogJ2luc2lkZScsXHJcblx0XHRcdG1vcmVCdG5Db250ZW50OiBgXHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHTQldGJ0LVcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0JHt0b1N2Z1RvZ2dsZSgpfVxyXG5cdFx0XHRgLFxyXG5cdFx0XHRsZXNzQnRuQ29udGVudDogYFxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx00KHQutGA0YvRgtGMXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdCR7dG9TdmdUb2dnbGUoKX1cclxuXHRcdFx0YCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG9TdmdUb2dnbGUoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdDxzdmcgc3ZnIHZpZXdCb3ggPSBcIjAgMCA0NCAyNlwiIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiID5cclxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjIuMDAwMSAyNS4yODY3QzIyLjc3MjcgMjUuMjg2NyAyMy41NDUyIDI0Ljk5MTcgMjQuMTM0MyAyNC40MDI5TDQyLjY3MDMgNS44NjY3M0M0My44NDk0IDQuNjg3NiA0My44NDk0IDIuNzc1ODQgNDIuNjcwMyAxLjU5NzE5QzQxLjQ5MTYgMC40MTg1MzIgMzkuNTgwMiAwLjQxODUzMiAzOC40MDEgMS41OTcxOUwyMi4wMDAxIDE3Ljk5OUw1LjU5OTE0IDEuNTk3NzZDNC40MjAwMSAwLjQxOTEwOCAyLjUwODgyIDAuNDE5MTA5IDEuMzMwMjYgMS41OTc3NkMwLjE1MDU1NSAyLjc3NjQyIDAuMTUwNTU1IDQuNjg4MTggMS4zMzAyNiA1Ljg2NzMxTDE5Ljg2NiAyNC40MDM1QzIwLjQ1NTMgMjQuOTkyNCAyMS4yMjc4IDI1LjI4NjcgMjIuMDAwMSAyNS4yODY3WlwiIGZpbGw9XCJpbmhlcml0XCIgLz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRgXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyXHJcbmlmIChpc0VsZW0oJy5udW1iZXItc2xpZGVyJykpIHtcclxuXHRjb25zdCBudW1iZXJTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCBzbGlkZXIgb2YgbnVtYmVyU2xpZGVycykge1xyXG5cdFx0bnVtYmVyU2xpZGVyKHNsaWRlcik7XHJcblx0fVxyXG59XHJcblxyXG4vLyBnYWxsZXJ5IHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5nYWxsZXJ5JykpIHtcclxuXHRjb25zdCAkZ2FsbGVyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKTtcclxuXHJcblx0Zm9yIChjb25zdCAkZ2FsbGVyeSBvZiAkZ2FsbGVyaWVzKSB7XHJcblx0XHRnYWxsZXJ5KCRnYWxsZXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKioqKioqIENVU1RPTSBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9maXhlZCBoZWFkZXJcclxuaWYgKGlzRWxlbSgnaGVhZGVyJykpIHtcclxuXHRsZXQgZml4ZWRIZWFkZXIgPSBzaG93SGVhZGVyKCdoZWFkZXInKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0hlYWRlcihlbCkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgaXNGaXhlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRUb3BFbCArIDQwKSB7XHJcblx0XHRcdFx0c2hvdygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IG9mZnNldFRvcEVsIC8gMikge1xyXG5cdFx0XHRcdGZpeGVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHt9KVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9mZnNldFRvcEVsID0gJGVsLm9mZnNldEhlaWdodDtcclxuXHRcdH0pXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvdygpIHtcclxuXHRcdFx0aWYgKGlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHRcdGlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoIWlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0XHRpc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdyxcclxuXHRcdFx0Zml4ZWQsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vL0hhbWJ1cmdlciDQvtGC0LrRgNGL0YLQuNGPINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5oZWFkZXJfX2hhbWJ1cmdlcicpKSB7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckNsYXNzTmFtZSA9ICcuaGVhZGVyX19oYW1idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyLWlubmVyJztcclxuXHRjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblx0Y29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFtYnVyZ2VyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlckJsb2NrQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcklubmVyQ2xhc3NOYW1lKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoaGFtYnVyZ2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRjb25zdCBvZmZzZXRSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gJGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSAkaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGlzQWN0aXZlKSA/IGBjYWxjKDEwMHZoIC0gJHskaGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0XHR9IGVsc2UgaWYgKCRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSAmJiAhZS50YXJnZXQuY2xvc2VzdChidXJnZXJCbG9ja0NsYXNzTmFtZSkpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMzAgJiYgJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gc2VhcmNoXHJcbmlmIChpc0VsZW0oJ1tkYXRhLXNlYXJjaC10b2dnbGVdJykgJiYgaXNFbGVtKCdbZGF0YS1zZWFyY2gtcGFuZWxdJykpIHtcclxuXHRjb25zdCBwYW5lbFNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC1wYW5lbF0nO1xyXG5cdGNvbnN0IHNlYXJjaEJ0blNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC10b2dnbGVdJztcclxuXHRjb25zdCBjbG9zZVBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLWNsb3NlXSc7XHJcblx0Y29uc3QgJHNlYXJjaFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYW5lbFNlbGVjdG9yKTtcclxuXHRjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoUGFuZWwucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuXHRjb25zdCB0b2dnbGVDbGFzcyA9ICdvcGVuJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3Qoc2VhcmNoQnRuU2VsZWN0b3IpKSB7XHJcblx0XHRcdCRzZWFyY2hQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZUNsYXNzKTtcclxuXHRcdFx0JHNlYXJjaElucHV0LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KGNsb3NlUGFuZWxTZWxlY3RvcilcclxuXHRcdFx0fHwgKCFlLnRhcmdldC5jbG9zZXN0KHBhbmVsU2VsZWN0b3IpICYmICRzZWFyY2hQYW5lbC5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlQ2xhc3MpKSkge1xyXG5cdFx0XHQkc2VhcmNoUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG5cdFx0aWYgKCFldi50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdFx0XHRpZiAobWVudURyb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRtZW51RHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmlmIChpc0VsZW0oJy5iLXRhYnMnKSkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzJyk7XHJcblxyXG5cdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHJcblx0XHRiVGFicyh0YWIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gd2luZG93IG1vZGFsXHJcbmlmIChpc0VsZW0oJy52LW1vZGFsJykpIHtcclxuXHRtb2RhbFdpbmRvdygpO1xyXG59XHJcblxyXG4vLyBqcy1zZWxlY3Rpb24tc2Nyb2xsYWJsZVxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGlmIChpc0VsZW0oJy5qcy1zZWxlY3Rpb24tYnJhbmQnKSkge1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3Rpb24tYnJhbmQnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3Rpb24tYWN0aW9uJyk7XHJcblx0XHRjb25zdCB0YWJsZUJsb2NrV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1icmFuZC10YWJsZXMnKTtcclxuXHRcdGNvbnN0IHRhYmxlQmxvY2tzID0gdGFibGVCbG9ja1dyYXAucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJyYW5kLXRhYmxlcyA+IConKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHRhYmxlQmxvY2tzKSB7XHJcblx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHNlbGVjdC52YWx1ZSA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IGhhc2ggPSAnIycgKyBzZWxlY3QudmFsdWU7XHJcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0YWJsZUJsb2NrV3JhcC5xdWVyeVNlbGVjdG9yKGhhc2gpO1xyXG5cclxuXHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiB0YWJsZUJsb2Nrcykge1xyXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXNlY3Rpb24pIHJldHVybjtcclxuXHJcblx0XHRcdHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHR9KVxyXG5cdH1cclxufSgpKTtcclxuXHJcbi8vIHYtdXAg0LrQvdC+0L/QutCwINCy0LLQtdGA0YVcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0PGRpdiBjbGFzcz1cInYtdXBcIj48L2Rpdj5cclxuXHRgKTtcclxuXHJcblx0Y29uc3QgYnRuRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52LXVwJyk7XHJcblx0bGV0IHZVcFRyaWdnZXJUaW1lciA9IDA7XHJcblxyXG5cdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHJcblx0YnRuRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHNjcm9sbGluZ1dpbmRvdy5zdGFydEFtaW1hdGlvblNjcm9sbCgxKTtcclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNsZWFyVGltZW91dCh2VXBUcmlnZ2VyVGltZXIpO1xyXG5cdFx0dlVwVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHRcdH0sIDIwMClcclxuXHR9KTtcclxuXHJcblx0Ly/Qv9GA0L7Qu9C40YHRgtGL0LLQsNC40L3QtSDQvtC60L3QsCDQstCy0LXRgNGFINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDXHJcblx0ZnVuY3Rpb24gdlVwKGJ0biwgc2Nyb2xlZCkge1xyXG5cdFx0aWYgKHNjcm9sZWQoKSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2UgaWYgKHNjcm9sZWQoKSA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL9C90LAg0YHQutC+0LvRjNC60L4g0L/RgNC+0LrRgNGD0YfQtdC90L4g0L7QutC90L5cclxuXHRmdW5jdGlvbiBnZXRTY3JvbGVkV2luZG93KCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxufSgpKTtcclxuXHJcbi8vdmlkZW9cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRmaW5kVmlkZW9zKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRWaWRlb3MoKSB7XHJcblx0XHRsZXQgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvJyk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2aWRlb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c2V0dXBWaWRlbyh2aWRlb3NbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8g0LvQtdC90LjQstCw0Y8g0LfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+IFxyXG5cdGZ1bmN0aW9uIHNldHVwVmlkZW8odmlkZW8pIHtcclxuXHRcdGxldCBsaW5rID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19saW5rJyk7XHJcblx0XHRjb25zdCBocmVmTGluayA9IGxpbmsuaHJlZjtcclxuXHRcdGxldCBtZWRpYSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fbWVkaWEnKTtcclxuXHRcdGxldCBidXR0b24gPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2J1dHRvbicpO1xyXG5cdFx0bGV0IGRlbGV0ZWRMZW5ndGggPSAnaHR0cHM6Ly95b3V0dS5iZS8nLmxlbmd0aDtcclxuXHRcdGxldCB2aWRlb0lkID0gaHJlZkxpbmsuc3Vic3RyaW5nKGRlbGV0ZWRMZW5ndGgsIGhyZWZMaW5rLmxlbmd0aCk7XHJcblx0XHRsZXQgeW91dHViZUltZ1NyYyA9ICdodHRwczovL2kueXRpbWcuY29tL3ZpLycgKyB2aWRlb0lkICsgJy9tYXhyZXNkZWZhdWx0LmpwZyc7XHJcblxyXG5cdFx0bWVkaWEuc3JjID0geW91dHViZUltZ1NyYztcclxuXHRcdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRsZXQgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHZpZGVvSWQpO1xyXG5cclxuXHRcdFx0bGluay5yZW1vdmUoKTtcclxuXHRcdFx0YnV0dG9uLnJlbW92ZSgpO1xyXG5cdFx0XHR2aWRlby5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGluay5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHRcdHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLS1lbmFibGVkJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVJZnJhbWUoaWQpIHtcclxuXHRcdGxldCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHJcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XHJcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsICdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOycpO1xyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2VuZXJhdGVVUkwoaWQpKTtcclxuXHRcdGlmcmFtZS5jbGFzc0xpc3QuYWRkKCd2aWRlb19fbWVkaWEnKTtcclxuXHJcblx0XHRyZXR1cm4gaWZyYW1lO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2VuZXJhdGVVUkwoaWQpIHtcclxuXHRcdGxldCBxdWVyeSA9ICc/cmVsPTAmc2hvd2luZm89MSZhdXRvcGxheT0xJztcclxuXHJcblx0XHRyZXR1cm4gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArIHF1ZXJ5O1xyXG5cdH1cclxufSgpKTtcclxuXHJcbi8qKioqKiBGVU5DVElPTiBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9cdG1vZGFsIHdpbmRvd1xyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpIHtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0bW9kYWxFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1tb2RhbCcpLFxyXG5cdFx0YnRuT3BlbkNsYXNzTmFtZSA9IFwianMtb3Blbk1vZGFsXCIsXHJcblx0XHRidG5DbG9zZUNsYXNzTmFtZSA9ICdqcy1jbG9zZU1vZGFsJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bk9wZW5DbGFzc05hbWV9YCkgJiYgZS50YXJnZXQuZGF0YXNldC50eXBlTW9kYWwpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlTW9kYWwgPSBlLnRhcmdldC5kYXRhc2V0Wyd0eXBlTW9kYWwnXTtcclxuXHJcblx0XHRcdGZvciAobGV0ICRtb2RhbCBvZiBtb2RhbEVscykge1xyXG5cclxuXHRcdFx0XHRpZiAoJG1vZGFsLmRhdGFzZXQgJiYgJG1vZGFsLmRhdGFzZXRbJ3R5cGVNb2RhbCddID09PSB0eXBlTW9kYWwpIHtcclxuXHRcdFx0XHRcdCRtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndi1tb2RhbF9faW5uZXInKSB8fCBlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5DbG9zZUNsYXNzTmFtZX1gKSkge1xyXG5cdFx0XHRlLnRhcmdldC5jbG9zZXN0KCcudi1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8g0JzQtdC90Y4g0LTQtdGA0LXQstC+LCDQv9GA0LjQvNC10L3Rj9GC0YHRjyDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4gXHJcbi8vINC90LAgRE9NINGN0LXQu9C10LzQtdC90YLQtSB1bFxyXG5mdW5jdGlvbiB0cmVlZU1lbnUoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdGNvbnN0IGlzQWNjb3JkaW9uVHlwZSA9ICRlbC5kYXRhc2V0LnR5cGVNZW51ID09PSAnYWNjb3JkaW9uJztcclxuXHRjb25zdCBvcGVuSXRlbUNsYXNzID0gJ2pzLXRyZWUtbWVudV9faXRlbS0tb3Blbic7XHJcblxyXG5cdGNvbnN0IHNldGluZ3MgPSB7XHJcblx0XHRvcGVuSXRlbUNsYXNzOiAnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJyxcclxuXHRcdG9wZW5TZWxlY3RvcjogJy5qcy10cmVlLW1lbnVfX2J0bidcclxuXHR9XHJcblxyXG5cdCRlbC5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0ICRidG4gPSBlLnRhcmdldC5jbG9zZXN0KHNldGluZ3Mub3BlblNlbGVjdG9yKTtcclxuXHJcblx0XHRpZiAoISRidG4pIHJldHVybjtcclxuXHJcblx0XHRsZXQgJHBhcmVudEVsZW1lbnQgPSAkYnRuLmNsb3Nlc3QoJ2xpJyk7XHJcblx0XHRsZXQgJGNoaWxkcmVuQ29udGFpbmVyID0gJHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcblx0XHRpZiAoISRjaGlsZHJlbkNvbnRhaW5lcikgcmV0dXJuO1xyXG5cclxuXHRcdGNvbnN0IGlzT3BlbkN1cnJlbnRJdGVtID0gJHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHNldGluZ3Mub3Blbkl0ZW1DbGFzcyk7XHJcblxyXG5cdFx0aWYgKCFpc09wZW5DdXJyZW50SXRlbSAmJiAkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpKSB7XHJcblx0XHRcdCRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJykuY2xhc3NMaXN0LnJlbW92ZSgnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJyk7XHJcblx0XHRcdCRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19idG4uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0JHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0W2lzT3BlbkN1cnJlbnRJdGVtID8gJ3JlbW92ZScgOiAnYWRkJ10oc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHRcdCRidG4uY2xhc3NMaXN0W2lzT3BlbkN1cnJlbnRJdGVtID8gJ3JlbW92ZScgOiAnYWRkJ10oJ2FjdGl2ZScpO1xyXG5cdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICFpc09wZW5DdXJyZW50SXRlbSA/ICRjaGlsZHJlbkNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyBcInB4XCIgOiBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHRyZWVNZW51ID0gKGZ1bmN0aW9uICgpIHtcclxuXHRsZXQgJG1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRyZWUtbWVudScpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHticmVha1BvaW50LnRhYmxlfXB4KWApO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8ICRtZW51cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0c2V0dXBUcmVlTWVudSgkbWVudXNbaV0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0dXBUcmVlTWVudShzZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRjb25zdCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdFx0bGV0IG9wZW5zID0gZmFsc2U7XHJcblx0XHRjb25zdCBpc0FjY29yZGlvblR5cGUgPSAkZWwuZGF0YXNldC50eXBlTWVudSA9PT0gJ2FjY29yZGlvbic7XHJcblxyXG5cdFx0Y29uc3Qgc2V0aW5ncyA9IHtcclxuXHRcdFx0b3Blbkl0ZW1DbGFzczogJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicsXHJcblx0XHRcdG9wZW5TZWxlY3RvcjogJy5qcy10cmVlLW1lbnVfX2J0bidcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgJG1vYmlsZUNsb3NlSXRlbSA9ICRlbC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdHJlZS1tZW51X19pdGVtLS1tb2JpbGUtY2xvc2UnKTtcclxuXHJcblx0XHRmb3IgKGxldCBvcGVuSXRlbSBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNldGluZ3Mub3Blbkl0ZW1DbGFzcykpIHtcclxuXHRcdFx0Y29uc3QgJGNoaWxkcmVuVWwgPSBvcGVuSXRlbS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cdFx0XHQkY2hpbGRyZW5VbC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHRcdCRjaGlsZHJlblVsLnN0eWxlLm1pbkhlaWdodCA9ICdhdXRvJztcclxuXHRcdH1cclxuXHJcblx0XHQkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRjb25zdCAkYnRuID0gZS50YXJnZXQuY2xvc2VzdChzZXRpbmdzLm9wZW5TZWxlY3Rvcik7XHJcblx0XHRcdGlmICghJGJ0biB8fCBvcGVucykgcmV0dXJuO1xyXG5cclxuXHRcdFx0bGV0ICRwYXJlbnRFbGVtZW50ID0gJGJ0bi5jbG9zZXN0KCdsaScpO1xyXG5cdFx0XHRsZXQgJGNoaWxkcmVuQ29udGFpbmVyID0gJHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcblx0XHRcdGlmICghJGNoaWxkcmVuQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG5cdFx0XHRvcGVucyA9IHRydWU7XHJcblx0XHRcdGNvbnN0IGlzT3Blbkl0ZW0gPSAkcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHJcblx0XHRcdGlmIChpc0FjY29yZGlvblR5cGUpIHtcclxuXHRcdFx0XHRsZXQgYWN0aXZlVGhpc0xldmVsRWwgPSAkcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhhY3RpdmVUaGlzTGV2ZWxFbCk7XHJcblx0XHRcdFx0aWYgKGFjdGl2ZVRoaXNMZXZlbEVsKSB7XHJcblx0XHRcdFx0XHRhY3RpdmVUaGlzTGV2ZWxFbC5jbGFzc0xpc3QucmVtb3ZlKCdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmICghaXNBY2NvcmRpb25UeXBlICYmICRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJykpIHtcclxuXHRcdFx0Ly8gXHQkZWwucXVlcnlTZWxlY3RvcignLmpzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicpO1xyXG5cdFx0XHQvLyBcdCRlbC5xdWVyeVNlbGVjdG9yKCcuanMtdHJlZS1tZW51X19idG4uYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vIH1cclxuXHJcblx0XHRcdCRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdFtpc09wZW5JdGVtID8gJ3JlbW92ZScgOiAnYWRkJ10oc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IGlzT3Blbkl0ZW0gPyAkY2hpbGRyZW5Db250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIDogXCJcIjtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0JGNoaWxkcmVuQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9ICFpc09wZW5JdGVtID8gJGNoaWxkcmVuQ29udGFpbmVyLnNjcm9sbEhlaWdodCArIFwicHhcIiA6IFwiXCI7XHJcblx0XHRcdH0sIDEwKVxyXG5cclxuXHRcdFx0aWYgKGlzT3Blbkl0ZW0pIHtcclxuXHRcdFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdFx0b3BlbnMgPSBmYWxzZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblx0XHRcdFx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gJ2F1dG8nO1xyXG5cdFx0XHRcdFx0b3BlbnMgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCA1MDApXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblxyXG5cdFx0bW9iaWxlQ2xvc2VJdGVtKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gbW9iaWxlQ2xvc2VJdGVtKCkge1xyXG5cdFx0XHRpZiAoJG1vYmlsZUNsb3NlSXRlbS5sZW5ndGggJiYgbWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcblx0XHRcdFx0X3V0aWxzLmZvckVhY2goJG1vYmlsZUNsb3NlSXRlbSwgJGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCEkaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoc2V0aW5ncy5vcGVuSXRlbUNsYXNzKSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNoaWxkVWwgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCd1bCcpO1xyXG5cdFx0XHRcdFx0JGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG5cdFx0XHRcdFx0Y2hpbGRVbC5zdHlsZS5taW5IZWlnaHQgPSAnJztcclxuXHRcdFx0XHRcdGNoaWxkVWwuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vLyDQsNC90LjQvNCw0YbQuNGPINGB0LrRgNC+0LvQsCDQvtC60L3QsCDQsdGA0LDRg9C30LXRgNCwXHJcbmZ1bmN0aW9uIHNjcm9sbFdpbmRvdygpIHtcclxuXHRpZiAoc2Nyb2xsV2luZG93Lmluc3RhbmNlKSB7XHJcblx0XHRyZXR1cm4gZnVuYy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cdGxldCBzY3JvbGxBbmltYXRpb25JZCA9IDA7XHJcblx0bGV0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0bGV0IHNjcm9sbHMgPSBmYWxzZTtcclxuXHJcblx0ZnVuY3Rpb24gX3N0YXJ0QW1pbWF0aW9uU2Nyb2xsKG5ld1Njcm9sbFksIGNhbGxiYWNrKSB7XHJcblx0XHRpZiAoIXNjcm9sbHMpIHtcclxuXHRcdFx0Y3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0c2Nyb2xscyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0c2Nyb2xsQW5pbWF0aW9uSWQrKztcclxuXHRcdGNvbnN0IGRlbHRhU2Nyb2xsID0gKG5ld1Njcm9sbFkgLSBjdXJyZW50U2Nyb2xsKTtcclxuXHJcblx0XHRjdXJyZW50U2Nyb2xsICs9IGRlbHRhU2Nyb2xsICogMC4xNTtcclxuXHRcdHdpbmRvdy5zY3JvbGxUbygwLCBjdXJyZW50U2Nyb2xsKTtcclxuXHJcblx0XHRpZiAoTWF0aC5hYnMoZGVsdGFTY3JvbGwpID4gNSkge1xyXG5cdFx0XHRzY3JvbGxBbmltYXRpb25JZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdF9zdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZKTtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCBuZXdTY3JvbGxZKTtcclxuXHRcdFx0c3RvcEFuaW1hdGlvblNjcm9sbCgpO1xyXG5cclxuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgY2FsbGJhY2soKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHN0b3BBbmltYXRpb25TY3JvbGwoKSB7XHJcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoc2Nyb2xsQW5pbWF0aW9uSWQpO1xyXG5cdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB1bmRlZmluZWQ7XHJcblx0XHRzY3JvbGxzID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gc2Nyb2xsV2luZG93Lmluc3RhbmNlID0ge1xyXG5cdFx0Z2V0IHNjcm9sbEFuaW1hdGlvbklkKCkge1xyXG5cdFx0XHRyZXR1cm4gc2Nyb2xsQW5pbWF0aW9uSWQ7XHJcblx0XHR9LFxyXG5cdFx0c3RhcnRBbWltYXRpb25TY3JvbGwoKSB7XHJcblx0XHRcdHN0b3BBbmltYXRpb25TY3JvbGwoKTtcclxuXHRcdFx0X3N0YXJ0QW1pbWF0aW9uU2Nyb2xsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0XHR9LFxyXG5cdFx0c3RvcEFuaW1hdGlvblNjcm9sbCxcclxuXHR9XHJcbn1cclxuXHJcbi8vIG51bWJlciBzbGlkZXIgXHJcbmZ1bmN0aW9uIG51bWJlclNsaWRlcihzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRlbCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcixcclxuXHRcdCRpbnB1dCA9ICRlbC5xdWVyeVNlbGVjdG9yKCcuanMtbnVtYmVyLXNsaWRlci1pbnB1dCcpLFxyXG5cdFx0bWluVmFsdWUgPSArJGlucHV0LmdldEF0dHJpYnV0ZSgnbWluJykgfHwgMTtcclxuXHJcblx0JGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kZXIpO1xyXG5cclxuXHRmdW5jdGlvbiBjbGlja0hhbmRlcihlKSB7XHJcblx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmpzLW51bWJlci1zbGlkZXItYWRkJykpIHtcclxuXHRcdFx0Y29uc3Qgb2xkID0gK3BhcnNlRmxvYXQoJGlucHV0LnZhbHVlKSArIDE7XHJcblx0XHRcdCRpbnB1dC52YWx1ZSA9IGlzRmluaXRlKG9sZCkgPyBvbGQgOiBtaW5WYWx1ZTtcclxuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmpzLW51bWJlci1zbGlkZXItcmVkdWNlJykpIHtcclxuXHRcdFx0bGV0IG9sZFZhbHVlID0gcGFyc2VGbG9hdCgkaW5wdXQudmFsdWUpO1xyXG5cdFx0XHRpZiAoaXNOYU4ob2xkVmFsdWUpKSByZXR1cm4gJGlucHV0LnZhbHVlID0gbWluVmFsdWU7XHJcblx0XHRcdCRpbnB1dC52YWx1ZSA9IChvbGRWYWx1ZSAtIDEgPD0gbWluVmFsdWUpID8gbWluVmFsdWUgOiAtLW9sZFZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gaW5jb21wbGV0ZSBsaXN0XHJcbmZ1bmN0aW9uIGluY29tcGxldGVMaXN0KHNlbGVjdG9yLCBvcHRpb25zKSB7XHJcblx0bGV0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3IsXHJcblx0XHQkaGlkZGVuRWxzLFxyXG5cdFx0JHRvZ2dsZSxcclxuXHRcdHZpc2libGVDb3VudDtcclxuXHJcblx0Y29uc3QgYmFzZUNsYXNzID0gJ2pzLWluY29tcGxldGUnO1xyXG5cdGNvbnN0IGxpc3RDbGFzcyA9IGJhc2VDbGFzcyArICctbGlzdCc7XHJcblx0Y29uc3QgaXRlbUNsYXNzID0gYmFzZUNsYXNzICsgJy1pdGVtJztcclxuXHRjb25zdCBleHBhbmRlZExpc3RDbGFzcyA9IGxpc3RDbGFzcyArICctLWV4cGFuZGVkJztcclxuXHRjb25zdCBoaWRkZW5JdGVtQ2xhc3MgPSBpdGVtQ2xhc3MgKyAnLS1oaWRlJztcclxuXHRjb25zdCBidG5Ub2dnbGVDbGFzcyA9IGJhc2VDbGFzcyArICctdG9nZ2xlJztcclxuXHRjb25zdCBidG5Ub2dnbGVNb3JlQ2xhc3MgPSBidG5Ub2dnbGVDbGFzcyArICctLW1vcmUnO1xyXG5cclxuXHRjb25zdCBzZXR0aW5ncyA9IHtcclxuXHRcdHZpc2libGVCbG9ja3M6IDgsXHJcblx0XHRwb3NpdGlvblRvZ2dsZTogJ291dHNpZGUnLFxyXG5cdFx0bW9yZUJ0bkNvbnRlbnQ6IFwi0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcIixcclxuXHRcdGxlc3NCdG5Db250ZW50OiBcItCh0LrRgNGL0YLRjFwiLFxyXG5cdH1cclxuXHJcblx0T2JqZWN0LmFzc2lnbihzZXR0aW5ncywgb3B0aW9ucyk7XHJcblxyXG5cdHZpc2libGVDb3VudCA9ICRlbC5kYXRhc2V0LmluY29tcGxldGVOdW0gfHwgc2V0dGluZ3MudmlzaWJsZUJsb2NrcztcclxuXHJcblx0aWYgKCRlbC5jaGlsZHJlbi5sZW5ndGggPD0gK3Zpc2libGVDb3VudCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHQkaGlkZGVuRWxzID0gQXJyYXkuZnJvbSgkZWwuY2hpbGRyZW4pLmZpbHRlcigoJGl0ZW0sIGlkeCkgPT4ge1xyXG5cdFx0JGl0ZW0uY2xhc3NMaXN0LmFkZChpdGVtQ2xhc3MpO1xyXG5cdFx0aWYgKGlkeCA+IHZpc2libGVDb3VudCAtIDEpIHtcclxuXHRcdFx0JGl0ZW0uY2xhc3NMaXN0LmFkZChoaWRkZW5JdGVtQ2xhc3MpO1xyXG5cdFx0XHRyZXR1cm4gJGl0ZW07XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCR0b2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHQkdG9nZ2xlLmlubmVySFRNTCA9IHNldHRpbmdzLm1vcmVCdG5Db250ZW50O1xyXG5cdCR0b2dnbGUuY2xhc3NOYW1lID0gYnRuVG9nZ2xlQ2xhc3MgKyBcIiBcIiArIGJ0blRvZ2dsZU1vcmVDbGFzcztcclxuXHJcblx0aWYgKHR5cGVvZiBzZXR0aW5ncy5idG5DbGFzc2VzID09PSAnc3RyaW5nJykge1xyXG5cdFx0JHRvZ2dsZS5jbGFzc05hbWUgPSBzZXR0aW5ncy5idG5DbGFzc2VzICsgXCIgXCIgKyAkdG9nZ2xlLmNsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cdGlmIChzZXR0aW5ncy5wb3NpdGlvblRvZ2dsZSA9PT0gJ2luc2lkZScpIHtcclxuXHRcdCRlbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWVuZCcsICR0b2dnbGUpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVlbmQnLCAkdG9nZ2xlKTtcclxuXHR9XHJcblxyXG5cdCR0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoZXhwYW5kZWRMaXN0Q2xhc3MpKSB7XHJcblx0XHRcdCR0b2dnbGUuY2xhc3NMaXN0LmFkZChidG5Ub2dnbGVNb3JlQ2xhc3MpO1xyXG5cdFx0XHQkZWwuY2xhc3NMaXN0LnJlbW92ZShleHBhbmRlZExpc3RDbGFzcyk7XHJcblx0XHRcdCRoaWRkZW5FbHMubWFwKGl0ZW0gPT4geyBpdGVtLmNsYXNzTGlzdC5hZGQoaGlkZGVuSXRlbUNsYXNzKSB9KTtcclxuXHRcdFx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCR0b2dnbGUuY2xhc3NMaXN0LnJlbW92ZShidG5Ub2dnbGVNb3JlQ2xhc3MpO1xyXG5cdFx0XHQkZWwuY2xhc3NMaXN0LmFkZChleHBhbmRlZExpc3RDbGFzcyk7XHJcblx0XHRcdCRoaWRkZW5FbHMubWFwKGl0ZW0gPT4geyBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoaGlkZGVuSXRlbUNsYXNzKSB9KTtcclxuXHRcdFx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5sZXNzQnRuQ29udGVudDtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gYlRhYnNcclxuZnVuY3Rpb24gYlRhYnModGFyZ2V0KSB7XHJcblx0bGV0IF9lbGVtVGFicyA9ICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldCksXHJcblx0XHRfZXZlbnRUYWJzU2hvdyxcclxuXHRcdF9zaG93VGFiID0gZnVuY3Rpb24gKHRhYnNMaW5rVGFyZ2V0KSB7XHJcblx0XHRcdHZhciB0YWJzUGFuZVRhcmdldCwgdGFic0xpbmtBY3RpdmUsIHRhYnNQYW5lU2hvdztcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYnNMaW5rVGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuXHRcdFx0dGFic0xpbmtBY3RpdmUgPSB0YWJzTGlua1RhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX2xpbmsuYWN0aXZlJyk7XHJcblx0XHRcdHRhYnNQYW5lU2hvdyA9IHRhYnNQYW5lVGFyZ2V0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmItdGFic19fcGFuZS5hY3RpdmUnKTtcclxuXHRcdFx0Ly8g0LXRgdC70Lgg0YHQu9C10LTRg9GO0YnQsNGPINCy0LrQu9Cw0LTQutCwINGA0LDQstC90LAg0LDQutGC0LjQstC90L7QuSwg0YLQviDQt9Cw0LLQtdGA0YjQsNC10Lwg0YDQsNCx0L7RgtGDXHJcblx0XHRcdGlmICh0YWJzTGlua1RhcmdldCA9PT0gdGFic0xpbmtBY3RpdmUpIHJldHVybjtcclxuXHRcdFx0Ly8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINGDINGC0LXQutGD0YnQuNGFINCw0LrRgtC40LLQvdGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyXHJcblx0XHRcdGlmICh0YWJzTGlua0FjdGl2ZSAhPT0gbnVsbCkgdGFic0xpbmtBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRpZiAodGFic1BhbmVTaG93ICE9PSBudWxsKSB0YWJzUGFuZVNob3cuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdC8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGB0Ysg0Log0Y3Qu9C10LzQtdC90YLQsNC8ICjQsiDQt9Cw0LLQuNC80L7RgdGC0Lgg0L7RgiDQstGL0LHRgNCw0L3QvdC+0Lkg0LLQutC70LDQtNC60LgpXHJcblx0XHRcdHRhYnNMaW5rVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChfZXZlbnRUYWJzU2hvdyk7XHJcblx0XHR9LFxyXG5cdFx0X3N3aXRjaFRhYlRvID0gZnVuY3Rpb24gKHRhYnNMaW5rSW5kZXgpIHtcclxuXHRcdFx0dmFyIHRhYnNMaW5rcyA9IF9lbGVtVGFicy5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzX19saW5rJyk7XHJcblx0XHRcdGlmICh0YWJzTGlua3MubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdGlmICh0YWJzTGlua0luZGV4ID4gdGFic0xpbmtzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IHRhYnNMaW5rcy5sZW5ndGg7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0YWJzTGlua0luZGV4IDwgMSkge1xyXG5cdFx0XHRcdFx0dGFic0xpbmtJbmRleCA9IDE7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF9zaG93VGFiKHRhYnNMaW5rc1t0YWJzTGlua0luZGV4IC0gMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRfZXZlbnRUYWJzU2hvdyA9IG5ldyBDdXN0b21FdmVudCgndGFiLnNob3cnLCB7IGRldGFpbDogX2VsZW1UYWJzIH0pO1xyXG5cclxuXHRfZWxlbVRhYnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0dmFyIHRhYnNMaW5rVGFyZ2V0ID0gZS50YXJnZXQ7XHJcblx0XHQvLyDQt9Cw0LLQtdGA0YjQsNC10Lwg0LLRi9C/0L7Qu9C90LXQvdC40LUg0YTRg9C90LrRhtC40LgsINC10YHQu9C4INC60LvQuNC60L3Rg9C70Lgg0L3QtSDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0aWYgKCF0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ItdGFic19fbGluaycpKSByZXR1cm47XHJcblxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0X3Nob3dUYWIodGFic0xpbmtUYXJnZXQpO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvd1RhYjogZnVuY3Rpb24gKHRhcmdldCkge1xyXG5cdFx0XHRfc2hvd1RhYih0YXJnZXQpO1xyXG5cdFx0fSxcclxuXHRcdHN3aXRjaFRhYlRvOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHRcdFx0X3N3aXRjaFRhYlRvKGluZGV4KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2FsbGVyeShzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRnYWxsZXJ5ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgOiBzZWxlY3RvcjtcclxuXHJcblx0Y29uc3QgJHRodW1ic1NsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X190aHVtYnMnKSxcclxuXHRcdCRmdWxsU2xpZGVyID0gJGdhbGxlcnkucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3NsaWRlcicpO1xyXG5cclxuXHJcblx0LyogdGh1bWJzICovXHJcblx0bGV0IGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKCR0aHVtYnNTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRmcmVlTW9kZToge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRzdGlja3k6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bW91c2V3aGVlbDogdHJ1ZSxcclxuXHR9KTtcclxuXHJcblx0bGV0IGdhbGxlcnlGdWxsID0gbmV3IFN3aXBlcigkZnVsbFNsaWRlciwge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAxMCxcclxuXHRcdHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG5cdFx0Ly8gYXV0b3BsYXk6IHtcclxuXHRcdC8vIFx0ZGVsYXk6IDUwMDBcclxuXHRcdC8vIH0sXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdHByZXZFbDogJGZ1bGxTbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0XHRuZXh0RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLW5leHQnKSxcclxuXHRcdH0sXHJcblx0XHRrZXlib2FyZDoge1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRvbmx5SW5WaWV3cG9ydDogZmFsc2VcclxuXHRcdH0sXHJcblx0XHR0aHVtYnM6IHtcclxuXHRcdFx0c3dpcGVyOiBnYWxsZXJ5VGh1bWJzLFxyXG5cdFx0fSxcclxuXHR9KTtcclxufVxyXG5cclxuLy8gZml4ZWQgYmxvY2tcclxuZnVuY3Rpb24gZml4ZWRCbG9jayhzZWxlY3Rvciwgb3B0aW9uID0ge30pIHtcclxuXHRjb25zdCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXHJcblx0XHQ6IHNlbGVjdG9yO1xyXG5cdGxldCAkb2Zmc2V0UGFyZW50ID0gbnVsbDtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5cdGxldCBoZWlnaHRIZWFkZXIgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0bGV0IHBvaW50b25ZcG9zaXRpb25pbmcgPSAwO1xyXG5cdGxldCB0b3BQb3NFbCwgd2lkdGhFbCA9IG51bGw7XHJcblxyXG5cdGNvbnN0IHBhcmFtZXRycyA9IHtcclxuXHRcdGluaXQoKSB7XHJcblx0XHRcdCRlbC5zdHlsZS50b3AgPSBgJHtoZWlnaHRIZWFkZXIgKyAzMH1weGA7XHJcblx0XHRcdC8vICRvZmZzZXRQYXJlbnQgPSAkZWwub2Zmc2V0UGFyZW50O1xyXG5cclxuXHRcdFx0Ly8gaWYgKCEkb2Zmc2V0UGFyZW50KSByZXR1cm47XHJcblxyXG5cdFx0XHQvLyB0b3BQb3NFbCA9IF9nZXRUb3BPZmZzZXQoJGVsKTsgLy8g0L3QsNGH0LDQu9GM0L3QvtC1INC/0L7Qu9C+0LbQtdC90LjQtSDRgdCy0LXRgNGF0YMg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGB0YLRgNCw0L3QuNGG0YtcclxuXHRcdFx0Ly8gd2lkdGhFbCA9ICRvZmZzZXRQYXJlbnQuY2xpZW50V2lkdGg7XHJcblx0XHRcdC8vIGhlYWRlckhlaWdodCA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdFx0Ly8gc2Nyb2xsaW5nSGFuZGxlcigpO1xyXG5cdFx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXppbmdIYW5kbGVyKTtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbGluZ0hhbmRsZXIpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRkZXN0cm95KCkge1xyXG5cdFx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXppbmdIYW5kbGVyKTtcclxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbGluZ0hhbmRsZXIpO1xyXG5cclxuXHRcdFx0Ly8gcG9pbnRvbllwb3NpdGlvbmluZyA9IDA7XHJcblx0XHRcdC8vIHRvcFBvc0VsLCB3aWR0aEVsLCBoZWFkZXJIZWlnaHQgPSBudWxsO1xyXG5cclxuXHRcdFx0Ly8gaWYgKCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSAkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZpeGVkJylcclxuXHRcdFx0Ly8gJGVsLmNsYXNzTGlzdC5jb250YWlucygncG9zaXRpb25lZCcpO1xyXG5cdFx0XHQvLyAkZWwuY2xhc3NOYW1lID0gJGVsLmNsYXNzTmFtZS5yZXBsYWNlKC9maXhlZHxwb3NpdGlvbmVkL2csICcnKTtcclxuXHRcdFx0Ly8gJGVsLnN0eWxlLmNzc1RleHQgPSAnJztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlc2l6aW5nSGFuZGxlcihlKSB7XHJcblx0XHR3aWR0aEVsID0gJG9mZnNldFBhcmVudC5jbGllbnRXaWR0aDtcclxuXHRcdGhlYWRlckhlaWdodCA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cclxuXHRcdCRlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG5cdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0YDtcclxuXHJcblx0XHRzY3JvbGxpbmdIYW5kbGVyKCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzY3JvbGxpbmdIYW5kbGVyKCkge1xyXG5cdFx0aWYgKGhlaWdodEhlYWRlciA9PSAkaGVhZGVyLm9mZnNldEhlaWdodCkgcmV0dXJuO1xyXG5cdFx0aGVpZ2h0SGVhZGVyID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblx0XHQkZWwuc3R5bGUudG9wID0gYCR7aGVpZ2h0SGVhZGVyICsgMzB9cHhgO1xyXG5cdFx0Ly8gaWYgKHRvcFBvc0VsIDwgKHdpbmRvdy5wYWdlWU9mZnNldCArIGhlYWRlckhlaWdodCkpIHtcclxuXHJcblx0XHQvLyBcdGlmICghJG9mZnNldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykpIHtcclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHRvcDogJHtoZWFkZXJIZWlnaHR9cHg7XHJcblx0XHQvLyBcdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0Ly8gXHRcdGA7XHJcblxyXG5cdFx0Ly8gXHRcdCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmFkZCgnaXMtZml4ZWQnKTtcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdC8vIFx0fVxyXG5cclxuXHRcdC8vIFx0aWYgKF9nZXRUb3BPZmZzZXRGcm9tQm90dG9tKCRlbCkgPiBfZ2V0VG9wT2Zmc2V0RnJvbUJvdHRvbSgkb2Zmc2V0UGFyZW50KSkge1xyXG5cdFx0Ly8gXHRcdGlmICgoJGVsLmNsYXNzTGlzdC5jb250YWlucygncG9zaXRpb25lZCcpKSkgcmV0dXJuO1xyXG5cdFx0Ly8gXHRcdHBvaW50b25ZcG9zaXRpb25pbmcgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbmVkJyk7XHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcblxyXG5cdFx0Ly8gXHRcdCRlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG5cdFx0Ly8gXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ly8gXHRcdFx0dG9wOiBhdXRvO1xyXG5cdFx0Ly8gXHRcdFx0Ym90dG9tOiAwcHg7XHJcblx0XHQvLyBcdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0Ly8gXHRcdGA7XHJcblx0XHQvLyBcdH0gZWxzZSBpZiAoJGVsLmNsYXNzTGlzdC5jb250YWlucygncG9zaXRpb25lZCcpICYmIHdpbmRvdy5wYWdlWU9mZnNldCA8PSBwb2ludG9uWXBvc2l0aW9uaW5nKSB7XHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bvc2l0aW9uZWQnKVxyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG5cdFx0Ly8gXHRcdCRlbC5zdHlsZS5jc3NUZXh0ID0gYFxyXG5cdFx0Ly8gXHRcdFx0dG9wOiAke2hlYWRlckhlaWdodH1weDtcclxuXHRcdC8vIFx0XHRcdHdpZHRoOiAke3dpZHRoRWx9cHg7XHJcblx0XHQvLyBcdFx0YDtcclxuXHRcdC8vIFx0fVxyXG5cclxuXHRcdC8vIH0gZWxzZSBpZiAoJG9mZnNldFBhcmVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWZpeGVkJykpIHtcclxuXHRcdC8vIFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcblx0XHQvLyBcdCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZml4ZWQnKTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRUb3BPZmZzZXQoZSkge1xyXG5cdFx0dmFyIHkgPSAwO1xyXG5cdFx0ZG8geyB5ICs9IGUub2Zmc2V0VG9wOyB9IHdoaWxlIChlID0gZS5vZmZzZXRQYXJlbnQpO1xyXG5cdFx0cmV0dXJuIHk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0VG9wT2Zmc2V0RnJvbUJvdHRvbSgkZWwpIHtcclxuXHRcdHJldHVybiAkZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHBhcmFtZXRyc1xyXG59XHJcblxyXG4vKioqKioqIFVUSUxTICoqKioqKi9cclxuZnVuY3Rpb24gaXNFbGVtKHNlbGVjdG9yKSB7XHJcblx0cmV0dXJuIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF90aHJvdHRsZShmdW5jLCBtcyA9IDEwMCkge1xyXG5cdGxldCBsb2NrZWQgPSBmYWxzZTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChsb2NrZWQpIHJldHVybjtcclxuXHJcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcztcclxuXHRcdGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHRsb2NrZWQgPSB0cnVlO1xyXG5cclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHRsb2NrZWQgPSBmYWxzZTtcclxuXHRcdH0sIG1zKVxyXG5cdH1cclxufVxyXG4iXX0=
