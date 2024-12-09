const express = require('express');
const path = require('path');
const bodyParser = require('express.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Endpoint
app.post('/api/data', (req, res) => {
    const { name } = req.body;
    console.log(`Received data: ${name}`);
    res.json({ message: `Hello, ${name}! Your data has been received.` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
