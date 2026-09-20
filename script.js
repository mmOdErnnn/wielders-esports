// ===== ДАННЫЕ НОВОСТЕЙ =====
const newsData = {
    'cyberx-standin': {
        tag: 'Information',
        tagClass: 'tag-announce',
        title: 'totle09 will act as a stand-in at the next tournament',
        date: '9 July 2026',
        body: `
            <p>Mikhail "mODeRN" Galchenkov will not be able to attend the upcoming CyberX 5x5 LAN for personal reasons. He will be replaced by Ivan "totle09" Lukinsky during the tournament.</p>
            <p>Ivan is well known to us, as he has already played as a substitute in our team before. We are sure that he will do an excellent job with the tasks assigned to him and will perform well on the server.</p>
            <p>The team will start performing on July 26 at 11:00 Moscow time.</p>
            <p>Cheer for the Wielders</p>
        `
    },
    'cyberx-5v5': {
        tag: 'Announce',
        tagClass: 'tag-announce',
        title: 'Wilders Esports will participate on CyberX 5x5 LAN',
        date: '4 July 2026',
        body: `
            <p>In the near future, our team will take part in CyberX 5x5 LAN tournament, which will commence on July 26 at 11:00 Moscow time.</p>
            <p>This will be the first serious tournament after the January series of changes.</p>
            <p>The roster has already gathered to prepare for the tournament in order to approach it in optimal shape.</p>
            <p>Cheer for the Wielders</p>
        `
    },
    'fara-announce': {
        tag: 'ROSTER CHANGES',
        tagClass: 'tag-roster',
        title: 'Fara is back in action, replacing SuSH1 as a sniper',
        date: '19 January 2026',
        body: `
            <p>Not much time has passed since the addition of dex, but we are once again making changes to the roster.</p>
            <p>Gleb "SuSH1" Stepanenko sits on the bench. This decision was made in accordance with the vision of the organization and the desire of the player himself.</p>
            <p>SuSH1 stood at the origins of the organization, and we are incredibly grateful to him for the months he spent with the team. The management sees prospects for his development and we will hope for a bright future for his career.</p>
            <p>However, while someone sits on the bench, someone rises from it. Danil "Fara" Sidorov returns to the main roster after more than six months of absence.</p>
            <p>During this time, Danil was able to further develop his talent, strengthen his self-confidence and is now ready to return to the server. The organization fully trusts him to return to the role of a sniper, and we are confident that he will be able to reveal himself even more than before.</p>
        `
    },
    'dex-announce': {
        tag: 'ROSTER CHANGES',
        tagClass: 'tag-roster',
        title: 'Sp3ctra is taking a backseat to give dex a chance to shine',
        date: '3 January 2026',
        body: `
            <p>After analyzing the results of the last matches, it was decided to make changes to the team.</p>
            <p>Mikhail "Sp3ctra" Sokolov was moved to the bench and Stepan "dex" Lukinsky took his place. Stepan has already played in several matches as a stand-in for the updated roster, and the management is very satisfied with his performance. We believe that he will easily integrate into the team and be able to handle all assigned tasks.</p>
            <p>Mikhail has made a worthy and extremely important contribution to the development of the organization, but in recent months he has not been able to properly play his roles in the team. We thank him for his time with us and believe that he will have a bright future ahead of him.</p>
            <p>After Sp3ctra's departure, Gleb "SuSH1" Stepanenko will return to his role as the main sniper.</p>
            <p>The team will meet again soon to prepare for the upcoming games.</p>
        `
    }
};

