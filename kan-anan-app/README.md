# Kan-Anan App - Food Ordering Website

## Project Overview
A modern, responsive food ordering website built with React. This project demonstrates fundamental React concepts, component-based architecture, and vanilla CSS styling.

## Tech Stack
- **Frontend**: React 18+ with Vite
- **Styling**: Vanilla CSS
- **Icons**: React Icons
- **Animation**: Framer Motion
- **Routing**: React Router DOM

## Project Structure
```
kan-anan-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── bg.jpg
│   │   ├── item1.jpg
│   │   ├── item2.jpg
│   │   ├── item3.jpg
│   │   ├── item4.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── cart/
│   │   ├── common/
│   │   │   ├── AnimatedSection.jsx
│   │   │   ├── footer.jsx
│   │   │   └── header.jsx
│   │   ├── forms/
│   │   ├── home/
│   │   │   ├── AboutUs.jsx
│   │   │   ├── FeaturedItems.jsx
│   │   │   └── Hero.jsx
│   │   └── menu/
│   ├── data/
│   │   └── featuredDishes.js
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── footer.css
│   │   │   │   └── header.css
│   │   │   └── home/
│   │   │       ├── AboutUs.css
│   │   │       ├── FeaturedItems.css
│   │   │       └── Hero.css
│   │   └── pages/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
└── node_modules/...
```

## Key Components

### 1. Header
- Displays the brand name "Laarni's".
- Navigation links (Home, Menu, About, Contact).
- Shopping cart icon with item count.

### 2. Hero Section
- Full-width banner with a background image.
- Catchy title and subtitle.
- "View Full Menu" call-to-action button.

### 3. Featured Items
- Showcases "Chef's Specials" with a grid of featured dishes.
- Each dish card includes an image, name, description, and a "Learn More" button.
- "View Full Menu" button at the bottom.

### 4. About Us
- A section with a placeholder background image.
- Contains a title and a descriptive text about the company.

### 5. Footer
- Displays brand name and a short motto.
- Quick links for navigation.
- Contact information.
- Copyright notice.

## How to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd kan-anan-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Styling Approach
- Mobile-first responsive design.
- Vanilla CSS for all styling, organized by component and page.
- Consistent color scheme and typography.
- Smooth animations and transitions using Framer Motion.

## Next Steps / Potential Enhancements
- Implement full routing for navigation links.
- Develop the Cart functionality (add to cart, quantity adjustments, remove items).
- Create dedicated pages for Menu, About, and Contact.
- Implement forms for ordering and contact.
- Add more dynamic data and state management.
- Improve accessibility and add more comprehensive error handling.
- Optimize images and other assets for production.
