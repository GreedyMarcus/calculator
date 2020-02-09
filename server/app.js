const express = require('express');
const cors = require('cors');

// Import routers
const numberRouter = require('./routes/api/number');

// Import environment variables
require('dotenv').config({ path: 'server/config.env' });

// Init app
const app = express();
const port = process.env.PORT || 8080;

// Enable cors
app.use(cors());

// Init body parser
app.use(express.json());

// Handle requests
app.use('/api/number', numberRouter);

// Start server
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`));