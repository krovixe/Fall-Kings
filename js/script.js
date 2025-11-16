/**
 * FALL KINGS – script.js
 * Funktionen:
 * 1. Hamburger-Menü (Mobile)
 * 2. Menü schließt bei Klick auf Link
 * 3. Dropdown-Menü (Desktop)
 * 4. Aktive Seite markieren (automatisch)
 *
 * Stand: 15. November 2025, 22:45 Uhr CET
 */

document.addEventListener('DOMContentLoaded', function () {
    // === 1. HAMBURGER MENÜ ===
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Schließe Menü bei Klick auf Link (Mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // === 2. AKTIVE SEITE MARKIEREN ===
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // === 3. DROPDOWN (Desktop) – nur Hover ===
    const dropdown = document.querySelector('.dropdown');
    if (dropdown) {
        dropdown.addEventListener('mouseenter', () => {
            dropdown.querySelector('.dropdown-content').style.opacity = '1';
            dropdown.querySelector('.dropdown-content').style.visibility = 'visible';
        });
        dropdown.addEventListener('mouseleave', () => {
            dropdown.querySelector('.dropdown-content').style.opacity = '0';
            dropdown.querySelector('.dropdown-content').style.visibility = 'hidden';
        });
    }

});

// === Videos in der Galerie unterstützen ===
document.querySelectorAll(".gallery-item img").forEach(img => {
    const src = img.src;

    // Wenn eine Video-Datei geladen wurde → ersetze IMG durch VIDEO
    if (src.match(/\.(mp4|mov|webm|avi|mkv)(\?|$)/i)) {

        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        video.preload = "metadata";
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";

        img.replaceWith(video);
    }
});
