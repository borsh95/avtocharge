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

if (isElem('.js-tree-menu')) {
	const $treeMenuEls = document.querySelectorAll('.js-tree-menu');

	for (const $menu of $treeMenuEls) {
		treeMenu($menu);
	}
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
function treeMenu(selector) {
	const $el = (typeof selector === 'string') ? document.querySelector(selector) : selector;
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
		const isOpenItem = $parentElement.classList.contains(setings.openItemClass);
		$parentElement.classList[isOpenItem ? 'remove' : 'add'](setings.openItemClass);
		$btn.classList[isOpenItem ? 'remove' : 'add']('active');
		$childrenContainer.style.minHeight = !isOpenItem ? $childrenContainer.scrollHeight + "px" : "";
	}
}

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIGJyZWFrIHBvaW50cyBzaXRlXHJcbmNvbnN0IGJyZWFrUG9pbnQgPSB7XHJcblx0ZGVzY3RvcDogMTkyMCxcclxuXHRkZXNjdG9wTWlkOiAxNDUwLFxyXG5cdGRlc2N0b3BNaW46IDEyMzAsXHJcblx0dGFibGU6IDEwMjQsXHJcblx0bW9iaWxlOiA3NjgsXHJcblx0dGVsOiA0ODAsXHJcbn1cclxuXHJcbi8qKioqKiBJTklUSUFMSVpJTkcgUExVR0lOUyAqKioqKiovXHJcbmlmIChpc0VsZW0oJy5maXhibG9jaycpKSB7XHJcblx0Y29uc3QgZml4YmxvY2tOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhibG9jaycpO1xyXG5cdGNvbnN0IG1lZGlhUXVlcnkgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1pbi13aWR0aDogJHticmVha1BvaW50LnRhYmxlfXB4KWApO1xyXG5cclxuXHRmb3IgKGNvbnN0IGZpeGJsb2NrIG9mIGZpeGJsb2NrTm9kZXMpIHtcclxuXHRcdGxldCBhID0gZml4ZWRCbG9jayhmaXhibG9jayk7XHJcblx0XHRsZXQgaXNJbml0ID0gZmFsc2U7XHJcblxyXG5cdFx0bWVkaWFIYW5kbGVyKCk7XHJcblxyXG5cdFx0bWVkaWFRdWVyeS5hZGRMaXN0ZW5lcihtZWRpYUhhbmRsZXIpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIG1lZGlhSGFuZGxlcigpIHtcclxuXHRcdFx0aWYgKG1lZGlhUXVlcnkubWF0Y2hlcykge1xyXG5cdFx0XHRcdGEuaW5pdCgpO1xyXG5cdFx0XHRcdGlzSW5pdCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoaXNJbml0KSB7XHJcblx0XHRcdFx0YS5kZXN0cm95KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufVxyXG5cclxuaWYgKHdpbmRvdy4kICYmIHR5cGVvZiB3aW5kb3cuJC5mbi5jdXN0b21TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcclxuXHQkKCdzZWxlY3QnKS5jdXN0b21TZWxlY3QoKTtcclxufVxyXG5cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zY3JvbGwtdG9baHJlZio9XCIjXCJdJykpIHtcclxuXHRcdGNvbnN0IGxpbmsgPSBlLnRhcmdldC5jbG9zZXN0KCcuc2Nyb2xsLXRvW2hyZWYqPVwiI1wiXScpO1xyXG5cdFx0Y29uc3QgaWQgPSBsaW5rLmhhc2g7XHJcblx0XHRjb25zdCAkc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xyXG5cclxuXHRcdGlmICghJHNlY3Rpb24pIHJldHVybjtcclxuXHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcclxuXHRcdGxldCBjb29yZHNTZWN0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgJHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xyXG5cclxuXHRcdGNvb3Jkc1NlY3Rpb24gPSBjb29yZHNTZWN0aW9uIC0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdFx0c2Nyb2xsaW5nV2luZG93LnN0YXJ0QW1pbWF0aW9uU2Nyb2xsKGNvb3Jkc1NlY3Rpb24pO1xyXG5cdH1cclxufSlcclxuXHJcbi8vIFx0bWFpbiBzbGlkZXIgXHJcbmlmIChpc0VsZW0oJy5tYWluLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNsaWRlcicpO1xyXG5cclxuXHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKHNsaWRlck5vZGUsIHtcclxuXHRcdGVmZmVjdDogXCJjb3ZlcmZsb3dcIixcclxuXHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRzcGVlZDogNzAwLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdGNvdmVyZmxvd0VmZmVjdDoge1xyXG5cdFx0XHRyb3RhdGU6IDUwLFxyXG5cdFx0XHRzdHJldGNoOiAwLFxyXG5cdFx0XHRkZXB0aDogMTAwLFxyXG5cdFx0XHRtb2RpZmllcjogMSxcclxuXHRcdFx0c2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gcHJvZHVjdHMgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLnByb2R1Y3RzLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RzLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0Ly9sb29wOiB0cnVlLFxyXG5cdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ3Byb2R1Y3QtY2FyZF9fYm90dG9tJyxcclxuXHRcdFx0d2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcclxuXHRcdFx0d2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3Njk6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQxMDI1OiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDI1LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTIzMToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiA0MCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuaWYgKGlzRWxlbSgnLmltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWctc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0dHlwZTogXCJmcmFjdGlvblwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHRcdFx0cHJldkVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1wcmV2JyksXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8gaGVhZGluZyBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuaGlkaW5nLXNsaWRlcicpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZGluZy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdGxvb3BBZGRpdGlvbmFsU2xpZGVzOiAxLFxyXG5cdFx0XHRub1N3aXBpbmdDbGFzczogJ2J0bi1nbycsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDMwMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LmRlc2N0b3BNaW4gKyAxXToge1xyXG5cdFx0XHRcdFx0Z3JhYkN1cnNvcjogZmFsc2UsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFticmVha1BvaW50LmRlc2N0b3BNaWQgKyAxXToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogNDMsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcblxyXG4vL3Byb2R1Y3Rpb24gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmltYWdlLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmltYWdlLXNsaWRlcidcclxuXHRjb25zdCBwcm9kdWN0aW9uU2lsZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDbGFzcyk7XHJcblxyXG5cdGNvbnN0IHByb2R1Y3Rpb25TbGlkZXIgPSBuZXcgU3dpcGVyKHByb2R1Y3Rpb25TaWxkZXJDb250YWluZXIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRzcGFjZUJldHdlZW46IDM1LFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyOSxcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3MDE6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjUsXHJcblx0XHRcdH0sXHJcblx0XHRcdFticmVha1BvaW50LnRhYmxlICsgMV06IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0aGVpZ2h0OiAyMDAwLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLWFyci0tbmV4dGAsXHJcblx0XHRcdHByZXZFbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1hcnItLXByZXZgLFxyXG5cdFx0fSxcclxuXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiBgJHtzbGlkZXJDbGFzc30td3JhcCAuc2xpZGVyLXBhZ2luYXRpb25gLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9XHJcblx0fSlcclxuXHJcblx0cHJvZHVjdGlvblNsaWRlci5vbigncmVzaXplJywgcHJvZHVjdGlvblNsaWRlci51cGRhdGUpO1xyXG59XHJcblxyXG4vL2Z1bGxzY3JlZW4gc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmZ1bGwtc2NyZWVuLXNsaWRlcicpKSB7XHJcblx0Y29uc3Qgc2xpZGVyQ2xhc3MgPSAnLmZ1bGwtc2NyZWVuLXNsaWRlcidcclxuXHRjb25zdCAkc2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlckNsYXNzKTtcclxuXHJcblx0bGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlckVsLCB7XHJcblx0XHRsb29wOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAwLFxyXG5cdFx0ZHluYW1pY0J1bGxldHM6IHRydWUsXHJcblx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1wYWdpbmF0aW9uYCxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG4vLyBhZHZhbnRhZ2VzIHNsaWRlclxyXG5pZiAoaXNFbGVtKCcuc2xpZGVyLXNtJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLXNtJyk7XHJcblxyXG5cdGZvciAoY29uc3QgJHNsaWRlciBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlciwge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDIwMCxcclxuXHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5tb2JpbGUgKyAxXToge1xyXG5cdFx0XHRcdFx0ZW5hYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXIucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXBhZ2luYXRpb24nKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHR9KVxyXG5cdH1cclxufVxyXG5cclxuLy9mdWxsc2NyZWVuIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5jb250ZW50LWltZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckNsYXNzID0gJy5jb250ZW50LWltZy1zbGlkZXInXHJcblx0Y29uc3QgJHNsaWRlckVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2xpZGVyQ2xhc3MpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRzbGlkZXJFbCBvZiAkc2xpZGVyRWxzKSB7XHJcblx0XHRsZXQgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyRWwsIHtcclxuXHRcdFx0bG9vcDogdHJ1ZSxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyRWwucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyLXBhZ2luYXRpb25gKSxcclxuXHRcdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy8ganMtaW5jb21wbGV0ZS1saXN0XHJcbmlmIChpc0VsZW0oJy5jb21wYXRpYmlsaXR5LWJfX2xpc3QuanMtaW5jb21wbGV0ZS1saXN0JykpIHtcclxuXHRjb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGF0aWJpbGl0eS1iX19saXN0LmpzLWluY29tcGxldGUtbGlzdCcpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRpdGVtIG9mIGxpc3RJdGVtcykge1xyXG5cdFx0aW5jb21wbGV0ZUxpc3QoJGl0ZW0sIHtcclxuXHRcdFx0YnRuQ2xhc3NlczogXCJjb21wYXRpYmlsaXR5LWJfX3RvZ2dsZVwiLFxyXG5cdFx0XHRwb3NpdGlvblRvZ2dsZTogJ2luc2lkZScsXHJcblx0XHRcdG1vcmVCdG5Db250ZW50OiBgXHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHTQldGJ0LVcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0JHt0b1N2Z1RvZ2dsZSgpfVxyXG5cdFx0XHRgLFxyXG5cdFx0XHRsZXNzQnRuQ29udGVudDogYFxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx00KHQutGA0YvRgtGMXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdCR7dG9TdmdUb2dnbGUoKX1cclxuXHRcdFx0YCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG9TdmdUb2dnbGUoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdDxzdmcgc3ZnIHZpZXdCb3ggPSBcIjAgMCA0NCAyNlwiIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiID5cclxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjIuMDAwMSAyNS4yODY3QzIyLjc3MjcgMjUuMjg2NyAyMy41NDUyIDI0Ljk5MTcgMjQuMTM0MyAyNC40MDI5TDQyLjY3MDMgNS44NjY3M0M0My44NDk0IDQuNjg3NiA0My44NDk0IDIuNzc1ODQgNDIuNjcwMyAxLjU5NzE5QzQxLjQ5MTYgMC40MTg1MzIgMzkuNTgwMiAwLjQxODUzMiAzOC40MDEgMS41OTcxOUwyMi4wMDAxIDE3Ljk5OUw1LjU5OTE0IDEuNTk3NzZDNC40MjAwMSAwLjQxOTEwOCAyLjUwODgyIDAuNDE5MTA5IDEuMzMwMjYgMS41OTc3NkMwLjE1MDU1NSAyLjc3NjQyIDAuMTUwNTU1IDQuNjg4MTggMS4zMzAyNiA1Ljg2NzMxTDE5Ljg2NiAyNC40MDM1QzIwLjQ1NTMgMjQuOTkyNCAyMS4yMjc4IDI1LjI4NjcgMjIuMDAwMSAyNS4yODY3WlwiIGZpbGw9XCJpbmhlcml0XCIgLz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRgXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyXHJcbmlmIChpc0VsZW0oJy5udW1iZXItc2xpZGVyJykpIHtcclxuXHRjb25zdCBudW1iZXJTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCBzbGlkZXIgb2YgbnVtYmVyU2xpZGVycykge1xyXG5cdFx0bnVtYmVyU2xpZGVyKHNsaWRlcik7XHJcblx0fVxyXG59XHJcblxyXG4vLyBnYWxsZXJ5IHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5nYWxsZXJ5JykpIHtcclxuXHRjb25zdCAkZ2FsbGVyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKTtcclxuXHJcblx0Zm9yIChjb25zdCAkZ2FsbGVyeSBvZiAkZ2FsbGVyaWVzKSB7XHJcblx0XHRnYWxsZXJ5KCRnYWxsZXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKioqKioqIENVU1RPTSBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9maXhlZCBoZWFkZXJcclxuaWYgKGlzRWxlbSgnaGVhZGVyJykpIHtcclxuXHRsZXQgZml4ZWRIZWFkZXIgPSBzaG93SGVhZGVyKCdoZWFkZXInKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0hlYWRlcihlbCkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgaXNGaXhlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRUb3BFbCArIDQwKSB7XHJcblx0XHRcdFx0c2hvdygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IG9mZnNldFRvcEVsIC8gMikge1xyXG5cdFx0XHRcdGZpeGVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHt9KVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9mZnNldFRvcEVsID0gJGVsLm9mZnNldEhlaWdodDtcclxuXHRcdH0pXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvdygpIHtcclxuXHRcdFx0aWYgKGlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHRcdGlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoIWlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0XHRpc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdyxcclxuXHRcdFx0Zml4ZWQsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vL0hhbWJ1cmdlciDQvtGC0LrRgNGL0YLQuNGPINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5oZWFkZXJfX2hhbWJ1cmdlcicpKSB7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckNsYXNzTmFtZSA9ICcuaGVhZGVyX19oYW1idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyLWlubmVyJztcclxuXHRjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblx0Y29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFtYnVyZ2VyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlckJsb2NrQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcklubmVyQ2xhc3NOYW1lKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoaGFtYnVyZ2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRjb25zdCBvZmZzZXRSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gJGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSAkaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGlzQWN0aXZlKSA/IGBjYWxjKDEwMHZoIC0gJHskaGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0XHR9IGVsc2UgaWYgKCRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSAmJiAhZS50YXJnZXQuY2xvc2VzdChidXJnZXJCbG9ja0NsYXNzTmFtZSkpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMzAgJiYgJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gc2VhcmNoXHJcbmlmIChpc0VsZW0oJ1tkYXRhLXNlYXJjaC10b2dnbGVdJykgJiYgaXNFbGVtKCdbZGF0YS1zZWFyY2gtcGFuZWxdJykpIHtcclxuXHRjb25zdCBwYW5lbFNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC1wYW5lbF0nO1xyXG5cdGNvbnN0IHNlYXJjaEJ0blNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC10b2dnbGVdJztcclxuXHRjb25zdCBjbG9zZVBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLWNsb3NlXSc7XHJcblx0Y29uc3QgJHNlYXJjaFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYW5lbFNlbGVjdG9yKTtcclxuXHRjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoUGFuZWwucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuXHRjb25zdCB0b2dnbGVDbGFzcyA9ICdvcGVuJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3Qoc2VhcmNoQnRuU2VsZWN0b3IpKSB7XHJcblx0XHRcdCRzZWFyY2hQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZUNsYXNzKTtcclxuXHRcdFx0JHNlYXJjaElucHV0LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KGNsb3NlUGFuZWxTZWxlY3RvcilcclxuXHRcdFx0fHwgKCFlLnRhcmdldC5jbG9zZXN0KHBhbmVsU2VsZWN0b3IpICYmICRzZWFyY2hQYW5lbC5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlQ2xhc3MpKSkge1xyXG5cdFx0XHQkc2VhcmNoUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG5cdFx0aWYgKCFldi50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdFx0XHRpZiAobWVudURyb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRtZW51RHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmlmIChpc0VsZW0oJy5qcy10cmVlLW1lbnUnKSkge1xyXG5cdGNvbnN0ICR0cmVlTWVudUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10cmVlLW1lbnUnKTtcclxuXHJcblx0Zm9yIChjb25zdCAkbWVudSBvZiAkdHJlZU1lbnVFbHMpIHtcclxuXHRcdHRyZWVNZW51KCRtZW51KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmlmIChpc0VsZW0oJy5iLXRhYnMnKSkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzJyk7XHJcblxyXG5cdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHJcblx0XHRiVGFicyh0YWIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gd2luZG93IG1vZGFsXHJcbmlmIChpc0VsZW0oJy52LW1vZGFsJykpIHtcclxuXHRtb2RhbFdpbmRvdygpO1xyXG59XHJcblxyXG4vLyBqcy1zZWxlY3Rpb24tc2Nyb2xsYWJsZVxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGlmIChpc0VsZW0oJy5qcy1zZWxlY3Rpb24tYnJhbmQnKSkge1xyXG5cclxuXHRcdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3Rpb24tYnJhbmQnKTtcclxuXHRcdGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWxlY3Rpb24tYWN0aW9uJyk7XHJcblx0XHRjb25zdCB0YWJsZUJsb2NrV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1icmFuZC10YWJsZXMnKTtcclxuXHRcdGNvbnN0IHRhYmxlQmxvY2tzID0gdGFibGVCbG9ja1dyYXAucXVlcnlTZWxlY3RvckFsbCgnLmpzLWJyYW5kLXRhYmxlcyA+IConKTtcclxuXHJcblx0XHRmb3IgKGNvbnN0IGJsb2NrIG9mIHRhYmxlQmxvY2tzKSB7XHJcblx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHNlbGVjdC52YWx1ZSA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRcdGNvbnN0IGhhc2ggPSAnIycgKyBzZWxlY3QudmFsdWU7XHJcblx0XHRcdGNvbnN0IHNlY3Rpb24gPSB0YWJsZUJsb2NrV3JhcC5xdWVyeVNlbGVjdG9yKGhhc2gpO1xyXG5cclxuXHRcdFx0Zm9yIChjb25zdCBibG9jayBvZiB0YWJsZUJsb2Nrcykge1xyXG5cdFx0XHRcdGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIXNlY3Rpb24pIHJldHVybjtcclxuXHJcblx0XHRcdHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcblx0XHR9KVxyXG5cdH1cclxufSgpKTtcclxuXHJcbi8vIHYtdXAg0LrQvdC+0L/QutCwINCy0LLQtdGA0YVcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxyXG5cdFx0PGRpdiBjbGFzcz1cInYtdXBcIj48L2Rpdj5cclxuXHRgKTtcclxuXHJcblx0Y29uc3QgYnRuRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52LXVwJyk7XHJcblx0bGV0IHZVcFRyaWdnZXJUaW1lciA9IDA7XHJcblxyXG5cdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHJcblx0YnRuRG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHNjcm9sbGluZ1dpbmRvdy5zdGFydEFtaW1hdGlvblNjcm9sbCgxKTtcclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGNsZWFyVGltZW91dCh2VXBUcmlnZ2VyVGltZXIpO1xyXG5cdFx0dlVwVHJpZ2dlclRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHZVcChidG5Eb3duLCBnZXRTY3JvbGVkV2luZG93KTtcclxuXHRcdH0sIDIwMClcclxuXHR9KTtcclxuXHJcblx0Ly/Qv9GA0L7Qu9C40YHRgtGL0LLQsNC40L3QtSDQvtC60L3QsCDQstCy0LXRgNGFINC/0YDQuCDQutC70LjQutC1INC90LAg0LrQvdC+0L/QutGDXHJcblx0ZnVuY3Rpb24gdlVwKGJ0biwgc2Nyb2xlZCkge1xyXG5cdFx0aWYgKHNjcm9sZWQoKSA+ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHR9IGVsc2UgaWYgKHNjcm9sZWQoKSA8ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSB8fCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvL9C90LAg0YHQutC+0LvRjNC60L4g0L/RgNC+0LrRgNGD0YfQtdC90L4g0L7QutC90L5cclxuXHRmdW5jdGlvbiBnZXRTY3JvbGVkV2luZG93KCkge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cdH1cclxufSgpKTtcclxuXHJcbi8vdmlkZW9cclxuKGZ1bmN0aW9uICgpIHtcclxuXHRmaW5kVmlkZW9zKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGZpbmRWaWRlb3MoKSB7XHJcblx0XHRsZXQgdmlkZW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZGVvJyk7XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB2aWRlb3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0c2V0dXBWaWRlbyh2aWRlb3NbaV0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8g0LvQtdC90LjQstCw0Y8g0LfQsNCz0YDRg9C30LrQsCDQstC40LTQtdC+IFxyXG5cdGZ1bmN0aW9uIHNldHVwVmlkZW8odmlkZW8pIHtcclxuXHRcdGxldCBsaW5rID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19saW5rJyk7XHJcblx0XHRjb25zdCBocmVmTGluayA9IGxpbmsuaHJlZjtcclxuXHRcdGxldCBtZWRpYSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fbWVkaWEnKTtcclxuXHRcdGxldCBidXR0b24gPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2J1dHRvbicpO1xyXG5cdFx0bGV0IGRlbGV0ZWRMZW5ndGggPSAnaHR0cHM6Ly95b3V0dS5iZS8nLmxlbmd0aDtcclxuXHRcdGxldCB2aWRlb0lkID0gaHJlZkxpbmsuc3Vic3RyaW5nKGRlbGV0ZWRMZW5ndGgsIGhyZWZMaW5rLmxlbmd0aCk7XHJcblx0XHRsZXQgeW91dHViZUltZ1NyYyA9ICdodHRwczovL2kueXRpbWcuY29tL3ZpLycgKyB2aWRlb0lkICsgJy9tYXhyZXNkZWZhdWx0LmpwZyc7XHJcblxyXG5cdFx0bWVkaWEuc3JjID0geW91dHViZUltZ1NyYztcclxuXHRcdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0XHRsZXQgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHZpZGVvSWQpO1xyXG5cclxuXHRcdFx0bGluay5yZW1vdmUoKTtcclxuXHRcdFx0YnV0dG9uLnJlbW92ZSgpO1xyXG5cdFx0XHR2aWRlby5hcHBlbmRDaGlsZChpZnJhbWUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGluay5yZW1vdmVBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuXHRcdHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3ZpZGVvLS1lbmFibGVkJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVJZnJhbWUoaWQpIHtcclxuXHRcdGxldCBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuXHJcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJyk7XHJcblx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsICdhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOycpO1xyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgZ2VuZXJhdGVVUkwoaWQpKTtcclxuXHRcdGlmcmFtZS5jbGFzc0xpc3QuYWRkKCd2aWRlb19fbWVkaWEnKTtcclxuXHJcblx0XHRyZXR1cm4gaWZyYW1lO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2VuZXJhdGVVUkwoaWQpIHtcclxuXHRcdGxldCBxdWVyeSA9ICc/cmVsPTAmc2hvd2luZm89MSZhdXRvcGxheT0xJztcclxuXHJcblx0XHRyZXR1cm4gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBpZCArIHF1ZXJ5O1xyXG5cdH1cclxufSgpKTtcclxuXHJcbi8qKioqKiBGVU5DVElPTiBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9cdG1vZGFsIHdpbmRvd1xyXG5mdW5jdGlvbiBtb2RhbFdpbmRvdygpIHtcclxuXHRjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxyXG5cdFx0bW9kYWxFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudi1tb2RhbCcpLFxyXG5cdFx0YnRuT3BlbkNsYXNzTmFtZSA9IFwianMtb3Blbk1vZGFsXCIsXHJcblx0XHRidG5DbG9zZUNsYXNzTmFtZSA9ICdqcy1jbG9zZU1vZGFsJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoYC4ke2J0bk9wZW5DbGFzc05hbWV9YCkgJiYgZS50YXJnZXQuZGF0YXNldC50eXBlTW9kYWwpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRjb25zdCB0eXBlTW9kYWwgPSBlLnRhcmdldC5kYXRhc2V0Wyd0eXBlTW9kYWwnXTtcclxuXHJcblx0XHRcdGZvciAobGV0ICRtb2RhbCBvZiBtb2RhbEVscykge1xyXG5cclxuXHRcdFx0XHRpZiAoJG1vZGFsLmRhdGFzZXQgJiYgJG1vZGFsLmRhdGFzZXRbJ3R5cGVNb2RhbCddID09PSB0eXBlTW9kYWwpIHtcclxuXHRcdFx0XHRcdCRtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRjb25zdCBzY3JvbGxCYXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gYm9keS5vZmZzZXRXaWR0aDtcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHRcdFx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc2Nyb2xsQmFyV2lkdGggKyBcInB4XCI7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndi1tb2RhbF9faW5uZXInKSB8fCBlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5DbG9zZUNsYXNzTmFtZX1gKSkge1xyXG5cdFx0XHRlLnRhcmdldC5jbG9zZXN0KCcudi1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIjtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8g0JzQtdC90Y4g0LTQtdGA0LXQstC+LCDQv9GA0LjQvNC10L3Rj9GC0YHRjyDQvdC10L/QvtGB0YDQtdC00YHRgtCy0LXQvdC90L4gXHJcbi8vINC90LAgRE9NINGN0LXQu9C10LzQtdC90YLQtSB1bFxyXG5mdW5jdGlvbiB0cmVlTWVudShzZWxlY3Rvcikge1xyXG5cdGNvbnN0ICRlbCA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblx0Y29uc3Qgb3Blbkl0ZW1DbGFzcyA9ICdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nO1xyXG5cclxuXHRjb25zdCBzZXRpbmdzID0ge1xyXG5cdFx0b3Blbkl0ZW1DbGFzczogJ2pzLXRyZWUtbWVudV9faXRlbS0tb3BlbicsXHJcblx0XHRvcGVuU2VsZWN0b3I6ICcuanMtdHJlZS1tZW51X19idG4nXHJcblx0fVxyXG5cclxuXHQkZWwub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRjb25zdCAkYnRuID0gZS50YXJnZXQuY2xvc2VzdChzZXRpbmdzLm9wZW5TZWxlY3Rvcik7XHJcblx0XHRpZiAoISRidG4pIHJldHVybjtcclxuXHJcblx0XHRsZXQgJHBhcmVudEVsZW1lbnQgPSAkYnRuLmNsb3Nlc3QoJ2xpJyk7XHJcblx0XHRsZXQgJGNoaWxkcmVuQ29udGFpbmVyID0gJHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcclxuXHJcblx0XHRpZiAoISRjaGlsZHJlbkNvbnRhaW5lcikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgaXNPcGVuSXRlbSA9ICRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG5cdFx0JHBhcmVudEVsZW1lbnQuY2xhc3NMaXN0W2lzT3Blbkl0ZW0gPyAncmVtb3ZlJyA6ICdhZGQnXShzZXRpbmdzLm9wZW5JdGVtQ2xhc3MpO1xyXG5cdFx0JGJ0bi5jbGFzc0xpc3RbaXNPcGVuSXRlbSA/ICdyZW1vdmUnIDogJ2FkZCddKCdhY3RpdmUnKTtcclxuXHRcdCRjaGlsZHJlbkNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSAhaXNPcGVuSXRlbSA/ICRjaGlsZHJlbkNvbnRhaW5lci5zY3JvbGxIZWlnaHQgKyBcInB4XCIgOiBcIlwiO1xyXG5cdH1cclxufVxyXG5cclxuLy8g0LDQvdC40LzQsNGG0LjRjyDRgdC60YDQvtC70LAg0L7QutC90LAg0LHRgNCw0YPQt9C10YDQsFxyXG5mdW5jdGlvbiBzY3JvbGxXaW5kb3coKSB7XHJcblx0aWYgKHNjcm9sbFdpbmRvdy5pbnN0YW5jZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHRsZXQgc2Nyb2xsQW5pbWF0aW9uSWQgPSAwO1xyXG5cdGxldCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdGxldCBzY3JvbGxzID0gZmFsc2U7XHJcblxyXG5cdGZ1bmN0aW9uIF9zdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZLCBjYWxsYmFjaykge1xyXG5cdFx0aWYgKCFzY3JvbGxzKSB7XHJcblx0XHRcdGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblx0XHRcdHNjcm9sbHMgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkKys7XHJcblx0XHRjb25zdCBkZWx0YVNjcm9sbCA9IChuZXdTY3JvbGxZIC0gY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0Y3VycmVudFNjcm9sbCArPSBkZWx0YVNjcm9sbCAqIDAuMTU7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgY3VycmVudFNjcm9sbCk7XHJcblxyXG5cdFx0aWYgKE1hdGguYWJzKGRlbHRhU2Nyb2xsKSA+IDUpIHtcclxuXHRcdFx0c2Nyb2xsQW5pbWF0aW9uSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRfc3RhcnRBbWltYXRpb25TY3JvbGwobmV3U2Nyb2xsWSk7XHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgbmV3U2Nyb2xsWSk7XHJcblx0XHRcdHN0b3BBbmltYXRpb25TY3JvbGwoKTtcclxuXHJcblx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzdG9wQW5pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHNjcm9sbEFuaW1hdGlvbklkKTtcclxuXHRcdHNjcm9sbEFuaW1hdGlvbklkID0gdW5kZWZpbmVkO1xyXG5cdFx0c2Nyb2xscyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHNjcm9sbFdpbmRvdy5pbnN0YW5jZSA9IHtcclxuXHRcdGdldCBzY3JvbGxBbmltYXRpb25JZCgpIHtcclxuXHRcdFx0cmV0dXJuIHNjcm9sbEFuaW1hdGlvbklkO1xyXG5cdFx0fSxcclxuXHRcdHN0YXJ0QW1pbWF0aW9uU2Nyb2xsKCkge1xyXG5cdFx0XHRzdG9wQW5pbWF0aW9uU2Nyb2xsKCk7XHJcblx0XHRcdF9zdGFydEFtaW1hdGlvblNjcm9sbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0fSxcclxuXHRcdHN0b3BBbmltYXRpb25TY3JvbGwsXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyIFxyXG5mdW5jdGlvbiBudW1iZXJTbGlkZXIoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuXHRcdDogc2VsZWN0b3IsXHJcblx0XHQkaW5wdXQgPSAkZWwucXVlcnlTZWxlY3RvcignLmpzLW51bWJlci1zbGlkZXItaW5wdXQnKSxcclxuXHRcdG1pblZhbHVlID0gKyRpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDE7XHJcblxyXG5cdCRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGVyKTtcclxuXHJcblx0ZnVuY3Rpb24gY2xpY2tIYW5kZXIoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLWFkZCcpKSB7XHJcblx0XHRcdGNvbnN0IG9sZCA9ICtwYXJzZUZsb2F0KCRpbnB1dC52YWx1ZSkgKyAxO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSBpc0Zpbml0ZShvbGQpID8gb2xkIDogbWluVmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLXJlZHVjZScpKSB7XHJcblx0XHRcdGxldCBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbHVlKTtcclxuXHRcdFx0aWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuICRpbnB1dC52YWx1ZSA9IG1pblZhbHVlO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSAob2xkVmFsdWUgLSAxIDw9IG1pblZhbHVlKSA/IG1pblZhbHVlIDogLS1vbGRWYWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIGluY29tcGxldGUgbGlzdFxyXG5mdW5jdGlvbiBpbmNvbXBsZXRlTGlzdChzZWxlY3Rvciwgb3B0aW9ucykge1xyXG5cdGxldCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxyXG5cdFx0JGhpZGRlbkVscyxcclxuXHRcdCR0b2dnbGUsXHJcblx0XHR2aXNpYmxlQ291bnQ7XHJcblxyXG5cdGNvbnN0IGJhc2VDbGFzcyA9ICdqcy1pbmNvbXBsZXRlJztcclxuXHRjb25zdCBsaXN0Q2xhc3MgPSBiYXNlQ2xhc3MgKyAnLWxpc3QnO1xyXG5cdGNvbnN0IGl0ZW1DbGFzcyA9IGJhc2VDbGFzcyArICctaXRlbSc7XHJcblx0Y29uc3QgZXhwYW5kZWRMaXN0Q2xhc3MgPSBsaXN0Q2xhc3MgKyAnLS1leHBhbmRlZCc7XHJcblx0Y29uc3QgaGlkZGVuSXRlbUNsYXNzID0gaXRlbUNsYXNzICsgJy0taGlkZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlQ2xhc3MgPSBiYXNlQ2xhc3MgKyAnLXRvZ2dsZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlTW9yZUNsYXNzID0gYnRuVG9nZ2xlQ2xhc3MgKyAnLS1tb3JlJztcclxuXHJcblx0Y29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0XHR2aXNpYmxlQmxvY2tzOiA4LFxyXG5cdFx0cG9zaXRpb25Ub2dnbGU6ICdvdXRzaWRlJyxcclxuXHRcdG1vcmVCdG5Db250ZW50OiBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCIsXHJcblx0XHRsZXNzQnRuQ29udGVudDogXCLQodC60YDRi9GC0YxcIixcclxuXHR9XHJcblxyXG5cdE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIG9wdGlvbnMpO1xyXG5cclxuXHR2aXNpYmxlQ291bnQgPSAkZWwuZGF0YXNldC5pbmNvbXBsZXRlTnVtIHx8IHNldHRpbmdzLnZpc2libGVCbG9ja3M7XHJcblxyXG5cdGlmICgkZWwuY2hpbGRyZW4ubGVuZ3RoIDw9ICt2aXNpYmxlQ291bnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0JGhpZGRlbkVscyA9IEFycmF5LmZyb20oJGVsLmNoaWxkcmVuKS5maWx0ZXIoKCRpdGVtLCBpZHgpID0+IHtcclxuXHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaXRlbUNsYXNzKTtcclxuXHRcdGlmIChpZHggPiB2aXNpYmxlQ291bnQgLSAxKSB7XHJcblx0XHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaGlkZGVuSXRlbUNsYXNzKTtcclxuXHRcdFx0cmV0dXJuICRpdGVtO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHQkdG9nZ2xlLmNsYXNzTmFtZSA9IGJ0blRvZ2dsZUNsYXNzICsgXCIgXCIgKyBidG5Ub2dnbGVNb3JlQ2xhc3M7XHJcblxyXG5cdGlmICh0eXBlb2Ygc2V0dGluZ3MuYnRuQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdCR0b2dnbGUuY2xhc3NOYW1lID0gc2V0dGluZ3MuYnRuQ2xhc3NlcyArIFwiIFwiICsgJHRvZ2dsZS5jbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRpZiAoc2V0dGluZ3MucG9zaXRpb25Ub2dnbGUgPT09ICdpbnNpZGUnKSB7XHJcblx0XHQkZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCAkdG9nZ2xlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JGVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlZW5kJywgJHRvZ2dsZSk7XHJcblx0fVxyXG5cclxuXHQkdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGV4cGFuZGVkTGlzdENsYXNzKSkge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5hZGQoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubW9yZUJ0bkNvbnRlbnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubGVzc0J0bkNvbnRlbnQ7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmZ1bmN0aW9uIGJUYWJzKHRhcmdldCkge1xyXG5cdGxldCBfZWxlbVRhYnMgPSAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQpLFxyXG5cdFx0X2V2ZW50VGFic1Nob3csXHJcblx0XHRfc2hvd1RhYiA9IGZ1bmN0aW9uICh0YWJzTGlua1RhcmdldCkge1xyXG5cdFx0XHR2YXIgdGFic1BhbmVUYXJnZXQsIHRhYnNMaW5rQWN0aXZlLCB0YWJzUGFuZVNob3c7XHJcblx0XHRcdHRhYnNQYW5lVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJzTGlua1RhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcblx0XHRcdHRhYnNMaW5rQWN0aXZlID0gdGFic0xpbmtUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYi10YWJzX19saW5rLmFjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVNob3cgPSB0YWJzUGFuZVRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX3BhbmUuYWN0aXZlJyk7XHJcblx0XHRcdC8vINC10YHQu9C4INGB0LvQtdC00YPRjtGJ0LDRjyDQstC60LvQsNC00LrQsCDRgNCw0LLQvdCwINCw0LrRgtC40LLQvdC+0LksINGC0L4g0LfQsNCy0LXRgNGI0LDQtdC8INGA0LDQsdC+0YLRg1xyXG5cdFx0XHRpZiAodGFic0xpbmtUYXJnZXQgPT09IHRhYnNMaW5rQWN0aXZlKSByZXR1cm47XHJcblx0XHRcdC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRgyDRgtC10LrRg9GJ0LjRhSDQsNC60YLQuNCy0L3Ri9GFINGN0LvQtdC80LXQvdGC0L7QslxyXG5cdFx0XHRpZiAodGFic0xpbmtBY3RpdmUgIT09IG51bGwpIHRhYnNMaW5rQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0aWYgKHRhYnNQYW5lU2hvdyAhPT0gbnVsbCkgdGFic1BhbmVTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINC6INGN0LvQtdC80LXQvdGC0LDQvCAo0LIg0LfQsNCy0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0YDQsNC90L3QvtC5INCy0LrQu9Cw0LTQutC4KVxyXG5cdFx0XHR0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2V2ZW50VGFic1Nob3cpO1xyXG5cdFx0fSxcclxuXHRcdF9zd2l0Y2hUYWJUbyA9IGZ1bmN0aW9uICh0YWJzTGlua0luZGV4KSB7XHJcblx0XHRcdHZhciB0YWJzTGlua3MgPSBfZWxlbVRhYnMucXVlcnlTZWxlY3RvckFsbCgnLmItdGFic19fbGluaycpO1xyXG5cdFx0XHRpZiAodGFic0xpbmtzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFic0xpbmtJbmRleCA+IHRhYnNMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSB0YWJzTGlua3MubGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGFic0xpbmtJbmRleCA8IDEpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfc2hvd1RhYih0YWJzTGlua3NbdGFic0xpbmtJbmRleCAtIDFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0X2V2ZW50VGFic1Nob3cgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RhYi5zaG93JywgeyBkZXRhaWw6IF9lbGVtVGFicyB9KTtcclxuXHJcblx0X2VsZW1UYWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdHZhciB0YWJzTGlua1RhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0Ly8g0LfQsNCy0LXRgNGI0LDQtdC8INCy0YvQv9C+0LvQvdC10L3QuNC1INGE0YPQvdC60YbQuNC4LCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LUg0L/QviDRgdGB0YvQu9C60LVcclxuXHRcdGlmICghdGFic0xpbmtUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLXRhYnNfX2xpbmsnKSkgcmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdF9zaG93VGFiKHRhYnNMaW5rVGFyZ2V0KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHNob3dUYWI6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuXHRcdFx0X3Nob3dUYWIodGFyZ2V0KTtcclxuXHRcdH0sXHJcblx0XHRzd2l0Y2hUYWJUbzogZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdF9zd2l0Y2hUYWJUbyhpbmRleCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnkoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZ2FsbGVyeSA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblxyXG5cdGNvbnN0ICR0aHVtYnNTbGlkZXIgPSAkZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGh1bWJzJyksXHJcblx0XHQkZnVsbFNsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKTtcclxuXHJcblxyXG5cdC8qIHRodW1icyAqL1xyXG5cdGxldCBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcigkdGh1bWJzU2xpZGVyLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0c3RpY2t5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1vdXNld2hlZWw6IHRydWUsXHJcblx0fSk7XHJcblxyXG5cdGxldCBnYWxsZXJ5RnVsbCA9IG5ldyBTd2lwZXIoJGZ1bGxTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdC8vIGF1dG9wbGF5OiB7XHJcblx0XHQvLyBcdGRlbGF5OiA1MDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRwcmV2RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0bmV4dEVsOiAkZnVsbFNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzOiB7XHJcblx0XHRcdHN3aXBlcjogZ2FsbGVyeVRodW1icyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGZpeGVkIGJsb2NrXHJcbmZ1bmN0aW9uIGZpeGVkQmxvY2soc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSB7XHJcblx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcjtcclxuXHRsZXQgJG9mZnNldFBhcmVudCA9IG51bGw7XHJcblx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHRsZXQgaGVpZ2h0SGVhZGVyID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdGxldCBwb2ludG9uWXBvc2l0aW9uaW5nID0gMDtcclxuXHRsZXQgdG9wUG9zRWwsIHdpZHRoRWwgPSBudWxsO1xyXG5cclxuXHRjb25zdCBwYXJhbWV0cnMgPSB7XHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHQkZWwuc3R5bGUudG9wID0gYCR7aGVpZ2h0SGVhZGVyICsgMzB9cHhgO1xyXG5cdFx0XHQvLyAkb2Zmc2V0UGFyZW50ID0gJGVsLm9mZnNldFBhcmVudDtcclxuXHJcblx0XHRcdC8vIGlmICghJG9mZnNldFBhcmVudCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Ly8gdG9wUG9zRWwgPSBfZ2V0VG9wT2Zmc2V0KCRlbCk7IC8vINC90LDRh9Cw0LvRjNC90L7QtSDQv9C+0LvQvtC20LXQvdC40LUg0YHQstC10YDRhdGDINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdC8vIHdpZHRoRWwgPSAkb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHQvLyBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRcdC8vIHNjcm9sbGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVzdHJveSgpIHtcclxuXHRcdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHJcblx0XHRcdC8vIHBvaW50b25ZcG9zaXRpb25pbmcgPSAwO1xyXG5cdFx0XHQvLyB0b3BQb3NFbCwgd2lkdGhFbCwgaGVhZGVySGVpZ2h0ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmICgkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkgJG9mZnNldFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpXHJcblx0XHRcdC8vICRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKTtcclxuXHRcdFx0Ly8gJGVsLmNsYXNzTmFtZSA9ICRlbC5jbGFzc05hbWUucmVwbGFjZSgvZml4ZWR8cG9zaXRpb25lZC9nLCAnJyk7XHJcblx0XHRcdC8vICRlbC5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZXNpemluZ0hhbmRsZXIoZSkge1xyXG5cdFx0d2lkdGhFbCA9ICRvZmZzZXRQYXJlbnQuY2xpZW50V2lkdGg7XHJcblx0XHRoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdGA7XHJcblxyXG5cdFx0c2Nyb2xsaW5nSGFuZGxlcigpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2Nyb2xsaW5nSGFuZGxlcigpIHtcclxuXHRcdGlmIChoZWlnaHRIZWFkZXIgPT0gJGhlYWRlci5vZmZzZXRIZWlnaHQpIHJldHVybjtcclxuXHRcdGhlaWdodEhlYWRlciA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0JGVsLnN0eWxlLnRvcCA9IGAke2hlaWdodEhlYWRlciArIDMwfXB4YDtcclxuXHRcdC8vIGlmICh0b3BQb3NFbCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyBoZWFkZXJIZWlnaHQpKSB7XHJcblxyXG5cdFx0Ly8gXHRpZiAoISRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHQvLyBcdFx0XHR0b3A6ICR7aGVhZGVySGVpZ2h0fXB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cclxuXHRcdC8vIFx0XHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyBcdGlmIChfZ2V0VG9wT2Zmc2V0RnJvbUJvdHRvbSgkZWwpID4gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJG9mZnNldFBhcmVudCkpIHtcclxuXHRcdC8vIFx0XHRpZiAoKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSkpIHJldHVybjtcclxuXHRcdC8vIFx0XHRwb2ludG9uWXBvc2l0aW9uaW5nID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdC8vIFx0XHRcdHRvcDogYXV0bztcclxuXHRcdC8vIFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cdFx0Ly8gXHR9IGVsc2UgaWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gcG9pbnRvbllwb3NpdGlvbmluZykge1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3NpdGlvbmVkJylcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHRvcDogJHtoZWFkZXJIZWlnaHR9cHg7XHJcblx0XHQvLyBcdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0Ly8gXHRcdGA7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyB9IGVsc2UgaWYgKCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0Ly8gXHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0VG9wT2Zmc2V0KGUpIHtcclxuXHRcdHZhciB5ID0gMDtcclxuXHRcdGRvIHsgeSArPSBlLm9mZnNldFRvcDsgfSB3aGlsZSAoZSA9IGUub2Zmc2V0UGFyZW50KTtcclxuXHRcdHJldHVybiB5O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJGVsKSB7XHJcblx0XHRyZXR1cm4gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJhbWV0cnNcclxufVxyXG5cclxuLyoqKioqKiBVVElMUyAqKioqKiovXHJcbmZ1bmN0aW9uIGlzRWxlbShzZWxlY3Rvcikge1xyXG5cdHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfdGhyb3R0bGUoZnVuYywgbXMgPSAxMDApIHtcclxuXHRsZXQgbG9ja2VkID0gZmFsc2U7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAobG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XHJcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0bG9ja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0bG9ja2VkID0gZmFsc2U7XHJcblx0XHR9LCBtcylcclxuXHR9XHJcbn1cclxuIl19
