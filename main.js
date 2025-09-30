// main.js — site-wide JavaScript

document.addEventListener('DOMContentLoaded', function () {
	// Smooth scrolling for in-page navigation with nav offset
	const navLinks = document.querySelectorAll('nav a');
	const OFFSET = 70;

	function smoothScrollTo(targetSelector) {
		const target = document.querySelector(targetSelector);
		if (!target) return;
		const top = target.getBoundingClientRect().top + window.pageYOffset - OFFSET;
		window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
	}

	navLinks.forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const href = this.getAttribute('href');
			if (!href || href.charAt(0) !== '#') return;
			smoothScrollTo(href);
			// close mobile nav if open
			const navLinksEl = document.getElementById('nav-links');
			if (navLinksEl && navLinksEl.classList.contains('show')) {
				navLinksEl.classList.remove('show');
				document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
			}
		});
	});

	// Mobile nav toggle
	const navToggle = document.querySelector('.nav-toggle');
	const navLinksEl = document.getElementById('nav-links');
	const mobileSidebar = document.getElementById('mobile-sidebar');
	// overlay element (created on demand)
	let overlay = null;

	function createOverlay() {
		overlay = document.createElement('div');
		overlay.className = 'overlay';
		document.body.appendChild(overlay);
		overlay.addEventListener('click', closeSidebar);
	}

	function openSidebar() {
		if (!mobileSidebar) return;
		mobileSidebar.classList.add('open');
		mobileSidebar.setAttribute('aria-hidden', 'false');
		navToggle.setAttribute('aria-expanded', 'true');
		if (!overlay) createOverlay();
		requestAnimationFrame(() => overlay.classList.add('show'));
		document.body.style.overflow = 'hidden';
	}

	function closeSidebar() {
		if (!mobileSidebar) return;
		mobileSidebar.classList.remove('open');
		mobileSidebar.setAttribute('aria-hidden', 'true');
		navToggle.setAttribute('aria-expanded', 'false');
		if (overlay) overlay.classList.remove('show');
		document.body.style.overflow = '';
		setTimeout(() => { if (overlay && !overlay.classList.contains('show')) { overlay.remove(); overlay = null; } }, 350);
	}

	if (navToggle) {
		navToggle.addEventListener('click', function () {
			if (mobileSidebar) {
				if (mobileSidebar.classList.contains('open')) closeSidebar(); else openSidebar();
			} else if (navLinksEl) {
				const isOpen = navLinksEl.classList.toggle('show');
				this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
			}
		});
	}

	// close button inside sidebar
	const sidebarClose = document.querySelector('.sidebar-close');
	if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);

	// Reveal on scroll
	const revealElems = document.querySelectorAll('.reveal');
	const revealObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, { threshold: 0.15 });
	revealElems.forEach(el => revealObserver.observe(el));

	const sections = Array.from(document.querySelectorAll('main section[id]'));
	function onScrollSpy() {
		const scrollPos = window.pageYOffset + OFFSET + 20;
		let currentId = sections[0]?.id || null;
		for (const sec of sections) {
			const top = sec.offsetTop;
			if (scrollPos >= top) currentId = sec.id;
		}
		document.querySelectorAll('nav a').forEach(a => {
			const href = a.getAttribute('href');
			if (!href || href.charAt(0) !== '#') return;
			a.classList.toggle('active', href === `#${currentId}`);
		});
	}
	window.addEventListener('scroll', onScrollSpy, { passive: true });
	onScrollSpy();

	const typeEl = document.getElementById('typewriter');
	if (typeEl && window.matchMedia && window.matchMedia('(min-width: 900px)').matches) {
		const phrases = [
			'Building interactive interfaces.',
			'Visualizing data with Power BI.',
			'Designing delightful user experiences.'
		];

		let current = 0;
		let charIdx = 0;
		let deleting = false;

		const TYPING_SPEED = 60;
		const DELETING_SPEED = 30;
		const PAUSE_AFTER = 1600;

		function tick() {
			const phrase = phrases[current];
			if (!deleting) {
				charIdx++;
				typeEl.textContent = phrase.slice(0, charIdx);
				if (charIdx === phrase.length) {
					deleting = true;
					setTimeout(tick, PAUSE_AFTER);
					return;
				}
				setTimeout(tick, TYPING_SPEED);
			} else {
				charIdx--;
				typeEl.textContent = phrase.slice(0, charIdx);
				if (charIdx === 0) {
					deleting = false;
					current = (current + 1) % phrases.length;
					setTimeout(tick, 300);
					return;
				}
				setTimeout(tick, DELETING_SPEED);
			}
		}

		// Start on initial load, and continue looping
		setTimeout(tick, 700);
	}

	// Dark mode toggle functionality
	const themeToggle = document.querySelector('.theme-toggle');
	if (themeToggle) {
		const themeIcon = themeToggle.querySelector('i');
		const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
		
		// Check for saved theme preference or use system preference
		const getCurrentTheme = () => {
			const savedTheme = localStorage.getItem('theme');
			if (savedTheme) {
				return savedTheme;
			}
			return prefersDarkScheme.matches ? 'dark' : 'light';
		};

		// Set theme and update icon with transition
		const setTheme = (theme) => {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
			
			// Smooth icon transition
			if (themeIcon) {
				themeIcon.style.opacity = '0';
				setTimeout(() => {
					themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
					themeIcon.style.opacity = '1';
				}, 150);
			}
		};

		// Initialize theme on page load
		document.documentElement.style.setProperty('--theme-transition', 'none');
		setTheme(getCurrentTheme());
		// Enable transitions after initial load
		requestAnimationFrame(() => {
			document.documentElement.style.removeProperty('--theme-transition');
		});

		// Toggle theme
		themeToggle.addEventListener('click', () => {
			const currentTheme = getCurrentTheme();
			const newTheme = currentTheme === 'light' ? 'dark' : 'light';
			setTheme(newTheme);
		});

		// Listen for system theme changes
		prefersDarkScheme.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				setTheme(e.matches ? 'dark' : 'light');
			}
		});
	}
});
