// ===========================================
// DATA: All Call of Duty Zombies Maps
// ===========================================

const GAMES = [
    {
        id: 'waw',
        name: 'World at War',
        shortName: 'WaW',
        year: 2008,
        developer: 'Treyarch',
        emoji: '🪖',
        accent: '#8B6914',
        maps: [
            'Nacht der Untoten',
            'Verrückt',
            'Shi No Numa',
            'Der Riese'
        ]
    },
    {
        id: 'bo1',
        name: 'Black Ops',
        shortName: 'BO1',
        year: 2010,
        developer: 'Treyarch',
        emoji: '⚫',
        accent: '#ff6600',
        maps: [
            'Kino der Toten',
            'Five',
            'Dead Ops Arcade',
            'Ascension',
            'Call of the Dead',
            'Shangri-La',
            'Moon'
        ]
    },
    {
        id: 'bo2',
        name: 'Black Ops II',
        shortName: 'BO2',
        year: 2012,
        developer: 'Treyarch',
        emoji: '🔶',
        accent: '#f5a623',
        maps: [
            'TranZit',
            'Town',
            'Farm',
            'Bus Depot',
            'Nuketown Zombies',
            'Die Rise',
            'Mob of the Dead',
            'Buried',
            'Origins'
        ]
    },
    {
        id: 'aw',
        name: 'Advanced Warfare',
        shortName: 'AW',
        year: 2014,
        developer: 'Sledgehammer Games',
        emoji: '🤖',
        accent: '#00bfff',
        maps: [
            'Outbreak',
            'Infection',
            'Carrier',
            'Descent'
        ]
    },
    {
        id: 'bo3',
        name: 'Black Ops III',
        shortName: 'BO3',
        year: 2015,
        developer: 'Treyarch',
        emoji: '🟣',
        accent: '#b44fff',
        maps: [
            'Shadows of Evil',
            'The Giant',
            'Der Eisendrache',
            'Zetsubou No Shima',
            'Gorod Krovi',
            'Revelations'
        ]
    },
    {
        id: 'bo3zc',
        name: 'Black Ops III — Zombies Chronicles',
        shortName: 'BO3 ZC',
        year: 2017,
        developer: 'Treyarch',
        emoji: '📜',
        accent: '#9b59b6',
        maps: [
            'Nacht der Untoten (ZC)',
            'Verrückt (ZC)',
            'Shi No Numa (ZC)',
            'Kino der Toten (ZC)',
            'Ascension (ZC)',
            'Shangri-La (ZC)',
            'Moon (ZC)',
            'Origins (ZC)'
        ]
    },
    {
        id: 'iw',
        name: 'Infinite Warfare',
        shortName: 'IW',
        year: 2016,
        developer: 'Infinity Ward',
        emoji: '🚀',
        accent: '#00e5ff',
        maps: [
            'Zombies in Spaceland',
            'Rave in the Redwoods',
            'Shaolin Shuffle',
            'Attack of the Radioactive Thing',
            'The Beast from Beyond'
        ]
    },
    {
        id: 'ww2',
        name: 'WWII',
        shortName: 'WWII',
        year: 2017,
        developer: 'Sledgehammer Games',
        emoji: '🎖️',
        accent: '#c8a415',
        maps: [
            'The Final Reich',
            'Gröesten Haus',
            'The Darkest Shore',
            'The Shadowed Throne',
            'The Tortured Path',
            'The Frozen Dawn'
        ]
    },
    {
        id: 'bo4',
        name: 'Black Ops 4',
        shortName: 'BO4',
        year: 2018,
        developer: 'Treyarch',
        emoji: '🔴',
        accent: '#e74c3c',
        maps: [
            'Voyage of Despair',
            'IX',
            'Blood of the Dead',
            'Classified',
            'Dead of the Night',
            'Ancient Evil',
            'Alpha Omega',
            'Tag der Toten'
        ]
    },
    {
        id: 'bocw',
        name: 'Black Ops Cold War',
        shortName: 'BOCW',
        year: 2020,
        developer: 'Treyarch',
        emoji: '🧊',
        accent: '#3498db',
        maps: [
            'Die Maschine',
            'Firebase Z',
            'Outbreak',
            'Mauer der Toten',
            'Forsaken'
        ]
    },
    {
        id: 'vanguard',
        name: 'Vanguard',
        shortName: 'VG',
        year: 2021,
        developer: 'Treyarch',
        emoji: '⚔️',
        accent: '#cc6600',
        maps: [
            'Der Anfang',
            'Terra Maledicta',
            'Shi No Numa (VG)',
            'The Archon'
        ]
    },
    {
        id: 'mw3',
        name: 'Modern Warfare III',
        shortName: 'MW3',
        year: 2023,
        developer: 'Sledgehammer Games',
        emoji: '💀',
        accent: '#2ecc71',
        maps: [
            'MWZ — Urzikstan'
        ]
    },
    {
        id: 'bo6',
        name: 'Black Ops 6',
        shortName: 'BO6',
        year: 2024,
        developer: 'Treyarch',
        emoji: '🟥',
        accent: '#ff0055',
        maps: [
            'Terminus',
            'Liberty Falls',
            'Citadelle des Morts',
            'The Tomb',
            'Shattered Veil',
            'Reckoning'
        ]
    },
    {
        id: 'bo7',
        name: 'Black Ops 7',
        shortName: 'BO7',
        year: 2025,
        developer: 'Treyarch',
        emoji: '🔥',
        accent: '#ff8800',
        maps: [
            'Ashes of the Damned',
            'Astra Malorum',
            'Paradox Junction',
            'Exit 115',
            'Zarya Cosmodrome',
            'Mars',
            'Vandorn Farm',
            'Totenreich',
            'Kowakujo'
        ]
    }
];

