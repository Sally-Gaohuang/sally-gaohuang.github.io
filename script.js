/* ============================================================
   1. INITIALIZATION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initActiveNav();
    initSidebarToggle();
    initLanguageToggle();
    initScrollAnimations();
});


/* ============================================================
   2. SMOOTH SCROLLING
============================================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll('.sidebar-menu a');

    links.forEach(link => {
        link.addEventListener("click", e => {
            const targetID = link.getAttribute("href");
            if (!targetID.startsWith("#")) return;

            e.preventDefault();
            const section = document.querySelector(targetID);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop - 20,
                    behavior: "smooth"
                });
            }

            // update active highlight
            setActiveNav(targetID);
        });
    });
}


/* ============================================================
   3. ACTIVE NAVIGATION HIGHLIGHT
============================================================ */
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".sidebar-menu a");

    function updateActive() {
        let current = "";

        sections.forEach(section => {
            const top = window.scrollY;
            if (top >= section.offsetTop - 200) {
                current = "#" + section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActive);
    updateActive(); // initial
}

function setActiveNav(href) {
    const navLinks = document.querySelectorAll(".sidebar-menu a");
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === href);
    });
}


/* ============================================================
   4. MOBILE SIDEBAR TOGGLE (auto-hide on scroll)
============================================================ */
function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");

    // auto-hide on scroll (mobile)
    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        if (window.innerWidth > 768) return;

        let current = window.scrollY;

        if (current > lastScroll) {
            sidebar.classList.remove("active");
        }
        lastScroll = current;
    });
}


/* ============================================================
   5. FADE-IN ANIMATIONS
============================================================ */
function initScrollAnimations() {
    const animated = document.querySelectorAll(".fade-in-up");

    function checkFade() {
        const windowHeight = window.innerHeight;

        animated.forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < windowHeight - 120) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade();
}


/* ============================================================
   6. LANGUAGE TOGGLE
============================================================ */
let currentLanguage = localStorage.getItem("language") || "en";

const langData = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navContact: "Contact",

        homeSubtitle: "Web Developer • UI/UX Designer • Problem Solver",
        homeBtn1: "Contact Me",
        homeBtn2: "About Me",

        aboutTitle: "About Me",
        aboutText1: "I'm a passionate web developer who transforms ideas into clean, modern and functional digital experiences.",
        aboutText2: "I specialize in frontend development, UI/UX design, and creating fast, responsive web applications.",

        yearsExp: "Years Experience",
        projectsDone: "Projects Delivered",
        clientSatisfaction: "Client Satisfaction",

        educationTitle: "Education",
        experienceTitle: "Experience",
        skillsTitle: "Skills",
        contactTitle: "Contact",

        letsConnect: "Let's Connect",
        contactText: "I'm always open to new opportunities and creative projects.",
        sendMessage: "Send Message",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message"
    },

    zh: {
        navHome: "首页",
        navAbout: "关于我",
        navEducation: "教育背景",
        navExperience: "工作经历",
        navSkills: "技能",
        navContact: "联系",

        homeSubtitle: "网页开发者 • UI/UX 设计师 • 问题解决者",
        homeBtn1: "联系我",
        homeBtn2: "关于我",

        aboutTitle: "关于我",
        aboutText1: "我是一名充满热情的网页开发者，将想法转化为现代、干净、实用的数字体验。",
        aboutText2: "我专注于前端开发、UI/UX 设计，以及构建快速响应的网络应用程序。",

        yearsExp: "年经验",
        projectsDone: "完成项目",
        clientSatisfaction: "客户满意度",

        educationTitle: "教育背景",
        experienceTitle: "工作经历",
        skillsTitle: "技能",
        contactTitle: "联系我",

        letsConnect: "欢迎联系",
        contactText: "我一直乐于讨论新的机会和创意项目。",
        sendMessage: "发送消息",
        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的留言"
    }
};


function initLanguageToggle() {
    const btn = document.getElementById("languageBtn");
    if (!btn) return;

    applyLanguage(currentLanguage);

    btn.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "zh" : "en";
        localStorage.setItem("language", currentLanguage);
        applyLanguage(currentLanguage);
    });
}


/* APPLY TRANSLATION */
function applyLanguage(lang) {
    const t = langData[lang];

    // update button text
    document.getElementById("languageBtn").textContent = (lang === "en" ? "中文" : "EN");

    // NAVIGATION
    const nav = document.querySelectorAll(".sidebar-menu a");
    if (nav.length >= 6) {
        nav[0].textContent = t.navHome;
        nav[1].textContent = t.navAbout;
        nav[2].textContent = t.navEducation;
        nav[3].textContent = t.navExperience;
        nav[4].textContent = t.navSkills;
        nav[5].textContent = t.navContact;
    }

    // HERO SECTION
    const subtitle = document.querySelector(".hero-subtitle");
    if (subtitle) subtitle.textContent = t.homeSubtitle;

    const btns = document.querySelectorAll(".hero-buttons .btn");
    if (btns.length >= 2) {
        btns[0].textContent = t.homeBtn1;
        btns[1].textContent = t.homeBtn2;
    }

    // ABOUT
    document.querySelectorAll(".about-paragraph")[0].textContent = t.aboutText1;
    document.querySelectorAll(".about-paragraph")[1].textContent = t.aboutText2;

    // SECTION TITLES
    document.querySelector("#about .section-title").textContent = t.aboutTitle;
    document.querySelector("#education .section-title").textContent = t.educationTitle;
    document.querySelector("#experience .section-title").textContent = t.experienceTitle;
    document.querySelector("#skills .section-title").textContent = t.skillsTitle;
    document.querySelector("#contact .section-title").textContent = t.contactTitle;

    // CONTACT
    const contactInfo = document.querySelector("#contact .contact-info p");
    if (contactInfo) contactInfo.textContent = t.contactText;

    const formLabels = document.querySelectorAll(".contact-form label");
    if (formLabels.length >= 3) {
        formLabels[0].textContent = t.yourName;
        formLabels[1].textContent = t.yourEmail;
        formLabels[2].textContent = t.yourMessage;
    }

    const formInputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
    if (formInputs.length >= 3) {
        formInputs[0].placeholder = t.yourName;
        formInputs[1].placeholder = t.yourEmail;
        formInputs[2].placeholder = t.yourMessage;
    }

    const submitBtn = document.querySelector(".contact-submit-btn");
    if (submitBtn) submitBtn.textContent = t.sendMessage;
}
