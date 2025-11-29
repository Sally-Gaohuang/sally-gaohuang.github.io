// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM loaded - initializing dynamic portfolio...');
    initializeApp();
});

// ===== LANGUAGE DATA =====
const langData = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navContact: "Contact",
        
        // Home Section
        homeTitle: "Hello, I'm Lin Zhi",
        homeSubtitle: "Web Developer & Creative Problem Solver",
        homeDesc: "Passionate about creating beautiful, functional websites with modern technologies. Strong learning attitude and commitment to clean code and user experience.",
        getInTouch: "Get In Touch",
        learnMore: "Learn More",
        
        // About Section
        aboutTitle: "About Me",
        myJourney: "My Journey",
        aboutText1: "I'm a passionate web developer with experience in creating dynamic, responsive websites. My journey in tech started with a strong curiosity about technology and how things work.",
        aboutText2: "Knowledge decent with strong learning attitude. Good relationship with professionals in academic. I enjoy working across the full stack and constantly expanding my skill set.",
        yearsExp: "Years Experience",
        projectsDone: "Projects Completed",
        clientSatisfaction: "Client Satisfaction",
        
        // Education Section
        educationTitle: "Education",
        degree1: "Bachelor of Information Technology",
        university1: "National University of Singapore",
        eduDetails1: "Graduated from School of Computing, NUS. Strong academic background with focus on software development and modern technologies.",
        degree2: "Human-Capital Management Diploma",
        university2: "Republic Polytechnic of Singapore",
        eduDetails2: "HR Analytics & Technology, Business Law, Digital Marketing Analytics, Digital Business Strategies, Digital Media Content Creation & Management.",
        
        // Experience Section
        experienceTitle: "Work Experience",
        job1Title: "Senior Software Developer",
        company1: "Tech Innovations Inc.",
        job2Title: "Web Development Intern",
        company2: "Startup Solutions LLC",
        
        // Skills Section
        skillsTitle: "Skills & Technologies",
        technicalSkills: "Technical Skills",
        toolsTech: "Tools & Technologies",
        softSkills: "Soft Skills",
        
        // Contact Section
        contactTitle: "Get In Touch",
        letsConnect: "You are welcomed",
        contactText: "I'm always open to discussing new opportunities and creative projects.",
        sendMessage: "Send Message",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        
        // Footer
        builtWith: "Built with ❤️ using HTML, CSS, and JavaScript"
    },

    zh: {
        // Navigation
        navHome: "首页",
        navAbout: "关于我",
        navEducation: "教育背景",
        navExperience: "工作经历",
        navSkills: "技能",
        navContact: "联系我",
        
        // Home Section
        homeTitle: "你好，我是林志",
        homeSubtitle: "网页开发者 & 创意问题解决者",
        homeDesc: "热衷于使用现代技术创建美观、功能强大的网站。具备扎实的学习态度，致力于编写简洁代码和优化用户体验。",
        getInTouch: "联系我",
        learnMore: "了解更多",
        
        // About Section
        aboutTitle: "关于我",
        myJourney: "我的旅程",
        aboutText1: "我是一名充满热情的网页开发者，在创建动态响应式网站方面拥有丰富经验。我的技术之旅始于对技术工作原理的强烈好奇心。",
        aboutText2: "具备扎实的知识基础和强烈的学习态度。与学术界的专业人士保持良好的关系。我喜欢全栈开发，并不断扩展我的技能组合。",
        yearsExp: "年经验",
        projectsDone: "完成项目",
        clientSatisfaction: "客户满意度",
        
        // Education Section
        educationTitle: "教育背景",
        degree1: "信息技术学士",
        university1: "新加坡国立大学",
        eduDetails1: "毕业于新加坡国立大学计算机学院。拥有扎实的学术背景，专注于软件开发和现代技术。",
        degree2: "人力资本管理文凭",
        university2: "新加坡共和理工学院",
        eduDetails2: "人力资源分析与技术、商业法、数字营销分析、数字业务策略、数字媒体内容创作与管理。",
        
        // Experience Section
        experienceTitle: "工作经历",
        job1Title: "高级软件开发者",
        company1: "科技创新公司",
        job2Title: "网页开发实习生",
        company2: "创业解决方案公司",
        
        // Skills Section
        skillsTitle: "技能与技术",
        technicalSkills: "技术技能",
        toolsTech: "工具与技术",
        softSkills: "软技能",
        
        // Contact Section
        contactTitle: "联系我",
        letsConnect: "欢迎联系",
        contactText: "我一直乐于讨论新的机会和创意项目。",
        sendMessage: "发送消息",
        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的消息",
        
        // Footer
        builtWith: "使用 HTML, CSS 和 JavaScript 构建"
    }
};

// ===== LANGUAGE TOGGLE FUNCTIONALITY =====
let currentLanguage = 'en';

