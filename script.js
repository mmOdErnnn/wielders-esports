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
            <p>Полный текст анонса об участии в CyberX 5x5 LAN.</p>
        `
    },
    'fara-announce': {
        tag: 'ROSTER CHANGES',
        tagClass: 'tag-roster',
        title: 'Fara is back in action, replacing SuSH1 as a sniper',
        date: '19 January 2026',
        body: `
            <p>Not much time has passed since the addition of dex, but Wielders are once again making changes to the roster.</p>
            <p>Полный текст новости про возвращение Fara.</p>
        `
    },
    'dex-announce': {
        tag: 'ROSTER CHANGES',
        tagClass: 'tag-roster',
        title: 'Sp3ctra is taking a backseat to give dex a chance to shine',
        date: '3 January 2026',
        body: `
            <p>Wielders officially announce changes in the main roster after a short testing of various stand-ins.</p>
            <p>Полный текст новости про добавление dex в состав.</p>
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
        stats: '',
        bio: `
            <p>Биография Suzume.</p>
        `,
        socials: `
            <a href="#" class="player-social-link">Faceit</a>
            <a href="#" class="player-social-link">Steam</a>
        `
    },
    'dex': {
        nickname: 'dex',
        role: 'Rifler',
        name: 'Stepan Lukinsky',
        photo: 'dex.png',
        stats: '',
        bio: `
            <p>Биография dex.</p>
        `,
        socials: `
            <a href="#" class="player-social-link">Faceit</a>
            <a href="#" class="player-social-link">Steam</a>
        `
    },
    'solar': {
        nickname: 'Solar',
        role: 'IGL',
        name: 'Ivan Komarov',
        photo: 'solar.png',
        stats: '',
        bio: `
            <p>Биография Solar.</p>
        `,
        socials: `
            <a href="#" class="player-social-link">Faceit</a>
            <a href="#" class="player-social-link">Steam</a>
        `
    },
    'modern': {
        nickname: 'mODeRN',
        role: 'Rifler',
        name: 'Mikhail Galchenkov',
        photo: 'modern.png',
        stats: '',
        bio: `
            <p>Биография mODeRN.</p>
        `,
        socials: `
            <a href="#" class="player-social-link">Faceit</a>
            <a href="#" class="player-social-link">Steam</a>
        `
    },
    'fara': {
        nickname: 'Fara',
        role: 'Sniper',
        name: 'Daniil Sidorov',
        photo: 'fara.png',
        stats: '',
        bio: `
            <p>Биография Fara.</p>
        `,
        socials: `
            <a href="#" class="player-social-link">Faceit</a>
            <a href="#" class="player-social-link">Steam</a>
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
