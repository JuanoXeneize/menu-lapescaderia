// ============================================================
//  LÓGICA DE LA PÁGINA
//  Los DATOS del menú (items, precios, textos) están en
//  el archivo menu-data.js — editá ESE archivo para cambiar
//  el contenido. Normalmente NO necesitás tocar este archivo.
//
//  Las traducciones (inglés, portugués, ruso, chino) están en
//  translations.js.
// ============================================================

let currentLang = localStorage.getItem('lang') || 'es';

function t(key) {
    return (uiText[currentLang] && uiText[currentLang][key] !== undefined)
        ? uiText[currentLang][key]
        : uiText.es[key];
}

function sectionLabel(key) {
    const table = (uiText[currentLang] && uiText[currentLang].sectionHeadings) || {};
    return table[key] !== undefined ? table[key] : (uiText.es.sectionHeadings[key] || key);
}

// Returns the items to render for a carta/bebidas category, overlaying
// translated n/d by array index when available, falling back to the
// Spanish source item otherwise (so an incomplete translation never breaks rendering).
function localizedItems(category, baseItems) {
    if (currentLang === 'es') return baseItems;
    const overlay = menuTranslations[currentLang] && menuTranslations[currentLang][category];
    if (!overlay) return baseItems;
    return baseItems.map((item, i) => {
        const tItem = overlay[i];
        if (!tItem) return item;
        return {
            ...item,
            n: tItem.n !== undefined ? tItem.n : item.n,
            d: tItem.d !== undefined ? tItem.d : (item.section ? sectionLabel(item.d) : item.d)
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Nav elements
    const mainNavItems = document.querySelectorAll('#main-menu li');
    const sections = document.querySelectorAll('.menu-section');

    // Sub-nav containers
    const subMenuCarta = document.getElementById('sub-menu');
    const subMenuBebidas = document.getElementById('sub-menu-bebidas');

    // Content containers
    const cartaContent = document.getElementById('carta-content');
    const bebidasContent = document.getElementById('bebidas-content');
    const vinosContent = document.getElementById('vinos-content');
    const bodegaSelect = document.getElementById('bodega-select');
    const bodegaLabel = document.querySelector('.bodega-label');
    const langDropdown = document.getElementById('lang-dropdown');
    const langToggle = document.getElementById('lang-dropdown-toggle');
    const langMenu = document.getElementById('lang-dropdown-menu');

    let currentSubs = { carta: 'PROMOS', bebidas: 'SIN ALCOHOL', vinos: 'CATENA ZAPATA' };

    // Function to render items
    function renderItems(items, container, sectionName = '', subName = '') {
        container.innerHTML = '';

        // Add note for PROMOS section
        if (sectionName === 'carta' && subName === 'PROMOS') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = `<p>${t('notePromos')}</p>`;
            container.appendChild(note);
        }

        // Add note for ENTRADAS section
        if (sectionName === 'carta' && subName === 'ENTRADAS') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = `<p>${t('noteEntradas')}</p>`;
            container.appendChild(note);
        }

        // Add note for PESCA section
        if (sectionName === 'carta' && subName === 'PESCA') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = `<p>${t('notePesca')}</p>`;
            container.appendChild(note);
        }

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        items.forEach(item => {
            if (item.section) {
                const heading = document.createElement('div');
                heading.className = 'category-heading';
                const headingText = sectionName === 'vinos' ? sectionLabel(item.d) : item.d;
                heading.innerHTML = `<h2>${headingText}</h2><div class="heading-line"></div>`;
                itemsGrid.appendChild(heading);
            } else {
                const card = document.createElement('div');
                card.className = 'menu-card';
                card.innerHTML = `
                    <div class="card-info">
                        <h3 class="card-title">${item.n}</h3>
                        ${item.d ? `<p class="card-desc">${item.d}</p>` : ''}
                    </div>
                    <div class="card-price">${item.p}</div>
                `;
                itemsGrid.appendChild(card);
            }
        });

        container.appendChild(itemsGrid);
    }

    function renderCarta(cat) {
        renderItems(localizedItems(cat, cartaItems[cat]), cartaContent, 'carta', cat);
    }

    function renderBebidas(cat) {
        renderItems(localizedItems(cat, bebidasItems[cat]), bebidasContent, 'bebidas', cat);
    }

    function renderVinos(bodega) {
        renderItems(vinosItems[bodega], vinosContent, 'vinos', bodega);
    }

    // Function to render sub-menus
    function renderSubMenu(container, categories, sectionKey) {
        container.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = sectionLabel(cat);
            li.dataset.category = cat;
            if (cat === currentSubs[sectionKey]) {
                li.classList.add('active');
            }
            li.addEventListener('click', () => {
                const siblings = container.querySelectorAll('li');
                siblings.forEach(s => s.classList.remove('active'));
                li.classList.add('active');
                currentSubs[sectionKey] = cat;

                if (sectionKey === 'carta') {
                    renderCarta(cat);
                } else if (sectionKey === 'bebidas') {
                    renderBebidas(cat);
                }
            });
            container.appendChild(li);
        });
    }

    function renderNav() {
        const navLabels = { carta: 'navCarta', bebidas: 'navBebidas', vinos: 'navVinos', reservas: 'navReservas' };
        mainNavItems.forEach(item => {
            item.textContent = t(navLabels[item.dataset.tab]);
        });
    }

    function renderStaticText() {
        renderNav();
        if (bodegaLabel) bodegaLabel.textContent = t('bodegaLabel');
        document.querySelector('.reservas-card h3').textContent = t('reservasHeading');
        document.querySelector('.reservas-card p').textContent = t('reservasText');
        document.querySelector('#btn-whatsapp .social-label').textContent = t('whatsappLabel');
        document.querySelector('#btn-instagram .social-label').textContent = t('instagramLabel');
        document.querySelector('footer .footer-content p').textContent = t('footerText');
        if (langToggle) langToggle.setAttribute('aria-label', t('langSelectLabel'));
    }

    function renderLangDropdown() {
        if (!langToggle || !langMenu) return;

        const current = languages.find(l => l.code === currentLang) || languages[0];
        langToggle.innerHTML = `
            <span class="lang-flag">${current.flag}</span>
            <span class="lang-current-label">${current.label}</span>
            <svg class="lang-caret" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
        `;

        langMenu.innerHTML = '';
        languages.forEach(lang => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.dataset.lang = lang.code;
            if (lang.code === currentLang) li.classList.add('active');
            li.innerHTML = `<span class="lang-flag">${lang.flag}</span><span>${lang.label}</span>`;
            li.addEventListener('click', () => {
                currentLang = lang.code;
                localStorage.setItem('lang', currentLang);
                closeLangDropdown();
                renderAll();
            });
            langMenu.appendChild(li);
        });
    }

    function closeLangDropdown() {
        if (!langDropdown) return;
        langDropdown.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
    }

    function renderAll() {
        renderStaticText();
        renderLangDropdown();
        renderSubMenu(subMenuCarta, cartaSubs, 'carta');
        renderSubMenu(subMenuBebidas, bebidasSubs, 'bebidas');
        renderCarta(currentSubs.carta);
        renderBebidas(currentSubs.bebidas);
        if (vinosBodegas.length > 0) {
            renderVinos(currentSubs.vinos);
        }
    }

    // Initialize Vinos select
    if (bodegaSelect) {
        bodegaSelect.innerHTML = '';
        vinosBodegas.forEach(bodega => {
            const option = document.createElement('option');
            option.value = bodega;
            option.textContent = bodega;
            if (bodega === currentSubs.vinos) {
                option.selected = true;
            }
            bodegaSelect.appendChild(option);
        });

        bodegaSelect.addEventListener('change', (e) => {
            currentSubs.vinos = e.target.value;
            renderVinos(currentSubs.vinos);
        });
    }

    // Language switcher (custom dropdown, so options can carry SVG flags)
    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langDropdown.classList.toggle('open');
            langToggle.setAttribute('aria-expanded', String(isOpen));
        });
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) closeLangDropdown();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLangDropdown();
        });
    }

    // Initial render
    renderAll();

    // Main Navigation Logic
    mainNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all main nav items and sections
            mainNavItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active-section'));

            // Add active class to clicked item and corresponding section
            item.classList.add('active');
            const targetSection = document.getElementById(item.dataset.tab);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
            // Scroll to top of content
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
