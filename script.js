// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
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
        homeTitle: "Hello, welcome to my website!",
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
        builtWith: "Built with HTML, CSS, and JavaScript"
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
        homeTitle: "欢迎光临我的网站",
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
        eduDetails1: "毕业于新加坡国立大学计算机学院。团队拥有扎实的学术背景，专注于软件开发和现代技术。",
        degree2: "人力资本管理文凭",
        university2: "新加坡共和理工学院",
        eduDetails2: "人力资源分析与技术、商业法、数字营销分析、数字业务策略、数字媒体内容创作与管理。",
        
        // Experience Section
        experienceTitle: "工作经历",
        job1Title: "高级软件开发工程师",
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
        console.log('Language button not found');
        return;
    }
    
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') || 'en';
    currentLanguage = savedLanguage;
    updateLanguageButton();
    applyLanguage(currentLanguage);
    
    // Toggle language on button click
    languageBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        localStorage.setItem('language', currentLanguage);
        updateLanguageButton();
        applyLanguage(currentLanguage);
    });
}

function updateLanguageButton() {
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.textContent = currentLanguage === 'en' ? '中文' : 'EN';
    }
}

function applyLanguage(language) {
    const texts = langData[language];
    
    if (!texts) return;

    // Update navigation
    document.querySelector('a[href="#home"]').textContent = texts.navHome;
    document.querySelector('a[href="#about"]').textContent = texts.navAbout;
    document.querySelector('a[href="#education"]').textContent = texts.navEducation;
    document.querySelector('a[href="#experience"]').textContent = texts.navExperience;
    document.querySelector('a[href="#skills"]').textContent = texts.navSkills;
    document.querySelector('a[href="#contact"]').textContent = texts.navContact;
    
    // Update home section
    document.querySelector('.home-title').innerHTML = texts.homeTitle.replace("Lin Zhi", "<span class='highlight'>Lin Zhi</span>");
    document.querySelector('.home-subtitle').textContent = texts.homeSubtitle;
    document.querySelector('.home-description').textContent = texts.homeDesc;
    document.querySelector('.btn-primary').textContent = texts.getInTouch;
    document.querySelector('.btn-secondary').textContent = texts.learnMore;
    
    // Update about section
    document.querySelector('#about .section-title').textContent = texts.aboutTitle;
    document.querySelector('.about-text h3').textContent = texts.myJourney;
    
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].textContent = texts.aboutText1;
    aboutParagraphs[1].textContent = texts.aboutText2;
    
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = texts.yearsExp;
    statLabels[1].textContent = texts.projectsDone;
    statLabels[2].textContent = texts.clientSatisfaction;
    
    // Update education section
    document.querySelector('#education .section-title').textContent = texts.educationTitle;
    
    const timelineContents = document.querySelectorAll('.timeline-content');
    timelineContents[0].querySelector('h3').textContent = texts.degree1;
    timelineContents[0].querySelector('.institution').textContent = texts.university1;
    timelineContents[0].querySelector('.details').textContent = texts.eduDetails1;
    
    timelineContents[1].querySelector('h3').textContent = texts.degree2;
    timelineContents[1].querySelector('.institution').textContent = texts.university2;
    timelineContents[1].querySelector('.details').textContent = texts.eduDetails2;
    
    // Update experience section
    document.querySelector('#experience .section-title').textContent = texts.experienceTitle;
    
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards[0].querySelector('.card-header h3').textContent = texts.job1Title;
    experienceCards[0].querySelector('.company').textContent = texts.company1;
    
    experienceCards[1].querySelector('.card-header h3').textContent = texts.job2Title;
    experienceCards[1].querySelector('.company').textContent = texts.company2;
    
    // Update skills section
    document.querySelector('#skills .section-title').textContent = texts.skillsTitle;
    
    const skillCategories = document.querySelectorAll('.skills-category h3');
    skillCategories[0].textContent = texts.technicalSkills;
    skillCategories[1].textContent = texts.toolsTech;
    skillCategories[2].textContent = texts.softSkills;
    
    // Update contact section
    document.querySelector('#contact .section-title').textContent = texts.contactTitle;
    document.querySelector('.contact-info h3').textContent = texts.letsConnect;
    document.querySelector('.contact-info > p').textContent = texts.contactText;
    document.querySelector('.submit-btn').textContent = texts.sendMessage;
    
    // Update form placeholders
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs[0].placeholder = texts.yourName;
    formInputs[1].placeholder = texts.yourEmail;
    formInputs[3].placeholder = texts.yourMessage;
    
    // Update footer
    document.querySelectorAll('.footer p')[1].textContent = texts.builtWith;
}

// ===== MAIN INITIALIZATION FUNCTION =====
function initializeApp() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeSkillBars();
    initializeContactForm();
    initializeScrollEffects();
    initializeAnimations();
    initializeLanguageToggle();
}

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // Update active nav link
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== UPDATED SKILL BARS ANIMATION =====
function initializeSkillBars() {
    let skillsAnimated = false;

    function animateSkillBars() {
        if (skillsAnimated) return;
        
        const skillsSection = document.getElementById('skills');
        if (!skillsSection) return;
        
        const sectionPos = skillsSection.getBoundingClientRect();
        const isInViewport = (sectionPos.top <= window.innerHeight * 0.8) && 
                            (sectionPos.bottom >= window.innerHeight * 0.2);
        
        if (isInViewport) {
            const skillLevels = document.querySelectorAll('.skill-level');
            
            skillLevels.forEach(levelBar => {
                const targetLevel = levelBar.getAttribute('data-level');
                let currentWidth = 0;
                const increment = targetLevel / 50;
                
                const timer = setInterval(() => {
                    currentWidth += increment;
                    if (currentWidth >= targetLevel) {
                        currentWidth = targetLevel;
                        clearInterval(timer);
                    }
                    levelBar.style.width = currentWidth + '%';
                }, 30);
            });
            
            skillsAnimated = true;
        }
    }

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                animateSkillBars();
            }
        });
    }, {
        threshold: 0.3
    });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

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
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            const submitBtn = this.querySelector('.btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            }
            
            triggerScrollAnimations();
        });
    }
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    const animateElements = document.querySelectorAll('.timeline-item, .experience-card, .skill-item, .stat, .contact-method');
    
    // Add CSS for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    animateElements.forEach(element => {
        element.classList.add('fade-in-up');
    });
    
    triggerScrollAnimations();
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}