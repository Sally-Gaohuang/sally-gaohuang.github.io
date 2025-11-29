// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

// ===== LANGUAGE DATA =====
const langData = {
    en: {
        // Nav
        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navContact: "Contact",

        // Home
        homeTitle: "Hello, I'm Lin Zhi",
        homeSubtitle: "Web Developer & Creative Problem Solver",
        homeDesc:
            "Passionate about creating beautiful, functional websites with modern technologies. Strong learning attitude and commitment to clean code and user experience.",
        btnContact: "Get In Touch",
        btnLearn: "Learn More",

        // About
        aboutTitle: "About Me",
        myJourney: "My Journey",
        aboutText1:
            "I'm a passionate web developer with experience in creating dynamic, responsive websites. My journey in tech started with a strong curiosity about technology and how things work.",
        aboutText2:
            "Knowledge decent with strong learning attitude. Good relationship with professionals in academic. I enjoy working across the full stack and constantly expanding my skill set.",
        labelExp: "Years Experience",
        labelProjects: "Projects Completed",
        labelSatisfaction: "Client Satisfaction",

        // Education
        educationTitle: "Education",
        eduDegree1: "Bachelor of Information Technology",
        eduUni1: "National University of Singapore",
        eduDetails1:
            "Graduated from School of Computing, NUS. Strong academic background with focus on software development.",
        eduDegree2: "Human-Capital Management Diploma",
        eduUni2: "Republic Polytechnic",
        eduDetails2:
            "HR Analytics, Digital Marketing, Business Law, and Digital Media Technologies.",

        // Experience
        experienceTitle: "Work Experience",
        job1Title: "Senior Software Developer",
        job1Company: "Tech Innovations Inc.",
        job2Title: "Web Development Intern",
        job2Company: "Startup Solutions LLC",

        // Skills
        skillsTitle: "Skills & Technologies",
        technicalSkills: "Technical Skills",
        toolsTech: "Tools & Technologies",

        // Contact
        contactTitle: "Get In Touch",
        contactWelcome: "You are welcomed",
        contactText: "I'm always open to discussing new opportunities.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendMessage: "Send Message",

        // Footer
        footerBuilt: "Built using HTML, CSS, and JavaScript"
    },

    zh: {
        // Nav
        navHome: "首页",
        navAbout: "关于我",
        navEducation: "教育背景",
        navExperience: "工作经历",
        navSkills: "技能",
        navContact: "联系我",

        // Home
        homeTitle: "你好，我是林志",
        homeSubtitle: "网页开发者 & 创意问题解决者",
        homeDesc:
            "热衷于使用现代技术创建美观、功能强大的网站。具备扎实的学习态度，致力于编写简洁代码和优化用户体验。",
        btnContact: "联系我",
        btnLearn: "了解更多",

        // About
        aboutTitle: "关于我",
        myJourney: "我的旅程",
        aboutText1:
            "我是一名充满热情的网页开发者，在创建动态响应式网站方面拥有一定经验。我的技术之旅始于对技术工作原理的强烈好奇心。",
        aboutText2:
            "具备扎实的学习态度，与学术界的专业人士保持良好的关系。我喜欢全栈开发，并不断扩展我的技能组合。",
        labelExp: "年经验",
        labelProjects: "完成项目",
        labelSatisfaction: "客户满意度",

        // Education
        educationTitle: "教育背景",
        eduDegree1: "信息技术学士",
        eduUni1: "新加坡国立大学",
        eduDetails1:
            "毕业于新加坡国立大学计算机学院，拥有扎实的学术背景，专注于软件开发。",
        eduDegree2: "人力资本管理文凭",
        eduUni2: "共和理工学院",
        eduDetails2:
            "学习人力资源分析、数字营销、商业法律以及数字媒体相关技术。",

        // Experience
        experienceTitle: "工作经历",
        job1Title: "高级软件开发者",
        job1Company: "科技创新公司",
        job2Title: "网页开发实习生",
        job2Company: "创业解决方案公司",

        // Skills
        skillsTitle: "技能与技术",
        technicalSkills: "技术技能",
        toolsTech: "工具与技术",

        // Contact
        contactTitle: "联系我",
        contactWelcome: "欢迎联系",
        contactText: "我一直乐于讨论新的机会和创意项目。",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "您的邮箱",
        messagePlaceholder: "您的留言",
        sendMessage: "发送消息",

        // Footer
        footerBuilt: "使用 HTML、CSS 和 JavaScript 构建"
    }
};

