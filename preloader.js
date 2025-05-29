// Spider-Verse Scroll-based Preloader Animation - ISOLATED SCRIPT
function initSpiderScrollPreloader() {
    const preloaderElement = document.querySelector('.spider-preloader');
    const preloaderText = document.getElementById('preloader-text');
    const preloaderName = document.getElementById('preloader-name');
    const preloaderSubtitle = document.getElementById('preloader-subtitle');
    const scrollHint = document.querySelector('.preloader-scroll-hint');

    if (!preloaderElement || !preloaderText || !preloaderName || !preloaderSubtitle || !scrollHint) {
        console.error('Preloader elements not found! Aborting preloader.');
        if(preloaderElement) preloaderElement.style.display = 'none'; // Hide if partially found
        document.body.style.overflow = 'auto'; // Ensure page is scrollable
        document.body.style.height = 'auto';
        return;
    }

    let currentStage = 0;
    let scrollAccumulator = 0;
    const SCROLL_THRESHOLD = 200; // Pixels needed to advance (reduced for sensitivity)
    let isAnimating = false;

    // Initial state
    preloaderText.textContent = 'AR';
    preloaderText.style.opacity = '1';
    preloaderName.style.display = 'none';
    preloaderSubtitle.style.opacity = '0';

    console.log('Spider preloader initialized (isolated script)');function advanceStage() {
        if (isAnimating) return;
        isAnimating = true;
        currentStage++;
        scrollAccumulator = 0;
        
        console.log('Advancing to stage:', currentStage);
          if (currentStage === 1) {
            // Transition from "AR" to "AHMED RIYAZ" (two lines)
            preloaderText.style.transform = 'scale(0.8)';
            preloaderText.style.opacity = '0';
            
            setTimeout(() => {
                preloaderText.style.display = 'none';
                preloaderName.style.display = 'block';
                preloaderName.style.opacity = '1';
                preloaderName.style.transform = 'scale(1)';
                scrollHint.innerHTML = '<div>Keep scrolling</div><div class="preloader-scroll-arrow"><i class="fas fa-chevron-down"></i></div>';
                isAnimating = false;
            }, 300);
        } else if (currentStage === 2) {
            preloaderSubtitle.textContent = 'DEVELOPER';
            preloaderSubtitle.style.opacity = '1';
            preloaderSubtitle.style.transform = 'translateY(0)';
            scrollHint.innerHTML = '<div>One more scroll</div><div class="preloader-scroll-arrow"><i class="fas fa-chevron-down"></i></div>';
            isAnimating = false;
        } else if (currentStage === 3) {
            // Instead of sliding away, fade out the background and transition smoothly
            scrollHint.style.opacity = '0';
            
            // Fade out just the preloader background, keeping text positioned
            preloaderElement.style.background = 'transparent';
            
            setTimeout(() => {
                // Remove preloader entirely and reveal hero section
                if (preloaderElement.parentNode) {
                     preloaderElement.remove();
                }
                document.body.style.overflow = 'auto';
                document.body.style.height = 'auto';
                window.scrollTo(0, 0); // Ensure top of page
                console.log('Preloader finished and removed - smooth transition to hero.');
            }, 800);
            
            // Clean up listeners
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('keydown', handleKeyDown);
            scrollHint.removeEventListener('click', handleHintClick);
            
            isAnimating = false;
        }
    }

    function handleWheel(e) {
        if (currentStage >= 3) return;
        e.preventDefault();
        scrollAccumulator += Math.abs(e.deltaY);
        if (scrollAccumulator >= SCROLL_THRESHOLD && !isAnimating) {
            advanceStage();
        }
    }

    let touchStartY = 0;
    function handleTouchStart(e) {
        if (currentStage >= 3) return;
        touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (currentStage >= 3) return;
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const deltaY = Math.abs(touchStartY - touchY);
        if (deltaY > 10) { // Minimum movement
            scrollAccumulator += deltaY;
            touchStartY = touchY; // Update startY for continuous swipe
            if (scrollAccumulator >= SCROLL_THRESHOLD && !isAnimating) {
                advanceStage();
            }
        }
    }

    function handleKeyDown(e) {
        if (currentStage >= 3) return;
        if (['ArrowDown', 'Space', 'PageDown'].includes(e.code)) {
            e.preventDefault();
            if (!isAnimating) advanceStage();
        }
    }
    
    function handleHintClick() {
        if (currentStage < 3 && !isAnimating) {
             advanceStage();
        }
    }

    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh'; // Lock body height during preloader

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    scrollHint.addEventListener('click', handleHintClick);

    console.log('Preloader event listeners added (isolated script)');
    
    // Fallback to ensure preloader doesn't get stuck
    setTimeout(() => {
        if (currentStage < 3 && preloaderElement.parentNode) {
            console.warn("Preloader fallback: Forcing removal.");
            preloaderElement.remove();
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    }, 15000); // 15 seconds timeout
}

// Initialize preloader when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpiderScrollPreloader);
} else {
    initSpiderScrollPreloader();
}
