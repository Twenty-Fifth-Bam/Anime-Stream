// Anime data - In a real application, this would come from a backend API
const animeData = [
    {
        id: 1,
        title: 'Attack on Titan Season 3',
        cover: 'images/AOT-S03.png',
        genre: 'Action, Adventure, Fantasy',
        year: '2025',
        status: 'Completed',
        synopsis: 'Many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!',
        episodes: [
            {
                number: '1 - 22',
                title: 'Attack on Titan Season 3 Hindi ZIP Batch File',
                downloadLink: 'https://cuty.io/umD01TAWa'
            },
        ],
        uploaderName: 'AnimeAdmin',
        uploadDate: 'March 15, 2024',
        featured: true,
        popular: true,
        topPick: true
    }
    // No more dummy anime data - only include anime that you've actually uploaded
];

// Function to create anime cards
function createAnimeCard(anime) {
    return `
        <a href="anime.html?id=${anime.id}" class="anime-card">
            <div class="anime-poster">
                <img src="${anime.cover}" alt="${anime.title}">
            </div>
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <div class="release-date">${anime.year}</div>
                <p class="anime-excerpt">${anime.synopsis.substring(0, 120)}${anime.synopsis.length > 120 ? '...' : ''}</p>
                <div class="uploader"><i class="fas fa-user"></i> ${anime.uploaderName || 'Admin'}</div>
            </div>
        </a>
    `;
}

// Function to create episode list
function createEpisodeList(episodes) {
    let episodeHTML = '';
    
    episodes.forEach(episode => {
        episodeHTML += `
            <div class="episode-item">
                <div class="episode-info">
                    <span class="episode-number">Episode ${episode.number}</span>
                    <span class="episode-title">${episode.title}</span>
                </div>
                <div class="episode-downloads">
                    <a href="${episode.downloadLink}" class="download-btn" target="_blank">Download <i class="fas fa-download"></i></a>
                </div>
            </div>
        `;
    });
    
    if (episodes.length === 0) {
        episodeHTML = `<p class="no-episodes">No episodes available yet. Check back soon!</p>`;
    }
    
    return episodeHTML;
}

// Function to populate anime sections
function populateAnimeSections() {
    const latestAnimeSection = document.querySelector('.section:nth-child(2)');
    const popularAnimeSection = document.querySelector('.section:nth-child(3)');
    const topPicksSection = document.querySelector('.section:nth-child(4)');
    
    const latestAnime = document.getElementById('latest-anime');
    const popularAnime = document.getElementById('popular-anime');
    const topPicks = document.getElementById('top-picks');
    
    // Filter for latest anime (in a real app, would sort by date)
    if (latestAnime && animeData.length > 0) {
        latestAnime.innerHTML = animeData.map(anime => createAnimeCard(anime)).join('');
    } else if (latestAnimeSection) {
        latestAnimeSection.style.display = 'none';
    }
    
    // Filter popular anime
    const popular = animeData.filter(anime => anime.popular);
    if (popularAnime && popular.length > 0) {
        popularAnime.innerHTML = popular.map(anime => createAnimeCard(anime)).join('');
    } else if (popularAnimeSection) {
        popularAnimeSection.style.display = 'none';
    }
    
    // Filter top picks
    const picks = animeData.filter(anime => anime.topPick);
    if (topPicks && picks.length > 0) {
        topPicks.innerHTML = picks.map(anime => createAnimeCard(anime)).join('');
    } else if (topPicksSection) {
        topPicksSection.style.display = 'none';
    }
    
    // Show a message if no anime data is available at all
    if (animeData.length === 0 && document.querySelector('main')) {
        document.querySelector('main').innerHTML = `
            <div class="section">
                <div class="error-container">
                    <h2>No Anime Available</h2>
                    <p>There are currently no anime available. Please check back later for updates.</p>
                </div>
            </div>
        `;
    }
}

// Function to open anime detail modal
function openAnimeDetail(animeId) {
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) return;
    
    const modal = document.getElementById('animeModal');
    const cover = document.getElementById('animeCover');
    const title = document.getElementById('animeTitle');
    const genre = document.getElementById('animeGenre');
    const year = document.getElementById('animeYear');
    const status = document.getElementById('animeStatus');
    const synopsis = document.getElementById('animeSynopsis');
    const episodeList = document.getElementById('episodeList');
    
    // Set content
    cover.src = anime.cover;
    cover.alt = anime.title;
    title.textContent = anime.title;
    genre.textContent = anime.genre;
    year.textContent = anime.year;
    status.textContent = anime.status;
    synopsis.textContent = anime.synopsis;
    
    // Create episode list
    episodeList.innerHTML = createEpisodeList(anime.episodes);
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Search functionality
function setupSearch() {
    const globalSearchInput = document.getElementById('global-search');
    const globalSearchBtn = document.getElementById('global-search-btn');
    const searchResultsSection = document.querySelector('.search-results-section');
    const searchResultsContainer = document.querySelector('.search-results-container');
    
    function performSearch() {
        const query = globalSearchInput.value.toLowerCase().trim();
        if (!query) return;
        
        // Redirect to search page with query parameter instead of displaying inline results
        window.location.href = `search.html?title=${encodeURIComponent(query)}`;
    }
    
    if (globalSearchBtn) {
        globalSearchBtn.addEventListener('click', performSearch);
    }
    
    if (globalSearchInput) {
        globalSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateAnimeSections();
    setupSearch();
    // Don't call setupModal since we're not using modals anymore
}); 