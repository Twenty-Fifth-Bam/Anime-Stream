# AnimeStream

A clean, lightweight website for anime video content that allows users to browse, watch previews, and download anime videos.

## Features

- **Clean, Modern UI**: Responsive design that works on mobile and desktop devices
- **Video Gallery**: Browse videos by categories like "Latest Releases", "Popular Shows", and "Movies"
- **Search Functionality**: Find anime titles easily with the search bar
- **Anime Categories**: Browse anime by genre
- **Full-screen Preview**: Click on thumbnails to view in full-screen mode
- **One-Click Download**: Simple download button for each video

## Live Demo

You can view a live demo of this project by simply opening the `index.html` file in a web browser.

## Project Structure

```
.
├── index.html              # Homepage with video gallery
├── categories.html         # Categories page with genre listings
├── search.html             # Advanced search page
├── about.html              # About page with information and FAQ
├── README.md               # Project documentation
├── css/
│   └── style.css           # Main stylesheet
└── js/
    └── main.js             # JavaScript functionality
```

## How to Use

1. Download or clone this repository
2. Open `index.html` in your web browser
3. Browse videos by scrolling or using the navigation
4. Click on a video thumbnail to view it in full-screen mode
5. Use the download button to save the video

## Customization

### Adding New Videos

To add new videos, edit the `videoData` array in `js/main.js`:

```javascript
const videoData = [
    {
        id: 7, // Use a unique ID
        title: 'Your Anime Title',
        episode: 'Season 1 - Episode 1',
        thumbnail: 'https://path/to/thumbnail.jpg',
        downloadLink: 'https://your-download-link.com',
        genre: 'action' // Choose from: action, romance, comedy, horror, fantasy, scifi
    },
    // Add more videos as needed
];
```

### Modifying the Design

The website uses a clean, modern design with a color scheme based on dark backgrounds and red accent colors. To modify the design:

1. Edit the CSS in `css/style.css`
2. Main colors used:
   - Background: `#f4f4f4`
   - Dark background: `#1a1a1a`
   - Primary accent: `#ff6b6b`
   - Accent hover: `#ff5252`

### Adding New Pages

1. Copy the structure of an existing page (like `index.html`)
2. Update the navigation links to mark the current page as active
3. Modify the content as needed
4. Update the navigation links in all pages to include your new page

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lightweight design (total site size under 100MB)
- No heavy libraries or frameworks
- Optimized image loading
- Responsive design for all screen sizes

## Credits

- Font Awesome for icons
- Wallpaper Cave for sample images

## License

This project is free to use for personal and commercial purposes.

---

Created by AnimeStream | 2024 