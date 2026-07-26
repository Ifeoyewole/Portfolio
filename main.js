/**
 * main.js — Oyewole Victor Portfolio
 * Advanced Interactive Architecture & Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const NAVBAR_OFFSET = 85;

    /* ==========================================================================
       1. SCROLL PROGRESS BAR & NAVBAR SCROLL STATE
       ========================================================================== */
    const progressBar = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    const sections = Array.from(document.querySelectorAll('main section[id], header[id]'));
    const navLinks = document.querySelectorAll('.nav-links .nav-item');

    function onWindowScroll() {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Update Scroll Progress Bar
        if (progressBar && docHeight > 0) {
            const scrollPercent = (scrollY / docHeight) * 100;
            progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
        }

        // Toggle Navbar Scrolled Glassmorphism State
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Toggle Back-to-Top Button
        if (backToTopBtn) {
            if (scrollY > 500) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }

        // Scroll Spy Active Link Highlighting
        const scrollPos = scrollY + NAVBAR_OFFSET + 100;
        let currentSectionId = null;

        for (const sec of sections) {
            if (scrollPos >= sec.offsetTop) {
                currentSectionId = sec.id;
            }
        }

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    onWindowScroll(); // Initial call

    /* ==========================================================================
       2. SMOOTH SCROLLING & BACK-TO-TOP
       ========================================================================== */
    function smoothScrollTo(targetSelector) {
        const target = document.querySelector(targetSelector);
        if (!target) return;
        const top = target.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;
        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            e.preventDefault();
            smoothScrollTo(href);

            // Close mobile sidebar if open
            closeMobileSidebar();
        });
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================================================
       3. MOBILE NAVIGATION SIDEBAR
       ========================================================================== */
    const navToggle = document.querySelector('.nav-toggle');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    let overlay = null;

    function createOverlay() {
        if (overlay) return overlay;
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            z-index: 1500;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeMobileSidebar);
        return overlay;
    }

    function openMobileSidebar() {
        if (!mobileSidebar) return;
        mobileSidebar.classList.add('open');
        mobileSidebar.setAttribute('aria-hidden', 'false');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
        
        const bgOverlay = createOverlay();
        requestAnimationFrame(() => bgOverlay.style.opacity = '1');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileSidebar() {
        if (!mobileSidebar || !mobileSidebar.classList.contains('open')) return;
        mobileSidebar.classList.remove('open');
        mobileSidebar.setAttribute('aria-hidden', 'true');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                if (overlay && overlay.parentNode) {
                    overlay.remove();
                    overlay = null;
                }
            }, 300);
        }
        document.body.style.overflow = '';
    }

    if (navToggle) navToggle.addEventListener('click', openMobileSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeMobileSidebar);

    /* ==========================================================================
       4. INTERACTIVE SKILL CATEGORY FILTERING
       ========================================================================== */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const techItems = document.querySelectorAll('.tech-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter') || 'all';

            techItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hide');
                    // Trigger smooth entrance animation
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.85)';
                    requestAnimationFrame(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    /* ==========================================================================
       5. ANIMATED STATISTICAL NUMBER COUNTERS (INTERSECTION OBSERVER)
       ========================================================================== */
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const targetVal = parseInt(el.getAttribute('data-target'), 10);
                if (isNaN(targetVal)) return;

                let startVal = 0;
                const duration = 1600; // ms
                const startTime = performance.now();

                function animateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing out cubic for smooth deceleration
                    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
                    const currentVal = Math.floor(easeOutCubic * targetVal);

                    el.textContent = currentVal.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(animateCounter);
                    } else {
                        el.textContent = targetVal.toLocaleString();
                    }
                }

                requestAnimationFrame(animateCounter);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    statNumbers.forEach(numEl => counterObserver.observe(numEl));

    /* ==========================================================================
       6. SPOTLIGHT CARD GLARE HOVER EFFECT
       ========================================================================== */
    const spotlightCards = document.querySelectorAll('.spotlight-card');

    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    /* ==========================================================================
       7. COPY EMAIL TO CLIPBOARD & TOAST NOTIFICATION
       ========================================================================== */
    const copyButtons = document.querySelectorAll('.copy-email-btn');
    const toast = document.getElementById('toast');
    let toastTimeout = null;

    function showToast(message = "Email address copied to clipboard!") {
        if (!toast) return;
        const msgEl = toast.querySelector('.toast-message');
        if (msgEl) msgEl.textContent = message;

        toast.classList.add('show');
        
        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const email = btn.getAttribute('data-email') || 'oyewolevictorifeoluwa@gmail.com';
            
            try {
                await navigator.clipboard.writeText(email);
                showToast("Email copied to clipboard! ✅");
                
                // Visual feedback on button
                const originalHtml = btn.innerHTML;
                btn.innerHTML = `<i class="fas fa-check text-success"></i> <span>Copied!</span>`;
                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                }, 2000);
            } catch (err) {
                // Fallback for older browsers or permission issues
                const textArea = document.createElement("textarea");
                textArea.value = email;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    showToast("Email copied to clipboard! ✅");
                } catch (e) {
                    showToast("Failed to copy. Please copy manually!");
                }
                document.body.removeChild(textArea);
            }
        });
    });

    /* ==========================================================================
       8. ENHANCED TYPEWRITER EFFECT
       ========================================================================== */
    const typeEl = document.getElementById('typewriter');
    if (typeEl) {
        const phrases = [
            'Building responsive React apps...',
            'Turning complex data into BI dashboards...',
            'Crafting pixel-perfect web interfaces...',
            'Writing scalable full-stack code...',
            'Creating executive Power BI models...',
            'Always learning, always innovating.'
        ];

        let phraseIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let typeSpeed = 70;

        function typeLoop() {
            const currentPhrase = phrases[phraseIdx];
            
            if (isDeleting) {
                charIdx--;
                typeEl.textContent = currentPhrase.slice(0, charIdx);
                typeSpeed = 35;
            } else {
                charIdx++;
                typeEl.textContent = currentPhrase.slice(0, charIdx);
                typeSpeed = 65;
            }

            // If word is completely typed out
            if (!isDeleting && charIdx === currentPhrase.length) {
                typeSpeed = 2000; // Pause at end of phrase
                isDeleting = true;
            } 
            // If word is completely deleted
            else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                phraseIdx = (phraseIdx + 1) % phrases.length;
                typeSpeed = 400; // Pause before new word starts
            }

            setTimeout(typeLoop, typeSpeed);
        }

        setTimeout(typeLoop, 800);
    }

    /* ==========================================================================
       9. PERMANENT DARK THEME ENFORCEMENT
       ========================================================================== */
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.removeItem('ov_theme');


    /* ==========================================================================
       10. REVEAL ON SCROLL INTERSECTION OBSERVER
       ========================================================================== */
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve if we only want animation once
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
});