function initializeLanguageToggle() {
    const languageBtn = document.getElementById('languageBtn');
    
    if (!languageBtn) {
        console.error('❌ Language button not found!');
        return;
    }
    
    console.log('✅ Language button found');
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = savedLanguage;
    updateLanguageButton();
    applyLanguage(currentLanguage);
    
    // Toggle language on button click
    languageBtn.addEventListener('click', function() {
        console.log('🎯 Language button clicked!');
        
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateLanguageButton();
        applyLanguage(currentLanguage);
    });
}

function updateLanguageButton() {
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.innerHTML = currentLanguage === 'en' ? 
            '<span>中文</span>' : '<span>EN</span>';
        console.log('🔄 Button text updated');
    }
}

function applyLanguage(language) {
    const texts = langData[language];
    console.log('🌐 Applying language:', language);
    
    if (!texts) {
        console.error('❌ No translations found');
        return;
    }

    try {
        // Update navigation with animation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link, index) => {
            setTimeout(() => {
                link.style.opacity = '0';
                link.style.transform = 'translateY(-10px)';
                
                setTimeout(() => {
                    const textsMap = [
                        texts.navHome, texts.navAbout, texts.navEducation,
                        texts.navExperience, texts.navSkills, texts.navContact
                    ];
                    if (textsMap[index]) {
                        link.textContent = textsMap[index];
                    }
                    
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0)';
                }, 200);
            }, index * 100);
        });
        
        // Update home section
        const homeTitle = document.querySelector('.home-title');
        if (homeTitle) {
            homeTitle.style.opacity = '0';
            setTimeout(() => {
                homeTitle.innerHTML = texts.homeTitle.replace("Lin Zhi", "<span class='highlight'>Lin Zhi</span>");
                homeTitle.style.opacity = '1';
            }, 300);
        }
        
        updateTextWithAnimation('.home-subtitle', texts.homeSubtitle, 400);
        updateTextWithAnimation('.home-description', texts.homeDesc, 500);
        updateTextWithAnimation('.btn-primary', texts.getInTouch, 600);
        updateTextWithAnimation('.btn-secondary', texts.learnMore, 700);
        
        // Update about section
        updateTextWithAnimation('#about .section-title', texts.aboutTitle, 800);
        updateTextWithAnimation('.about-text h3', texts.myJourney, 900);
        
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs[0]) updateTextWithAnimationElement(aboutParagraphs[0], texts.aboutText1, 1000);
        if (aboutParagraphs[1]) updateTextWithAnimationElement(aboutParagraphs[1], texts.aboutText2, 1100);
        
        const statLabels = document.querySelectorAll('.stat-label');
        if (statLabels[0]) updateTextWithAnimationElement(statLabels[0], texts.yearsExp, 1200);
        if (statLabels[1]) updateTextWithAnimationElement(statLabels[1], texts.projectsDone, 1300);
        if (statLabels[2]) updateTextWithAnimationElement(statLabels[2], texts.clientSatisfaction, 1400);
        
        // Update education section
        updateTextWithAnimation('#education .section-title', texts.educationTitle, 1500);
        
        // Update experience section
        updateTextWithAnimation('#experience .section-title', texts.experienceTitle, 1600);
        
        // Update skills section
        updateTextWithAnimation('#skills .section-title', texts.skillsTitle, 1700);
        
        // Update contact section
        updateTextWithAnimation('#contact .section-title', texts.contactTitle, 1800);
        updateTextWithAnimation('.contact-info h3', texts.letsConnect, 1900);
        updateTextWithAnimation('.contact-info > p', texts.contactText, 2000);
        updateTextWithAnimation('.submit-btn', texts.sendMessage, 2100);
        
        // Update form placeholders
        const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
        if (formInputs[0]) updatePlaceholderWithAnimation(formInputs[0], texts.yourName, 2200);
        if (formInputs[1]) updatePlaceholderWithAnimation(formInputs[1], texts.yourEmail, 2300);
        if (formInputs[3]) updatePlaceholderWithAnimation(formInputs[3], texts.yourMessage, 2400);
        
        // Update footer
        const footerParagraphs = document.querySelectorAll('.footer p');
        if (footerParagraphs[1]) updateTextWithAnimationElement(footerParagraphs[1], texts.builtWith, 2500);
        
        console.log('✅ Language applied successfully');
        
    } catch (error) {
        console.error('❌ Error applying language:', error);
    }
}

function updateTextWithAnimation(selector, text, delay) {
    setTimeout(() => {
        const element = document.querySelector(selector);
        if (element && text) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                element.textContent = text;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200);
        }
    }, delay);
}

function updateTextWithAnimationElement(element, text, delay) {
    setTimeout(() => {
        if (element && text) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                element.textContent = text;
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200);
        }
    }, delay);
}

function updatePlaceholderWithAnimation(input, placeholder, delay) {
    setTimeout(() => {
        if (input && placeholder) {
            input.style.opacity = '0.5';
            
            setTimeout(() => {
                input.placeholder = placeholder;
                input.style.opacity = '1';
            }, 200);
        }
    }, delay);
}

