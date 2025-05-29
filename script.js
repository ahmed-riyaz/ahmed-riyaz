// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('.skill-category, .project-card, .experience-item').forEach(el => {
    observer.observe(el);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic typing effect for hero title - MODIFIED
// Replaces the old typeWriter function
function typeWriterIntoSpans(spansToTypeIn, texts, speed = 100, callback) {
    let spanIndex = 0;
    let charIndex = 0;

    // Clear existing text from spans before typing
    spansToTypeIn.forEach(span => span.innerHTML = '');

    function type() {
        if (spanIndex < spansToTypeIn.length) {
            const currentSpan = spansToTypeIn[spanIndex];
            const currentText = texts[spanIndex]; // texts is an array of strings

            if (charIndex < currentText.length) {
                currentSpan.innerHTML += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                // Finished typing for current span
                spanIndex++;
                charIndex = 0;
                if (spanIndex < spansToTypeIn.length) {
                    // Proceed to the next span. An optional delay could be added here:
                    // setTimeout(type, speed * 3); // Example: pause between spans
                    setTimeout(type, speed); 
                } else {
                     // All texts in all spans typed
                    if (callback) callback();
                }
            }
        } else {
            // All texts in all spans typed (also caught here if logic flows unexpectedly)
            if (callback) callback();
        }
    }
    type();
}

// Initialize typing effect when page loads - MODIFIED
// Replaces the old load listener for the typewriter
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const titleSpans = Array.from(heroTitle.querySelectorAll('span.title-line'));
        
        if (titleSpans.length > 0) {
            // Capture the original text from the HTML spans
            const textsToType = titleSpans.map(span => span.textContent.trim()); 
            
            // Adjust speed here: 120ms per character (original was 150ms)
            typeWriterIntoSpans(titleSpans, textsToType, 120); 
        }
        // If no 'span.title-line' elements are found, the title remains static as per HTML.
    }
    // Note: The preloader's load listener is separate and self-contained within showPreloader(),
    // so no merging of load listeners is needed here. This listener is solely for the typewriter.
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill progress animation
function animateSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 100);
    });
}

// Trigger skill animation when skills section is in view
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// CTA button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Handle button actions
        if (this.textContent.includes('VIEW PROJECTS')) {
            document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        } else if (this.textContent.includes('WATCH DEMO')) {
            // You can add a demo video modal here
            console.log('Demo video would open here');
        }
    });
});

// Add ripple CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: rippleEffect 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Contact form interaction (if you add a form later)
function initContactForm() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const link = this.querySelector('a');
            if (link) {
                window.open(link.href, link.target || '_self');
            }
        });
    });
}

initContactForm();

// Preloader functionality
// function showPreloader() {
//     const preloader = document.createElement('div');
//     preloader.className = 'preloader';
//     preloader.innerHTML = `
//         <div class="preloader-content">
//             <div class="spinner"></div>
//             <p>Loading Portfolio...</p>
//         </div>
//     `;
    
//     const preloaderStyle = document.createElement('style');
//     preloaderStyle.textContent = `
//         .preloader {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: #0a0a0a;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             z-index: 9999;
//             transition: opacity 0.5s ease;
//         }
        
//         .preloader-content {
//             text-align: center;
//         }
        
//         .spinner {
//             width: 50px;
//             height: 50px;
//             border: 3px solid rgba(255, 107, 107, 0.3);
//             border-top: 3px solid #ff6b6b;
//             border-radius: 50%;
//             animation: spin 1s linear infinite;
//             margin: 0 auto 1rem;
//         }
        
//         @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//         }
        
//         .preloader p {
//             color: #ffffff;
//             font-size: 1.1rem;
//             letter-spacing: 2px;
//         }
//     `;
    
//     document.head.appendChild(preloaderStyle);
//     document.body.appendChild(preloader);
    
//     // Hide preloader after page load
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             preloader.style.opacity = '0';
//             setTimeout(() => {
//                 preloader.remove();
//                 preloaderStyle.remove();
//             }, 500);
//         }, 1000);
//     });
// }

// Initialize preloader
// showPreloader(); // Disabled - using new scroll-based preloader instead

