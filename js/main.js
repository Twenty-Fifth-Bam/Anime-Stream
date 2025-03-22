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
        nextVideo: 2, // Added next video link to the second anime
        pinned: false
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
        nextVideo: 1, // Added next video link back to the first anime
        pinned: false
    },
    {
        id: 3,
        title: 'Solo Leveling Season 2 Hindi Dubbed Episode Download HD',
        cover: 'images/solo-l.jpg',
        genre: 'Action, Adventure, Fantasy',
        year: '2025',
        status: 'Total 13 Episodes',
        hasRemainingEpisodes: true,
        synopsis: "They say whatever doesn't kill you makes you stronger, but that's not the case for the world's weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that's leveling him up in every way. Now, he's inspired to discover the secrets behind his powers and the dungeon that spawned them.",
        episodes: [
            {
                number: '1',
                title: 'You Are not E-Rank, Are You?',
                downloadLink: 'https://cuty.io/1CbnW'
            },
            {
                number: '2',
                title: 'I Suppose You Are not Aware',
                downloadLink: 'https://cuty.io/87tyB'
            },
            {
                number: '3',
                title: 'Still a Long Way to Go',
                downloadLink: 'https://cuty.io/2M2RtWVlLW56'
            },
            {
                number: '4',
                title: 'I Need To Stop Faking',
                downloadLink: 'https://cuty.io/CgnlBYgwK1S'
            },
            {
                number: '5',
                title: 'This Is What We are Trained to Do',
                downloadLink: 'https://cuty.io/kutkD'
            },
            {
                number: '6',
                title: 'Do not Look Down on My Guys',
                downloadLink: 'https://cuty.io/F1cEYlUVA'
            },
            {
                number: '7',
                title: 'The 10th S-rank Hunter',
                downloadLink: 'https://cuty.io/HECtM51Wp'
            },
            {
                number: '8',
                title: 'Looking Up was Tiring Me Out',
                downloadLink: 'https://cuty.io/eSakXVXn8IG'
            },
            /*
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
            */
        ],
        uploaderName: 'AnimeAdmin',
        uploadDate: 'March 20, 2024',
        featured: true,
        popular: true,
        topPick: true,
        nextVideo: 1, // Added next video link back to the first anime
        pinned: true
    }
    // No more dummy anime data - only include anime that you've actually uploaded
];

// Function to get a unique device identifier
function getDeviceId() {
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
        deviceId = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
}

// Function to create anime cards
function createAnimeCard(anime) {
    return `
        <div class="anime-card" onclick="navigateToAnimeDetails(event, ${anime.id})" style="cursor: pointer;">
            <div class="anime-poster">
                <img src="${anime.cover}" alt="${anime.title}">
            </div>
            <div class="anime-info">
                <div>
                    <h3>${anime.pinned ? '<i class="fas fa-thumbtack" style="color: #000000;"></i> ' : ''}${anime.title}</h3>
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
                </div>
            </div>
        </div>
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
    } else {
        // Add the note after the last episode
        episodeHTML += `<p class="note">Note: The rest of the episodes will be added soon.</p>`;
    }
    
    return episodeHTML;
}

// Function to populate anime sections
function populateAnimeSections() {
    const latestAnime = document.getElementById('latest-anime');
    const popularAnime = document.getElementById('popular-anime');
    const topPicks = document.getElementById('top-picks');
    
    // Sort anime with pinned items first
    const sortedAnimeData = [...animeData].sort((a, b) => {
        // Assuming 'pinned' is a boolean property from your backend
        if (a.pinned && !b.pinned) return -1;
        if (!a.pinned && b.pinned) return 1;
        return 0;
    });
    
    // Filter for latest anime
    if (latestAnime && sortedAnimeData.length > 0) {
        latestAnime.innerHTML = sortedAnimeData.map(anime => createAnimeCard(anime)).join('');
    }
    
    // Filter popular anime and maintain pin order
    const popular = sortedAnimeData.filter(anime => anime.popular);
    if (popularAnime && popular.length > 0) {
        popularAnime.innerHTML = popular.map(anime => createAnimeCard(anime)).join('');
    }
    
    // Filter top picks and maintain pin order
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
    
    // Create the complete page content
    const pageContent = `
        <div class="anime-details-section">
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
        </div>
        
        <div class="episodes-section">
            <h2>Episodes</h2>
            <div class="episode-list-container">
                <div class="episode-list">
                    ${createEpisodeList(anime.episodes)}
                </div>
            </div>
        </div>

        ${anime.id === 3 ? `
        <div class="episodes-note">
            <p><i class="fas fa-info-circle"></i> Note: The rest of the episodes will be added soon.</p>
        </div>` : ''}

        <div class="comment-section">
            <h2>Comments</h2>
            <div class="comment-form">
                <textarea id="comment-text" placeholder="Write your comment here..."></textarea>
                <div class="form-row">
                    <input type="text" id="commenter-name" placeholder="Your Name">
                    <button id="submit-comment">Submit Comment</button>
                </div>
            </div>
            <div class="comments-container" id="comments-list">
                <p class="no-comments">Be the first to comment!</p>
            </div>
        </div>
    `;

    // Update the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.innerHTML = pageContent;
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
    window.location.href = `anime.html?id=${animeId}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Reset any leftover opacity from previous navigation
    document.body.style.opacity = '1';
    document.body.style.transition = 'none';
    
    populateAnimeSections();
    populateAnimeDetails();
    setupSearch();
}); 