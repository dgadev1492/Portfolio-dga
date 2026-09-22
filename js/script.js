/* =========================================
   1. SÉLECTION DES ÉLÉMENTS HTML
========================================= */

const html = document.documentElement;

const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const currentYear = document.getElementById("current-year");


/* =========================================
   2. GESTION DU THÈME
========================================= */

// Récupérer le thème sauvegardé
let savedTheme = localStorage.getItem("theme");

// Définir le thème initial
let currentTheme = savedTheme || "dark";

// Appliquer le thème
function applyTheme(theme) {
    currentTheme = theme;

    html.setAttribute("data-theme", theme);

    // Adapter l'icône et le texte accessible
    if (theme === "dark") {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Activer le thème clair");
        themeToggle.setAttribute("title", "Activer le thème clair");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Activer le thème sombre");
        themeToggle.setAttribute("title", "Activer le thème sombre");
    }

    // Mémoriser le choix
    localStorage.setItem("theme", theme);
}

// Appliquer le thème au chargement
applyTheme(currentTheme);

// Changer de thème au clic
themeToggle.addEventListener("click", () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
});


/* =========================================
   3. TRADUCTIONS FRANÇAIS / ANGLAIS
========================================= */

const translations = {

    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-contact": "Contact",

        "greeting": "Salut, je suis",
        "hero-title": "Développeur Web Junior",

        "hero-description":
            "Je conçois des applications web modernes, fonctionnelles et accessibles. Découvrez mon parcours et mes réalisations.",

        "discover-projects": "Découvrir mes projets",
        "contact-me": "Me contacter",

        "about-title": "À propos de moi",

        "about-description":
            "Je suis passionné par le développement web et la création de solutions numériques. J'aime apprendre de nouvelles technologies et réaliser des projets concrets.",

        "skills-title": "Mes compétences",

        "skill-html": "Structure des pages web",
        "skill-css": "Design et responsive",
        "skill-js": "Interactions et logique",
        "skill-node": "Développement backend",
        "skill-express": "Création d'API et de serveurs",
        "skill-postgres": "Gestion des bases de données",

        "projects-title": "Mes projets",

        "project-description":
            "Une application web de conversion de fichiers audio et vidéo développée avec Node.js, Express et FFmpeg.",

        "source-code": "Code source",
        "live-demo": "Démo en ligne",

        "contact-title": "Contact",

        "contact-description":
            "Vous souhaitez discuter d'un projet ou me contacter ? N'hésitez pas à me laisser un message.",

        "rights": "Tous droits réservés."
    },

    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",

        "greeting": "Hi, I'm",
        "hero-title": "Junior Web Developer",

        "hero-description":
            "I build modern, functional, and accessible web applications. Discover my background and projects.",

        "discover-projects": "Explore my projects",
        "contact-me": "Contact me",

        "about-title": "About me",

        "about-description":
            "I'm passionate about web development and creating digital solutions. I enjoy learning new technologies and building real-world projects.",

        "skills-title": "My skills",

        "skill-html": "Web page structure",
        "skill-css": "Design and responsive layouts",
        "skill-js": "Interactions and logic",
        "skill-node": "Backend development",
        "skill-express": "Building APIs and servers",
        "skill-postgres": "Database management",

        "projects-title": "My projects",

        "project-description":
            "A web application for converting audio and video files, built with Node.js, Express, and FFmpeg.",

        "source-code": "Source code",
        "live-demo": "Live demo",

        "contact-title": "Contact",

        "contact-description":
            "Would you like to discuss a project or get in touch? Feel free to send me a message.",

        "rights": "All rights reserved."
    }

};


/* =========================================
   4. GESTION DE LA LANGUE
========================================= */

// Récupérer la langue sauvegardée
let savedLanguage = localStorage.getItem("language");

// Définir la langue initiale
let currentLanguage = savedLanguage || "fr";

// Appliquer la langue
function applyLanguage(language) {
    currentLanguage = language;

    // Modifier la langue du document
    html.setAttribute("lang", language);

    // Traduire les éléments possédant data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {

        const key = element.getAttribute("data-i18n");

        const translation = translations[language][key];

        if (translation) {
            element.textContent = translation;
        }

    });

    // Le bouton indique la langue vers laquelle basculer
    if (language === "fr") {
        languageToggle.textContent = "EN";
        languageToggle.setAttribute("aria-label", "Switch to English");
        languageToggle.setAttribute("title", "Switch to English");
    } else {
        languageToggle.textContent = "FR";
        languageToggle.setAttribute("aria-label", "Passer en français");
        languageToggle.setAttribute("title", "Passer en français");
    }

    // Mémoriser la langue
    localStorage.setItem("language", language);
}

// Appliquer la langue au chargement
applyLanguage(currentLanguage);

// Changer de langue au clic
languageToggle.addEventListener("click", () => {
    const newLanguage = currentLanguage === "fr" ? "en" : "fr";

    applyLanguage(newLanguage);
});


/* =========================================
   5. ANNÉE AUTOMATIQUE
========================================= */

currentYear.textContent = new Date().getFullYear();