// Spider-Verse Scroll-based Preloader Animation - SIMPLIFIED
function initSpiderScrollPreloader() {
    const preloaderElement = document.querySelector('.spider-preloader');
    const preloaderText = document.getElementById('preloader-text');
    const preloaderSubtitle = document.getElementById('preloader-subtitle');
    const scrollHint = document.querySelector('.preloader-scroll-hint');

    if (!preloaderElement || !preloaderText || !preloaderSubtitle) {
        console.error('Preloader elements not found!');
        return;
    }

    let currentStage = 0;
    let scrollAmount = 0;
    const SCROLL_THRESHOLD = 300; // Pixels needed to advance to next stage

    // Initially show "AR"
    preloaderText.textContent = 'AR';
    preloaderText.style.opacity = '1';
    preloaderSubtitle.style.opacity = '0';

    console.log('Spider preloader initialized');

    function advanceStage() {
        currentStage++;
        scrollAmount = 0; // Reset scroll accumulator
        
        console.log('Advancing to stage:', currentStage);
        
        if (currentStage === 1) {
            // Stage 1: AR -> AHMED RIYAZ
            preloaderText.style.transform = 'scale(0.8)';
            setTimeout(() => {
                preloaderText.textContent = 'AHMED RIYAZ';
                preloaderText.style.transform = 'scale(1)';
                scrollHint.innerHTML = '<div>Keep scrolling</div><div class="preloader-scroll-arrow"><i class="fas fa-chevron-down"></i></div>';
            }, 200);
            
        } else if (currentStage === 2) {
            // Stage 2: Show DEVELOPER
            preloaderSubtitle.textContent = 'DEVELOPER';
            preloaderSubtitle.style.opacity = '1';
            preloaderSubtitle.style.transform = 'translateY(0)';
            scrollHint.innerHTML = '<div>One more scroll</div><div class="preloader-scroll-arrow"><i class="fas fa-chevron-down"></i></div>';
            
        } else if (currentStage === 3) {
            // Stage 3: Hide preloader and show website
            preloaderElement.style.transform = 'translateY(-100vh)';
            
            setTimeout(() => {
                preloaderElement.remove();
                document.body.style.overflow = 'auto';
                document.body.style.height = 'auto';
                window.scrollTo(0, 0);
            }, 800);
        }
    }

    // Handle wheel events
    function handleWheel(e) {
        if (currentStage >= 3) return; // Animation complete
        
        e.preventDefault();
        scrollAmount += Math.abs(e.deltaY);
        
        console.log('Wheel event - Stage:', currentStage, 'Scroll amount:', scrollAmount);
        
        if (scrollAmount >= SCROLL_THRESHOLD) {
            advanceStage();
        }
    }

    // Handle touch events
    let touchStartY = 0;
    function handleTouchStart(e) {
        touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (currentStage >= 3) return;
        
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = Math.abs(touchStartY - touchY);
        
        if (deltaY > 20) { // Minimum movement threshold
            scrollAmount += deltaY;
            touchStartY = touchY;
            
            console.log('Touch event - Stage:', currentStage, 'Scroll amount:', scrollAmount);
            
            if (scrollAmount >= SCROLL_THRESHOLD) {
                advanceStage();
            }
        }
    }

    // Handle keyboard events
    function handleKeyDown(e) {
        if (currentStage >= 3) return;
        
        if (['ArrowDown', 'Space', 'PageDown'].includes(e.code)) {
            e.preventDefault();
            console.log('Keyboard event - advancing stage');
            advanceStage();
        }
    }

    // Handle click on scroll hint
    scrollHint.addEventListener('click', () => {
        if (currentStage < 3) {
            console.log('Click event - advancing stage');
            advanceStage();
        }
    });

    // Prevent normal scrolling
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    console.log('Event listeners added');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpiderScrollPreloader);
} else {
    initSpiderScrollPreloader();
}

// Fallback: Force hide preloader after maximum time
setTimeout(() => {
    const spiderPreloader = document.querySelector('.spider-preloader');
    if (spiderPreloader && !spiderPreloader.classList.contains('hidden')) {
        console.warn('Preloader taking too long, forcing hide');
        spiderPreloader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            if (spiderPreloader.parentNode) {
                spiderPreloader.remove();
            }
        }, 800);
    }
}, 15000); // Force hide after 15 seconds maximum


// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        // Easter egg activated
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
        
        console.log('🕷️ Spider-sense activated! You found the secret!');
        konamiCode = [];
    }
});

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
lazyLoadImages();

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #ffd93d);
            z-index: 9999;
            transition: width 0.1s ease;
        }
    `;
    
    document.head.appendChild(progressStyle);
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

console.log('🕸️ Ahmed Riyaz Portfolio - Powered by Web Technologies');
console.log('With great coding comes great applications!');
