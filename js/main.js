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
            }
        ],
        uploaderName: 'AnimeAdmin',
        uploadDate: 'March 15, 2024',
        featured: true,
        popular: true,
        topPick: true,
        nextVideo: 2 // Added next video link to the second anime
    },
    {
        id: 2,
        title: 'Dragon Ball Super Universal survival saga',
        cover: 'images/dbs-top.jpg',
        genre: 'Action, Adventure, Fantasy',
        year: '2022',
        status: 'Completed',
        synopsis: 'Goku and his friends are back and finally have time to live normal lives. But when a new, powerful being shows up, their peaceful home is threatened again. Can they defeat Beerus, the God of Destruction? And what of this Super Saiyan God he seeks?',
        episodes: [
            {
                number: '76 - 131',
                title: 'Dragon Ball Super Hindi ZIP Batch File',
                downloadLink: 'https://cuty.io/h2pCxS6aKg'
            }
        ],
        uploaderName: 'AnimeAdmin',
        uploadDate: 'March 20, 2024',
        featured: true,
        popular: true,
        topPick: true,
        nextVideo: 1 // Added next video link back to the first anime
    },
    {
        id: 3,
        title: 'Solo Leveling Season 2 Hindi Dubbed Episode Download HD',
        cover: 'images/solo-l.jpg',
        genre: 'Action, Adventure, Fantasy',
        year: '2025',
        status: 'Total 13 Episodes',
        synopsis: "They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that's leveling him up in every way. Now, he's inspired to discover the secrets behind his powers and the dungeon that spawned them.",
        episodes: [
            {
                number: '1',
                title: 'You Are not E-Rank, Are You?',
                downloadLink: 'upload link'
            },
            {
                number: '2',
                title: 'I Suppose You Are not Aware',
                downloadLink: 'upload link'
            },
            {
                number: '3',
                title: 'Still a Long Way to Go',
                downloadLink: 'upload link'
            },
            {
                number: '4',
                title: 'I Need To Stop Faking',
                downloadLink: 'upload link'
            },
            {
                number: '5',
                title: 'This Is What We are Trained to Do',
                downloadLink: 'upload link'
            },
            {
                number: '6',
                title: 'Do not Look Down on My Guys',
                downloadLink: 'upload link'
            },
            {
                number: '7',
                title: 'The 10th S-rank Hunter',
                downloadLink: 'upload link'
            },
            {
                number: '8',
                title: 'Looking Up was Tiring Me Out',
                downloadLink: 'upload link'
            },
            {
                number: '9',
                title: 'It Was All Worth It',
                downloadLink: 'upload link'
            },
            {
                number: '10',
                title: 'We Need a Hero',
                downloadLink: 'upload link'
            },
            {
                number: '11',
                title: 'Its Going to Get Even More Intense',
                downloadLink: 'upload link'
            }
        ],
        uploaderName: 'AnimeAdmin',
        uploadDate: 'March 20, 2024',
        featured: true,
        popular: true,
        topPick: true,
        nextVideo: 1 // Added next video link back to the first anime
    }
    // No more dummy anime data - only include anime that you've actually uploaded
];

