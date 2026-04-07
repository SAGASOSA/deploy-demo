// Import express
const express = require('express');

// Create app
const app = express();

// IMPORTANT: Use process.env.PORT for cloud
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Cloud!</h1>
    <p>My Node.js app is now LIVE on the internet!</p>
    <p>Server Time: ${new Date().toLocaleString()}</p>
  `);
});

// API route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'running',
    platform: 'Render',
    timestamp: new Date()
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});