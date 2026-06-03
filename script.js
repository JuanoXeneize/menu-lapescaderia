// ============================================================
//  LÓGICA DE LA PÁGINA
//  Los DATOS del menú (items, precios, textos) están en
//  el archivo menu-data.js — editá ESE archivo para cambiar
//  el contenido. Normalmente NO necesitás tocar este archivo.
// ============================================================

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

    let currentSubs = { carta: 'PROMOS', bebidas: 'SIN ALCOHOL', vinos: 'CATENA ZAPATA' };

    // Function to render items
    function renderItems(items, container, sectionName = '', subName = '') {
        container.innerHTML = '';

        // Add note for PROMOS section
        if (sectionName === 'carta' && subName === 'PROMOS') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = '<p>*GUARNICIONES A ELECCIÓN: Vegetales grillados - Ensalada - Papas a la plancha o fritas</p>';
            container.appendChild(note);
        }

        // Add note for ENTRADAS section
        if (sectionName === 'carta' && subName === 'ENTRADAS') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = '<p>CUBIERTOS $2.000</p>';
            container.appendChild(note);
        }

        // Add note for PESCA section
        if (sectionName === 'carta' && subName === 'PESCA') {
            const note = document.createElement('div');
            note.className = 'info-card';
            note.innerHTML = '<p>*La selección de la pesca del día está sujeta a disponibilidad</p>';
            container.appendChild(note);
        }

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        items.forEach(item => {
            if (item.section) {
                const heading = document.createElement('div');
                heading.className = 'category-heading';
                heading.innerHTML = `<h2>${item.d}</h2><div class="heading-line"></div>`;
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

    // Function to render sub-menus
    function renderSubMenu(container, categories, sectionKey) {
        container.innerHTML = '';
        categories.forEach(cat => {
            const li = document.createElement('li');
            li.textContent = cat;
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
                    renderItems(cartaItems[cat], cartaContent, sectionKey, cat);
                } else if (sectionKey === 'bebidas') {
                    renderItems(bebidasItems[cat], bebidasContent, sectionKey, cat);
                }
            });
            container.appendChild(li);
        });
    }

    // Initialize Sub-menus
    renderSubMenu(subMenuCarta, cartaSubs, 'carta');
    renderSubMenu(subMenuBebidas, bebidasSubs, 'bebidas');

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
            renderItems(vinosItems[currentSubs.vinos], vinosContent, 'vinos', currentSubs.vinos);
        });
    }

    // Initial render
    renderItems(cartaItems[currentSubs.carta], cartaContent, 'carta', currentSubs.carta);
    renderItems(bebidasItems[currentSubs.bebidas], bebidasContent, 'bebidas', currentSubs.bebidas);
    if (vinosBodegas.length > 0) {
        renderItems(vinosItems[currentSubs.vinos], vinosContent, 'vinos', currentSubs.vinos);
    }

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
