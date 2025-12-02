/* ============================================================
   MASTER INITIALIZATION
   Runs AFTER the page is fully loaded
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    // 1. 首先初始化语言系统（最重要！）
    initLanguageToggle();

    // 2. 然后运行其他UI功能
    initSmoothScroll();
    initActiveNav();
    initSidebarToggle();
    initScrollReveal();
    animateHeroImage();
    initButtonRipple();
    initQrModal();
    initContactForm();

    // 移除原来这里的 initLanguageToggle();
});


/* ============================================================
   SMOOTH SCROLLING
============================================================ */
function initSmoothScroll() {
    const links = document.querySelectorAll(".sidebar-menu a");

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
   ACTIVE NAVIGATION INDICATOR
============================================================ */
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".sidebar-menu a");

    function updateActive() {
        let current = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 200) {
                current = "#" + section.id;
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
   MOBILE SIDEBAR AUTO-CLOSE
============================================================ */
function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");

    let lastScroll = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.innerWidth > 768) return;

        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            sidebar.classList.remove("active");
        }

        lastScroll = currentScroll;
    });
}



/* ============================================================
   SCROLL REVEAL ANIMATIONS
============================================================ */
function initScrollReveal() {
    const revealItems = document.querySelectorAll(
        ".fade-in-up, .section, .stat-card, .experience-card, .skills-category"
    );

    function reveal() {
        revealItems.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal(); // Run once at load
}



/* ============================================================
   FLOATING HERO IMAGE ANIMATION
============================================================ */
function animateHeroImage() {
    const img = document.querySelector(".hero-image-container");
    if (!img) return;

    img.style.transition = "transform 3s ease-in-out";
    let direction = 1;

    setInterval(() => {
        img.style.transform = `translateY(${direction * 10}px)`;
        direction *= -1;
    }, 3000);
}



/* ============================================================
   BUTTON RIPPLE EFFECT
============================================================ */
function initButtonRipple() {
    document.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", e => {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const rect = e.target.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            btn.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}



/* ============================================================
   QR CODE MODALS (WeChat & WhatsApp)
============================================================ */
function initQrModal() {
    const qrModal = document.getElementById("qrModal");
    const waModal = document.getElementById("waModal");

    const showQr = document.getElementById("showQr");
    const showWa = document.getElementById("showWhatsapp");

    if (showQr) {
        showQr.addEventListener("click", e => {
            e.preventDefault();
            qrModal.style.display = "flex";
        });
    }

    if (showWa) {
        showWa.addEventListener("click", e => {
            e.preventDefault();
            waModal.style.display = "flex";
        });
    }

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



/* ============================================================
   CONTACT FORM SUBMISSION UI (EmailJS handled in HTML)
============================================================ */
function initContactForm() {
    const form = document.getElementById("contactForm");
    const successBox = document.getElementById("successMessage");
    const fields = document.querySelector(".contact-fields");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send("service_ocw76df", "template_d3okh3r", {
            from_name: name,
            reply_to: email,
            message: message
        })
        .then(() => {
            fields.classList.add("hidden");
            successBox.classList.remove("hidden");
        })
        .catch((error) => {
            alert("❌ Message failed: " + JSON.stringify(error));
        });
    });
}


/* ============================================================
   LANGUAGE SYSTEM
============================================================ */

// Store saved language OR default to English
let currentLanguage = localStorage.getItem("language") || "en";


// All translation text for BOTH languages
const langData = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navContact: "Contact",

        heroTitle: "Welcome to LZ's Profile",
        heroSubtitle: "Web Developer • UI/UX Designer • Problem Solver",
        heroDesc: "I build modern, fast, elegant websites and web applications. Behind every successful brand is a story told through design — clear, meaningful, and unforgettable.",
        heroBtn1: "Contact Me",
        heroBtn2: "About Me",
        
        aboutTitle: "About Me",
        aboutText1: "I'm a passionate web developer who transforms ideas into clean, modern and functional digital experiences.",
        aboutText2: "I specialize in frontend development, UI/UX design, and creating fast, responsive web applications.",
        aboutText3: "I also offer private, bespoke design consulting for brands and small businesses.",
        aboutText4: "My goal is to help people build solutions that match their goals and deliver real results.",

        eduTitle: "Education",
        expTitle: "Experience",
        skillsTitle: "Skills",
        contactTitle: "Contact",

        // Education details
        eduDegree1: "Bachelor of Information Technology — NUS",
        eduDesc1: "Software development, database systems, data analytics, machine learning.",
        eduDegree2: "Diploma in Human Capital Management — RP",
        eduDesc2: "HR operations, workforce analytics, business strategy, organisational behaviour.",
        
        // Experience details
        expTitle1: "Senior Software Developer — Freddy",
        expDuration1: "2022 – Present",
        expItem1_1: "Design and implement new features",
        expItem1_2: "Mentor junior developers",
        expItem1_3: "Optimize performance & reliability",
        
        expTitle2: "UI/UX & Web Developer — Sally",
        expDuration2: "2021 – Present",
        expItem2_1: "Front-end development (HTML, CSS, JS)",
        expItem2_2: "Backend API integration",
        expItem2_3: "Responsive UI/UX implementation",
        expItem2_4: "User experience improvement",

        contactSubtitle: "Let's Connect",
        contactText: "I'm always open to new opportunities and creative projects.",

        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        sendMessage: "Send Message",

        sendButton: "Send Message",

        footer1: "© 2024 Lin Zhi. All rights reserved.",
        footer2: "Built with passion and modern web technologies."
    },

    zh: {
        navHome: "首页",
        navAbout: "关于我",
        navEducation: "教育背景",
        navExperience: "工作经历",
        navSkills: "技能",
        navContact: "联系",

        heroTitle: "欢迎来到 LZ 的个人主页",
        heroSubtitle: "网页设计 • UI/UX 设计师 • 创意解决者",
        heroDesc: "我致力于打造现代、快速、优雅的网站与应用程序。成功的品牌背后，都有一个以设计讲述的好故事——明确、有力、令人难忘。",
        heroBtn1: "联系我",
        heroBtn2: "关于我",

        aboutTitle: "关于我",
        aboutText1: "科技正在重塑我们的生活与工作方式。我是一名专注于网页与用户体验设计的独立设计师。",
        aboutText2: "我提供私密、定制化的网页与品牌设计服务，为客户打造真正属于自己的方案。",
        aboutText3: "优秀的设计是策略与美学的结合，我帮助创业者将灵感转化为可落地且具价值的成果。",
        aboutText4: "从理解用户与业务开始，我通过系统的设计流程，协助品牌成长并实现商业目标。",

        eduTitle: "教育背景",
        expTitle: "工作经历",
        skillsTitle: "技能",
        contactTitle: "联系我",

        eduDegree1: "信息技术学士 — 新加坡国立大学",
        eduDesc1: "软件开发、数据库系统、数据分析、机器学习。",
        eduDegree2: "人力资本管理文凭 — 共和理工学院",
        eduDesc2: "人力资源运营、劳动力分析、商业策略、组织行为学。",
        
        expTitle1: "高级软件工程师 — Freddy",
        expDuration1: "2022年 – 至今",
        expItem1_1: "设计与实现新功能",
        expItem1_2: "指导初级开发人员",
        expItem1_3: "优化性能与可靠性",
        
        expTitle2: "UI/UX 与网页开发 — Sally",
        expDuration2: "2021年 – 至今",
        expItem2_1: "前端开发 (HTML, CSS, JS)",
        expItem2_2: "后端API集成",
        expItem2_3: "响应式UI/UX实现",
        expItem2_4: "用户体验改进",

        contactSubtitle: "保持联系",
        contactText: "欢迎随时联系我讨论合作或创意项目!",

        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的留言",
        sendMessage: "发送消息",

        sendButton: "发送消息",

        footer1: "© 2024 Lin Zhi 版权所有。",
        footer2: "由热情与现代网络技术驱动。"
    }
};



