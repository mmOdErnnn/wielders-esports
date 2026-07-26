// Данные новостей
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
        title: 'Wielders Esports will participate on CyberX 5x5 LAN',
        date: '4 July 2026',
        body: `
            <p>In the near future, our team will take part in CyberX 5x5 LAN tournament, which will commence on July 26 at 11:00 Moscow time.</p>
            <p>This will be the first serious tournament after the January series of changes.</p>
            <p>The roster has already gathered to prepare for the tournament in order to approach it in optimal shape.</p>
            <p>Cheer for the Wielders</p>
        `
    },
    'fara-announce': {
        tag: 'Roster Changes',
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
        tag: 'Roster Changes',
        tagClass: 'tag-roster',
        title: 'Sp3ctra is taking a backseat to give dex a chance to shine.',
        date: '3 January 2026',
        body: `
            <p>After analyzing the results of the last matches, it was decided to make changes to the team.</p>
            <p>Mikhail "Sp3ctra" Sokolov was moved to the bench and Stepan "dex" Lukinsky took his place. Stepan has already played in several matches as a stand-in for the updated roster, and the management is very satisfied with his performance. We believe that he will easily integrate into the team and be able to handle all assigned tasks.</p>
            <p>Mikhail has made a worthy and extremely important contribution to the development of the organization, but in recent months he has not been able to properly play his roles in the team. We thank him for his time with us and believe that he will have a bright future ahead of him.</p>
            <p>After Sp3ctra's departure, Gleb "SuSH1" Stepanenko will return to his role as the main sniper.</p>
            <p>The team will meet again soon to prepare for the upcoming games.</p>
        `
    },
};

// Открыть модальное окно
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

// Закрыть модальное окно
function closeNews(event) {
    if (event && event.target !== document.getElementById('newsModal')) return;
    const modal = document.getElementById('newsModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Сворачивание / разворачивание секций
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const arrowId = sectionId === 'roster-section' ? 'roster-arrow' : 'news-arrow';
    const arrow = document.getElementById(arrowId);

    content.classList.toggle('collapsed');
    arrow.classList.toggle('collapsed');
}
