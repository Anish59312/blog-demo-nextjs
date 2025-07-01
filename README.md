# Next.js Blogger

A modern, markdown-based blogging platform built with Next.js 15, TypeScript, and Tailwind CSS. This project allows you to create and manage blog posts using markdown files with frontmatter metadata.

## 🚀 Features

- **Markdown-based Posts**: Write blog posts in markdown format with YAML frontmatter
- **Dynamic Routing**: Automatic slug-based routing for individual blog posts
- **Modern UI**: Clean and responsive design with Tailwind CSS
- **TypeScript Support**: Full TypeScript integration for better development experience
- **File-based Content Management**: No database required - posts are stored as markdown files
- **Gray Matter Integration**: Parse frontmatter metadata from markdown files
- **Fast Development**: Turbopack support for blazing-fast hot reloads

## 📁 Project Structure

```
blogger-nextjs/
├── my-app/                    # Next.js application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx      # Home page listing all posts
│   │   │   ├── layout.tsx    # Root layout
│   │   │   └── posts/
│   │   │       └── [slug]/
│   │   │           └── page.tsx  # Individual post pages
│   │   ├── components/        # Reusable React components
│   │   ├── lib/
│   │   │   ├── fetchPostsMetaData.ts  # Fetch post metadata
│   │   │   └── sortPosts.ts          # Sort posts functionality
│   │   ├── models/
│   │   │   └── blogModel.js   # Blog data models
│   │   └── dbConfig/
│   │       └── dbConfig.ts    # Database configuration
│   ├── public/               # Static assets
│   ├── package.json
│   └── ...config files
└── posts/                    # Blog posts directory
    └── *.md                 # Markdown blog posts
```

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd blogger-nextjs
   ```

2. **Navigate to the app directory**:

   ```bash
   cd my-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:3000`

## 📝 Adding Blog Posts

### Creating a New Post

1. **Navigate to the `posts` directory** (at the root level, not inside `my-app`):

   ```bash
   cd ../posts
   ```

2. **Create a new markdown file** with a descriptive filename:

   ```bash
   # Example filename: understanding-react-hooks.md
   touch your-post-title.md
   ```

3. **Add frontmatter and content** to your markdown file:

   ````markdown
   ---
   title: "Your Amazing Blog Post Title"
   date: "2025-07-02"
   slug: "your-amazing-blog-post"
   ---

   # Your Blog Post Title

   This is the beginning of your blog post content written in markdown.

   ## Subheading

   You can use all standard markdown features:

   - **Bold text**
   - _Italic text_
   - [Links](https://example.com)
   - `Code snippets`

   ```javascript
   // Code blocks
   const example = "Hello World";
   console.log(example);
   ```
   ````

   ## Another Section

   Add more content here...

   ```

   ```

### Frontmatter Fields

Each blog post must include the following frontmatter fields at the top of the file:

- **`title`**: The display title of your blog post
- **`date`**: Publication date in YYYY-MM-DD format
- **`slug`**: URL-friendly identifier (used in the post URL)

### Example Post Structure

Here's a complete example of a blog post file:

````markdown
---
title: "Getting Started with Next.js 15"
date: "2025-07-02"
slug: "getting-started-nextjs-15"
---

# Getting Started with Next.js 15

Next.js 15 brings exciting new features and improvements to the React framework.

## What's New

- Improved performance with Turbopack
- Enhanced TypeScript support
- Better developer experience

## Installation

To get started with Next.js 15:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```
````

Happy coding! 🚀

````

### Sample Post File

Here's the actual sample post included in this project (`posts/my-first-post.md`):

```markdown
---
title: "My First Blog Post"
date: "2025-07-01"
slug: "my-first-post"
---

# Hello World

This is my first blog post written in markdown!
````

This sample demonstrates:

- **Proper frontmatter structure** with required fields
- **Clean markdown content** below the frontmatter
- **URL-friendly slug** that matches the filename

### Post Naming Convention

- Use descriptive filenames: `understanding-react-hooks.md`
- Keep filenames URL-friendly (lowercase, hyphens instead of spaces)
- The slug in frontmatter should match or be similar to the filename

## 🔧 Available Scripts

In the `my-app` directory, you can run:

- **`npm run dev`**: Start the development server with Turbopack
- **`npm run build`**: Build the application for production
- **`npm run start`**: Start the production server
- **`npm run lint`**: Run ESLint to check for code issues

## 🛠️ Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Gray Matter**: Parse frontmatter from markdown files
- **Mongoose**: MongoDB object modeling (for future database features)
- **ESLint**: Code linting and formatting

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with default settings

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- **Netlify**
- **Railway**
- **Heroku**
- **AWS**
- **Azure**

## 📖 Usage

1. **Home Page**: Displays a list of all blog posts with titles and dates
2. **Individual Posts**: Click on any post title to read the full content
3. **Adding Posts**: Simply add new markdown files to the `posts` directory
4. **Auto-Discovery**: New posts are automatically discovered and displayed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

### Common Issues

1. **Posts not showing up**: Make sure your markdown files are in the `posts` directory (not `my-app/posts`)
2. **Frontmatter errors**: Ensure proper YAML syntax with `---` delimiters
3. **Build errors**: Check that all required frontmatter fields are present

### Getting Help

If you encounter any issues:

1. Check the console for error messages
2. Verify your markdown file structure
3. Ensure all dependencies are installed
4. Try restarting the development server

---

Happy blogging! 📝✨
