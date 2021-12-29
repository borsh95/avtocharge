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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gYnJlYWsgcG9pbnRzIHNpdGVcclxuY29uc3QgYnJlYWtQb2ludCA9IHtcclxuXHRkZXNjdG9wOiAxOTIwLFxyXG5cdGRlc2N0b3BNaWQ6IDE0NTAsXHJcblx0ZGVzY3RvcE1pbjogMTIzMCxcclxuXHR0YWJsZTogMTAyNCxcclxuXHRtb2JpbGU6IDc2OCxcclxuXHR0ZWw6IDQ4MCxcclxufVxyXG5cclxuLyoqKioqIElOSVRJQUxJWklORyBQTFVHSU5TICoqKioqKi9cclxuaWYgKGlzRWxlbSgnLmZpeGJsb2NrJykpIHtcclxuXHRjb25zdCBmaXhibG9ja05vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpeGJsb2NrJyk7XHJcblx0Y29uc3QgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWluLXdpZHRoOiAke2JyZWFrUG9pbnQudGFibGV9cHgpYCk7XHJcblxyXG5cdGZvciAoY29uc3QgZml4YmxvY2sgb2YgZml4YmxvY2tOb2Rlcykge1xyXG5cdFx0bGV0IGEgPSBmaXhlZEJsb2NrKGZpeGJsb2NrKTtcclxuXHRcdGxldCBpc0luaXQgPSBmYWxzZTtcclxuXHJcblx0XHRtZWRpYUhhbmRsZXIoKTtcclxuXHJcblx0XHRtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKG1lZGlhSGFuZGxlcik7XHJcblxyXG5cdFx0ZnVuY3Rpb24gbWVkaWFIYW5kbGVyKCkge1xyXG5cdFx0XHRpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XHJcblx0XHRcdFx0YS5pbml0KCk7XHJcblx0XHRcdFx0aXNJbml0ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChpc0luaXQpIHtcclxuXHRcdFx0XHRhLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG59XHJcblxyXG5pZiAoJCAmJiB0eXBlb2YgJC5mbi5jdXN0b21TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcclxuXHQkKCdzZWxlY3QnKS5jdXN0b21TZWxlY3QoKTtcclxufVxyXG5cclxuLy8g0YHQutGA0L7QuyDRgdGC0YDQsNC90LjRhtGLINC6INC90YPQttC90L7QuSDQutC+0L7RgNC00LjQvdCw0YLQtVxyXG5sZXQgc2Nyb2xsaW5nV2luZG93ID0gc2Nyb2xsV2luZG93KCk7XHJcblxyXG4vLyBcdG1haW4gc2xpZGVyIFxyXG5pZiAoaXNFbGVtKCcubWFpbi1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlck5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1zbGlkZXInKTtcclxuXHJcblx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihzbGlkZXJOb2RlLCB7XHJcblx0XHRlZmZlY3Q6IFwiY292ZXJmbG93XCIsXHJcblx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0c3BlZWQ6IDcwMCxcclxuXHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRjb3ZlcmZsb3dFZmZlY3Q6IHtcclxuXHRcdFx0cm90YXRlOiA1MCxcclxuXHRcdFx0c3RyZXRjaDogMCxcclxuXHRcdFx0ZGVwdGg6IDEwMCxcclxuXHRcdFx0bW9kaWZpZXI6IDEsXHJcblx0XHRcdHNsaWRlU2hhZG93czogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRjbGlja2FibGU6IHRydWUsXHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIHByb2R1Y3RzIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5wcm9kdWN0cy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0cy1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChsZXQgJHNsaWRlck5vZGUgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJOb2RlLCB7XHJcblx0XHRcdC8vbG9vcDogdHJ1ZSxcclxuXHRcdFx0Z3JhYkN1cnNvcjogdHJ1ZSxcclxuXHRcdFx0bG9vcEFkZGl0aW9uYWxTbGlkZXM6IDEsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0bm9Td2lwaW5nQ2xhc3M6ICdwcm9kdWN0LWNhcmRfX2JvdHRvbScsXHJcblx0XHRcdHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXHJcblx0XHRcdHdhdGNoT3ZlcmZsb3c6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzAwOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY5OiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyNToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyNSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEyMzE6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogNDAsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdFx0ZWw6ICRzbGlkZXJOb2RlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmlmIChpc0VsZW0oJy5pbWctc2xpZGVyJykpIHtcclxuXHRjb25zdCAkc2xpZGVyTm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nLXNsaWRlcicpO1xyXG5cclxuXHRmb3IgKGxldCAkc2xpZGVyTm9kZSBvZiAkc2xpZGVyTm9kZXMpIHtcclxuXHRcdGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlck5vZGUsIHtcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyTm9kZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItcGFnaW5hdGlvbicpLFxyXG5cdFx0XHRcdHR5cGU6IFwiZnJhY3Rpb25cIixcclxuXHRcdFx0fSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tbmV4dCcpLFxyXG5cdFx0XHRcdHByZXZFbDogJHNsaWRlck5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWFyci0tcHJldicpLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGhlYWRpbmcgc2xpZGVyXHRcclxuaWYgKGlzRWxlbSgnLmhpZGluZy1zbGlkZXInKSkge1xyXG5cdGNvbnN0ICRzbGlkZXJOb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRpbmctc2xpZGVyJyk7XHJcblxyXG5cdGZvciAobGV0ICRzbGlkZXJOb2RlIG9mICRzbGlkZXJOb2Rlcykge1xyXG5cdFx0Y29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcigkc2xpZGVyTm9kZSwge1xyXG5cdFx0XHRsb29wQWRkaXRpb25hbFNsaWRlczogMSxcclxuXHRcdFx0bm9Td2lwaW5nQ2xhc3M6ICdidG4tZ28nLFxyXG5cdFx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0XHR3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG5cdFx0XHRkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQzMDA6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjMsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC50YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzMCxcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5kZXNjdG9wTWluICsgMV06IHtcclxuXHRcdFx0XHRcdGdyYWJDdXJzb3I6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRbYnJlYWtQb2ludC5kZXNjdG9wTWlkICsgMV06IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDQzLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuLy9wcm9kdWN0aW9uIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5pbWFnZS1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckNsYXNzID0gJy5pbWFnZS1zbGlkZXInXHJcblx0Y29uc3QgcHJvZHVjdGlvblNpbGRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVyQ2xhc3MpO1xyXG5cclxuXHRjb25zdCBwcm9kdWN0aW9uU2xpZGVyID0gbmV3IFN3aXBlcihwcm9kdWN0aW9uU2lsZGVyQ29udGFpbmVyLCB7XHJcblx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAzNSxcclxuXHRcdGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG5cclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjksXHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0fSxcclxuXHRcdFx0NzAxOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDI1LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRbYnJlYWtQb2ludC50YWJsZSArIDFdOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdGhlaWdodDogMjAwMCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1hcnItLW5leHRgLFxyXG5cdFx0XHRwcmV2RWw6IGAke3NsaWRlckNsYXNzfS13cmFwIC5zbGlkZXItYXJyLS1wcmV2YCxcclxuXHRcdH0sXHJcblxyXG5cdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRlbDogYCR7c2xpZGVyQ2xhc3N9LXdyYXAgLnNsaWRlci1wYWdpbmF0aW9uYCxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdHByb2R1Y3Rpb25TbGlkZXIub24oJ3Jlc2l6ZScsIHByb2R1Y3Rpb25TbGlkZXIudXBkYXRlKTtcclxufVxyXG5cclxuLy9mdWxsc2NyZWVuIHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5mdWxsLXNjcmVlbi1zbGlkZXInKSkge1xyXG5cdGNvbnN0IHNsaWRlckNsYXNzID0gJy5mdWxsLXNjcmVlbi1zbGlkZXInXHJcblx0Y29uc3QgJHNsaWRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJDbGFzcyk7XHJcblxyXG5cdGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXJFbCwge1xyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRzcGFjZUJldHdlZW46IDEwMCxcclxuXHRcdGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG5cdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0ZWw6IGAke3NsaWRlckNsYXNzfS13cmFwIC5zbGlkZXItcGFnaW5hdGlvbmAsXHJcblx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gYWR2YW50YWdlcyBzbGlkZXJcclxuaWYgKGlzRWxlbSgnLnNsaWRlci1zbScpKSB7XHJcblx0Y29uc3QgJHNsaWRlck5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1zbScpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRzbGlkZXIgb2YgJHNsaWRlck5vZGVzKSB7XHJcblx0XHRjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCRzbGlkZXIsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAyMDAsXHJcblx0XHRcdGF1dG9IZWlnaHQ6IHRydWUsXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRncmFiQ3Vyc29yOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0W2JyZWFrUG9pbnQubW9iaWxlICsgMV06IHtcclxuXHRcdFx0XHRcdGVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0cGFnaW5hdGlvbjoge1xyXG5cdFx0XHRcdGVsOiAkc2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1wYWdpbmF0aW9uJyksXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSlcclxuXHR9XHJcbn1cclxuXHJcbi8vZnVsbHNjcmVlbiBzbGlkZXJcdFxyXG5pZiAoaXNFbGVtKCcuY29udGVudC1pbWctc2xpZGVyJykpIHtcclxuXHRjb25zdCBzbGlkZXJDbGFzcyA9ICcuY29udGVudC1pbWctc2xpZGVyJ1xyXG5cdGNvbnN0ICRzbGlkZXJFbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNsaWRlckNsYXNzKTtcclxuXHJcblx0Zm9yIChjb25zdCAkc2xpZGVyRWwgb2YgJHNsaWRlckVscykge1xyXG5cdFx0bGV0IHN3aXBlciA9IG5ldyBTd2lwZXIoJHNsaWRlckVsLCB7XHJcblx0XHRcdGxvb3A6IHRydWUsXHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJHNsaWRlckVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlci1wYWdpbmF0aW9uYCksXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGpzLWluY29tcGxldGUtbGlzdFxyXG5pZiAoaXNFbGVtKCcuY29tcGF0aWJpbGl0eS1iIC5qcy1pbmNvbXBsZXRlLWxpc3QnKSkge1xyXG5cdGNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wYXRpYmlsaXR5LWIgLmpzLWluY29tcGxldGUtbGlzdCcpO1xyXG5cclxuXHRmb3IgKGNvbnN0ICRpdGVtIG9mIGxpc3RJdGVtcykge1xyXG5cdFx0aW5jb21wbGV0ZUxpc3QoJGl0ZW0sIHtcclxuXHRcdFx0YnRuQ2xhc3NlczogXCJjb21wYXRpYmlsaXR5LWJfX3RvZ2dsZVwiLFxyXG5cdFx0XHRwb3NpdGlvblRvZ2dsZTogJ2luc2lkZScsXHJcblx0XHRcdG1vcmVCdG5Db250ZW50OiBgXHJcblx0XHRcdFx0PHNwYW4+XHJcblx0XHRcdFx0XHTQldGJ0LVcclxuXHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0JHt0b1N2Z1RvZ2dsZSgpfVxyXG5cdFx0XHRgLFxyXG5cdFx0XHRsZXNzQnRuQ29udGVudDogYFxyXG5cdFx0XHRcdDxzcGFuPlxyXG5cdFx0XHRcdFx00KHQutGA0YvRgtGMXHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdCR7dG9TdmdUb2dnbGUoKX1cclxuXHRcdFx0YCxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdG9TdmdUb2dnbGUoKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHRcdDxzdmcgc3ZnIHZpZXdCb3ggPSBcIjAgMCA0NCAyNlwiIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiID5cclxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMjIuMDAwMSAyNS4yODY3QzIyLjc3MjcgMjUuMjg2NyAyMy41NDUyIDI0Ljk5MTcgMjQuMTM0MyAyNC40MDI5TDQyLjY3MDMgNS44NjY3M0M0My44NDk0IDQuNjg3NiA0My44NDk0IDIuNzc1ODQgNDIuNjcwMyAxLjU5NzE5QzQxLjQ5MTYgMC40MTg1MzIgMzkuNTgwMiAwLjQxODUzMiAzOC40MDEgMS41OTcxOUwyMi4wMDAxIDE3Ljk5OUw1LjU5OTE0IDEuNTk3NzZDNC40MjAwMSAwLjQxOTEwOCAyLjUwODgyIDAuNDE5MTA5IDEuMzMwMjYgMS41OTc3NkMwLjE1MDU1NSAyLjc3NjQyIDAuMTUwNTU1IDQuNjg4MTggMS4zMzAyNiA1Ljg2NzMxTDE5Ljg2NiAyNC40MDM1QzIwLjQ1NTMgMjQuOTkyNCAyMS4yMjc4IDI1LjI4NjcgMjIuMDAwMSAyNS4yODY3WlwiIGZpbGw9XCJpbmhlcml0XCIgLz5cclxuXHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRgXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyXHJcbmlmIChpc0VsZW0oJy5udW1iZXItc2xpZGVyJykpIHtcclxuXHRjb25zdCBudW1iZXJTbGlkZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm51bWJlci1zbGlkZXInKTtcclxuXHJcblx0Zm9yIChjb25zdCBzbGlkZXIgb2YgbnVtYmVyU2xpZGVycykge1xyXG5cdFx0bnVtYmVyU2xpZGVyKHNsaWRlcik7XHJcblx0fVxyXG59XHJcblxyXG4vLyBnYWxsZXJ5IHNsaWRlclx0XHJcbmlmIChpc0VsZW0oJy5nYWxsZXJ5JykpIHtcclxuXHRjb25zdCAkZ2FsbGVyaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnknKTtcclxuXHJcblx0Zm9yIChjb25zdCAkZ2FsbGVyeSBvZiAkZ2FsbGVyaWVzKSB7XHJcblx0XHRnYWxsZXJ5KCRnYWxsZXJ5KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKioqKioqIENVU1RPTSBQTFVHSU4gKioqKioqL1xyXG5cclxuLy9maXhlZCBoZWFkZXJcclxuaWYgKGlzRWxlbSgnaGVhZGVyJykpIHtcclxuXHRsZXQgZml4ZWRIZWFkZXIgPSBzaG93SGVhZGVyKCdoZWFkZXInKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd0hlYWRlcihlbCkge1xyXG5cdFx0Y29uc3QgJGVsID0gKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCkgOiBlbDtcclxuXHRcdGNvbnN0IGh0bWxFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuXHRcdGxldCBvZmZzZXRUb3BFbCA9ICRlbC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRsZXQgaXNGaXhlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRUb3BFbCArIDQwKSB7XHJcblx0XHRcdFx0c2hvdygpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IG9mZnNldFRvcEVsIC8gMikge1xyXG5cdFx0XHRcdGZpeGVkKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHt9KVxyXG5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdG9mZnNldFRvcEVsID0gJGVsLm9mZnNldEhlaWdodDtcclxuXHRcdH0pXHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvdygpIHtcclxuXHRcdFx0aWYgKGlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdGh0bWxFbC5zdHlsZS5wYWRkaW5nVG9wID0gJGVsLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHRcdGlzRml4ZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGZpeGVkKCkge1xyXG5cdFx0XHRpZiAoIWlzRml4ZWQpIHJldHVybjtcclxuXHJcblx0XHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0XHRodG1sRWwuc3R5bGUucGFkZGluZ1RvcCA9ICcnO1xyXG5cdFx0XHRpc0ZpeGVkID0gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0c2hvdyxcclxuXHRcdFx0Zml4ZWQsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vL0hhbWJ1cmdlciDQvtGC0LrRgNGL0YLQuNGPINC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmlmIChpc0VsZW0oJy5oZWFkZXJfX2hhbWJ1cmdlcicpKSB7XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckNsYXNzTmFtZSA9ICcuaGVhZGVyX19oYW1idXJnZXInO1xyXG5cdGNvbnN0IGJ1cmdlckJsb2NrQ2xhc3NOYW1lID0gJy5oZWFkZXJfX2J1cmdlcic7XHJcblx0Y29uc3QgYnVyZ2VySW5uZXJDbGFzc05hbWUgPSAnLmhlYWRlcl9fYnVyZ2VyLWlubmVyJztcclxuXHRjb25zdCAkYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XHJcblx0Y29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFtYnVyZ2VyQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlckJsb2NrQ2xhc3NOYW1lKTtcclxuXHRjb25zdCAkYnVyZ2VySW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1cmdlcklubmVyQ2xhc3NOYW1lKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoaGFtYnVyZ2VyQ2xhc3NOYW1lKSkge1xyXG5cdFx0XHRjb25zdCBvZmZzZXRSaWdodCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gJGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRsZXQgaXNBY3RpdmUgPSAkaGFtYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3RbaXNBY3RpdmUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnb3BlbicpO1xyXG5cdFx0XHQkYnVyZ2VyQmxvY2suc3R5bGUubWF4SGVpZ2h0ID0gKGlzQWN0aXZlKSA/IGBjYWxjKDEwMHZoIC0gJHskaGVhZGVyLm9mZnNldEhlaWdodH1weClgIDogJyc7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gKGlzQWN0aXZlKSA/ICdoaWRkZW4nIDogJyc7XHJcblx0XHR9IGVsc2UgaWYgKCRidXJnZXJCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSAmJiAhZS50YXJnZXQuY2xvc2VzdChidXJnZXJCbG9ja0NsYXNzTmFtZSkpIHtcclxuXHRcdFx0JGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0JGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcclxuXHRcdFx0JGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyMzAgJiYgJGJ1cmdlckJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnb3BlbicpKSB7XHJcblx0XHRcdCRoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0XHRcdCRidXJnZXJCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XHJcblx0XHRcdCRib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxuLy8gc2VhcmNoXHJcbmlmIChpc0VsZW0oJ1tkYXRhLXNlYXJjaC10b2dnbGVdJykgJiYgaXNFbGVtKCdbZGF0YS1zZWFyY2gtcGFuZWxdJykpIHtcclxuXHRjb25zdCBwYW5lbFNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC1wYW5lbF0nO1xyXG5cdGNvbnN0IHNlYXJjaEJ0blNlbGVjdG9yID0gJ1tkYXRhLXNlYXJjaC10b2dnbGVdJztcclxuXHRjb25zdCBjbG9zZVBhbmVsU2VsZWN0b3IgPSAnW2RhdGEtc2VhcmNoLWNsb3NlXSc7XHJcblx0Y29uc3QgJHNlYXJjaFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYW5lbFNlbGVjdG9yKTtcclxuXHRjb25zdCAkc2VhcmNoSW5wdXQgPSAkc2VhcmNoUGFuZWwucXVlcnlTZWxlY3RvcignLnNlYXJjaF9faW5wdXQnKTtcclxuXHRjb25zdCB0b2dnbGVDbGFzcyA9ICdvcGVuJztcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3Qoc2VhcmNoQnRuU2VsZWN0b3IpKSB7XHJcblx0XHRcdCRzZWFyY2hQYW5lbC5jbGFzc0xpc3QudG9nZ2xlKHRvZ2dsZUNsYXNzKTtcclxuXHRcdFx0JHNlYXJjaElucHV0LmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KGNsb3NlUGFuZWxTZWxlY3RvcilcclxuXHRcdFx0fHwgKCFlLnRhcmdldC5jbG9zZXN0KHBhbmVsU2VsZWN0b3IpICYmICRzZWFyY2hQYW5lbC5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlQ2xhc3MpKSkge1xyXG5cdFx0XHQkc2VhcmNoUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSh0b2dnbGVDbGFzcyk7XHJcblx0XHR9XHJcblx0fSlcclxufVxyXG5cclxuLy8g0L/QvtC0INC80LXQvdGOINGBINCz0LDQvNCx0YPRgNCz0LXRgNC+0Lwg0LLQvdGD0YLRgNC4INC+0YHQvdC+0LLQvdC+0LPQviDQvNC10L3RjlxyXG5pZiAoaXNFbGVtKCcubWVudV9faXRlbS0tZHJvcCcpKSB7XHJcblx0Y29uc3QgbWVudURyb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS0tZHJvcCcpO1xyXG5cdGNvbnN0IHRvZ2dsZSA9IG1lbnVEcm9wLnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19pdGVtLXRvZ2dsZScpO1xyXG5cdGNvbnN0IGxpbmtidG4gPSBtZW51RHJvcC5xdWVyeVNlbGVjdG9yKCcubWVudV9faXRlbS10b2dnbGUgfiAubWVudV9fbGluaycpO1xyXG5cdGNvbnN0IGl0ZW1NZW51TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19pdGVtOm5vdCgubWVudV9faXRlbS0tZHJvcCknKTtcclxuXHJcblxyXG5cdHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdHRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuXHRcdG1lbnVEcm9wLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldikge1xyXG5cdFx0aWYgKCFldi50YXJnZXQuY2xvc2VzdCgnLm1lbnVfX2l0ZW0tLWRyb3AnKSkge1xyXG5cdFx0XHRpZiAobWVudURyb3AuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdHRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRtZW51RHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pXHJcbn1cclxuXHJcbmlmIChpc0VsZW0oJy5qcy10cmVlLW1lbnUnKSkge1xyXG5cdGNvbnN0ICR0cmVlTWVudUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy10cmVlLW1lbnUnKTtcclxuXHJcblx0Zm9yIChjb25zdCAkbWVudSBvZiAkdHJlZU1lbnVFbHMpIHtcclxuXHRcdHRyZWVNZW51KCRtZW51KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmlmIChpc0VsZW0oJy5iLXRhYnMnKSkge1xyXG5cdGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi10YWJzJyk7XHJcblxyXG5cdGZvciAoY29uc3QgdGFiIG9mIHRhYnMpIHtcclxuXHJcblx0XHRiVGFicyh0YWIpO1xyXG5cdH1cclxufVxyXG5cclxuLy8gd2luZG93IG1vZGFsXHJcbmlmIChpc0VsZW0oJy52LW1vZGFsJykpIHtcclxuXHRtb2RhbFdpbmRvdygpO1xyXG59XHJcblxyXG4vLyB2LXVwINC60L3QvtC/0LrQsCDQstCy0LXRgNGFXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcclxuXHRcdDxkaXYgY2xhc3M9XCJ2LXVwXCI+PC9kaXY+XHJcblx0YCk7XHJcblxyXG5cdGNvbnN0IGJ0bkRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudi11cCcpO1xyXG5cdGxldCB2VXBUcmlnZ2VyVGltZXIgPSAwO1xyXG5cclxuXHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblxyXG5cdGJ0bkRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRzY3JvbGxpbmdXaW5kb3cuc3RhcnRBbWltYXRpb25TY3JvbGwoMSk7XHJcblx0fSk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjbGVhclRpbWVvdXQodlVwVHJpZ2dlclRpbWVyKTtcclxuXHRcdHZVcFRyaWdnZXJUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHR2VXAoYnRuRG93biwgZ2V0U2Nyb2xlZFdpbmRvdyk7XHJcblx0XHR9LCAyMDApXHJcblx0fSk7XHJcblxyXG5cdC8v0L/RgNC+0LvQuNGB0YLRi9Cy0LDQuNC90LUg0L7QutC90LAg0LLQstC10YDRhSDQv9GA0Lgg0LrQu9C40LrQtSDQvdCwINC60L3QvtC/0LrRg1xyXG5cdGZ1bmN0aW9uIHZVcChidG4sIHNjcm9sZWQpIHtcclxuXHRcdGlmIChzY3JvbGVkKCkgPiAod2luZG93LmlubmVySGVpZ2h0IC8gMikpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIGlmIChzY3JvbGVkKCkgPCAod2luZG93LmlubmVySGVpZ2h0IC8gMikgfHwgYnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHRcdFx0YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly/QvdCwINGB0LrQvtC70YzQutC+INC/0YDQvtC60YDRg9GH0LXQvdC+INC+0LrQvdC+XHJcblx0ZnVuY3Rpb24gZ2V0U2Nyb2xlZFdpbmRvdygpIHtcclxuXHRcdHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vL3ZpZGVvXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0ZmluZFZpZGVvcygpO1xyXG5cclxuXHRmdW5jdGlvbiBmaW5kVmlkZW9zKCkge1xyXG5cdFx0bGV0IHZpZGVvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy52aWRlbycpO1xyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdmlkZW9zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHNldHVwVmlkZW8odmlkZW9zW2ldKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vINC70LXQvdC40LLQsNGPINC30LDQs9GA0YPQt9C60LAg0LLQuNC00LXQviBcclxuXHRmdW5jdGlvbiBzZXR1cFZpZGVvKHZpZGVvKSB7XHJcblx0XHRsZXQgbGluayA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJy52aWRlb19fbGluaycpO1xyXG5cdFx0Y29uc3QgaHJlZkxpbmsgPSBsaW5rLmhyZWY7XHJcblx0XHRsZXQgbWVkaWEgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX21lZGlhJyk7XHJcblx0XHRsZXQgYnV0dG9uID0gdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19idXR0b24nKTtcclxuXHRcdGxldCBkZWxldGVkTGVuZ3RoID0gJ2h0dHBzOi8veW91dHUuYmUvJy5sZW5ndGg7XHJcblx0XHRsZXQgdmlkZW9JZCA9IGhyZWZMaW5rLnN1YnN0cmluZyhkZWxldGVkTGVuZ3RoLCBocmVmTGluay5sZW5ndGgpO1xyXG5cdFx0bGV0IHlvdXR1YmVJbWdTcmMgPSAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS8nICsgdmlkZW9JZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnO1xyXG5cclxuXHRcdG1lZGlhLnNyYyA9IHlvdXR1YmVJbWdTcmM7XHJcblx0XHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0bGV0IGlmcmFtZSA9IGNyZWF0ZUlmcmFtZSh2aWRlb0lkKTtcclxuXHJcblx0XHRcdGxpbmsucmVtb3ZlKCk7XHJcblx0XHRcdGJ1dHRvbi5yZW1vdmUoKTtcclxuXHRcdFx0dmlkZW8uYXBwZW5kQ2hpbGQoaWZyYW1lKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxpbmsucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XHJcblx0XHR2aWRlby5jbGFzc0xpc3QuYWRkKCd2aWRlby0tZW5hYmxlZCcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlSWZyYW1lKGlkKSB7XHJcblx0XHRsZXQgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcblxyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3dmdWxsc2NyZWVuJywgJycpO1xyXG5cdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnYWxsb3cnLCAnYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsnKTtcclxuXHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGdlbmVyYXRlVVJMKGlkKSk7XHJcblx0XHRpZnJhbWUuY2xhc3NMaXN0LmFkZCgndmlkZW9fX21lZGlhJyk7XHJcblxyXG5cdFx0cmV0dXJuIGlmcmFtZTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdlbmVyYXRlVVJMKGlkKSB7XHJcblx0XHRsZXQgcXVlcnkgPSAnP3JlbD0wJnNob3dpbmZvPTEmYXV0b3BsYXk9MSc7XHJcblxyXG5cdFx0cmV0dXJuICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyBxdWVyeTtcclxuXHR9XHJcbn0oKSk7XHJcblxyXG4vKioqKiogRlVOQ1RJT04gUExVR0lOICoqKioqKi9cclxuXHJcbi8vXHRtb2RhbCB3aW5kb3dcclxuZnVuY3Rpb24gbW9kYWxXaW5kb3coKSB7XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSxcclxuXHRcdG1vZGFsRWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnYtbW9kYWwnKSxcclxuXHRcdGJ0bk9wZW5DbGFzc05hbWUgPSBcImpzLW9wZW5Nb2RhbFwiLFxyXG5cdFx0YnRuQ2xvc2VDbGFzc05hbWUgPSAnanMtY2xvc2VNb2RhbCc7XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmIChlLnRhcmdldC5jbG9zZXN0KGAuJHtidG5PcGVuQ2xhc3NOYW1lfWApICYmIGUudGFyZ2V0LmRhdGFzZXQudHlwZU1vZGFsKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0Y29uc3QgdHlwZU1vZGFsID0gZS50YXJnZXQuZGF0YXNldFsndHlwZU1vZGFsJ107XHJcblxyXG5cdFx0XHRmb3IgKGxldCAkbW9kYWwgb2YgbW9kYWxFbHMpIHtcclxuXHJcblx0XHRcdFx0aWYgKCRtb2RhbC5kYXRhc2V0ICYmICRtb2RhbC5kYXRhc2V0Wyd0eXBlTW9kYWwnXSA9PT0gdHlwZU1vZGFsKSB7XHJcblx0XHRcdFx0XHQkbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdFx0Y29uc3Qgc2Nyb2xsQmFyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGJvZHkub2Zmc2V0V2lkdGg7XHJcblx0XHRcdFx0XHRib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblx0XHRcdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHNjcm9sbEJhcldpZHRoICsgXCJweFwiO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3YtbW9kYWxfX2lubmVyJykgfHwgZS50YXJnZXQuY2xvc2VzdChgLiR7YnRuQ2xvc2VDbGFzc05hbWV9YCkpIHtcclxuXHRcdFx0ZS50YXJnZXQuY2xvc2VzdCgnLnYtbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHRcdFx0Ym9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG5cdFx0XHRib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCI7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vINCc0LXQvdGOINC00LXRgNC10LLQviwg0L/RgNC40LzQtdC90Y/RgtGB0Y8g0L3QtdC/0L7RgdGA0LXQtNGB0YLQstC10L3QvdC+IFxyXG4vLyDQvdCwIERPTSDRjdC10LvQtdC80LXQvdGC0LUgdWxcclxuZnVuY3Rpb24gdHJlZU1lbnUoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdGNvbnN0IG9wZW5JdGVtQ2xhc3MgPSAnanMtdHJlZS1tZW51X19pdGVtLS1vcGVuJztcclxuXHJcblx0Y29uc3Qgc2V0aW5ncyA9IHtcclxuXHRcdG9wZW5JdGVtQ2xhc3M6ICdqcy10cmVlLW1lbnVfX2l0ZW0tLW9wZW4nLFxyXG5cdFx0b3BlblNlbGVjdG9yOiAnLmpzLXRyZWUtbWVudV9fYnRuJ1xyXG5cdH1cclxuXHJcblx0JGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xyXG5cdFx0Y29uc3QgJGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3Qoc2V0aW5ncy5vcGVuU2VsZWN0b3IpO1xyXG5cdFx0aWYgKCEkYnRuKSByZXR1cm47XHJcblxyXG5cdFx0bGV0ICRwYXJlbnRFbGVtZW50ID0gJGJ0bi5jbG9zZXN0KCdsaScpO1xyXG5cdFx0bGV0ICRjaGlsZHJlbkNvbnRhaW5lciA9ICRwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XHJcblxyXG5cdFx0aWYgKCEkY2hpbGRyZW5Db250YWluZXIpIHJldHVybjtcclxuXHRcdGNvbnN0IGlzT3Blbkl0ZW0gPSAkcGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHRcdCRwYXJlbnRFbGVtZW50LmNsYXNzTGlzdFtpc09wZW5JdGVtID8gJ3JlbW92ZScgOiAnYWRkJ10oc2V0aW5ncy5vcGVuSXRlbUNsYXNzKTtcclxuXHRcdCRidG4uY2xhc3NMaXN0W2lzT3Blbkl0ZW0gPyAncmVtb3ZlJyA6ICdhZGQnXSgnYWN0aXZlJyk7XHJcblx0XHQkY2hpbGRyZW5Db250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gIWlzT3Blbkl0ZW0gPyAkY2hpbGRyZW5Db250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiIDogXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcbi8vINCw0L3QuNC80LDRhtC40Y8g0YHQutGA0L7Qu9CwINC+0LrQvdCwINCx0YDQsNGD0LfQtdGA0LBcclxuZnVuY3Rpb24gc2Nyb2xsV2luZG93KCkge1xyXG5cdGxldCBzY3JvbGxBbmltYXRpb25JZDtcclxuXHRsZXQgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRsZXQgc2Nyb2xscyA9IGZhbHNlO1xyXG5cclxuXHRmdW5jdGlvbiBzdGFydEFtaW1hdGlvblNjcm9sbChuZXdTY3JvbGxZKSB7XHJcblx0XHRpZiAoIXNjcm9sbHMpIHtcclxuXHRcdFx0Y3VycmVudFNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuXHRcdFx0c2Nyb2xscyA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZGVsdGFTY3JvbGwgPSAobmV3U2Nyb2xsWSAtIGN1cnJlbnRTY3JvbGwpO1xyXG5cclxuXHRcdGN1cnJlbnRTY3JvbGwgKz0gZGVsdGFTY3JvbGwgKiAwLjE1O1xyXG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIGN1cnJlbnRTY3JvbGwpO1xyXG5cclxuXHRcdGlmIChNYXRoLmFicyhkZWx0YVNjcm9sbCkgPiA1KSB7XHJcblx0XHRcdHNjcm9sbEFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c3RhcnRBbWltYXRpb25TY3JvbGwobmV3U2Nyb2xsWSk7XHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgbmV3U2Nyb2xsWSk7XHJcblx0XHRcdHN0b3BBbmltYXRpb25TY3JvbGwoKTtcclxuXHRcdFx0c2Nyb2xscyA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc3RvcEFuaW1hdGlvblNjcm9sbCgpIHtcclxuXHRcdHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShzY3JvbGxBbmltYXRpb25JZCk7XHJcblx0XHRzY3JvbGxBbmltYXRpb25JZCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRzdGFydEFtaW1hdGlvblNjcm9sbCxcclxuXHRcdHN0b3BBbmltYXRpb25TY3JvbGwsXHJcblx0fVxyXG59XHJcblxyXG4vLyBudW1iZXIgc2xpZGVyIFxyXG5mdW5jdGlvbiBudW1iZXJTbGlkZXIoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZWwgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcclxuXHRcdDogc2VsZWN0b3IsXHJcblx0XHQkaW5wdXQgPSAkZWwucXVlcnlTZWxlY3RvcignLmpzLW51bWJlci1zbGlkZXItaW5wdXQnKSxcclxuXHRcdG1pblZhbHVlID0gKyRpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IDE7XHJcblxyXG5cdCRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGVyKTtcclxuXHJcblx0ZnVuY3Rpb24gY2xpY2tIYW5kZXIoZSkge1xyXG5cdFx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLWFkZCcpKSB7XHJcblx0XHRcdGNvbnN0IG9sZCA9ICtwYXJzZUZsb2F0KCRpbnB1dC52YWx1ZSkgKyAxO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSBpc0Zpbml0ZShvbGQpID8gb2xkIDogbWluVmFsdWU7XHJcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5qcy1udW1iZXItc2xpZGVyLXJlZHVjZScpKSB7XHJcblx0XHRcdGxldCBvbGRWYWx1ZSA9IHBhcnNlRmxvYXQoJGlucHV0LnZhbHVlKTtcclxuXHRcdFx0aWYgKGlzTmFOKG9sZFZhbHVlKSkgcmV0dXJuICRpbnB1dC52YWx1ZSA9IG1pblZhbHVlO1xyXG5cdFx0XHQkaW5wdXQudmFsdWUgPSAob2xkVmFsdWUgLSAxIDw9IG1pblZhbHVlKSA/IG1pblZhbHVlIDogLS1vbGRWYWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIGluY29tcGxldGUgbGlzdFxyXG5mdW5jdGlvbiBpbmNvbXBsZXRlTGlzdChzZWxlY3Rvciwgb3B0aW9ucykge1xyXG5cdGxldCAkZWwgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxyXG5cdFx0JGhpZGRlbkVscyxcclxuXHRcdCR0b2dnbGUsXHJcblx0XHR2aXNpYmxlQ291bnQ7XHJcblxyXG5cdGNvbnN0IGJhc2VDbGFzcyA9ICdqcy1pbmNvbXBsZXRlJztcclxuXHRjb25zdCBsaXN0Q2xhc3MgPSBiYXNlQ2xhc3MgKyAnLWxpc3QnO1xyXG5cdGNvbnN0IGl0ZW1DbGFzcyA9IGJhc2VDbGFzcyArICctaXRlbSc7XHJcblx0Y29uc3QgZXhwYW5kZWRMaXN0Q2xhc3MgPSBsaXN0Q2xhc3MgKyAnLS1leHBhbmRlZCc7XHJcblx0Y29uc3QgaGlkZGVuSXRlbUNsYXNzID0gaXRlbUNsYXNzICsgJy0taGlkZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlQ2xhc3MgPSBiYXNlQ2xhc3MgKyAnLXRvZ2dsZSc7XHJcblx0Y29uc3QgYnRuVG9nZ2xlTW9yZUNsYXNzID0gYnRuVG9nZ2xlQ2xhc3MgKyAnLS1tb3JlJztcclxuXHJcblx0Y29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0XHR2aXNpYmxlQmxvY2tzOiA4LFxyXG5cdFx0cG9zaXRpb25Ub2dnbGU6ICdvdXRzaWRlJyxcclxuXHRcdG1vcmVCdG5Db250ZW50OiBcItCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XCIsXHJcblx0XHRsZXNzQnRuQ29udGVudDogXCLQodC60YDRi9GC0YxcIixcclxuXHR9XHJcblxyXG5cdE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIG9wdGlvbnMpO1xyXG5cclxuXHR2aXNpYmxlQ291bnQgPSAkZWwuZGF0YXNldC5pbmNvbXBsZXRlTnVtIHx8IHNldHRpbmdzLnZpc2libGVCbG9ja3M7XHJcblxyXG5cdGlmICgkZWwuY2hpbGRyZW4ubGVuZ3RoIDw9ICt2aXNpYmxlQ291bnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0JGhpZGRlbkVscyA9IEFycmF5LmZyb20oJGVsLmNoaWxkcmVuKS5maWx0ZXIoKCRpdGVtLCBpZHgpID0+IHtcclxuXHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaXRlbUNsYXNzKTtcclxuXHRcdGlmIChpZHggPiB2aXNpYmxlQ291bnQgLSAxKSB7XHJcblx0XHRcdCRpdGVtLmNsYXNzTGlzdC5hZGQoaGlkZGVuSXRlbUNsYXNzKTtcclxuXHRcdFx0cmV0dXJuICRpdGVtO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkdG9nZ2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblx0JHRvZ2dsZS5pbm5lckhUTUwgPSBzZXR0aW5ncy5tb3JlQnRuQ29udGVudDtcclxuXHQkdG9nZ2xlLmNsYXNzTmFtZSA9IGJ0blRvZ2dsZUNsYXNzICsgXCIgXCIgKyBidG5Ub2dnbGVNb3JlQ2xhc3M7XHJcblxyXG5cdGlmICh0eXBlb2Ygc2V0dGluZ3MuYnRuQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcclxuXHRcdCR0b2dnbGUuY2xhc3NOYW1lID0gc2V0dGluZ3MuYnRuQ2xhc3NlcyArIFwiIFwiICsgJHRvZ2dsZS5jbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRpZiAoc2V0dGluZ3MucG9zaXRpb25Ub2dnbGUgPT09ICdpbnNpZGUnKSB7XHJcblx0XHQkZWwuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCAkdG9nZ2xlKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JGVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlZW5kJywgJHRvZ2dsZSk7XHJcblx0fVxyXG5cclxuXHQkdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGlmICgkZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGV4cGFuZGVkTGlzdENsYXNzKSkge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5hZGQoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5yZW1vdmUoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QuYWRkKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubW9yZUJ0bkNvbnRlbnQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoYnRuVG9nZ2xlTW9yZUNsYXNzKTtcclxuXHRcdFx0JGVsLmNsYXNzTGlzdC5hZGQoZXhwYW5kZWRMaXN0Q2xhc3MpO1xyXG5cdFx0XHQkaGlkZGVuRWxzLm1hcChpdGVtID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGhpZGRlbkl0ZW1DbGFzcykgfSk7XHJcblx0XHRcdCR0b2dnbGUuaW5uZXJIVE1MID0gc2V0dGluZ3MubGVzc0J0bkNvbnRlbnQ7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGJUYWJzXHJcbmZ1bmN0aW9uIGJUYWJzKHRhcmdldCkge1xyXG5cdGxldCBfZWxlbVRhYnMgPSAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQpLFxyXG5cdFx0X2V2ZW50VGFic1Nob3csXHJcblx0XHRfc2hvd1RhYiA9IGZ1bmN0aW9uICh0YWJzTGlua1RhcmdldCkge1xyXG5cdFx0XHR2YXIgdGFic1BhbmVUYXJnZXQsIHRhYnNMaW5rQWN0aXZlLCB0YWJzUGFuZVNob3c7XHJcblx0XHRcdHRhYnNQYW5lVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YWJzTGlua1RhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcblx0XHRcdHRhYnNMaW5rQWN0aXZlID0gdGFic0xpbmtUYXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYi10YWJzX19saW5rLmFjdGl2ZScpO1xyXG5cdFx0XHR0YWJzUGFuZVNob3cgPSB0YWJzUGFuZVRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iLXRhYnNfX3BhbmUuYWN0aXZlJyk7XHJcblx0XHRcdC8vINC10YHQu9C4INGB0LvQtdC00YPRjtGJ0LDRjyDQstC60LvQsNC00LrQsCDRgNCw0LLQvdCwINCw0LrRgtC40LLQvdC+0LksINGC0L4g0LfQsNCy0LXRgNGI0LDQtdC8INGA0LDQsdC+0YLRg1xyXG5cdFx0XHRpZiAodGFic0xpbmtUYXJnZXQgPT09IHRhYnNMaW5rQWN0aXZlKSByZXR1cm47XHJcblx0XHRcdC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YHRiyDRgyDRgtC10LrRg9GJ0LjRhSDQsNC60YLQuNCy0L3Ri9GFINGN0LvQtdC80LXQvdGC0L7QslxyXG5cdFx0XHRpZiAodGFic0xpbmtBY3RpdmUgIT09IG51bGwpIHRhYnNMaW5rQWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuXHRcdFx0aWYgKHRhYnNQYW5lU2hvdyAhPT0gbnVsbCkgdGFic1BhbmVTaG93LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdFx0XHQvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgdGLINC6INGN0LvQtdC80LXQvdGC0LDQvCAo0LIg0LfQsNCy0LjQvNC+0YHRgtC4INC+0YIg0LLRi9Cx0YDQsNC90L3QvtC5INCy0LrQu9Cw0LTQutC4KVxyXG5cdFx0XHR0YWJzTGlua1RhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHRcdFx0dGFic1BhbmVUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblx0XHRcdGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoX2V2ZW50VGFic1Nob3cpO1xyXG5cdFx0fSxcclxuXHRcdF9zd2l0Y2hUYWJUbyA9IGZ1bmN0aW9uICh0YWJzTGlua0luZGV4KSB7XHJcblx0XHRcdHZhciB0YWJzTGlua3MgPSBfZWxlbVRhYnMucXVlcnlTZWxlY3RvckFsbCgnLmItdGFic19fbGluaycpO1xyXG5cdFx0XHRpZiAodGFic0xpbmtzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRpZiAodGFic0xpbmtJbmRleCA+IHRhYnNMaW5rcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSB0YWJzTGlua3MubGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGFic0xpbmtJbmRleCA8IDEpIHtcclxuXHRcdFx0XHRcdHRhYnNMaW5rSW5kZXggPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfc2hvd1RhYih0YWJzTGlua3NbdGFic0xpbmtJbmRleCAtIDFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0X2V2ZW50VGFic1Nob3cgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RhYi5zaG93JywgeyBkZXRhaWw6IF9lbGVtVGFicyB9KTtcclxuXHJcblx0X2VsZW1UYWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdHZhciB0YWJzTGlua1RhcmdldCA9IGUudGFyZ2V0O1xyXG5cdFx0Ly8g0LfQsNCy0LXRgNGI0LDQtdC8INCy0YvQv9C+0LvQvdC10L3QuNC1INGE0YPQvdC60YbQuNC4LCDQtdGB0LvQuCDQutC70LjQutC90YPQu9C4INC90LUg0L/QviDRgdGB0YvQu9C60LVcclxuXHRcdGlmICghdGFic0xpbmtUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdiLXRhYnNfX2xpbmsnKSkgcmV0dXJuO1xyXG5cclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdF9zaG93VGFiKHRhYnNMaW5rVGFyZ2V0KTtcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHNob3dUYWI6IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuXHRcdFx0X3Nob3dUYWIodGFyZ2V0KTtcclxuXHRcdH0sXHJcblx0XHRzd2l0Y2hUYWJUbzogZnVuY3Rpb24gKGluZGV4KSB7XHJcblx0XHRcdF9zd2l0Y2hUYWJUbyhpbmRleCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmZ1bmN0aW9uIGdhbGxlcnkoc2VsZWN0b3IpIHtcclxuXHRjb25zdCAkZ2FsbGVyeSA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIDogc2VsZWN0b3I7XHJcblxyXG5cdGNvbnN0ICR0aHVtYnNTbGlkZXIgPSAkZ2FsbGVyeS5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fdGh1bWJzJyksXHJcblx0XHQkZnVsbFNsaWRlciA9ICRnYWxsZXJ5LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19zbGlkZXInKTtcclxuXHJcblxyXG5cdC8qIHRodW1icyAqL1xyXG5cdGxldCBnYWxsZXJ5VGh1bWJzID0gbmV3IFN3aXBlcigkdGh1bWJzU2xpZGVyLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXHJcblx0XHR3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxyXG5cdFx0ZnJlZU1vZGU6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0c3RpY2t5OiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGtleWJvYXJkOiB7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdG9ubHlJblZpZXdwb3J0OiBmYWxzZVxyXG5cdFx0fSxcclxuXHRcdG1vdXNld2hlZWw6IHRydWUsXHJcblx0fSk7XHJcblxyXG5cdGxldCBnYWxsZXJ5RnVsbCA9IG5ldyBTd2lwZXIoJGZ1bGxTbGlkZXIsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMTAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuXHRcdC8vIGF1dG9wbGF5OiB7XHJcblx0XHQvLyBcdGRlbGF5OiA1MDAwXHJcblx0XHQvLyB9LFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRwcmV2RWw6ICRmdWxsU2xpZGVyLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci1hcnItLXByZXYnKSxcclxuXHRcdFx0bmV4dEVsOiAkZnVsbFNsaWRlci5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItYXJyLS1uZXh0JyksXHJcblx0XHR9LFxyXG5cdFx0a2V5Ym9hcmQ6IHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0b25seUluVmlld3BvcnQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0dGh1bWJzOiB7XHJcblx0XHRcdHN3aXBlcjogZ2FsbGVyeVRodW1icyxcclxuXHRcdH0sXHJcblx0fSk7XHJcbn1cclxuXHJcbi8vIGZpeGVkIGJsb2NrXHJcbmZ1bmN0aW9uIGZpeGVkQmxvY2soc2VsZWN0b3IsIG9wdGlvbiA9IHt9KSB7XHJcblx0Y29uc3QgJGVsID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG5cdFx0OiBzZWxlY3RvcjtcclxuXHRsZXQgJG9mZnNldFBhcmVudCA9IG51bGw7XHJcblx0Y29uc3QgJGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcclxuXHRsZXQgaGVpZ2h0SGVhZGVyID0gJGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcblxyXG5cdGxldCBwb2ludG9uWXBvc2l0aW9uaW5nID0gMDtcclxuXHRsZXQgdG9wUG9zRWwsIHdpZHRoRWwgPSBudWxsO1xyXG5cclxuXHRjb25zdCBwYXJhbWV0cnMgPSB7XHJcblx0XHRpbml0KCkge1xyXG5cdFx0XHQkZWwuc3R5bGUudG9wID0gYCR7aGVpZ2h0SGVhZGVyICsgMzB9cHhgO1xyXG5cdFx0XHQvLyAkb2Zmc2V0UGFyZW50ID0gJGVsLm9mZnNldFBhcmVudDtcclxuXHJcblx0XHRcdC8vIGlmICghJG9mZnNldFBhcmVudCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Ly8gdG9wUG9zRWwgPSBfZ2V0VG9wT2Zmc2V0KCRlbCk7IC8vINC90LDRh9Cw0LvRjNC90L7QtSDQv9C+0LvQvtC20LXQvdC40LUg0YHQstC10YDRhdGDINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdC8vIHdpZHRoRWwgPSAkb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoO1xyXG5cdFx0XHQvLyBoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHRcdC8vIHNjcm9sbGluZ0hhbmRsZXIoKTtcclxuXHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0ZGVzdHJveSgpIHtcclxuXHRcdFx0Ly8gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6aW5nSGFuZGxlcik7XHJcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxpbmdIYW5kbGVyKTtcclxuXHJcblx0XHRcdC8vIHBvaW50b25ZcG9zaXRpb25pbmcgPSAwO1xyXG5cdFx0XHQvLyB0b3BQb3NFbCwgd2lkdGhFbCwgaGVhZGVySGVpZ2h0ID0gbnVsbDtcclxuXHJcblx0XHRcdC8vIGlmICgkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5jb250YWlucygnaXMtZml4ZWQnKSkgJG9mZnNldFBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1maXhlZCcpXHJcblx0XHRcdC8vICRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKTtcclxuXHRcdFx0Ly8gJGVsLmNsYXNzTmFtZSA9ICRlbC5jbGFzc05hbWUucmVwbGFjZSgvZml4ZWR8cG9zaXRpb25lZC9nLCAnJyk7XHJcblx0XHRcdC8vICRlbC5zdHlsZS5jc3NUZXh0ID0gJyc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZXNpemluZ0hhbmRsZXIoZSkge1xyXG5cdFx0d2lkdGhFbCA9ICRvZmZzZXRQYXJlbnQuY2xpZW50V2lkdGg7XHJcblx0XHRoZWFkZXJIZWlnaHQgPSAkaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcblx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdGA7XHJcblxyXG5cdFx0c2Nyb2xsaW5nSGFuZGxlcigpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2Nyb2xsaW5nSGFuZGxlcigpIHtcclxuXHRcdGlmIChoZWlnaHRIZWFkZXIgPT0gJGhlYWRlci5vZmZzZXRIZWlnaHQpIHJldHVybjtcclxuXHRcdGhlaWdodEhlYWRlciA9ICRoZWFkZXIub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0JGVsLnN0eWxlLnRvcCA9IGAke2hlaWdodEhlYWRlciArIDMwfXB4YDtcclxuXHRcdC8vIGlmICh0b3BQb3NFbCA8ICh3aW5kb3cucGFnZVlPZmZzZXQgKyBoZWFkZXJIZWlnaHQpKSB7XHJcblxyXG5cdFx0Ly8gXHRpZiAoISRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdFx0JGVsLnN0eWxlLmNzc1RleHQgPSBgXHJcblx0XHQvLyBcdFx0XHR0b3A6ICR7aGVhZGVySGVpZ2h0fXB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cclxuXHRcdC8vIFx0XHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyBcdFx0JGVsLmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyBcdGlmIChfZ2V0VG9wT2Zmc2V0RnJvbUJvdHRvbSgkZWwpID4gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJG9mZnNldFBhcmVudCkpIHtcclxuXHRcdC8vIFx0XHRpZiAoKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSkpIHJldHVybjtcclxuXHRcdC8vIFx0XHRwb2ludG9uWXBvc2l0aW9uaW5nID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgncG9zaXRpb25lZCcpO1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdC8vIFx0XHRcdHRvcDogYXV0bztcclxuXHRcdC8vIFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0Ly8gXHRcdFx0d2lkdGg6ICR7d2lkdGhFbH1weDtcclxuXHRcdC8vIFx0XHRgO1xyXG5cdFx0Ly8gXHR9IGVsc2UgaWYgKCRlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bvc2l0aW9uZWQnKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQgPD0gcG9pbnRvbllwb3NpdGlvbmluZykge1xyXG5cdFx0Ly8gXHRcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdwb3NpdGlvbmVkJylcclxuXHRcdC8vIFx0XHQkZWwuY2xhc3NMaXN0LmFkZCgnZml4ZWQnKTtcclxuXHRcdC8vIFx0XHQkZWwuc3R5bGUuY3NzVGV4dCA9IGBcclxuXHRcdC8vIFx0XHRcdHRvcDogJHtoZWFkZXJIZWlnaHR9cHg7XHJcblx0XHQvLyBcdFx0XHR3aWR0aDogJHt3aWR0aEVsfXB4O1xyXG5cdFx0Ly8gXHRcdGA7XHJcblx0XHQvLyBcdH1cclxuXHJcblx0XHQvLyB9IGVsc2UgaWYgKCRvZmZzZXRQYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1maXhlZCcpKSB7XHJcblx0XHQvLyBcdCRlbC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG5cdFx0Ly8gXHQkb2Zmc2V0UGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZpeGVkJyk7XHJcblx0XHQvLyB9XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0VG9wT2Zmc2V0KGUpIHtcclxuXHRcdHZhciB5ID0gMDtcclxuXHRcdGRvIHsgeSArPSBlLm9mZnNldFRvcDsgfSB3aGlsZSAoZSA9IGUub2Zmc2V0UGFyZW50KTtcclxuXHRcdHJldHVybiB5O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gX2dldFRvcE9mZnNldEZyb21Cb3R0b20oJGVsKSB7XHJcblx0XHRyZXR1cm4gJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXJhbWV0cnNcclxufVxyXG5cclxuLyoqKioqKiBVVElMUyAqKioqKiovXHJcbmZ1bmN0aW9uIGlzRWxlbShzZWxlY3Rvcikge1xyXG5cdHJldHVybiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpID8gdHJ1ZSA6IGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfdGhyb3R0bGUoZnVuYywgbXMgPSAxMDApIHtcclxuXHRsZXQgbG9ja2VkID0gZmFsc2U7XHJcblxyXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAobG9ja2VkKSByZXR1cm47XHJcblxyXG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XHJcblx0XHRjb25zdCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0bG9ja2VkID0gdHJ1ZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0ZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuXHRcdFx0bG9ja2VkID0gZmFsc2U7XHJcblx0XHR9LCBtcylcclxuXHR9XHJcbn1cclxuXHJcblxyXG52YXIgc25vd1N0b3JtID0gKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50KSB7XHJcblx0bGV0IHRoYXQgPSB7fSxcclxuXHRcdGZlYXR1cmVzLFxyXG5cdFx0Ly8gVUEgc25pZmZpbmcgYW5kIGJhY2tDb21wYXQgcmVuZGVyaW5nIG1vZGUgY2hlY2tzIGZvciBmaXhlZCBwb3NpdGlvbiwgZXRjLlxyXG5cdFx0aXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21zaWUvaSksXHJcblx0XHRpc0lFNiA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21zaWUgNi9pKSxcclxuXHRcdGlzTW9iaWxlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbW9iaWxlfG9wZXJhIG0ob2J8aW4pL2kpLFxyXG5cdFx0aXNCYWNrQ29tcGF0SUUgPSAoaXNJRSAmJiBkb2N1bWVudC5jb21wYXRNb2RlID09PSAnQmFja0NvbXBhdCcpLFxyXG5cdFx0bm9GaXhlZCA9IChpc0JhY2tDb21wYXRJRSB8fCBpc0lFNiksXHJcblx0XHRzY3JlZW5YID0gbnVsbCwgc2NyZWVuWDIgPSBudWxsLCBzY3JlZW5ZID0gbnVsbCwgc2Nyb2xsWSA9IG51bGwsIGRvY0hlaWdodCA9IG51bGwsIHZSbmRYID0gbnVsbCwgdlJuZFkgPSBudWxsLFxyXG5cdFx0d2luZE9mZnNldCA9IDEsXHJcblx0XHR3aW5kTXVsdGlwbGllciA9IDIsXHJcblx0XHRmbGFrZVR5cGVzID0gNixcclxuXHRcdGZpeGVkRm9yRXZlcnl0aGluZyA9IGZhbHNlLFxyXG5cdFx0dGFyZ2V0RWxlbWVudElzUmVsYXRpdmUgPSBmYWxzZSxcclxuXHRcdG9wYWNpdHlTdXBwb3J0ZWQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0oKSksXHJcblx0XHRkaWRJbml0ID0gZmFsc2UsXHJcblx0XHRkb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cdC8vIC0tLSBjb21tb24gcHJvcGVydGllcyAtLS1cclxuXHJcblx0dGhhdC5hdXRvU3RhcnQgPSB0cnVlOyAgICAgICAgICAvLyBXaGV0aGVyIHRoZSBzbm93IHNob3VsZCBzdGFydCBhdXRvbWF0aWNhbGx5IG9yIG5vdC5cclxuXHR0aGF0LmV4Y2x1ZGVNb2JpbGUgPSBmYWxzZTsgICAgICAvLyBTbm93IGlzIGxpa2VseSB0byBiZSBiYWQgbmV3cyBmb3IgbW9iaWxlIHBob25lcycgQ1BVcyAoYW5kIGJhdHRlcmllcy4pIEVuYWJsZSBhdCB5b3VyIG93biByaXNrLlxyXG5cdHRoYXQuZmxha2VzTWF4ID0gMTI4OyAgICAgICAgICAgLy8gTGltaXQgdG90YWwgYW1vdW50IG9mIHNub3cgbWFkZSAoZmFsbGluZyArIHN0aWNraW5nKVxyXG5cdHRoYXQuZmxha2VzTWF4QWN0aXZlID0gNjQ7ICAgICAgLy8gTGltaXQgYW1vdW50IG9mIHNub3cgZmFsbGluZyBhdCBvbmNlIChsZXNzID0gbG93ZXIgQ1BVIHVzZSlcclxuXHR0aGF0LmFuaW1hdGlvbkludGVydmFsID0gNTA7ICAgIC8vIFRoZW9yZXRpY2FsIFwibWlsaXNlY29uZHMgcGVyIGZyYW1lXCIgbWVhc3VyZW1lbnQuIDIwID0gZmFzdCArIHNtb290aCwgYnV0IGhpZ2ggQ1BVIHVzZS4gNTAgPSBtb3JlIGNvbnNlcnZhdGl2ZSwgYnV0IHNsb3dlclxyXG5cdHRoYXQudXNlR1BVID0gdHJ1ZTsgICAgICAgICAgICAgLy8gRW5hYmxlIHRyYW5zZm9ybS1iYXNlZCBoYXJkd2FyZSBhY2NlbGVyYXRpb24sIHJlZHVjZSBDUFUgbG9hZC5cclxuXHR0aGF0LmNsYXNzTmFtZSA9ICdzbm93JzsgICAgICAgICAgLy8gQ1NTIGNsYXNzIG5hbWUgZm9yIGZ1cnRoZXIgY3VzdG9taXphdGlvbiBvbiBzbm93IGVsZW1lbnRzXHJcblx0dGhhdC5leGNsdWRlTW9iaWxlID0gdHJ1ZTsgICAgICAvLyBTbm93IGlzIGxpa2VseSB0byBiZSBiYWQgbmV3cyBmb3IgbW9iaWxlIHBob25lcycgQ1BVcyAoYW5kIGJhdHRlcmllcy4pIEJ5IGRlZmF1bHQsIGJlIG5pY2UuXHJcblx0dGhhdC5mbGFrZUJvdHRvbSA9IG51bGw7ICAgICAgICAvLyBJbnRlZ2VyIGZvciBZIGF4aXMgc25vdyBsaW1pdCwgMCBvciBudWxsIGZvciBcImZ1bGwtc2NyZWVuXCIgc25vdyBlZmZlY3RcclxuXHR0aGF0LmZvbGxvd01vdXNlID0gZmFsc2U7ICAgICAgICAvLyBTbm93IG1vdmVtZW50IGNhbiByZXNwb25kIHRvIHRoZSB1c2VyJ3MgbW91c2VcclxuXHR0aGF0LnNub3dDb2xvciA9ICcjZmZmJzsgICAgICAgIC8vIERvbid0IGVhdCAob3IgdXNlPykgeWVsbG93IHNub3cuXHJcblx0dGhhdC5zbm93Q2hhcmFjdGVyID0gJyZidWxsOyc7ICAvLyAmYnVsbDsgPSBidWxsZXQsICZtaWRkb3Q7IGlzIHNxdWFyZSBvbiBzb21lIHN5c3RlbXMgZXRjLlxyXG5cdHRoYXQuc25vd1N0aWNrID0gdHJ1ZTsgICAgICAgICAgLy8gV2hldGhlciBvciBub3Qgc25vdyBzaG91bGQgXCJzdGlja1wiIGF0IHRoZSBib3R0b20uIFdoZW4gb2ZmLCB3aWxsIG5ldmVyIGNvbGxlY3QuXHJcblx0dGhhdC50YXJnZXRFbGVtZW50ID0gbnVsbDsgICAgICAvLyBlbGVtZW50IHdoaWNoIHNub3cgd2lsbCBiZSBhcHBlbmRlZCB0byAobnVsbCA9IGRvY3VtZW50LmJvZHkpIC0gY2FuIGJlIGFuIGVsZW1lbnQgSUQgZWcuICdteURpdicsIG9yIGEgRE9NIG5vZGUgcmVmZXJlbmNlXHJcblx0dGhhdC51c2VNZWx0RWZmZWN0ID0gdHJ1ZTsgICAgICAvLyBXaGVuIHJlY3ljbGluZyBmYWxsZW4gc25vdyAob3IgcmFyZWx5LCB3aGVuIGZhbGxpbmcpLCBoYXZlIGl0IFwibWVsdFwiIGFuZCBmYWRlIG91dCBpZiBicm93c2VyIHN1cHBvcnRzIGl0XHJcblx0dGhhdC51c2VUd2lua2xlRWZmZWN0ID0gZmFsc2U7ICAvLyBBbGxvdyBzbm93IHRvIHJhbmRvbWx5IFwiZmxpY2tlclwiIGluIGFuZCBvdXQgb2YgdmlldyB3aGlsZSBmYWxsaW5nXHJcblx0dGhhdC51c2VQb3NpdGlvbkZpeGVkID0gZmFsc2U7ICAvLyB0cnVlID0gc25vdyBkb2VzIG5vdCBzaGlmdCB2ZXJ0aWNhbGx5IHdoZW4gc2Nyb2xsaW5nLiBNYXkgaW5jcmVhc2UgQ1BVIGxvYWQsIGRpc2FibGVkIGJ5IGRlZmF1bHQgLSBpZiBlbmFibGVkLCB1c2VkIG9ubHkgd2hlcmUgc3VwcG9ydGVkXHJcblx0dGhhdC51c2VQaXhlbFBvc2l0aW9uID0gZmFsc2U7ICAvLyBXaGV0aGVyIHRvIHVzZSBwaXhlbCB2YWx1ZXMgZm9yIHNub3cgdG9wL2xlZnQgdnMuIHBlcmNlbnRhZ2VzLiBBdXRvLWVuYWJsZWQgaWYgYm9keSBpcyBwb3NpdGlvbjpyZWxhdGl2ZSBvciB0YXJnZXRFbGVtZW50IGlzIHNwZWNpZmllZC5cclxuXHJcblx0Ly8gLS0tIGxlc3MtdXNlZCBiaXRzIC0tLVxyXG5cclxuXHR0aGF0LmZyZWV6ZU9uQmx1ciA9IHRydWU7ICAgICAgIC8vIE9ubHkgc25vdyB3aGVuIHRoZSB3aW5kb3cgaXMgaW4gZm9jdXMgKGZvcmVncm91bmQuKSBTYXZlcyBDUFUuXHJcblx0dGhhdC5mbGFrZUxlZnRPZmZzZXQgPSAwOyAgICAgICAvLyBMZWZ0IG1hcmdpbi9ndXR0ZXIgc3BhY2Ugb24gZWRnZSBvZiBjb250YWluZXIgKGVnLiBicm93c2VyIHdpbmRvdy4pIEJ1bXAgdXAgdGhlc2UgdmFsdWVzIGlmIHNlZWluZyBob3Jpem9udGFsIHNjcm9sbGJhcnMuXHJcblx0dGhhdC5mbGFrZVJpZ2h0T2Zmc2V0ID0gMDsgICAgICAvLyBSaWdodCBtYXJnaW4vZ3V0dGVyIHNwYWNlIG9uIGVkZ2Ugb2YgY29udGFpbmVyXHJcblx0dGhhdC5mbGFrZVdpZHRoID0gODsgICAgICAgICAgICAvLyBNYXggcGl4ZWwgd2lkdGggcmVzZXJ2ZWQgZm9yIHNub3cgZWxlbWVudFxyXG5cdHRoYXQuZmxha2VIZWlnaHQgPSA4OyAgICAgICAgICAgLy8gTWF4IHBpeGVsIGhlaWdodCByZXNlcnZlZCBmb3Igc25vdyBlbGVtZW50XHJcblx0dGhhdC52TWF4WCA9IDU7ICAgICAgICAgICAgICAgICAvLyBNYXhpbXVtIFggdmVsb2NpdHkgcmFuZ2UgZm9yIHNub3dcclxuXHR0aGF0LnZNYXhZID0gNDsgICAgICAgICAgICAgICAgIC8vIE1heGltdW0gWSB2ZWxvY2l0eSByYW5nZSBmb3Igc25vd1xyXG5cdHRoYXQuekluZGV4ID0gMDsgICAgICAgICAgICAgICAgLy8gQ1NTIHN0YWNraW5nIG9yZGVyIGFwcGxpZWQgdG8gZWFjaCBzbm93Zmxha2VcdFxyXG5cclxuXHRmZWF0dXJlcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIGdldEFuaW1hdGlvbkZyYW1lO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogaGF0IHRpcDogcGF1bCBpcmlzaFxyXG5cdFx0ICogaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cclxuXHRcdCAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tLzgzODc4NVxyXG5cdFx0ICovXHJcblxyXG5cdFx0ZnVuY3Rpb24gdGltZW91dFNoaW0oY2FsbGJhY2spIHtcclxuXHRcdFx0d2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAodGhhdC5hbmltYXRpb25JbnRlcnZhbCB8fCAyMCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBfYW5pbWF0aW9uRnJhbWUgPSAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuXHRcdFx0d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcblx0XHRcdHRpbWVvdXRTaGltKTtcclxuXHJcblx0XHQvLyBhcHBseSB0byB3aW5kb3csIGF2b2lkIFwiaWxsZWdhbCBpbnZvY2F0aW9uXCIgZXJyb3JzIGluIENocm9tZVxyXG5cdFx0Z2V0QW5pbWF0aW9uRnJhbWUgPSBfYW5pbWF0aW9uRnJhbWUgPyBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHJldHVybiBfYW5pbWF0aW9uRnJhbWUuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xyXG5cdFx0fSA6IG51bGw7XHJcblxyXG5cdFx0dmFyIHRlc3REaXY7XHJcblxyXG5cdFx0dGVzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGhhcyhwcm9wKSB7XHJcblxyXG5cdFx0XHQvLyB0ZXN0IGZvciBmZWF0dXJlIHN1cHBvcnRcclxuXHRcdFx0dmFyIHJlc3VsdCA9IHRlc3REaXYuc3R5bGVbcHJvcF07XHJcblx0XHRcdHJldHVybiAocmVzdWx0ICE9PSB1bmRlZmluZWQgPyBwcm9wIDogbnVsbCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdGUgbG9jYWwgc2NvcGUuXHJcblx0XHR2YXIgbG9jYWxGZWF0dXJlcyA9IHtcclxuXHJcblx0XHRcdHRyYW5zZm9ybToge1xyXG5cdFx0XHRcdGllOiBoYXMoJy1tcy10cmFuc2Zvcm0nKSxcclxuXHRcdFx0XHRtb3o6IGhhcygnTW96VHJhbnNmb3JtJyksXHJcblx0XHRcdFx0b3BlcmE6IGhhcygnT1RyYW5zZm9ybScpLFxyXG5cdFx0XHRcdHdlYmtpdDogaGFzKCd3ZWJraXRUcmFuc2Zvcm0nKSxcclxuXHRcdFx0XHR3MzogaGFzKCd0cmFuc2Zvcm0nKSxcclxuXHRcdFx0XHRwcm9wOiBudWxsIC8vIHRoZSBub3JtYWxpemVkIHByb3BlcnR5IHZhbHVlXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRnZXRBbmltYXRpb25GcmFtZTogZ2V0QW5pbWF0aW9uRnJhbWVcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGxvY2FsRmVhdHVyZXMudHJhbnNmb3JtLnByb3AgPSAoXHJcblx0XHRcdGxvY2FsRmVhdHVyZXMudHJhbnNmb3JtLnczIHx8XHJcblx0XHRcdGxvY2FsRmVhdHVyZXMudHJhbnNmb3JtLm1veiB8fFxyXG5cdFx0XHRsb2NhbEZlYXR1cmVzLnRyYW5zZm9ybS53ZWJraXQgfHxcclxuXHRcdFx0bG9jYWxGZWF0dXJlcy50cmFuc2Zvcm0uaWUgfHxcclxuXHRcdFx0bG9jYWxGZWF0dXJlcy50cmFuc2Zvcm0ub3BlcmFcclxuXHRcdCk7XHJcblxyXG5cdFx0dGVzdERpdiA9IG51bGw7XHJcblxyXG5cdFx0cmV0dXJuIGxvY2FsRmVhdHVyZXM7XHJcblxyXG5cdH0oKSk7XHJcblxyXG5cdHRoYXQudGltZXIgPSBudWxsO1xyXG5cdHRoYXQuZmxha2VzID0gW107XHJcblx0dGhhdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdHRoYXQuYWN0aXZlID0gZmFsc2U7XHJcblx0dGhhdC5tZWx0RnJhbWVDb3VudCA9IDIwO1xyXG5cdHRoYXQubWVsdEZyYW1lcyA9IFtdO1xyXG5cclxuXHR0aGF0LnNldFhZID0gZnVuY3Rpb24gKG8sIHgsIHkpIHtcclxuXHJcblx0XHRpZiAoIW8pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGF0LnVzZVBpeGVsUG9zaXRpb24gfHwgdGFyZ2V0RWxlbWVudElzUmVsYXRpdmUpIHtcclxuXHJcblx0XHRcdG8uc3R5bGUubGVmdCA9ICh4IC0gdGhhdC5mbGFrZVdpZHRoKSArICdweCc7XHJcblx0XHRcdG8uc3R5bGUudG9wID0gKHkgLSB0aGF0LmZsYWtlSGVpZ2h0KSArICdweCc7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChub0ZpeGVkKSB7XHJcblxyXG5cdFx0XHRvLnN0eWxlLnJpZ2h0ID0gKDEwMCAtICh4IC8gc2NyZWVuWCAqIDEwMCkpICsgJyUnO1xyXG5cdFx0XHQvLyBhdm9pZCBjcmVhdGluZyB2ZXJ0aWNhbCBzY3JvbGxiYXJzXHJcblx0XHRcdG8uc3R5bGUudG9wID0gKE1hdGgubWluKHksIGRvY0hlaWdodCAtIHRoYXQuZmxha2VIZWlnaHQpKSArICdweCc7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGlmICghdGhhdC5mbGFrZUJvdHRvbSkge1xyXG5cclxuXHRcdFx0XHQvLyBpZiBub3QgdXNpbmcgYSBmaXhlZCBib3R0b20gY29vcmRpbmF0ZS4uLlxyXG5cdFx0XHRcdG8uc3R5bGUucmlnaHQgPSAoMTAwIC0gKHggLyBzY3JlZW5YICogMTAwKSkgKyAnJSc7XHJcblx0XHRcdFx0by5zdHlsZS5ib3R0b20gPSAoMTAwIC0gKHkgLyBzY3JlZW5ZICogMTAwKSkgKyAnJSc7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBhYnNvbHV0ZSB0b3AuXHJcblx0XHRcdFx0by5zdHlsZS5yaWdodCA9ICgxMDAgLSAoeCAvIHNjcmVlblggKiAxMDApKSArICclJztcclxuXHRcdFx0XHRvLnN0eWxlLnRvcCA9IChNYXRoLm1pbih5LCBkb2NIZWlnaHQgLSB0aGF0LmZsYWtlSGVpZ2h0KSkgKyAncHgnO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0dGhhdC5ldmVudHMgPSAoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBvbGQgPSAoIXdpbmRvdy5hZGRFdmVudExpc3RlbmVyICYmIHdpbmRvdy5hdHRhY2hFdmVudCksIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLFxyXG5cdFx0XHRldnQgPSB7XHJcblx0XHRcdFx0YWRkOiAob2xkID8gJ2F0dGFjaEV2ZW50JyA6ICdhZGRFdmVudExpc3RlbmVyJyksXHJcblx0XHRcdFx0cmVtb3ZlOiAob2xkID8gJ2RldGFjaEV2ZW50JyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJylcclxuXHRcdFx0fTtcclxuXHJcblx0XHRmdW5jdGlvbiBnZXRBcmdzKG9BcmdzKSB7XHJcblx0XHRcdHZhciBhcmdzID0gc2xpY2UuY2FsbChvQXJncyksIGxlbiA9IGFyZ3MubGVuZ3RoO1xyXG5cdFx0XHRpZiAob2xkKSB7XHJcblx0XHRcdFx0YXJnc1sxXSA9ICdvbicgKyBhcmdzWzFdOyAvLyBwcmVmaXhcclxuXHRcdFx0XHRpZiAobGVuID4gMykge1xyXG5cdFx0XHRcdFx0YXJncy5wb3AoKTsgLy8gbm8gY2FwdHVyZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChsZW4gPT09IDMpIHtcclxuXHRcdFx0XHRhcmdzLnB1c2goZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBhcmdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGFwcGx5KGFyZ3MsIHNUeXBlKSB7XHJcblx0XHRcdHZhciBlbGVtZW50ID0gYXJncy5zaGlmdCgpLFxyXG5cdFx0XHRcdG1ldGhvZCA9IFtldnRbc1R5cGVdXTtcclxuXHRcdFx0aWYgKG9sZCkge1xyXG5cdFx0XHRcdGVsZW1lbnRbbWV0aG9kXShhcmdzWzBdLCBhcmdzWzFdKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlbGVtZW50W21ldGhvZF0uYXBwbHkoZWxlbWVudCwgYXJncyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhZGRFdmVudCgpIHtcclxuXHRcdFx0YXBwbHkoZ2V0QXJncyhhcmd1bWVudHMpLCAnYWRkJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVtb3ZlRXZlbnQoKSB7XHJcblx0XHRcdGFwcGx5KGdldEFyZ3MoYXJndW1lbnRzKSwgJ3JlbW92ZScpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGFkZDogYWRkRXZlbnQsXHJcblx0XHRcdHJlbW92ZTogcmVtb3ZlRXZlbnRcclxuXHRcdH07XHJcblxyXG5cdH0oKSk7XHJcblxyXG5cdGZ1bmN0aW9uIHJuZChuLCBtaW4pIHtcclxuXHRcdGlmIChpc05hTihtaW4pKSB7XHJcblx0XHRcdG1pbiA9IDA7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKE1hdGgucmFuZG9tKCkgKiBuKSArIG1pbjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHBsdXNNaW51cyhuKSB7XHJcblx0XHRyZXR1cm4gKHBhcnNlSW50KHJuZCgyKSwgMTApID09PSAxID8gbiAqIC0xIDogbik7XHJcblx0fVxyXG5cclxuXHR0aGF0LnJhbmRvbWl6ZVdpbmQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaTtcclxuXHRcdHZSbmRYID0gcGx1c01pbnVzKHJuZCh0aGF0LnZNYXhYLCAwLjIpKTtcclxuXHRcdHZSbmRZID0gcm5kKHRoYXQudk1heFksIDAuMik7XHJcblx0XHRpZiAodGhpcy5mbGFrZXMpIHtcclxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuZmxha2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZmxha2VzW2ldLmFjdGl2ZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5mbGFrZXNbaV0uc2V0VmVsb2NpdGllcygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoYXQuc2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpO1xyXG5cdFx0Ly8gXCJhdHRhY2hcIiBzbm93Zmxha2VzIHRvIGJvdHRvbSBvZiB3aW5kb3cgaWYgbm8gYWJzb2x1dGUgYm90dG9tIHZhbHVlIHdhcyBnaXZlblxyXG5cdFx0c2Nyb2xsWSA9ICh0aGF0LmZsYWtlQm90dG9tID8gMCA6IHBhcnNlSW50KHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgKG5vRml4ZWQgPyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA6IDApLCAxMCkpO1xyXG5cdFx0aWYgKGlzTmFOKHNjcm9sbFkpKSB7XHJcblx0XHRcdHNjcm9sbFkgPSAwOyAvLyBOZXRzY2FwZSA2IHNjcm9sbCBmaXhcclxuXHRcdH1cclxuXHRcdGlmICghZml4ZWRGb3JFdmVyeXRoaW5nICYmICF0aGF0LmZsYWtlQm90dG9tICYmIHRoYXQuZmxha2VzKSB7XHJcblx0XHRcdGZvciAoaSA9IDA7IGkgPCB0aGF0LmZsYWtlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmICh0aGF0LmZsYWtlc1tpXS5hY3RpdmUgPT09IDApIHtcclxuXHRcdFx0XHRcdHRoYXQuZmxha2VzW2ldLnN0aWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhhdC5yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIHx8IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG5cdFx0XHRzY3JlZW5YID0gd2luZG93LmlubmVyV2lkdGggLSAxNiAtIHRoYXQuZmxha2VSaWdodE9mZnNldDtcclxuXHRcdFx0c2NyZWVuWSA9ICh0aGF0LmZsYWtlQm90dG9tIHx8IHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRzY3JlZW5YID0gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGgpIC0gKCFpc0lFID8gOCA6IDApIC0gdGhhdC5mbGFrZVJpZ2h0T2Zmc2V0O1xyXG5cdFx0XHRzY3JlZW5ZID0gdGhhdC5mbGFrZUJvdHRvbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0ZG9jSGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQ7XHJcblx0XHRzY3JlZW5YMiA9IHBhcnNlSW50KHNjcmVlblggLyAyLCAxMCk7XHJcblx0fTtcclxuXHJcblx0dGhhdC5yZXNpemVIYW5kbGVyQWx0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0c2NyZWVuWCA9IHRoYXQudGFyZ2V0RWxlbWVudC5vZmZzZXRXaWR0aCAtIHRoYXQuZmxha2VSaWdodE9mZnNldDtcclxuXHRcdHNjcmVlblkgPSB0aGF0LmZsYWtlQm90dG9tIHx8IHRoYXQudGFyZ2V0RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcblx0XHRzY3JlZW5YMiA9IHBhcnNlSW50KHNjcmVlblggLyAyLCAxMCk7XHJcblx0XHRkb2NIZWlnaHQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodDtcclxuXHR9O1xyXG5cclxuXHR0aGF0LmZyZWV6ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIHBhdXNlIGFuaW1hdGlvblxyXG5cdFx0aWYgKCF0aGF0LmRpc2FibGVkKSB7XHJcblx0XHRcdHRoYXQuZGlzYWJsZWQgPSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0dGhhdC50aW1lciA9IG51bGw7XHJcblx0fTtcclxuXHJcblx0dGhhdC5yZXN1bWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAodGhhdC5kaXNhYmxlZCkge1xyXG5cdFx0XHR0aGF0LmRpc2FibGVkID0gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHRoYXQudGltZXJJbml0KCk7XHJcblx0fTtcclxuXHJcblx0dGhhdC50b2dnbGVTbm93ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCF0aGF0LmZsYWtlcy5sZW5ndGgpIHtcclxuXHRcdFx0Ly8gZmlyc3QgcnVuXHJcblx0XHRcdHRoYXQuc3RhcnQoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoYXQuYWN0aXZlID0gIXRoYXQuYWN0aXZlO1xyXG5cdFx0XHRpZiAodGhhdC5hY3RpdmUpIHtcclxuXHRcdFx0XHR0aGF0LnNob3coKTtcclxuXHRcdFx0XHR0aGF0LnJlc3VtZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQuc3RvcCgpO1xyXG5cdFx0XHRcdHRoYXQuZnJlZXplKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGF0LnN0b3AgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR2YXIgaTtcclxuXHRcdHRoaXMuZnJlZXplKCk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5mbGFrZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5mbGFrZXNbaV0uby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0fVxyXG5cdFx0dGhhdC5ldmVudHMucmVtb3ZlKHdpbmRvdywgJ3Njcm9sbCcsIHRoYXQuc2Nyb2xsSGFuZGxlcik7XHJcblx0XHR0aGF0LmV2ZW50cy5yZW1vdmUod2luZG93LCAncmVzaXplJywgdGhhdC5yZXNpemVIYW5kbGVyKTtcclxuXHRcdGlmICh0aGF0LmZyZWV6ZU9uQmx1cikge1xyXG5cdFx0XHRpZiAoaXNJRSkge1xyXG5cdFx0XHRcdHRoYXQuZXZlbnRzLnJlbW92ZShkb2N1bWVudCwgJ2ZvY3Vzb3V0JywgdGhhdC5mcmVlemUpO1xyXG5cdFx0XHRcdHRoYXQuZXZlbnRzLnJlbW92ZShkb2N1bWVudCwgJ2ZvY3VzaW4nLCB0aGF0LnJlc3VtZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhhdC5ldmVudHMucmVtb3ZlKHdpbmRvdywgJ2JsdXInLCB0aGF0LmZyZWV6ZSk7XHJcblx0XHRcdFx0dGhhdC5ldmVudHMucmVtb3ZlKHdpbmRvdywgJ2ZvY3VzJywgdGhhdC5yZXN1bWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhhdC5zaG93ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhpcy5mbGFrZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5mbGFrZXNbaV0uby5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGF0LlNub3dGbGFrZSA9IGZ1bmN0aW9uICh0eXBlLCB4LCB5KSB7XHJcblx0XHR2YXIgcyA9IHRoaXM7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy54ID0geCB8fCBwYXJzZUludChybmQoc2NyZWVuWCAtIDIwKSwgMTApO1xyXG5cdFx0dGhpcy55ID0gKCFpc05hTih5KSA/IHkgOiAtcm5kKHNjcmVlblkpIC0gMTIpO1xyXG5cdFx0dGhpcy52WCA9IG51bGw7XHJcblx0XHR0aGlzLnZZID0gbnVsbDtcclxuXHRcdHRoaXMudkFtcFR5cGVzID0gWzEsIDEuMiwgMS40LCAxLjYsIDEuOF07IC8vIFwiYW1wbGlmaWNhdGlvblwiIGZvciB2WC92WSAoYmFzZWQgb24gZmxha2Ugc2l6ZS90eXBlKVxyXG5cdFx0dGhpcy52QW1wID0gdGhpcy52QW1wVHlwZXNbdGhpcy50eXBlXSB8fCAxO1xyXG5cdFx0dGhpcy5tZWx0aW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLm1lbHRGcmFtZUNvdW50ID0gdGhhdC5tZWx0RnJhbWVDb3VudDtcclxuXHRcdHRoaXMubWVsdEZyYW1lcyA9IHRoYXQubWVsdEZyYW1lcztcclxuXHRcdHRoaXMubWVsdEZyYW1lID0gMDtcclxuXHRcdHRoaXMudHdpbmtsZUZyYW1lID0gMDtcclxuXHRcdHRoaXMuYWN0aXZlID0gMTtcclxuXHRcdHRoaXMuZm9udFNpemUgPSAoMTAgKyAodGhpcy50eXBlIC8gNSkgKiAxMCk7XHJcblx0XHR0aGlzLm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRcdHRoaXMuby5pbm5lckhUTUwgPSB0aGF0LnNub3dDaGFyYWN0ZXI7XHJcblx0XHRpZiAodGhhdC5jbGFzc05hbWUpIHtcclxuXHRcdFx0dGhpcy5vLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGF0LmNsYXNzTmFtZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLm8uc3R5bGUuY29sb3IgPSB0aGF0LnNub3dDb2xvcjtcclxuXHRcdHRoaXMuby5zdHlsZS5wb3NpdGlvbiA9IChmaXhlZEZvckV2ZXJ5dGhpbmcgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyk7XHJcblx0XHRpZiAodGhhdC51c2VHUFUgJiYgZmVhdHVyZXMudHJhbnNmb3JtLnByb3ApIHtcclxuXHRcdFx0Ly8gR1BVLWFjY2VsZXJhdGVkIHNub3cuXHJcblx0XHRcdHRoaXMuby5zdHlsZVtmZWF0dXJlcy50cmFuc2Zvcm0ucHJvcF0gPSAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5vLnN0eWxlLndpZHRoID0gdGhhdC5mbGFrZVdpZHRoICsgJ3B4JztcclxuXHRcdHRoaXMuby5zdHlsZS5oZWlnaHQgPSB0aGF0LmZsYWtlSGVpZ2h0ICsgJ3B4JztcclxuXHRcdHRoaXMuby5zdHlsZS5mb250RmFtaWx5ID0gJ2FyaWFsLHZlcmRhbmEnO1xyXG5cdFx0dGhpcy5vLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuXHRcdHRoaXMuby5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cdFx0dGhpcy5vLnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuXHRcdHRoaXMuby5zdHlsZS56SW5kZXggPSB0aGF0LnpJbmRleDtcclxuXHRcdGRvY0ZyYWcuYXBwZW5kQ2hpbGQodGhpcy5vKTtcclxuXHJcblx0XHR0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChpc05hTihzLngpIHx8IGlzTmFOKHMueSkpIHtcclxuXHRcdFx0XHQvLyBzYWZldHkgY2hlY2tcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhhdC5zZXRYWShzLm8sIHMueCwgcy55KTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zdGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKG5vRml4ZWQgfHwgKHRoYXQudGFyZ2V0RWxlbWVudCAhPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIHRoYXQudGFyZ2V0RWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkpIHtcclxuXHRcdFx0XHRzLm8uc3R5bGUudG9wID0gKHNjcmVlblkgKyBzY3JvbGxZIC0gdGhhdC5mbGFrZUhlaWdodCkgKyAncHgnO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoYXQuZmxha2VCb3R0b20pIHtcclxuXHRcdFx0XHRzLm8uc3R5bGUudG9wID0gdGhhdC5mbGFrZUJvdHRvbSArICdweCc7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cy5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdFx0cy5vLnN0eWxlLmJvdHRvbSA9ICcwJSc7XHJcblx0XHRcdFx0cy5vLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuXHRcdFx0XHRzLm8uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy52Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmIChzLnZYID49IDAgJiYgcy52WCA8IDAuMikge1xyXG5cdFx0XHRcdHMudlggPSAwLjI7XHJcblx0XHRcdH0gZWxzZSBpZiAocy52WCA8IDAgJiYgcy52WCA+IC0wLjIpIHtcclxuXHRcdFx0XHRzLnZYID0gLTAuMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocy52WSA+PSAwICYmIHMudlkgPCAwLjIpIHtcclxuXHRcdFx0XHRzLnZZID0gMC4yO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIHZYID0gcy52WCAqIHdpbmRPZmZzZXQsIHlEaWZmO1xyXG5cdFx0XHRzLnggKz0gdlg7XHJcblx0XHRcdHMueSArPSAocy52WSAqIHMudkFtcCk7XHJcblx0XHRcdGlmIChzLnggPj0gc2NyZWVuWCB8fCBzY3JlZW5YIC0gcy54IDwgdGhhdC5mbGFrZVdpZHRoKSB7IC8vIFgtYXhpcyBzY3JvbGwgY2hlY2tcclxuXHRcdFx0XHRzLnggPSAwO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHZYIDwgMCAmJiBzLnggLSB0aGF0LmZsYWtlTGVmdE9mZnNldCA8IC10aGF0LmZsYWtlV2lkdGgpIHtcclxuXHRcdFx0XHRzLnggPSBzY3JlZW5YIC0gdGhhdC5mbGFrZVdpZHRoIC0gMTsgLy8gZmxha2VXaWR0aDtcclxuXHRcdFx0fVxyXG5cdFx0XHRzLnJlZnJlc2goKTtcclxuXHRcdFx0eURpZmYgPSBzY3JlZW5ZICsgc2Nyb2xsWSAtIHMueSArIHRoYXQuZmxha2VIZWlnaHQ7XHJcblx0XHRcdGlmICh5RGlmZiA8IHRoYXQuZmxha2VIZWlnaHQpIHtcclxuXHRcdFx0XHRzLmFjdGl2ZSA9IDA7XHJcblx0XHRcdFx0aWYgKHRoYXQuc25vd1N0aWNrKSB7XHJcblx0XHRcdFx0XHRzLnN0aWNrKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHMucmVjeWNsZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAodGhhdC51c2VNZWx0RWZmZWN0ICYmIHMuYWN0aXZlICYmIHMudHlwZSA8IDMgJiYgIXMubWVsdGluZyAmJiBNYXRoLnJhbmRvbSgpID4gMC45OTgpIHtcclxuXHRcdFx0XHRcdC8vIH4xLzEwMDAgY2hhbmNlIG9mIG1lbHRpbmcgbWlkLWFpciwgd2l0aCBlYWNoIGZyYW1lXHJcblx0XHRcdFx0XHRzLm1lbHRpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0cy5tZWx0KCk7XHJcblx0XHRcdFx0XHQvLyBvbmx5IGluY3JlbWVudGFsbHkgbWVsdCBvbmUgZnJhbWVcclxuXHRcdFx0XHRcdC8vIHMubWVsdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhhdC51c2VUd2lua2xlRWZmZWN0KSB7XHJcblx0XHRcdFx0XHRpZiAocy50d2lua2xlRnJhbWUgPCAwKSB7XHJcblx0XHRcdFx0XHRcdGlmIChNYXRoLnJhbmRvbSgpID4gMC45Nykge1xyXG5cdFx0XHRcdFx0XHRcdHMudHdpbmtsZUZyYW1lID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDgsIDEwKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cy50d2lua2xlRnJhbWUtLTtcclxuXHRcdFx0XHRcdFx0aWYgKCFvcGFjaXR5U3VwcG9ydGVkKSB7XHJcblx0XHRcdFx0XHRcdFx0cy5vLnN0eWxlLnZpc2liaWxpdHkgPSAocy50d2lua2xlRnJhbWUgJiYgcy50d2lua2xlRnJhbWUgJSAyID09PSAwID8gJ2hpZGRlbicgOiAndmlzaWJsZScpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHMuby5zdHlsZS5vcGFjaXR5ID0gKHMudHdpbmtsZUZyYW1lICYmIHMudHdpbmtsZUZyYW1lICUgMiA9PT0gMCA/IDAgOiAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdC8vIG1haW4gYW5pbWF0aW9uIGxvb3BcclxuXHRcdFx0Ly8gbW92ZSwgY2hlY2sgc3RhdHVzLCBkaWUgZXRjLlxyXG5cdFx0XHRzLm1vdmUoKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zZXRWZWxvY2l0aWVzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRzLnZYID0gdlJuZFggKyBybmQodGhhdC52TWF4WCAqIDAuMTIsIDAuMSk7XHJcblx0XHRcdHMudlkgPSB2Um5kWSArIHJuZCh0aGF0LnZNYXhZICogMC4xMiwgMC4xKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zZXRPcGFjaXR5ID0gZnVuY3Rpb24gKG8sIG9wYWNpdHkpIHtcclxuXHRcdFx0aWYgKCFvcGFjaXR5U3VwcG9ydGVkKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdG8uc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMubWVsdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKCF0aGF0LnVzZU1lbHRFZmZlY3QgfHwgIXMubWVsdGluZykge1xyXG5cdFx0XHRcdHMucmVjeWNsZSgpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChzLm1lbHRGcmFtZSA8IHMubWVsdEZyYW1lQ291bnQpIHtcclxuXHRcdFx0XHRcdHMuc2V0T3BhY2l0eShzLm8sIHMubWVsdEZyYW1lc1tzLm1lbHRGcmFtZV0pO1xyXG5cdFx0XHRcdFx0cy5vLnN0eWxlLmZvbnRTaXplID0gcy5mb250U2l6ZSAtIChzLmZvbnRTaXplICogKHMubWVsdEZyYW1lIC8gcy5tZWx0RnJhbWVDb3VudCkpICsgJ3B4JztcclxuXHRcdFx0XHRcdHMuby5zdHlsZS5saW5lSGVpZ2h0ID0gdGhhdC5mbGFrZUhlaWdodCArIDIgKyAodGhhdC5mbGFrZUhlaWdodCAqIDAuNzUgKiAocy5tZWx0RnJhbWUgLyBzLm1lbHRGcmFtZUNvdW50KSkgKyAncHgnO1xyXG5cdFx0XHRcdFx0cy5tZWx0RnJhbWUrKztcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0cy5yZWN5Y2xlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0cy5vLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblx0XHRcdHMuby5zdHlsZS5wb3NpdGlvbiA9IChmaXhlZEZvckV2ZXJ5dGhpbmcgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyk7XHJcblx0XHRcdHMuby5zdHlsZS5ib3R0b20gPSAnYXV0byc7XHJcblx0XHRcdHMuc2V0VmVsb2NpdGllcygpO1xyXG5cdFx0XHRzLnZDaGVjaygpO1xyXG5cdFx0XHRzLm1lbHRGcmFtZSA9IDA7XHJcblx0XHRcdHMubWVsdGluZyA9IGZhbHNlO1xyXG5cdFx0XHRzLnNldE9wYWNpdHkocy5vLCAxKTtcclxuXHRcdFx0cy5vLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcclxuXHRcdFx0cy5vLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xyXG5cdFx0XHRzLm8uc3R5bGUuZm9udFNpemUgPSBzLmZvbnRTaXplICsgJ3B4JztcclxuXHRcdFx0cy5vLnN0eWxlLmxpbmVIZWlnaHQgPSAodGhhdC5mbGFrZUhlaWdodCArIDIpICsgJ3B4JztcclxuXHRcdFx0cy5vLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG5cdFx0XHRzLm8uc3R5bGUudmVydGljYWxBbGlnbiA9ICdiYXNlbGluZSc7XHJcblx0XHRcdHMueCA9IHBhcnNlSW50KHJuZChzY3JlZW5YIC0gdGhhdC5mbGFrZVdpZHRoIC0gMjApLCAxMCk7XHJcblx0XHRcdHMueSA9IHBhcnNlSW50KHJuZChzY3JlZW5ZKSAqIC0xLCAxMCkgLSB0aGF0LmZsYWtlSGVpZ2h0O1xyXG5cdFx0XHRzLnJlZnJlc2goKTtcclxuXHRcdFx0cy5vLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cdFx0XHRzLmFjdGl2ZSA9IDE7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVjeWNsZSgpOyAvLyBzZXQgdXAgeC95IGNvb3JkcyBldGMuXHJcblx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhhdC5zbm93ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGFjdGl2ZSA9IDAsIGZsYWtlID0gbnVsbCwgaSwgajtcclxuXHRcdGZvciAoaSA9IDAsIGogPSB0aGF0LmZsYWtlcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoYXQuZmxha2VzW2ldLmFjdGl2ZSA9PT0gMSkge1xyXG5cdFx0XHRcdHRoYXQuZmxha2VzW2ldLm1vdmUoKTtcclxuXHRcdFx0XHRhY3RpdmUrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhhdC5mbGFrZXNbaV0ubWVsdGluZykge1xyXG5cdFx0XHRcdHRoYXQuZmxha2VzW2ldLm1lbHQoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGFjdGl2ZSA8IHRoYXQuZmxha2VzTWF4QWN0aXZlKSB7XHJcblx0XHRcdGZsYWtlID0gdGhhdC5mbGFrZXNbcGFyc2VJbnQocm5kKHRoYXQuZmxha2VzLmxlbmd0aCksIDEwKV07XHJcblx0XHRcdGlmIChmbGFrZS5hY3RpdmUgPT09IDApIHtcclxuXHRcdFx0XHRmbGFrZS5tZWx0aW5nID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHRoYXQudGltZXIpIHtcclxuXHRcdFx0ZmVhdHVyZXMuZ2V0QW5pbWF0aW9uRnJhbWUodGhhdC5zbm93KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGF0Lm1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XHJcblx0XHRpZiAoIXRoYXQuZm9sbG93TW91c2UpIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHR2YXIgeCA9IHBhcnNlSW50KGUuY2xpZW50WCwgMTApO1xyXG5cdFx0aWYgKHggPCBzY3JlZW5YMikge1xyXG5cdFx0XHR3aW5kT2Zmc2V0ID0gLXdpbmRNdWx0aXBsaWVyICsgKHggLyBzY3JlZW5YMiAqIHdpbmRNdWx0aXBsaWVyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHggLT0gc2NyZWVuWDI7XHJcblx0XHRcdHdpbmRPZmZzZXQgPSAoeCAvIHNjcmVlblgyKSAqIHdpbmRNdWx0aXBsaWVyO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoYXQuY3JlYXRlU25vdyA9IGZ1bmN0aW9uIChsaW1pdCwgYWxsb3dJbmFjdGl2ZSkge1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGltaXQ7IGkrKykge1xyXG5cdFx0XHR0aGF0LmZsYWtlc1t0aGF0LmZsYWtlcy5sZW5ndGhdID0gbmV3IHRoYXQuU25vd0ZsYWtlKHBhcnNlSW50KHJuZChmbGFrZVR5cGVzKSwgMTApKTtcclxuXHRcdFx0aWYgKGFsbG93SW5hY3RpdmUgfHwgaSA+IHRoYXQuZmxha2VzTWF4QWN0aXZlKSB7XHJcblx0XHRcdFx0dGhhdC5mbGFrZXNbdGhhdC5mbGFrZXMubGVuZ3RoIC0gMV0uYWN0aXZlID0gLTE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoYXQudGFyZ2V0RWxlbWVudC5hcHBlbmRDaGlsZChkb2NGcmFnKTtcclxuXHR9O1xyXG5cclxuXHR0aGF0LnRpbWVySW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoYXQudGltZXIgPSB0cnVlO1xyXG5cdFx0dGhhdC5zbm93KCk7XHJcblx0fTtcclxuXHJcblx0dGhhdC5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgdGhhdC5tZWx0RnJhbWVDb3VudDsgaSsrKSB7XHJcblx0XHRcdHRoYXQubWVsdEZyYW1lcy5wdXNoKDEgLSAoaSAvIHRoYXQubWVsdEZyYW1lQ291bnQpKTtcclxuXHRcdH1cclxuXHRcdHRoYXQucmFuZG9taXplV2luZCgpO1xyXG5cdFx0dGhhdC5jcmVhdGVTbm93KHRoYXQuZmxha2VzTWF4KTsgLy8gY3JlYXRlIGluaXRpYWwgYmF0Y2hcclxuXHRcdHRoYXQuZXZlbnRzLmFkZCh3aW5kb3csICdyZXNpemUnLCB0aGF0LnJlc2l6ZUhhbmRsZXIpO1xyXG5cdFx0dGhhdC5ldmVudHMuYWRkKHdpbmRvdywgJ3Njcm9sbCcsIHRoYXQuc2Nyb2xsSGFuZGxlcik7XHJcblx0XHRpZiAodGhhdC5mcmVlemVPbkJsdXIpIHtcclxuXHRcdFx0aWYgKGlzSUUpIHtcclxuXHRcdFx0XHR0aGF0LmV2ZW50cy5hZGQoZG9jdW1lbnQsICdmb2N1c291dCcsIHRoYXQuZnJlZXplKTtcclxuXHRcdFx0XHR0aGF0LmV2ZW50cy5hZGQoZG9jdW1lbnQsICdmb2N1c2luJywgdGhhdC5yZXN1bWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoYXQuZXZlbnRzLmFkZCh3aW5kb3csICdibHVyJywgdGhhdC5mcmVlemUpO1xyXG5cdFx0XHRcdHRoYXQuZXZlbnRzLmFkZCh3aW5kb3csICdmb2N1cycsIHRoYXQucmVzdW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhhdC5yZXNpemVIYW5kbGVyKCk7XHJcblx0XHR0aGF0LnNjcm9sbEhhbmRsZXIoKTtcclxuXHRcdGlmICh0aGF0LmZvbGxvd01vdXNlKSB7XHJcblx0XHRcdHRoYXQuZXZlbnRzLmFkZChpc0lFID8gZG9jdW1lbnQgOiB3aW5kb3csICdtb3VzZW1vdmUnLCB0aGF0Lm1vdXNlTW92ZSk7XHJcblx0XHR9XHJcblx0XHR0aGF0LmFuaW1hdGlvbkludGVydmFsID0gTWF0aC5tYXgoMjAsIHRoYXQuYW5pbWF0aW9uSW50ZXJ2YWwpO1xyXG5cdFx0dGhhdC50aW1lckluaXQoKTtcclxuXHR9O1xyXG5cclxuXHR0aGF0LnN0YXJ0ID0gZnVuY3Rpb24gKGJGcm9tT25Mb2FkKSB7XHJcblx0XHRpZiAoIWRpZEluaXQpIHtcclxuXHRcdFx0ZGlkSW5pdCA9IHRydWU7XHJcblx0XHR9IGVsc2UgaWYgKGJGcm9tT25Mb2FkKSB7XHJcblx0XHRcdC8vIGFscmVhZHkgbG9hZGVkIGFuZCBydW5uaW5nXHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiB0aGF0LnRhcmdldEVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdHZhciB0YXJnZXRJRCA9IHRoYXQudGFyZ2V0RWxlbWVudDtcclxuXHRcdFx0dGhhdC50YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SUQpO1xyXG5cdFx0XHRpZiAoIXRoYXQudGFyZ2V0RWxlbWVudCkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignU25vd3N0b3JtOiBVbmFibGUgdG8gZ2V0IHRhcmdldEVsZW1lbnQgXCInICsgdGFyZ2V0SUQgKyAnXCInKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGF0LnRhcmdldEVsZW1lbnQpIHtcclxuXHRcdFx0dGhhdC50YXJnZXRFbGVtZW50ID0gKGRvY3VtZW50LmJvZHkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGF0LnRhcmdldEVsZW1lbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiB0aGF0LnRhcmdldEVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcclxuXHRcdFx0Ly8gcmUtbWFwIGhhbmRsZXIgdG8gZ2V0IGVsZW1lbnQgaW5zdGVhZCBvZiBzY3JlZW4gZGltZW5zaW9uc1xyXG5cdFx0XHR0aGF0LnJlc2l6ZUhhbmRsZXIgPSB0aGF0LnJlc2l6ZUhhbmRsZXJBbHQ7XHJcblx0XHRcdC8vYW5kIGZvcmNlLWVuYWJsZSBwaXhlbCBwb3NpdGlvbmluZ1xyXG5cdFx0XHR0aGF0LnVzZVBpeGVsUG9zaXRpb24gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0dGhhdC5yZXNpemVIYW5kbGVyKCk7IC8vIGdldCBib3VuZGluZyBib3ggZWxlbWVudHNcclxuXHRcdHRoYXQudXNlUG9zaXRpb25GaXhlZCA9ICh0aGF0LnVzZVBvc2l0aW9uRml4ZWQgJiYgIW5vRml4ZWQgJiYgIXRoYXQuZmxha2VCb3R0b20pOyAvLyB3aGV0aGVyIG9yIG5vdCBwb3NpdGlvbjpmaXhlZCBpcyB0byBiZSB1c2VkXHJcblx0XHRpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUpIHtcclxuXHRcdFx0Ly8gYXR0ZW1wdCB0byBkZXRlcm1pbmUgaWYgYm9keSBvciB1c2VyLXNwZWNpZmllZCBzbm93IHBhcmVudCBlbGVtZW50IGlzIHJlbGF0bGl2ZWx5LXBvc2l0aW9uZWQuXHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0dGFyZ2V0RWxlbWVudElzUmVsYXRpdmUgPSAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGhhdC50YXJnZXRFbGVtZW50LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwb3NpdGlvbicpID09PSAncmVsYXRpdmUnKTtcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdC8vIG9oIHdlbGxcclxuXHRcdFx0XHR0YXJnZXRFbGVtZW50SXNSZWxhdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRmaXhlZEZvckV2ZXJ5dGhpbmcgPSB0aGF0LnVzZVBvc2l0aW9uRml4ZWQ7XHJcblx0XHRpZiAoc2NyZWVuWCAmJiBzY3JlZW5ZICYmICF0aGF0LmRpc2FibGVkKSB7XHJcblx0XHRcdHRoYXQuaW5pdCgpO1xyXG5cdFx0XHR0aGF0LmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24gZG9EZWxheWVkU3RhcnQoKSB7XHJcblx0XHR3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoYXQuc3RhcnQodHJ1ZSk7XHJcblx0XHR9LCAyMCk7XHJcblx0XHQvLyBldmVudCBjbGVhbnVwXHJcblx0XHR0aGF0LmV2ZW50cy5yZW1vdmUoaXNJRSA/IGRvY3VtZW50IDogd2luZG93LCAnbW91c2Vtb3ZlJywgZG9EZWxheWVkU3RhcnQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZG9TdGFydCgpIHtcclxuXHRcdGlmICghdGhhdC5leGNsdWRlTW9iaWxlIHx8ICFpc01vYmlsZSkge1xyXG5cdFx0XHRkb0RlbGF5ZWRTdGFydCgpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZXZlbnQgY2xlYW51cFxyXG5cdFx0dGhhdC5ldmVudHMucmVtb3ZlKHdpbmRvdywgJ2xvYWQnLCBkb1N0YXJ0KTtcclxuXHR9XHJcblxyXG5cdC8vIGhvb2tzIGZvciBzdGFydGluZyB0aGUgc25vd1xyXG5cdGlmICh0aGF0LmF1dG9TdGFydCkge1xyXG5cdFx0dGhhdC5ldmVudHMuYWRkKHdpbmRvdywgJ2xvYWQnLCBkb1N0YXJ0LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdGhhdDtcclxuXHJcbn0od2luZG93LCBkb2N1bWVudCkpO1xyXG4iXX0=
