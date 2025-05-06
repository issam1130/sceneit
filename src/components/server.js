import express from 'express';
import path from 'path';

const app = express();

// Serve the static files from the Vite build folder
app.use(express.static(path.join(__dirname, 'dist')));

// For any other request, serve the index.html from the Vite build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use the port provided by Render or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
