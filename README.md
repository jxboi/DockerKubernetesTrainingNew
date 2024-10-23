# Vue 3 + Tailwind CSS Project

This project is a Vue.js 3 application integrated with Tailwind CSS 3, built using Vite.

## Setup

1. Clone the repository:   ```
   git clone <repository-url>
   cd my-vue-tailwind-project   ```

2. Install dependencies:   ```
   npm install   ```

3. Run the development server:   ```
   npm run dev   ```

4. Open your browser and navigate to the URL shown in your terminal (usually `http://localhost:5173`) to see the application running.

## Building for Production

To build the project for production, follow these steps:

1. **Create a production build:**

   Run the following command to build the project for production:

   ```bash
   npm run build
   ```

   This command will generate optimized static assets in the `dist/` directory, including minified JavaScript, CSS, and HTML files.

2. **Serve the production build using Node.js and Express:**

   Follow the steps below to serve the production build using an Express server:

### Setting Up a Node.js Server with Express

1. **Create a Node.js server:**

   In the root of your project directory (next to `package.json`), create a new file called `server.js` with the following content:

   ```js
   const express = require('express');
   const path = require('path');
   
   const app = express();
   
   // Serve the static files from the 'dist' directory
   app.use(express.static(path.join(__dirname, 'dist')));
   
   // SPA routing: redirect all requests to 'index.html'
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
   });
   
   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
   });
   ```

2. **Install Express.js:**

   In the terminal, run the following command to install **Express.js**:

   ```bash
   npm install express
   ```

3. **Start the Node.js server:**

   After building the production version of your project (`npm run build`), you can start the server to serve your Vue.js app:

   ```bash
   node server.js
   ```

4. **Access the application:**

   Open your browser and navigate to `http://localhost:3000` (or the IP address of your Windows Server) to access the production version of your Vue.js application.