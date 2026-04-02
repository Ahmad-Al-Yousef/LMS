
//     // On page load or when changing themes, best to add inline in `head` to avoid FOUC
//     if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//         document.documentElement.classList.add('dark');
//     } else {
//         document.documentElement.classList.remove('dark')
//     }

// var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
// var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// // Change the icons inside the button based on previous settings
// if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     themeToggleLightIcon.classList.remove('hidden');
// } else {
//     themeToggleDarkIcon.classList.remove('hidden');
// }

// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // if set via local storage previously
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         }

//     // if NOT set via local storage previously
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//         }
//     }
    
// });


// var heroImage = document.getElementById('hero-image');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

//     // إذا كان هناك قيمة في localStorage
//     if (localStorage.getItem('color-theme')) {
//         if (localStorage.getItem('color-theme') === 'light') {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//             heroImage.src = 'assets/images/img-hero2.jpeg'; // الصورة المظلمة
//         } else {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//             heroImage.src = 'assets/images/hero-img1.jpeg'; // الصورة النهارية
//         }
//     } else {
//         if (document.documentElement.classList.contains('dark')) {
//             document.documentElement.classList.remove('dark');
//             localStorage.setItem('color-theme', 'light');
//             heroImage.src = 'assets/images/hero-img1.jpeg'; // الصورة النهارية
//         } else {
//             document.documentElement.classList.add('dark');
//             localStorage.setItem('color-theme', 'dark');
//             heroImage.src = 'assets/images/img-hero2.jpeg'; // الصورة المظلمة
//         }
//     }
// });

// // عند تحميل الصفحة
// if (document.documentElement.classList.contains('dark')) {
//     heroImage.src = 'assets/images/img-hero2.jpeg'; // مظلم
// } else {
//     heroImage.src = 'assets/images/hero-img1.jpeg'; // نهاري
// }
 


// عند تحميل الصفحة: تحديد الوضع من localStorage أو النظام



// فلترة الكورسات حسب التصنيف
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const courseCards = document.querySelectorAll('.course-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // إزالة الكلاس active من جميع الأزرار
            categoryBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.remove('bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white');
                btn.classList.add('bg-white/80', 'dark:bg-gray-800/80', 'text-gray-700', 'dark:text-gray-300');
            });
            
            // إضافة الكلاس active للزر الحالي
            this.classList.add('active', 'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'text-white');
            this.classList.remove('bg-white/80', 'dark:bg-gray-800/80', 'text-gray-700', 'dark:text-gray-300');
            
            const category = this.getAttribute('data-category');
            
            // فلترة البطاقات
            courseCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});


// تشغيل الأكورديون للأسئلة الشائعة
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        question.addEventListener('click', () => {
            // إغلاق جميع الأسئلة المفتوحة
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-icon');
                    otherAnswer.style.maxHeight = null;
                    otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            
            // فتح/إغلاق السؤال الحالي
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// start hero
    // عدادات متزايدة
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.count-up');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
});
// End hero

// start navbar 
// start navbar 
// ========================================
// نظام الناف بار المتكامل (مثبت في الأعلى)
// ========================================

(function() {
    // جلب العناصر
    const navbar = document.getElementById('mainNavbar');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const heroImage = document.getElementById('hero-image');
    
    // ========================================
    // إدارة الوضع المظلم (تعمل 100%)
    // ========================================
    
    function setTheme(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            if (heroImage) heroImage.src = 'assets/images/img-hero2.jpeg';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if (heroImage) heroImage.src = 'assets/images/hero-img1.jpeg';
        }
    }
    
    function initTheme() {
        const savedTheme = localStorage.getItem('color-theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }
    
    // تهيئة الثيم
    initTheme();
    
    // إضافة حدث النقر لزر التبديل
    if (themeToggleBtn) {
        // إزالة أي مستمعين سابقين
        const newBtn = themeToggleBtn.cloneNode(true);
        themeToggleBtn.parentNode.replaceChild(newBtn, themeToggleBtn);
        
        const freshBtn = document.getElementById('theme-toggle');
        if (freshBtn) {
            freshBtn.addEventListener('click', function(e) {
                e.preventDefault();
                const isDark = document.documentElement.classList.contains('dark');
                setTheme(!isDark);
                
                // تأثير عند النقر
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                console.log('Theme toggled:', isDark ? 'light' : 'dark');
            });
        }
    }
    
    // ========================================
    // تأثير الناف بار عند التمرير (إضافة ظل فقط - بدون إخفاء)
    // ========================================
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking && navbar) {
            requestAnimationFrame(function() {
                const currentScroll = window.pageYOffset;
                
                // إضافة/إزالة كلاس الظل فقط عند التمرير
                if (currentScroll > 50) {
                    navbar.classList.add('navbar-scrolled');
                } else {
                    navbar.classList.remove('navbar-scrolled');
                }
                
                // تم إزالة كود إخفاء الناف بار (الأسطر التي كانت تتحكم في transform)
                // الناف بار الآن يبقى ثابتاً في مكانه ولا يختفي
                
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ========================================
    // القائمة للجوال
    // ========================================
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                this.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            } else {
                mobileMenu.classList.add('hidden');
                this.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        });
    }
    
    // ========================================
    // تحديث لون الناف بار عند تغيير الثيم
    // ========================================
    
    const themeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                if (window.scrollY > 50) {
                    const isDark = document.documentElement.classList.contains('dark');
                    navbar.style.backgroundColor = isDark ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)';
                }
            }
        });
    });
    
    themeObserver.observe(document.documentElement, { attributes: true });
    
    // ========================================
    // إضافة تأثير للروابط
    // ========================================
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    console.log('Navbar initialized successfully (fixed at top, no hiding)');
})();

// End navbar

// تشغيل الفيديو وإظهار المدة
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('promoVideo');
    const playBtn = document.getElementById('playVideoBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const videoDurationSpan = document.getElementById('videoDuration');
    
    if (video && playBtn && videoOverlay) {
        // عرض مدة الفيديو عند تحميل البيانات
        video.addEventListener('loadedmetadata', function() {
            const minutes = Math.floor(video.duration / 60);
            const seconds = Math.floor(video.duration % 60);
            videoDurationSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        });
        
        // تشغيل الفيديو
        playBtn.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                videoOverlay.style.opacity = '0';
                setTimeout(() => {
                    videoOverlay.style.display = 'none';
                }, 500);
            } else {
                video.pause();
                videoOverlay.style.display = 'flex';
                videoOverlay.style.opacity = '1';
            }
        });
        
        // عند انتهاء الفيديو
        video.addEventListener('ended', function() {
            videoOverlay.style.display = 'flex';
            videoOverlay.style.opacity = '1';
        });
        
        // عند تمرير الماوس
        video.addEventListener('mouseenter', function() {
            if (video.paused) {
                videoOverlay.style.opacity = '1';
            }
        });
        
        video.addEventListener('mouseleave', function() {
            if (video.paused) {
                videoOverlay.style.opacity = '1';
            }
        });
    }
});