// ===== ДАННЫЕ ИГРОКОВ =====
const playersData = {
    'suzume': {
        nickname: 'Suzume',
        role: 'Rifler',
        name: 'Maxim Kolbaya',
        photo: 'suzume.png',
        stats: `
            <div class="player-stat">
                <div class="player-stat-value">1287</div>
                <div class="player-stat-label">ELO</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.05</div>
                <div class="player-stat-label">Rating</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">0.94</div>
                <div class="player-stat-label">K/D</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">41%</div>
                <div class="player-stat-label">HS</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">84.1</div>
                <div class="player-stat-label">ADR</div>
            </div>
        `,
        bio: `<p>Has been a part of Wielders ES since June 2025.</p>`,
        socials: `
            <a href="https://www.faceit.com/ru/players/Th3mBones" target="_blank" rel="noopener" class="player-social-link">Faceit</a>
            <a href="https://steamcommunity.com/id/suzum3b4chi" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    'dex': {
        nickname: 'dex',
        role: 'Rifler',
        name: 'Stepan Lukinsky',
        photo: 'dex.png',
        stats: `
            <div class="player-stat">
                <div class="player-stat-value">1288</div>
                <div class="player-stat-label">ELO</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.00</div>
                <div class="player-stat-label">Rating</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">0.93</div>
                <div class="player-stat-label">K/D</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">56%</div>
                <div class="player-stat-label">HS</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">75.8</div>
                <div class="player-stat-label">ADR</div>
            </div>
        `,
        bio: `<p>Has been a part of Wielders ES since January 2026.</p>`,
        socials: `
            <a href="https://www.faceit.com/ru/players/STEPANSPADGE" target="_blank" rel="noopener" class="player-social-link">Faceit</a>
            <a href="https://steamcommunity.com/profiles/76561199470813315" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    'solar': {
        nickname: 'Solar',
        role: 'IGL',
        name: 'Ivan Komarov',
        photo: 'solar.png',
        stats: `
            <div class="player-stat">
                <div class="player-stat-value">970</div>
                <div class="player-stat-label">ELO</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.03</div>
                <div class="player-stat-label">Rating</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">0.86</div>
                <div class="player-stat-label">K/D</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">44%</div>
                <div class="player-stat-label">HS</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">70.5</div>
                <div class="player-stat-label">ADR</div>
            </div>
        `,
        bio: `<p>Has been a part of Wielders ES since February 2025.</p>`,
        socials: `
            <a href="https://www.faceit.com/ru/players/so111ar" target="_blank" rel="noopener" class="player-social-link">Faceit</a>
            <a href="https://steamcommunity.com/profiles/76561199811724054" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    'modern': {
        nickname: 'mODeRN',
        role: 'Rifler',
        name: 'Mikhail Galchenkov',
        photo: 'modern.png',
        stats: `
            <div class="player-stat">
                <div class="player-stat-value">1442</div>
                <div class="player-stat-label">ELO</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.06</div>
                <div class="player-stat-label">Rating</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">0.92</div>
                <div class="player-stat-label">K/D</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">45%</div>
                <div class="player-stat-label">HS</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">73.1</div>
                <div class="player-stat-label">ADR</div>
            </div>
        `,
        bio: `<p>Has been a part of Wielders ES since February 2025.</p>`,
        socials: `
            <a href="https://www.faceit.com/ru/players/mOdErn" target="_blank" rel="noopener" class="player-social-link">Faceit</a>
            <a href="https://steamcommunity.com/id/galchenkov/" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    'fara': {
        nickname: 'Fara',
        role: 'Sniper',
        name: 'Daniil Sidorov',
        photo: 'fara.png',
        stats: `
            <div class="player-stat">
                <div class="player-stat-value">1266</div>
                <div class="player-stat-label">ELO</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.18</div>
                <div class="player-stat-label">Rating</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">1.12</div>
                <div class="player-stat-label">K/D</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">44%</div>
                <div class="player-stat-label">HS</div>
            </div>
            <div class="player-stat">
                <div class="player-stat-value">80.3</div>
                <div class="player-stat-label">ADR</div>
            </div>
        `,
        bio: `<p>Was a part of Wielders ES from February to June 2025. Has been a part of Wielders ES since January 2026.</p>`,
        socials: `
            <a href="https://www.faceit.com/ru/players/Farasighted" target="_blank" rel="noopener" class="player-social-link">Faceit</a>
            <a href="https://steamcommunity.com/profiles/76561199095091335" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },

    'totle09-dota': {
        nickname: 'totle09',
        role: 'Soft Support',
        name: 'Ivan Lukinsky',
        photo: 'totle09.png',
        stats: '',
        bio: `<p>Has been a part of Wielders ES since September 2026.</p>`,
        socials: `
            <a href="https://steamcommunity.com/id/damncock" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },

    'suzume-dota': {
        nickname: 'Suzume',
        role: 'Carry',
        name: 'Maxim Kolbaya',
        photo: 'suzume.png',
        stats: '',
        bio: `<p>Has been a part of Wielders ES since June 2025.</p>`,
        socials: `
            <a href="https://steamcommunity.com/id/suzum3b4chi" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    
    'dex-dota': {
        nickname: 'dex',
        role: 'Mid',
        name: 'Stepan Lukinsky',
        photo: 'dex.png',
        stats: '',
        bio: `<p>Has been a part of Wielders ES since January 2026.</p>`,
        socials: `
            <a href="https://steamcommunity.com/profiles/76561199470813315" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },
    
    'solar-dota': {
        nickname: 'Solar',
        role: 'Hard Support',
        name: 'Ivan Komarov',
        photo: 'solar.png',
        stats: '',
        bio: `<p>Has been a part of Wielders ES since February 2025.</p>`,
        socials: `
            <a href="https://steamcommunity.com/profiles/76561199811724054" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    },

    'squiller-dota': {
        nickname: 'Squiller',
        role: 'Offlane',
        name: 'Alexander Filinov',
        photo: 'Squiller.png',
        stats: '',
        bio: `<p>Was a part of Wielders ES from February to June 2025. Has been a part of Wielders ES since September 2026.</p>`,
        socials: `
            <a href="https://steamcommunity.com/profiles/76561199332675349" target="_blank" rel="noopener" class="player-social-link">Steam</a>
        `
    }
};

// ===== МОДАЛЬНОЕ ОКНО НОВОСТИ =====
function openNews(event, id) {
    event.preventDefault();
    const data = newsData[id];
    if (!data) return;
    const modal = document.getElementById('newsModal');

    document.getElementById('modalTag').textContent = data.tag;
    document.getElementById('modalTag').className = 'modal-tag ' + data.tagClass;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDate').textContent = data.date;
    document.getElementById('modalBody').innerHTML = data.body;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNews(event) {
    if (event && event.target !== document.getElementById('newsModal')) return;
    const modal = document.getElementById('newsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== МОДАЛЬНОЕ ОКНО ПРОФИЛЯ ИГРОКА =====
function openPlayer(event, id) {
    event.preventDefault();
    const data = playersData[id];
    if (!data) return;
    const modal = document.getElementById('playerModal');

    document.getElementById('playerPhoto').src = data.photo;
    document.getElementById('playerNickname').textContent = data.nickname;
    document.getElementById('playerRole').textContent = data.role;
    document.getElementById('playerName').textContent = data.name;
    document.getElementById('playerStats').innerHTML = data.stats;
    document.getElementById('playerBio').innerHTML = data.bio;
    document.getElementById('playerSocials').innerHTML = data.socials;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayer(event) {
    if (event && event.target !== document.getElementById('playerModal')) return;
    const modal = document.getElementById('playerModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== СКЛАДНЫЕ СЕКЦИИ =====
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const arrowId = sectionId === 'roster-section' ? 'roster-arrow' : 'news-arrow';
    const arrow = document.getElementById(arrowId);

    content.classList.toggle('collapsed');
    arrow.classList.toggle('collapsed');
}

// ===== ЗАКРЫТИЕ МОДАЛОК ПО ESC =====
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const newsModal = document.getElementById('newsModal');
        const playerModal = document.getElementById('playerModal');
        if (newsModal.classList.contains('active')) closeNews();
        if (playerModal.classList.contains('active')) closePlayer();
    }
});

// ===== ПЕРЕКЛЮЧАТЕЛЬ ИГР =====
function toggleGameSwitcher(event) {
    event.stopPropagation();
    const switcher = document.querySelector('.game-switcher');
    switcher.classList.toggle('open');
}

function switchGame(game, event) {
    event.stopPropagation();
    const body = document.body;
    const switcher = document.querySelector('.game-switcher');

    // 1. Меняем тему
    body.classList.remove('theme-cs2', 'theme-dota');
    body.classList.add('theme-' + game);

    // 2. Меняем активную кнопку
    document.querySelectorAll('.game-option').forEach(opt => opt.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 3. Меняем иконку и название в кнопке
    const iconEl = document.getElementById('currentGameIcon');
    const nameEl = document.getElementById('currentGameName');
    if (game === 'cs2') {
        iconEl.textContent = '🎯';
        nameEl.textContent = 'CS2';
    } else {
        iconEl.textContent = '⚔️';
        nameEl.textContent = 'Dota 2';
    }

    // 4. Показываем нужный ростер
    document.getElementById('roster-cs2').classList.toggle('hidden', game !== 'cs2');
    document.getElementById('roster-dota').classList.toggle('hidden', game !== 'dota');

    // 5. Закрываем меню
    switcher.classList.remove('open');
}

// Закрытие переключателя при клике вне его
document.addEventListener('click', function (event) {
    const switcher = document.querySelector('.game-switcher');
    if (switcher && !switcher.contains(event.target)) {
        switcher.classList.remove('open');
    }
});
