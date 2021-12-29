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

if ($ && typeof $.fn.customSelect === 'function') {
	$('select').customSelect();
}

// скрол страницы к нужной координате
let scrollingWindow = scrollWindow();

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
if (isElem('.compatibility-b .js-incomplete-list')) {
	const listItems = document.querySelectorAll('.compatibility-b .js-incomplete-list');

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
	let scrollAnimationId;
	let currentScroll = window.pageYOffset;
	let scrolls = false;

	function startAmimationScroll(newScrollY) {
		if (!scrolls) {
			currentScroll = window.pageYOffset;
			scrolls = true;
		}

		const deltaScroll = (newScrollY - currentScroll);

		currentScroll += deltaScroll * 0.15;
		window.scrollTo(0, currentScroll);

		if (Math.abs(deltaScroll) > 5) {
			scrollAnimationId = window.requestAnimationFrame(function () {
				startAmimationScroll(newScrollY);
			})
		} else {
			window.scrollTo(0, newScrollY);
			stopAnimationScroll();
			scrolls = false;
		}
	}

	function stopAnimationScroll() {
		window.cancelAnimationFrame(scrollAnimationId);
		scrollAnimationId = undefined;
	}

	return {
		startAmimationScroll,
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


var snowStorm = (function (window, document) {
	let that = {},
		features,
		// UA sniffing and backCompat rendering mode checks for fixed position, etc.
		isIE = navigator.userAgent.match(/msie/i),
		isIE6 = navigator.userAgent.match(/msie 6/i),
		isMobile = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
		isBackCompatIE = (isIE && document.compatMode === 'BackCompat'),
		noFixed = (isBackCompatIE || isIE6),
		screenX = null, screenX2 = null, screenY = null, scrollY = null, docHeight = null, vRndX = null, vRndY = null,
		windOffset = 1,
		windMultiplier = 2,
		flakeTypes = 6,
		fixedForEverything = false,
		targetElementIsRelative = false,
		opacitySupported = (function () {
			try {
				document.createElement('div').style.opacity = '0.5';
			} catch (e) {
				return false;
			}
			return true;
		}()),
		didInit = false,
		docFrag = document.createDocumentFragment();
	// --- common properties ---

	that.autoStart = true;          // Whether the snow should start automatically or not.
	that.excludeMobile = false;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) Enable at your own risk.
	that.flakesMax = 128;           // Limit total amount of snow made (falling + sticking)
	that.flakesMaxActive = 64;      // Limit amount of snow falling at once (less = lower CPU use)
	that.animationInterval = 50;    // Theoretical "miliseconds per frame" measurement. 20 = fast + smooth, but high CPU use. 50 = more conservative, but slower
	that.useGPU = true;             // Enable transform-based hardware acceleration, reduce CPU load.
	that.className = 'snow';          // CSS class name for further customization on snow elements
	that.excludeMobile = true;      // Snow is likely to be bad news for mobile phones' CPUs (and batteries.) By default, be nice.
	that.flakeBottom = null;        // Integer for Y axis snow limit, 0 or null for "full-screen" snow effect
	that.followMouse = false;        // Snow movement can respond to the user's mouse
	that.snowColor = '#fff';        // Don't eat (or use?) yellow snow.
	that.snowCharacter = '&bull;';  // &bull; = bullet, &middot; is square on some systems etc.
	that.snowStick = true;          // Whether or not snow should "stick" at the bottom. When off, will never collect.
	that.targetElement = null;      // element which snow will be appended to (null = document.body) - can be an element ID eg. 'myDiv', or a DOM node reference
	that.useMeltEffect = true;      // When recycling fallen snow (or rarely, when falling), have it "melt" and fade out if browser supports it
	that.useTwinkleEffect = false;  // Allow snow to randomly "flicker" in and out of view while falling
	that.usePositionFixed = false;  // true = snow does not shift vertically when scrolling. May increase CPU load, disabled by default - if enabled, used only where supported
	that.usePixelPosition = false;  // Whether to use pixel values for snow top/left vs. percentages. Auto-enabled if body is position:relative or targetElement is specified.

	// --- less-used bits ---

	that.freezeOnBlur = true;       // Only snow when the window is in focus (foreground.) Saves CPU.
	that.flakeLeftOffset = 0;       // Left margin/gutter space on edge of container (eg. browser window.) Bump up these values if seeing horizontal scrollbars.
	that.flakeRightOffset = 0;      // Right margin/gutter space on edge of container
	that.flakeWidth = 8;            // Max pixel width reserved for snow element
	that.flakeHeight = 8;           // Max pixel height reserved for snow element
	that.vMaxX = 5;                 // Maximum X velocity range for snow
	that.vMaxY = 4;                 // Maximum Y velocity range for snow
	that.zIndex = 0;                // CSS stacking order applied to each snowflake	

	features = (function () {

		var getAnimationFrame;

		/**
		 * hat tip: paul irish
		 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		 * https://gist.github.com/838785
		 */

		function timeoutShim(callback) {
			window.setTimeout(callback, 1000 / (that.animationInterval || 20));
		}

		var _animationFrame = (window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			timeoutShim);

		// apply to window, avoid "illegal invocation" errors in Chrome
		getAnimationFrame = _animationFrame ? function () {
			return _animationFrame.apply(window, arguments);
		} : null;

		var testDiv;

		testDiv = document.createElement('div');

		function has(prop) {

			// test for feature support
			var result = testDiv.style[prop];
			return (result !== undefined ? prop : null);

		}

		// note local scope.
		var localFeatures = {

			transform: {
				ie: has('-ms-transform'),
				moz: has('MozTransform'),
				opera: has('OTransform'),
				webkit: has('webkitTransform'),
				w3: has('transform'),
				prop: null // the normalized property value
			},

			getAnimationFrame: getAnimationFrame

		};

		localFeatures.transform.prop = (
			localFeatures.transform.w3 ||
			localFeatures.transform.moz ||
			localFeatures.transform.webkit ||
			localFeatures.transform.ie ||
			localFeatures.transform.opera
		);

		testDiv = null;

		return localFeatures;

	}());

	that.timer = null;
	that.flakes = [];
	that.disabled = false;
	that.active = false;
	that.meltFrameCount = 20;
	that.meltFrames = [];

	that.setXY = function (o, x, y) {

		if (!o) {
			return false;
		}

		if (that.usePixelPosition || targetElementIsRelative) {

			o.style.left = (x - that.flakeWidth) + 'px';
			o.style.top = (y - that.flakeHeight) + 'px';

		} else if (noFixed) {

			o.style.right = (100 - (x / screenX * 100)) + '%';
			// avoid creating vertical scrollbars
			o.style.top = (Math.min(y, docHeight - that.flakeHeight)) + 'px';

		} else {

			if (!that.flakeBottom) {

				// if not using a fixed bottom coordinate...
				o.style.right = (100 - (x / screenX * 100)) + '%';
				o.style.bottom = (100 - (y / screenY * 100)) + '%';

			} else {

				// absolute top.
				o.style.right = (100 - (x / screenX * 100)) + '%';
				o.style.top = (Math.min(y, docHeight - that.flakeHeight)) + 'px';

			}

		}

	};

	that.events = (function () {

		var old = (!window.addEventListener && window.attachEvent), slice = Array.prototype.slice,
			evt = {
				add: (old ? 'attachEvent' : 'addEventListener'),
				remove: (old ? 'detachEvent' : 'removeEventListener')
			};

		function getArgs(oArgs) {
			var args = slice.call(oArgs), len = args.length;
			if (old) {
				args[1] = 'on' + args[1]; // prefix
				if (len > 3) {
					args.pop(); // no capture
				}
			} else if (len === 3) {
				args.push(false);
			}
			return args;
		}

		function apply(args, sType) {
			var element = args.shift(),
				method = [evt[sType]];
			if (old) {
				element[method](args[0], args[1]);
			} else {
				element[method].apply(element, args);
			}
		}

		function addEvent() {
			apply(getArgs(arguments), 'add');
		}

		function removeEvent() {
			apply(getArgs(arguments), 'remove');
		}

		return {
			add: addEvent,
			remove: removeEvent
		};

	}());

	function rnd(n, min) {
		if (isNaN(min)) {
			min = 0;
		}
		return (Math.random() * n) + min;
	}

	function plusMinus(n) {
		return (parseInt(rnd(2), 10) === 1 ? n * -1 : n);
	}

	that.randomizeWind = function () {
		var i;
		vRndX = plusMinus(rnd(that.vMaxX, 0.2));
		vRndY = rnd(that.vMaxY, 0.2);
		if (this.flakes) {
			for (i = 0; i < this.flakes.length; i++) {
				if (this.flakes[i].active) {
					this.flakes[i].setVelocities();
				}
			}
		}
	};

	that.scrollHandler = function () {
		var i;
		// "attach" snowflakes to bottom of window if no absolute bottom value was given
		scrollY = (that.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || (noFixed ? document.body.scrollTop : 0), 10));
		if (isNaN(scrollY)) {
			scrollY = 0; // Netscape 6 scroll fix
		}
		if (!fixedForEverything && !that.flakeBottom && that.flakes) {
			for (i = 0; i < that.flakes.length; i++) {
				if (that.flakes[i].active === 0) {
					that.flakes[i].stick();
				}
			}
		}
	};

	that.resizeHandler = function () {
		if (window.innerWidth || window.innerHeight) {
			screenX = window.innerWidth - 16 - that.flakeRightOffset;
			screenY = (that.flakeBottom || window.innerHeight);
		} else {
			screenX = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (!isIE ? 8 : 0) - that.flakeRightOffset;
			screenY = that.flakeBottom || document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight;
		}
		docHeight = document.body.offsetHeight;
		screenX2 = parseInt(screenX / 2, 10);
	};

	that.resizeHandlerAlt = function () {
		screenX = that.targetElement.offsetWidth - that.flakeRightOffset;
		screenY = that.flakeBottom || that.targetElement.offsetHeight;
		screenX2 = parseInt(screenX / 2, 10);
		docHeight = document.body.offsetHeight;
	};

	that.freeze = function () {
		// pause animation
		if (!that.disabled) {
			that.disabled = 1;
		} else {
			return false;
		}
		that.timer = null;
	};

	that.resume = function () {
		if (that.disabled) {
			that.disabled = 0;
		} else {
			return false;
		}
		that.timerInit();
	};

	that.toggleSnow = function () {
		if (!that.flakes.length) {
			// first run
			that.start();
		} else {
			that.active = !that.active;
			if (that.active) {
				that.show();
				that.resume();
			} else {
				that.stop();
				that.freeze();
			}
		}
	};

	that.stop = function () {
		var i;
		this.freeze();
		for (i = 0; i < this.flakes.length; i++) {
			this.flakes[i].o.style.display = 'none';
		}
		that.events.remove(window, 'scroll', that.scrollHandler);
		that.events.remove(window, 'resize', that.resizeHandler);
		if (that.freezeOnBlur) {
			if (isIE) {
				that.events.remove(document, 'focusout', that.freeze);
				that.events.remove(document, 'focusin', that.resume);
			} else {
				that.events.remove(window, 'blur', that.freeze);
				that.events.remove(window, 'focus', that.resume);
			}
		}
	};

	that.show = function () {
		var i;
		for (i = 0; i < this.flakes.length; i++) {
			this.flakes[i].o.style.display = 'block';
		}
	};

	that.SnowFlake = function (type, x, y) {
		var s = this;
		this.type = type;
		this.x = x || parseInt(rnd(screenX - 20), 10);
		this.y = (!isNaN(y) ? y : -rnd(screenY) - 12);
		this.vX = null;
		this.vY = null;
		this.vAmpTypes = [1, 1.2, 1.4, 1.6, 1.8]; // "amplification" for vX/vY (based on flake size/type)
		this.vAmp = this.vAmpTypes[this.type] || 1;
		this.melting = false;
		this.meltFrameCount = that.meltFrameCount;
		this.meltFrames = that.meltFrames;
		this.meltFrame = 0;
		this.twinkleFrame = 0;
		this.active = 1;
		this.fontSize = (10 + (this.type / 5) * 10);
		this.o = document.createElement('div');
		this.o.innerHTML = that.snowCharacter;
		if (that.className) {
			this.o.setAttribute('class', that.className);
		}
		this.o.style.color = that.snowColor;
		this.o.style.position = (fixedForEverything ? 'fixed' : 'absolute');
		if (that.useGPU && features.transform.prop) {
			// GPU-accelerated snow.
			this.o.style[features.transform.prop] = 'translate3d(0px, 0px, 0px)';
		}
		this.o.style.width = that.flakeWidth + 'px';
		this.o.style.height = that.flakeHeight + 'px';
		this.o.style.fontFamily = 'arial,verdana';
		this.o.style.cursor = 'default';
		this.o.style.overflow = 'hidden';
		this.o.style.fontWeight = 'normal';
		this.o.style.zIndex = that.zIndex;
		docFrag.appendChild(this.o);

		this.refresh = function () {
			if (isNaN(s.x) || isNaN(s.y)) {
				// safety check
				return false;
			}
			that.setXY(s.o, s.x, s.y);
		};

		this.stick = function () {
			if (noFixed || (that.targetElement !== document.documentElement && that.targetElement !== document.body)) {
				s.o.style.top = (screenY + scrollY - that.flakeHeight) + 'px';
			} else if (that.flakeBottom) {
				s.o.style.top = that.flakeBottom + 'px';
			} else {
				s.o.style.display = 'none';
				s.o.style.bottom = '0%';
				s.o.style.position = 'fixed';
				s.o.style.display = 'block';
			}
		};

		this.vCheck = function () {
			if (s.vX >= 0 && s.vX < 0.2) {
				s.vX = 0.2;
			} else if (s.vX < 0 && s.vX > -0.2) {
				s.vX = -0.2;
			}
			if (s.vY >= 0 && s.vY < 0.2) {
				s.vY = 0.2;
			}
		};

		this.move = function () {
			var vX = s.vX * windOffset, yDiff;
			s.x += vX;
			s.y += (s.vY * s.vAmp);
			if (s.x >= screenX || screenX - s.x < that.flakeWidth) { // X-axis scroll check
				s.x = 0;
			} else if (vX < 0 && s.x - that.flakeLeftOffset < -that.flakeWidth) {
				s.x = screenX - that.flakeWidth - 1; // flakeWidth;
			}
			s.refresh();
			yDiff = screenY + scrollY - s.y + that.flakeHeight;
			if (yDiff < that.flakeHeight) {
				s.active = 0;
				if (that.snowStick) {
					s.stick();
				} else {
					s.recycle();
				}
			} else {
				if (that.useMeltEffect && s.active && s.type < 3 && !s.melting && Math.random() > 0.998) {
					// ~1/1000 chance of melting mid-air, with each frame
					s.melting = true;
					s.melt();
					// only incrementally melt one frame
					// s.melting = false;
				}
				if (that.useTwinkleEffect) {
					if (s.twinkleFrame < 0) {
						if (Math.random() > 0.97) {
							s.twinkleFrame = parseInt(Math.random() * 8, 10);
						}
					} else {
						s.twinkleFrame--;
						if (!opacitySupported) {
							s.o.style.visibility = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 'hidden' : 'visible');
						} else {
							s.o.style.opacity = (s.twinkleFrame && s.twinkleFrame % 2 === 0 ? 0 : 1);
						}
					}
				}
			}
		};

		this.animate = function () {
			// main animation loop
			// move, check status, die etc.
			s.move();
		};

		this.setVelocities = function () {
			s.vX = vRndX + rnd(that.vMaxX * 0.12, 0.1);
			s.vY = vRndY + rnd(that.vMaxY * 0.12, 0.1);
		};

		this.setOpacity = function (o, opacity) {
			if (!opacitySupported) {
				return false;
			}
			o.style.opacity = opacity;
		};

		this.melt = function () {
			if (!that.useMeltEffect || !s.melting) {
				s.recycle();
			} else {
				if (s.meltFrame < s.meltFrameCount) {
					s.setOpacity(s.o, s.meltFrames[s.meltFrame]);
					s.o.style.fontSize = s.fontSize - (s.fontSize * (s.meltFrame / s.meltFrameCount)) + 'px';
					s.o.style.lineHeight = that.flakeHeight + 2 + (that.flakeHeight * 0.75 * (s.meltFrame / s.meltFrameCount)) + 'px';
					s.meltFrame++;
				} else {
					s.recycle();
				}
			}
		};

		this.recycle = function () {
			s.o.style.display = 'none';
			s.o.style.position = (fixedForEverything ? 'fixed' : 'absolute');
			s.o.style.bottom = 'auto';
			s.setVelocities();
			s.vCheck();
			s.meltFrame = 0;
			s.melting = false;
			s.setOpacity(s.o, 1);
			s.o.style.padding = '0px';
			s.o.style.margin = '0px';
			s.o.style.fontSize = s.fontSize + 'px';
			s.o.style.lineHeight = (that.flakeHeight + 2) + 'px';
			s.o.style.textAlign = 'center';
			s.o.style.verticalAlign = 'baseline';
			s.x = parseInt(rnd(screenX - that.flakeWidth - 20), 10);
			s.y = parseInt(rnd(screenY) * -1, 10) - that.flakeHeight;
			s.refresh();
			s.o.style.display = 'block';
			s.active = 1;
		};

		this.recycle(); // set up x/y coords etc.
		this.refresh();

	};

	that.snow = function () {
		var active = 0, flake = null, i, j;
		for (i = 0, j = that.flakes.length; i < j; i++) {
			if (that.flakes[i].active === 1) {
				that.flakes[i].move();
				active++;
			}
			if (that.flakes[i].melting) {
				that.flakes[i].melt();
			}
		}
		if (active < that.flakesMaxActive) {
			flake = that.flakes[parseInt(rnd(that.flakes.length), 10)];
			if (flake.active === 0) {
				flake.melting = true;
			}
		}
		if (that.timer) {
			features.getAnimationFrame(that.snow);
		}
	};

	that.mouseMove = function (e) {
		if (!that.followMouse) {
			return true;
		}
		var x = parseInt(e.clientX, 10);
		if (x < screenX2) {
			windOffset = -windMultiplier + (x / screenX2 * windMultiplier);
		} else {
			x -= screenX2;
			windOffset = (x / screenX2) * windMultiplier;
		}
	};

	that.createSnow = function (limit, allowInactive) {
		var i;
		for (i = 0; i < limit; i++) {
			that.flakes[that.flakes.length] = new that.SnowFlake(parseInt(rnd(flakeTypes), 10));
			if (allowInactive || i > that.flakesMaxActive) {
				that.flakes[that.flakes.length - 1].active = -1;
			}
		}
		that.targetElement.appendChild(docFrag);
	};

	that.timerInit = function () {
		that.timer = true;
		that.snow();
	};

	that.init = function () {
		var i;
		for (i = 0; i < that.meltFrameCount; i++) {
			that.meltFrames.push(1 - (i / that.meltFrameCount));
		}
		that.randomizeWind();
		that.createSnow(that.flakesMax); // create initial batch
		that.events.add(window, 'resize', that.resizeHandler);
		that.events.add(window, 'scroll', that.scrollHandler);
		if (that.freezeOnBlur) {
			if (isIE) {
				that.events.add(document, 'focusout', that.freeze);
				that.events.add(document, 'focusin', that.resume);
			} else {
				that.events.add(window, 'blur', that.freeze);
				that.events.add(window, 'focus', that.resume);
			}
		}
		that.resizeHandler();
		that.scrollHandler();
		if (that.followMouse) {
			that.events.add(isIE ? document : window, 'mousemove', that.mouseMove);
		}
		that.animationInterval = Math.max(20, that.animationInterval);
		that.timerInit();
	};

	that.start = function (bFromOnLoad) {
		if (!didInit) {
			didInit = true;
		} else if (bFromOnLoad) {
			// already loaded and running
			return true;
		}
		if (typeof that.targetElement === 'string') {
			var targetID = that.targetElement;
			that.targetElement = document.getElementById(targetID);
			if (!that.targetElement) {
				throw new Error('Snowstorm: Unable to get targetElement "' + targetID + '"');
			}
		}
		if (!that.targetElement) {
			that.targetElement = (document.body || document.documentElement);
		}
		if (that.targetElement !== document.documentElement && that.targetElement !== document.body) {
			// re-map handler to get element instead of screen dimensions
			that.resizeHandler = that.resizeHandlerAlt;
			//and force-enable pixel positioning
			that.usePixelPosition = true;
		}
		that.resizeHandler(); // get bounding box elements
		that.usePositionFixed = (that.usePositionFixed && !noFixed && !that.flakeBottom); // whether or not position:fixed is to be used
		if (window.getComputedStyle) {
			// attempt to determine if body or user-specified snow parent element is relatlively-positioned.
			try {
				targetElementIsRelative = (window.getComputedStyle(that.targetElement, null).getPropertyValue('position') === 'relative');
			} catch (e) {
				// oh well
				targetElementIsRelative = false;
			}
		}
		fixedForEverything = that.usePositionFixed;
		if (screenX && screenY && !that.disabled) {
			that.init();
			that.active = true;
		}
	};

	function doDelayedStart() {
		window.setTimeout(function () {
			that.start(true);
		}, 20);
		// event cleanup
		that.events.remove(isIE ? document : window, 'mousemove', doDelayedStart);
	}

	function doStart() {
		if (!that.excludeMobile || !isMobile) {
			doDelayedStart();
		}
		// event cleanup
		that.events.remove(window, 'load', doStart);
	}

	// hooks for starting the snow
	if (that.autoStart) {
		that.events.add(window, 'load', doStart, false);
	}

	return that;

}(window, document));
