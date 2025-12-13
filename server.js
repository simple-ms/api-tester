const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5173;

// Enable CORS for all origins
app.use(cors());

// Serve static files
app.use(express.static(__dirname));

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 API Tester running on http://localhost:${PORT}`);
});