// ===== MAIN INITIALIZATION FUNCTION =====
function initializeApp() {
    console.log('🚀 Initializing dynamic portfolio app...');
    
    // Show loading spinner
    showLoadingSpinner();
    
    setTimeout(() => {
        initializeNavigation();
        initializeSmoothScrolling();
        initializeSkillBars();
        initializeContactForm();
        initializeScrollEffects();
        initializeAnimations();
        initializeLanguageToggle();
        initializeBackToTop();
        initializeParticles();
        
        // Hide loading spinner
        hideLoadingSpinner();
        
        console.log('✅ Dynamic portfolio app initialized successfully!');
        
        // Show welcome notification
        setTimeout(() => {
            showNotification('Welcome to my portfolio! 🚀', 'info');
        }, 1000);
    }, 1500);
}

// ===== LOADING ANIMATION =====
function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    spinner.id = 'loadingSpinner';
    document.body.appendChild(spinner);
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.style.opacity = '0';
        setTimeout(() => {
            spinner.remove();
        }, 500);
    }
}

// ===== PARTICLE BACKGROUND =====
function initializeParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    // Create particles
    for (let i = 0; i < 15; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 60 + 20;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.opacity = Math.random() * 0.3 + 0.1;
    particle.style.background = `rgba(102, 126, 234, ${Math.random() * 0.3 + 0.1})`;
    
    container.appendChild(particle);
}

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    if (!hamburger) {
        console.error('❌ Hamburger menu not found!');
        return;
    }

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        console.log('🍔 Hamburger clicked');
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Add pulse animation
        this.classList.add('pulse');
        setTimeout(() => {
            this.classList.remove('pulse');
        }, 600);
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Smooth scroll is handled separately, just close menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
                
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SKILL BARS ANIMATION =====
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;
        
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        
        const sectionPos = skillsSection.getBoundingClientRect();
        const isInViewport = (sectionPos.top <= window.innerHeight * 0.8) && 
                            (sectionPos.bottom >= window.innerHeight * 0.2);
        
        if (isInViewport) {
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = level + '%';
                    
                    // Add glow effect
                    bar.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
                    setTimeout(() => {
                        bar.style.boxShadow = '0 2px 10px rgba(102, 126, 234, 0.3)';
                    }, 1000);
                    
                }, index * 200);
            });
            skillsAnimated = true;
            console.log('🎯 Skill bars animated with glow effect');
        }
    }

    // Use intersection observer for better performance
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(skillsSection);
    }

    // Fallback
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);
}

// ===== CONTACT FORM HANDLING =====
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const subjectInputs = this.querySelectorAll('input[type="text"]');
            const subject = subjectInputs[1] ? subjectInputs[1].value.trim() : '';
            const message = this.querySelector('textarea').value.trim();
            
            // Enhanced validation
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            const submitBtn = this.querySelector('.btn');
            const originalText = submitBtn.textContent;
            
            // Add loading state with animation
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            
            // Simulate form submission with better UX
            setTimeout(() => {
                showNotification('🎉 Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                
                // Reset button with animation
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.classList.add('pulse');
                    setTimeout(() => {
                        submitBtn.classList.remove('pulse');
                    }, 600);
                }, 500);
                
            }, 2000);
        });
        
        // Add input focus effects
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.home-section');
        
        // Parallax effect for home section
        if (parallax) {
            parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        
        // Back to top button
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            if (scrolled > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
        
        triggerScrollAnimations();
    });
}

// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.setAttribute('aria-label', 'Back to top');
    
    backToTop.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.9)';
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
    
    document.body.appendChild(backToTop);
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add icon based on type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'error') icon = '❌';
    
    notification.innerHTML = `${icon} ${message}`;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 5000);
    
    // Allow manual close on click
    notification.addEventListener('click', function() {
        this.classList.remove('show');
        setTimeout(() => {
            if (this.parentNode) {
                this.remove();
            }
        }, 400);
    });
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    // Add hover-lift class to interactive elements
    const interactiveElements = document.querySelectorAll('.stat, .experience-card, .timeline-content, .contact-method, .tool-tag, .soft-skill-tag');
    interactiveElements.forEach(element => {
        element.classList.add('hover-lift');
    });
    
    // Add shine-effect to buttons
    const buttons = document.querySelectorAll('.btn, .lang-btn');
    buttons.forEach(button => {
        button.classList.add('shine-effect');
    });
    
    // Initialize scroll animations
    triggerScrollAnimations();
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    triggerScrollAnimations();
}, 100));

// ===== ADDITIONAL ENHANCEMENTS =====
// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Add reduced motion support
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (reduceMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01s');
}

console.log('🎉 Dynamic purple portfolio with enhanced effects loaded!');

// Export functions for global access (if needed)
window.portfolioApp = {
    changeLanguage: function(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateLanguageButton();
        applyLanguage(lang);
    },
    showNotification: showNotification,
    getCurrentLanguage: function() {
        return currentLanguage;
    }
};