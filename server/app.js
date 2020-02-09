const express = require('express');
const path = require('path');
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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start server
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`));