// Deep freeze the data to prevent tampering at runtime
GAMES.forEach(game => Object.freeze(game.maps));
GAMES.forEach(game => Object.freeze(game));
Object.freeze(GAMES);

// ===========================================
// UTILITIES
// ===========================================

// Sanitize strings used in HTML IDs/attributes to prevent injection
function sanitizeId(str) {
    return String(str).replace(/[^a-zA-Z0-9_-]/g, '');
}

// ===========================================
// STATE
// ===========================================

// Map ID format: "gameId::mapName"
const selectedMaps = new Set();
let totalMaps = 0;

// ===========================================
// DOM REFERENCES
// ===========================================

const gamesContainer = document.getElementById('games-container');
const selectedCountEl = document.getElementById('selected-count');
const totalCountEl = document.getElementById('total-count');
const pickCountInput = document.getElementById('pick-count');
const btnSelectAll = document.getElementById('btn-select-all');
const btnDeselectAll = document.getElementById('btn-deselect-all');
const btnRandomize = document.getElementById('btn-randomize');
const pickMinus = document.getElementById('pick-minus');
const pickPlus = document.getElementById('pick-plus');
const resultOverlay = document.getElementById('result-overlay');
const resultCards = document.getElementById('result-cards');
const resultClose = document.getElementById('result-close');
const btnCloseResult = document.getElementById('btn-close-result');
const btnReroll = document.getElementById('btn-reroll');
const controlsBar = document.getElementById('controls-bar');
const toastEl = document.getElementById('toast');

// ===========================================
// INIT
// ===========================================

function init() {
    totalMaps = GAMES.reduce((acc, g) => acc + g.maps.length, 0);
    totalCountEl.textContent = totalMaps;

    renderGameCards();
    selectAll(); // Start with all selected
    bindEvents();
    initCanvas();
    updateUI();
}

// ===========================================
// RENDER
// ===========================================

