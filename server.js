import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or fallback to 3000

// Serve static files from the 'dist' directory (build folder)
app.use(express.static(path.join(__dirname, "dist")));

// Catch-all route to serve the index.html for single-page applications (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