let currentLanguage = localStorage.getItem('lang') || 'en';

// ===== INIT APP =====
function initializeApp() {
    initializeNavigation();
    initializeSmoothScrolling();
    initializeLanguageToggle();
    initializeContactForm();
    initializeBackToTop();
    initializeAnimations();
}

// ===== LANGUAGE TOGGLE =====
function initializeLanguageToggle() {
    const btn = document.getElementById('languageBtn');
    if (!btn) return;

    // Initial apply
    applyLanguage(currentLanguage);
    updateLanguageButtonText();

    btn.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
        localStorage.setItem('lang', currentLanguage);
        applyLanguage(currentLanguage);
        updateLanguageButtonText();
    });
}

function updateLanguageButtonText() {
    const btn = document.getElementById('languageBtn');
    if (!btn) return;
    btn.textContent = currentLanguage === 'en' ? '中文' : 'EN';
}

function applyLanguage(lang) {
    const t = langData[lang];
    if (!t) return;

    // Nav
    setText('nav-home', t.navHome);
    setText('nav-about', t.navAbout);
    setText('nav-education', t.navEducation);
    setText('nav-experience', t.navExperience);
    setText('nav-skills', t.navSkills);
    setText('nav-contact', t.navContact);

    // Home title: keep highlight for EN, plain for CN if you prefer
    const homeTitleEl = document.getElementById('home-title');
    if (homeTitleEl) {
        if (lang === 'en') {
            homeTitleEl.innerHTML = `Hello, I'm <span class="highlight">Lin Zhi</span>`;
        } else {
            homeTitleEl.textContent = t.homeTitle;
        }
    }

    setText('home-subtitle', t.homeSubtitle);
    setText('home-description', t.homeDesc);
    setText('btn-contact', t.btnContact);
    setText('btn-learn', t.btnLearn);

    // About
    setText('about-title', t.aboutTitle);
    setText('my-journey', t.myJourney);
    setText('about-text-1', t.aboutText1);
    setText('about-text-2', t.aboutText2);
    setText('label-exp', t.labelExp);
    setText('label-projects', t.labelProjects);
    setText('label-satisfaction', t.labelSatisfaction);

    // Education
    setText('education-title', t.educationTitle);
    setText('edu-degree1', t.eduDegree1);
    setText('edu-uni1', t.eduUni1);
    setText('edu-details1', t.eduDetails1);
    setText('edu-degree2', t.eduDegree2);
    setText('edu-uni2', t.eduUni2);
    setText('edu-details2', t.eduDetails2);

    // Experience
    setText('experience-title', t.experienceTitle);
    setText('job1-title', t.job1Title);
    setText('job1-company', t.job1Company);
    setText('job2-title', t.job2Title);
    setText('job2-company', t.job2Company);

    // Skills
    setText('skills-title', t.skillsTitle);
    setText('technical-skills', t.technicalSkills);
    setText('tools-tech', t.toolsTech);

    // Contact
    setText('contact-title', t.contactTitle);
    setText('contact-welcome', t.contactWelcome);
    setText('contact-text', t.contactText);
    const nameInput = document.getElementById('input-name');
    const emailInput = document.getElementById('input-email');
    const msgInput = document.getElementById('input-message');
    if (nameInput) nameInput.placeholder = t.namePlaceholder;
    if (emailInput) emailInput.placeholder = t.emailPlaceholder;
    if (msgInput) msgInput.placeholder = t.messagePlaceholder;
    setText('send-message', t.sendMessage);

    // Footer
    setText('footer-built', t.footerBuilt);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') {
        el.textContent = value;
    }
}

