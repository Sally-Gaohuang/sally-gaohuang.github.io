/* ============================================================
   INITIALIZATION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initActiveNav();
    initSidebarToggle();
    initLanguageToggle();
    initScrollAnimations();
    initQrModal();
});


/* ============================================================
   SMOOTH SCROLLING
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

            setActiveNav(targetID);
        });
    });
}


/* ============================================================
   ACTIVE NAVIGATION
============================================================ */
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".sidebar-menu a");

    function updateActive() {
        let current = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = "#" + section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href") === current);
        });
    }

    window.addEventListener("scroll", updateActive);
    updateActive();
}

function setActiveNav(href) {
    const navLinks = document.querySelectorAll(".sidebar-menu a");
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === href);
    });
}


/* ============================================================
   MOBILE SIDEBAR AUTO-HIDE
============================================================ */
function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");

    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        if (window.innerWidth > 768) return;

        const current = window.scrollY;
        if (current > lastScroll) {
            sidebar.classList.remove("active");
        }
        lastScroll = current;
    });
}


/* ============================================================
   SCROLL ANIMATIONS
============================================================ */
function initScrollAnimations() {
    const animated = document.querySelectorAll(".fade-in-up");

    function checkFade() {
        const windowHeight = window.innerHeight;

        animated.forEach(el => {
            if (el.getBoundingClientRect().top < windowHeight - 120) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFade);
    checkFade();
}


/* ============================================================
   LANGUAGE TOGGLE
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

        homeSubtitle: "Web Developer • UI/UX Designer • Customized Problem Solver",
        homeBtn1: "Contact Me",
        homeBtn2: "About Me",

        aboutTitle: "About Me",
        aboutText1: "I'm a passionate web developer who transforms ideas into clean, modern and functional digital experiences.",
        aboutText2: "I specialize in frontend development, UI/UX design, and creating fast, responsive web applications.",
        aboutText3: "I believe that a well-designed website is more than just aesthetics; it's about delivering value, enhancing brand presence, and creating meaningful user experiences.",
        aboutText4: "With thoughtful design and reliable systems, a website can do more than look good — it can elevate your business, strengthen your brand, and create real impact.",

        yearsExp: "Years Experience",
        projectsDone: "Projects Delivered",
        clientSatisfaction: "Client Satisfaction",

        educationTitle: "Education",
        experienceTitle: "Experience",
        skillsTitle: "Skills",
        contactTitle: "Contact",

        contactText: "I'm always open to new opportunities and creative projects.",
        sendMessage: "Send Message",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        yourLocation: "Your Location",
    },

    zh: {
        navHome: "首页",
        navAbout: "关于我",
        navEducation: "教育背景",
        navExperience: "工作经历",
        navSkills: "技能",
        navContact: "联系",

        homeSubtitle: "网页设计 • UI/UX 设计师 • 私人定制",
        homeBtn1: "联系我",
        homeBtn2: "关于我",

        aboutTitle: "关于我",
        aboutText1: "科技正在重新定义我们的生活与工作方式。",
        aboutText2: "一个好的网页不仅好看，更能助您提升业务、强化品牌、创造真实影响力。",
        aboutText3: "我专注于以现代化的网页开发与简洁有力的 UI/UX 设计，帮助个人与企业释放数字化的潜能。",
        aboutText4: "一个出色的网站可以替你说故事、支撑你的事业，并帮助你的业务稳步成长。因此，我热爱打造简洁、直观、真正有意义的数字体验。",

        yearsExp: "年经验",
        projectsDone: "完成项目",
        clientSatisfaction: "客户满意度",

        educationTitle: "教育背景",
        experienceTitle: "工作经历",
        skillsTitle: "技能",
        contactTitle: "联系我",

        contactText: "我一直乐于讨论新的机会和创意项目。",
        sendMessage: "发送消息",
        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的留言",
        yourLocation: "您的位置"
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

function applyLanguage(lang) {
    const t = langData[lang];

    // button
    document.getElementById("languageBtn").textContent =
        lang === "en" ? "中文" : "EN";

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

    // HERO
    document.querySelector(".hero-subtitle").textContent = t.homeSubtitle;

    const btns = document.querySelectorAll(".hero-buttons .btn");
    btns[0].textContent = t.homeBtn1;
    btns[1].textContent = t.homeBtn2;

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
    const info = document.querySelector("#contact .contact-info p");
    if (info) info.textContent = t.contactText;

    const labels = document.querySelectorAll(".contact-form label");
    labels[0].textContent = t.yourName;
    labels[1].textContent = t.yourEmail;
    labels[2].textContent = t.yourMessage;

    const inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
    inputs[0].placeholder = t.yourName;
    inputs[1].placeholder = t.yourEmail;
    inputs[2].placeholder = t.yourMessage;

    document.querySelector(".contact-submit-btn").textContent = t.sendMessage;
}


/* ============================================================
   QR MODAL
============================================================ */
function initQrModal() {
    const qrModal = document.getElementById("qrModal");
    const showQr = document.getElementById("showQr");

    if (!qrModal || !showQr) return;

    showQr.addEventListener("click", (e) => {
        e.preventDefault();
        qrModal.style.display = "flex";
    });

    qrModal.addEventListener("click", (e) => {
        if (e.target === qrModal) qrModal.style.display = "none";
    });
}
function initQrModal() {
    const qrModal = document.getElementById("qrModal");
    const waModal = document.getElementById("waModal");

    const showQr = document.getElementById("showQr");
    const showWhatsapp = document.getElementById("showWhatsapp");

    // WeChat QR
    if (showQr) {
        showQr.addEventListener("click", e => {
            e.preventDefault();
            qrModal.style.display = "flex";
        });
    }

    // WhatsApp QR
    if (showWhatsapp) {
        showWhatsapp.addEventListener("click", e => {
            e.preventDefault();
            waModal.style.display = "flex";
        });
    }

    // Close on outside click
    if (qrModal) {
        qrModal.addEventListener("click", e => {
            if (e.target === qrModal) qrModal.style.display = "none";
        });
    }

    if (waModal) {
        waModal.addEventListener("click", e => {
            if (e.target === waModal) waModal.style.display = "none";
        });
    }
}