function renderGameCards() {
    gamesContainer.innerHTML = '';

    GAMES.forEach((game, gameIndex) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.setProperty('--game-accent', game.accent);
        card.style.animationDelay = `${gameIndex * 0.06}s`;
        card.id = `game-card-${sanitizeId(game.id)}`;

        // Build header
        const header = document.createElement('div');
        header.className = 'game-card-header';

        const info = document.createElement('div');
        info.className = 'game-info';

        const title = document.createElement('div');
        title.className = 'game-title';
        const emojiSpan = document.createElement('span');
        emojiSpan.className = 'game-emoji';
        emojiSpan.textContent = game.emoji;
        const nameSpan = document.createElement('span');
        nameSpan.textContent = `CoD: ${game.name}`;
        title.appendChild(emojiSpan);
        title.appendChild(nameSpan);

        const meta = document.createElement('div');
        meta.className = 'game-meta';
        const yearSpan = document.createElement('span');
        yearSpan.className = 'game-year';
        yearSpan.textContent = game.year;
        const devSpan = document.createElement('span');
        devSpan.className = 'game-developer';
        devSpan.textContent = game.developer;
        meta.appendChild(yearSpan);
        meta.appendChild(devSpan);

        info.appendChild(title);
        info.appendChild(meta);

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'game-toggle all-selected';
        toggleBtn.dataset.gameId = game.id;
        toggleBtn.id = `toggle-${sanitizeId(game.id)}`;
        toggleBtn.title = `Toggle all maps for ${game.name}`;
        toggleBtn.textContent = 'Toggle All';

        header.appendChild(info);
        header.appendChild(toggleBtn);

        // Build map list
        const mapList = document.createElement('div');
        mapList.className = 'map-list';

        game.maps.forEach((map, i) => {
            const mapId = `${game.id}::${map}`;

            const label = document.createElement('label');
            label.className = 'map-item';
            label.htmlFor = `map-${sanitizeId(game.id)}-${i}`;
            label.id = `map-item-${sanitizeId(game.id)}-${i}`;

            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.className = 'map-checkbox';

            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = `map-${sanitizeId(game.id)}-${i}`;
            input.dataset.mapId = mapId;
            input.dataset.gameId = game.id;
            input.checked = true;

            const checkmark = document.createElement('span');
            checkmark.className = 'checkmark';

            checkboxWrapper.appendChild(input);
            checkboxWrapper.appendChild(checkmark);

            const mapName = document.createElement('span');
            mapName.className = 'map-name';
            mapName.textContent = map;

            label.appendChild(checkboxWrapper);
            label.appendChild(mapName);
            mapList.appendChild(label);
        });

        card.appendChild(header);
        card.appendChild(mapList);
        gamesContainer.appendChild(card);
    });
}

// ===========================================
// EVENTS
// ===========================================

function bindEvents() {
    // Individual map checkboxes
    gamesContainer.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const mapId = e.target.dataset.mapId;
            if (e.target.checked) {
                selectedMaps.add(mapId);
            } else {
                selectedMaps.delete(mapId);
            }
            updateGameToggleState(e.target.dataset.gameId);
            updateUI();
        }
    });

    // Game toggle buttons
    gamesContainer.addEventListener('click', (e) => {
        const toggleBtn = e.target.closest('.game-toggle');
        if (toggleBtn) {
            const gameId = toggleBtn.dataset.gameId;
            toggleGame(gameId);
        }
    });

    // Select/Deselect All
    btnSelectAll.addEventListener('click', selectAll);
    btnDeselectAll.addEventListener('click', deselectAll);

    // Pick count stepper
    pickMinus.addEventListener('click', () => {
        const val = parseInt(pickCountInput.value) || 1;
        pickCountInput.value = Math.max(1, val - 1);
    });
    pickPlus.addEventListener('click', () => {
        const val = parseInt(pickCountInput.value) || 1;
        pickCountInput.value = Math.min(99, val + 1);
    });
    pickCountInput.addEventListener('change', () => {
        let val = parseInt(pickCountInput.value) || 1;
        val = Math.max(1, Math.min(99, val));
        pickCountInput.value = val;
    });

    // Randomize
    btnRandomize.addEventListener('click', randomize);
    btnReroll.addEventListener('click', randomize);

    // Close result
    resultClose.addEventListener('click', closeResult);
    btnCloseResult.addEventListener('click', closeResult);
    resultOverlay.addEventListener('click', (e) => {
        if (e.target === resultOverlay) closeResult();
    });

    // Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeResult();
    });

    // Scroll detection for controls bar shadow
    window.addEventListener('scroll', () => {
        controlsBar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}

// ===========================================
// SELECTION LOGIC
// ===========================================

function selectAll() {
    GAMES.forEach(game => {
        game.maps.forEach((map, i) => {
            const mapId = `${game.id}::${map}`;
            selectedMaps.add(mapId);
            const checkbox = document.getElementById(`map-${game.id}-${i}`);
            if (checkbox) checkbox.checked = true;
        });
        updateGameToggleState(game.id);
    });
    updateUI();
}

function deselectAll() {
    selectedMaps.clear();
    document.querySelectorAll('#games-container input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
    });
    GAMES.forEach(game => updateGameToggleState(game.id));
    updateUI();
}

