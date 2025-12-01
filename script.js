/* ============================================================
   INITIALIZATION
============================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initActiveNav();
    initSidebarToggle();
    initLanguageToggle();
    initScrollReveal();
    initQrModal();
    initContactForm();
    initButtonRipple();
    animateHeroImage();
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

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;

    emailjs.send("service_pzeguqq", "template_d3okh3r", {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }).then(() => {

        document.querySelector(".contact-fields").classList.add("hidden");
        document.getElementById("successMessage").classList.remove("hidden");

    }).catch((error) => {
        alert("❌ Failed to send message: " + JSON.stringify(error));
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // stop real submission

        // Hide the form
        contactForm.querySelector(".contact-fields").style.display = "none";

        // Show success block
        successMessage.classList.remove("hidden");

        // Add success animation
        successMessage.style.opacity = "0";
        successMessage.style.transform = "translateY(20px)";
        setTimeout(() => {
            successMessage.style.transition = "all 0.6s ease";
            successMessage.style.opacity = "1";
            successMessage.style.transform = "translateY(0)";
        }, 50);
    });
});

/* ============================================================
   SIDEBAR TOGGLE (MOBILE)
============================================================ */
function initSidebarToggle() {
    const sidebar = document.querySelector(".sidebar");

    let lastScroll = window.scrollY;
    window.addEventListener("scroll", () => {
        if (window.innerWidth > 768) return;
        const current = window.scrollY;

        if (current > lastScroll) sidebar.classList.remove("active");
        lastScroll = current;
    });
}


/* ============================================================
   SCROLL REVEAL (FADE-IN + SLIDE-UP)
============================================================ */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(
        ".fade-in-up, .section, .stat-card, .experience-card, .skills-category"
    );

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
}


/* ============================================================
   HERO IMAGE FLOAT ANIMATION
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
        btn.addEventListener("click", function (e) {
            const ripple = document.createElement("span");
            ripple.classList.add("ripple");

            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;

            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
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

        aboutText1: "I'm a passionate web developer who transforms ideas into clean, modern and functional digital experiences.",
        aboutText2: "I specialize in frontend development, UI/UX design, and creating fast, responsive web applications.",

        contactText: "I'm always open to new opportunities and creative projects.",
        yourName: "Your Name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        sendMessage: "Send Message"
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

        aboutText1: "科技正在重新定义我们的生活与工作方式。",
        aboutText2: "优秀的网页不仅美观，更能助您提升业务和品牌影响力。",

        contactText: "欢迎随时联系讨论新机会或创意项目！",
        yourName: "您的姓名",
        yourEmail: "您的邮箱",
        yourMessage: "您的留言",
        sendMessage: "发送消息"
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

    const mapping = [
        [".hero-subtitle", t.homeSubtitle],
        [".contact-info p", t.contactText],
        [".contact-submit-btn", t.sendMessage]
    ];

    mapping.forEach(([selector, value]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    });

    const labels = document.querySelectorAll(".contact-form label");
    if (labels.length >= 3) {
        labels[0].textContent = t.yourName;
        labels[1].textContent = t.yourEmail;
        labels[2].textContent = t.yourMessage;
    }
}


/* ============================================================
   CONTACT FORM → SUCCESS EMOJI
============================================================ */
function initContactForm() {
    const form = document.querySelector(".contact-form");
    const successBox = document.getElementById("successMessage");
    const fields = document.querySelector(".contact-fields");

    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        fields.classList.add("hidden");
        successBox.classList.remove("hidden");
    });
}


/* ============================================================
   QR MODALS (WeChat / WhatsApp)
============================================================ */
function initQrModal() {
    const qrModal = document.getElementById("qrModal");
    const waModal = document.getElementById("waModal");

    const showQr = document.getElementById("showQr");
    const showWa = document.getElementById("showWhatsapp");

    if (showQr)
        showQr.addEventListener("click", e => {
            e.preventDefault();
            qrModal.style.display = "flex";
        });

    if (showWa)
        showWa.addEventListener("click", e => {
            e.preventDefault();
            waModal.style.display = "flex";
        });

    if (qrModal)
        qrModal.addEventListener("click", e => {
            if (e.target === qrModal) qrModal.style.display = "none";
        });

    if (waModal)
        waModal.addEventListener("click", e => {
            if (e.target === waModal) waModal.style.display = "none";
        });
}
