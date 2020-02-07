const express = require('express');

// Import environment variables
require('dotenv').config({ path: 'server/config.env' });

// Init app
const app = express();
const port = process.env.PORT || 8080;

// Handle requests
app.get('/', (req, res) => res.send('Hello Calculator!'));

// Start server
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`));