/* ============================================================
   APPLY LANGUAGE TEXT TO PAGE
============================================================ */
function applyLanguage(lang) {
    const t = langData[lang];

    const map = [
        // NAVIGATION
        ["#navHome", t.navHome],
        ["#navAbout", t.navAbout],
        ["#navEducation", t.navEducation],
        ["#navExperience", t.navExperience],
        ["#navSkills", t.navSkills],
        ["#navContact", t.navContact],

        // HERO
        ["#heroTitle", t.heroTitle],
        ["#heroSubtitle", t.heroSubtitle],
        ["#heroDesc", t.heroDesc],
        ["#heroBtn1", t.heroBtn1],
        ["#heroBtn2", t.heroBtn2],

        // ABOUT
        ["#aboutTitle", t.aboutTitle],
        ["#aboutPara1", t.aboutText1],
        ["#aboutPara2", t.aboutText2],
        ["#aboutPara3", t.aboutText3],
        ["#aboutPara4", t.aboutText4],

        // SECTION TITLES
        ["#eduTitle", t.eduTitle],
        ["#expTitle", t.expTitle],
        ["#skillsTitle", t.skillsTitle],
        ["#contactTitle", t.contactTitle],

        // CONTACT TEXT
        ["#contactSubtitle", t.contactSubtitle],
        ["#contactText", t.contactText],
        ["#sendBtn", t.sendMessage],

        // FOOTER TEXT
        ["#footer1", t.footer1],
        ["#footer2", t.footer2],

                // ===== 新增：教育部分 =====
        ["#eduDegree1", t.eduDegree1],
        ["#eduDesc1", t.eduDesc1],
        ["#eduDegree2", t.eduDegree2],
        ["#eduDesc2", t.eduDesc2],
        
        // ===== 新增：工作经历部分 =====
        ["#expTitle1", t.expTitle1],
        ["#expDuration1", t.expDuration1],
        ["#expItem1_1", t.expItem1_1],
        ["#expItem1_2", t.expItem1_2],
        ["#expItem1_3", t.expItem1_3],
        
        ["#expTitle2", t.expTitle2],
        ["#expDuration2", t.expDuration2],
        ["#expItem2_1", t.expItem2_1],
        ["#expItem2_2", t.expItem2_2],
        ["#expItem2_3", t.expItem2_3],
        ["#expItem2_4", t.expItem2_4]    
    ];

    // Apply text content
    map.forEach(([selector, value]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    });

    // Form Labels
    const labels = [
        ["#labelName", t.yourName],
        ["#labelEmail", t.yourEmail],
        ["#labelMessage", t.yourMessage]
    ];
    labels.forEach(([id, value]) => {
        const el = document.querySelector(id);
        if (el) el.textContent = value;
    });

    // Update the language button text
    document.getElementById("languageBtn").textContent =
        lang === "en" ? "中文" : "EN";

    localStorage.setItem("language", lang);
}



/* ============================================================
   INITIALIZE LANGUAGE TOGGLE
============================================================ */
function initLanguageToggle() {
    const btn = document.getElementById("languageBtn");

    // 使用 setTimeout 或 Promise.resolve().then() 确保在DOM事件循环的末尾执行
    // 这能保证所有元素（即使是动态生成的）都已存在
    setTimeout(() => {
        applyLanguage(currentLanguage);
    }, 0);

    // When clicked → switch language
    btn.addEventListener("click", () => {
        currentLanguage = currentLanguage === "en" ? "zh" : "en";
        applyLanguage(currentLanguage);
    });
}