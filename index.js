require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const fs = require('fs');
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');

// Security Package
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Import routes
const hello = require('./routes/hello');

/* Import errorHandler */
const errorHandler = require('./middlewares/errorHandler');

// Make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// To read form-data request
app.use(fileUpload());

// Add more security
// Sanitize data
app.use(mongoSanitize());

// Prevent XSS attact
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 100,
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Use helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// CORS
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  // create a write stream (in append mode)
  let accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {
      flags: 'a',
    }
  );

  // setup the logger
  app.use(morgan('combined', { stream: accessLogStream }));
}

// Set static file directory
app.use(express.static('public'));

// Make routes
app.use('/', hello);

// Not found
app.all('*', (req, res, next) => {
  next({ message: 'Not Found', status: 404 });
});

/* User errorHandler */
app.use(errorHandler);

// If environment is not test
if (process.env.NODE_ENV !== 'test') {
  // Running server
  app.listen(3000, () => console.log('Server running on 3000'));
}

// Export for unit testing
module.exports = app;
