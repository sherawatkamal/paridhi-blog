# Paridhi's Blog - A Modern React Blog Website

A beautiful, modern, and responsive blogging website built with React for "Paridhi." This project showcases a clean, elegant design with excellent user experience across all devices.

## ✨ Features

### 🎨 Design & User Experience
- **Modern & Clean Design**: Beautiful gradient accents, smooth animations, and elegant typography
- **Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **Light/Dark Mode**: Toggle between light and dark themes with system preference detection
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Beautiful Typography**: Custom prose styles for blog content

### 📱 Pages & Functionality
- **Home Page**: Hero section, featured posts, latest posts, and newsletter signup
- **Blog Listing**: Search functionality, category filtering, tag filtering, and responsive grid layout
- **Individual Post Pages**: Full article content, reading time, comments, likes, and related posts
- **About Page**: Personal bio, story, values, and contact information
- **Contact Page**: Contact form, contact details, social media links, and FAQ

### 🔍 Blog Features
- **Advanced Search**: Search through titles, excerpts, and content
- **Category Filtering**: Filter posts by categories (Mindfulness, Relationships, Creativity, etc.)
- **Tag System**: Multiple tags per post with interactive filtering
- **Reading Time**: Estimated reading time for each post
- **Comments System**: Interactive comments with user input
- **Related Posts**: Suggestions based on category matching

### 🚀 Technical Features
- **React 18**: Latest React features and hooks
- **React Router**: Client-side routing with dynamic routes
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Mobile-first approach with breakpoint system
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.jsx      # Main layout with header, navigation, and footer
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management (light/dark mode)
├── data/               # Static data and content
│   └── blogData.js     # Sample blog posts, categories, and tags
├── pages/              # Page components
│   ├── Home.jsx        # Home page with hero and featured posts
│   ├── Blog.jsx        # Blog listing with search and filters
│   ├── Post.jsx        # Individual blog post page
│   ├── About.jsx       # About page with bio and story
│   └── Contact.jsx     # Contact page with form and info
├── App.jsx             # Main app component with routing
├── index.css           # Global styles and Tailwind imports
└── main.jsx           # App entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paridhi-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Customization

### Adding New Blog Posts

Edit `src/data/blogData.js` to add new posts:

```javascript
{
  id: 6,
  title: "Your New Post Title",
  excerpt: "Brief description of your post...",
  content: "<p>Your HTML content here...</p>",
  author: "Paridhi",
  date: "2024-01-20",
  readingTime: "5 min read",
  category: "Your Category",
  tags: ["tag1", "tag2"],
  featured: false,
  image: "https://your-image-url.com/image.jpg",
  comments: []
}
```

### Modifying Categories and Tags

Update the `categories` and `tags` arrays in `src/data/blogData.js`:

```javascript
export const categories = [
  "Your Category 1",
  "Your Category 2",
  // ... more categories
];

export const tags = [
  "your-tag-1",
  "your-tag-2",
  // ... more tags
];
```

### Changing Colors and Theme

Modify `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  purple: {
    // Your custom purple shades
  },
  pink: {
    // Your custom pink shades
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website automatically detects system preference and allows manual toggle. Dark mode styles are applied using CSS classes and Tailwind's dark mode utilities.

## 🔍 SEO Features

- Meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

## 📈 Performance Features

- Optimized images with proper sizing
- Efficient React rendering
- CSS-in-JS with Tailwind
- Minimal bundle size
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Unsplash** for the sample images

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact through the website's contact form
- Reach out via email

---

**Built with ❤️ by Paridhi**