// ===== NAVIGATION / HAMBURGER =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop;
            if (pageYOffset >= top - 200) {
                current = section.id;
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
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('input-name')?.value.trim();
        const email = document.getElementById('input-email')?.value.trim();
        const message = document.getElementById('input-message')?.value.trim();

        if (!name || !email || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }

        const btn = document.getElementById('send-message');
        const original = btn ? btn.textContent : '';

        if (btn) {
            btn.textContent = 'Sending...';
            btn.disabled = true;
        }

        setTimeout(() => {
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            form.reset();
            if (btn) {
                btn.textContent = original;
                btn.disabled = false;
            }
        }, 1200);
    });
}

// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.textContent = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.style.display = 'block';
            setTimeout(() => {
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 10);
        } else {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            setTimeout(() => {
                if (window.scrollY <= 500) btn.style.display = 'none';
            }, 300);
        }
    });
}

// ===== NOTIFICATION =====
function showNotification(message, type = 'info') {
    const ex = document.querySelector('.notification');
    if (ex) ex.remove();

    const n = document.createElement('div');
    n.className = 'notification';
    // colors: error (red), info (blue), success/default (light purple)
    if (type === 'error') {
        n.style.background = '#e74c3c';
        n.style.color = 'white';
    } else if (type === 'info') {
        n.style.background = '#3498db';
        n.style.color = 'white';
    } else {
        n.style.background = 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 60%)';
        n.style.color = '#2b0650';
    }

    n.textContent = message;
    document.body.appendChild(n);

    setTimeout(() => {
        n.style.transform = 'translateX(0)';
    }, 50);

    setTimeout(() => {
        n.style.transform = 'translateX(400px)';
        setTimeout(() => n.remove(), 300);
    }, 4000);
}

// ===== ANIMATIONS =====
function initializeAnimations() {
    const animated = document.querySelectorAll(
        '.timeline-item, .experience-card, .stat, .contact-method'
    );

    animated.forEach(el => el.classList.add('fade-in-up'));

    window.addEventListener('scroll', triggerScrollAnimations);
    triggerScrollAnimations();
    // initialize skill bars animation when skills section appears
    initializeSkillBars();
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    const winH = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < winH - 150) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
}

// ===== SKILL BARS =====
function colorForPercent(p) {
    if (p >= 85) return 'linear-gradient(90deg,#38ef7d,#11998e)'; // green
    if (p >= 70) return 'linear-gradient(90deg,#f6d365,#fda085)'; // yellow/orange
    if (p >= 50) return 'linear-gradient(90deg,#f093fb,#f5576c)'; // pink/orange
    return 'linear-gradient(90deg,#f85032,#e73827)'; // red
}

function initializeSkillBars() {
    // Support both new (.progress-fill) and older (.skill-level) markup
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const animateAll = () => {
        // New markup: .skill elements with data-percent and .progress-fill
        const skills = document.querySelectorAll('.skill[data-percent]');
        skills.forEach(skill => {
            const percent = Math.max(0, Math.min(100, parseInt(skill.getAttribute('data-percent') || '0', 10)));
            const fill = skill.querySelector('.progress-fill');
            const label = skill.querySelector('.progress-percent');
            if (fill) {
                fill.style.width = percent + '%';
                fill.style.background = colorForPercent(percent);
            }
            if (label) label.textContent = percent + '%';
        });

        // Older markup: .skill-level elements with data-level attribute
        const oldLevels = document.querySelectorAll('.skill-level[data-level]');
        oldLevels.forEach(levelEl => {
            const raw = levelEl.getAttribute('data-level') || levelEl.getAttribute('data-percent') || '0%';
            // allow values like '85' or '85%'
            const percent = Math.max(0, Math.min(100, parseInt(raw.replace('%',''), 10)));
            levelEl.style.width = percent + '%';
            // set color based on percent
            levelEl.style.background = colorForPercent(percent);
        });
    };

    const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateAll();
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    obs.observe(skillsSection);

    // Fallback: if the section is already mostly visible on load, animate immediately
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < (window.innerHeight || document.documentElement.clientHeight) - 100) {
        animateAll();
        try { obs.disconnect(); } catch (e) {}
    }
}