function toggleGame(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    const allSelected = game.maps.every(map => selectedMaps.has(`${gameId}::${map}`));

    game.maps.forEach((map, i) => {
        const mapId = `${gameId}::${map}`;
        const checkbox = document.getElementById(`map-${gameId}-${i}`);

        if (allSelected) {
            selectedMaps.delete(mapId);
            if (checkbox) checkbox.checked = false;
        } else {
            selectedMaps.add(mapId);
            if (checkbox) checkbox.checked = true;
        }
    });

    updateGameToggleState(gameId);
    updateUI();
}

function updateGameToggleState(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    const toggleBtn = document.getElementById(`toggle-${gameId}`);
    if (!toggleBtn) return;

    const allSelected = game.maps.every(map => selectedMaps.has(`${gameId}::${map}`));
    toggleBtn.classList.toggle('all-selected', allSelected);
}

// ===========================================
// UI UPDATE
// ===========================================

function updateUI() {
    selectedCountEl.textContent = selectedMaps.size;
    btnRandomize.disabled = selectedMaps.size === 0;
}

// ===========================================
// RANDOMIZE
// ===========================================

function randomize() {
    const selectedArray = Array.from(selectedMaps);
    if (selectedArray.length === 0) {
        showToast('⚠️ Select at least one map first!');
        return;
    }

    let pickCount = parseInt(pickCountInput.value) || 1;
    pickCount = Math.min(pickCount, selectedArray.length);

    // Cryptographically secure Fisher-Yates shuffle and pick
    const shuffled = [...selectedArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const randomBuffer = new Uint32Array(1);
        crypto.getRandomValues(randomBuffer);
        const j = randomBuffer[0] % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    const picked = shuffled.slice(0, pickCount);
    showResult(picked);
}

function showResult(pickedMapIds) {
    resultCards.innerHTML = '';

    pickedMapIds.forEach((mapId, index) => {
        const [gameId, ...mapNameParts] = mapId.split('::');
        const mapName = mapNameParts.join('::'); // Handle edge case of :: in name
        const game = GAMES.find(g => g.id === gameId);
        if (!game) return;

        const card = document.createElement('div');
        card.className = 'result-card';
        card.style.setProperty('--game-accent', game.accent);
        card.style.animationDelay = `${index * 0.12}s`;

        const mapDiv = document.createElement('div');
        mapDiv.className = 'result-card-map';
        mapDiv.textContent = `${game.emoji} ${mapName}`;

        const gameDiv = document.createElement('div');
        gameDiv.className = 'result-card-game';
        gameDiv.textContent = 'from ';
        const gameSpan = document.createElement('span');
        gameSpan.textContent = `CoD: ${game.name}`;
        gameDiv.appendChild(gameSpan);
        gameDiv.appendChild(document.createTextNode(` (${game.year})`));

        card.appendChild(mapDiv);
        card.appendChild(gameDiv);
        resultCards.appendChild(card);
    });

    resultOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeResult() {
    resultOverlay.classList.add('hidden');
    document.body.style.overflow = '';
}

// ===========================================
// TOAST
// ===========================================

function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');

    requestAnimationFrame(() => {
        toastEl.classList.add('show');
    });

    setTimeout(() => {
        toastEl.classList.remove('show');
        setTimeout(() => toastEl.classList.add('hidden'), 400);
    }, 2500);
}

// ===========================================
// BACKGROUND PARTICLES
// ===========================================

function initCanvas() {
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');

    let w, h;
    const particles = [];
    const PARTICLE_COUNT = 60;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() > 0.7 ? 0 : 140; // red or green
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
                this.reset();
            }
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            if (this.hue === 0) {
                ctx.fillStyle = `rgba(255, 50, 50, ${this.opacity})`;
            } else {
                ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity})`;
            }
            ctx.fill();
        }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();
}

// ===========================================
// LAUNCH
// ===========================================

document.addEventListener('DOMContentLoaded', init);