// Function to create anime cards
function createAnimeCard(anime) {
    const isPinned = isPinnedAnime(anime.id);
    return `
        <div class="anime-card" onclick="navigateToAnimeDetails(event, ${anime.id})" style="cursor: pointer;">
            <div class="anime-poster">
                <img src="${anime.cover}" alt="${anime.title}">
            </div>
            <div class="anime-info">
                <div>
                    <h3>${anime.title}</h3>
                    <div class="release-date">
                        <i class="fas fa-calendar"></i> ${anime.year}
                        <span class="status">${anime.status}</span>
                    </div>
                    <p class="anime-excerpt">${anime.synopsis.substring(0, 200)}${anime.synopsis.length > 200 ? '...' : ''}</p>
                </div>
                <div class="card-footer">
                    <div class="meta-info">
                        <span class="uploader"><i class="fas fa-user"></i> ${anime.uploaderName || 'Admin'}</span>
                        <span class="genre"><i class="fas fa-tag"></i> ${anime.genre}</span>
                        <span class="episodes"><i class="fas fa-play"></i> ${anime.episodes.length} Episode${anime.episodes.length !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="actions">
                        <button class="pin-btn ${isPinned ? 'pinned' : ''}" onclick="togglePin(event, ${anime.id})">
                            <i class="fas fa-thumbtack"></i> ${isPinned ? 'Pinned' : 'Pin'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to check if anime is pinned
function isPinnedAnime(animeId) {
    const pinnedAnimes = JSON.parse(localStorage.getItem('pinnedAnimes')) || [];
    return pinnedAnimes.includes(animeId);
}

// Function to toggle pin status
function togglePin(event, animeId) {
    event.preventDefault(); // Prevent navigation to anime page
    const pinnedAnimes = JSON.parse(localStorage.getItem('pinnedAnimes')) || [];
    const index = pinnedAnimes.indexOf(animeId);
    
    if (index === -1) {
        // Pin the anime
        pinnedAnimes.push(animeId);
    } else {
        // Unpin the anime
        pinnedAnimes.splice(index, 1);
    }
    
    localStorage.setItem('pinnedAnimes', JSON.stringify(pinnedAnimes));
    
    // Update the UI
    populateAnimeSections(); // Refresh all sections to update order
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
    const latestAnime = document.getElementById('latest-anime');
    const popularAnime = document.getElementById('popular-anime');
    const topPicks = document.getElementById('top-picks');
    
    // Get pinned anime IDs
    const pinnedAnimeIds = JSON.parse(localStorage.getItem('pinnedAnimes')) || [];
    
    // Sort anime data with pinned items first
    const sortedAnimeData = [...animeData].sort((a, b) => {
        const aIsPinned = pinnedAnimeIds.includes(a.id);
        const bIsPinned = pinnedAnimeIds.includes(b.id);
        if (aIsPinned && !bIsPinned) return -1;
        if (!aIsPinned && bIsPinned) return 1;
        return 0;
    });
    
    // Filter for latest anime
    if (latestAnime && sortedAnimeData.length > 0) {
        latestAnime.innerHTML = sortedAnimeData.map(anime => createAnimeCard(anime)).join('');
    }
    
    // Filter popular anime
    const popular = sortedAnimeData.filter(anime => anime.popular);
    if (popularAnime && popular.length > 0) {
        popularAnime.innerHTML = popular.map(anime => createAnimeCard(anime)).join('');
    }
    
    // Filter top picks
    const picks = sortedAnimeData.filter(anime => anime.topPick);
    if (topPicks && picks.length > 0) {
        topPicks.innerHTML = picks.map(anime => createAnimeCard(anime)).join('');
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

// Function to handle next video navigation
function navigateToNextVideo(currentAnimeId) {
    const currentAnime = animeData.find(a => a.id === currentAnimeId);
    if (currentAnime && currentAnime.nextVideo) {
        window.location.href = `anime.html?id=${currentAnime.nextVideo}`;
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
    const nextVideoBtn = document.getElementById('nextVideoBtn');
    
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
    
    // Handle next video button
    if (nextVideoBtn) {
        if (anime.nextVideo) {
            nextVideoBtn.style.display = 'block';
            nextVideoBtn.onclick = () => navigateToNextVideo(anime.id);
        } else {
            nextVideoBtn.style.display = 'none';
        }
    }
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to populate anime details on the anime page
function populateAnimeDetails() {
    // Get the anime ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = parseInt(urlParams.get('id'));
    
    if (!animeId) return;
    
    const anime = animeData.find(a => a.id === animeId);
    if (!anime) {
        document.querySelector('main').innerHTML = `
            <div class="section">
                <div class="error-container">
                    <h2>Anime Not Found</h2>
                    <p>The anime you're looking for could not be found.</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Populate anime details
    const animeDetailsSection = document.querySelector('.anime-details-section');
    if (animeDetailsSection) {
        const animeHeaderHTML = `
            <div class="anime-details-header">
                <div class="anime-cover">
                    <img src="${anime.cover}" alt="${anime.title}">
                </div>
                <div class="anime-details">
                    <h1>${anime.title}</h1>
                    <div class="anime-meta">
                        <span>${anime.genre}</span>
                        <span>${anime.year}</span>
                        <span>${anime.status}</span>
                    </div>
                    <p>${anime.synopsis}</p>
                    ${anime.nextVideo ? 
                        `<button id="nextVideoBtn" class="btn" onclick="navigateToNextVideo(${anime.id})">Next Anime <i class="fas fa-arrow-right"></i></button>` : ''}
                </div>
            </div>
        `;
        
        animeDetailsSection.innerHTML = animeHeaderHTML;
    }
    
    // Populate episodes
    const episodesSection = document.querySelector('.episodes-section');
    if (episodesSection) {
        episodesSection.innerHTML = `
            <h2>Episodes</h2>
            <div class="episode-list-container">
                <div class="episode-list">
                    ${createEpisodeList(anime.episodes)}
                </div>
            </div>
        `;
    }
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

// Add new function for navigation with animation
function navigateToAnimeDetails(event, animeId) {
    // Don't navigate if clicking the pin button
    if (event.target.closest('.pin-btn')) {
        return;
    }

    // Navigate immediately with minimal fade
    document.body.style.opacity = '0.8';
    window.location.href = `anime.html?id=${animeId}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateAnimeSections();
    populateAnimeDetails(); // Add this to handle the anime details page
    setupSearch();
}); 