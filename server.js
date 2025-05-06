import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;  // Always use process.env.PORT for Render

// Serve static files from the 'dist' directory (created by vite build)
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for any URL (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
