require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const fs = require('fs');
const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');

// Security Package
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// PORT
const port = process.env.PORT || 3000;

// Import routes
const jobvsbootcamp = require('./routes/jobvsbootcamp');
const bootcamp = require('./routes/bootcamp');
const bootcamptrendbyyear = require('./routes/bootcamptrendbyyear');
const city = require('./routes/city');
const company = require('./routes/company');
const companyjobdemand = require('./routes/companyjobdemand');
const industry = require('./routes/industry');
const industryneed = require('./routes/industryneed');
const industrytrend = require('./routes/industrytrend');
const job = require('./routes/job');
const jobtrend = require('./routes/jobtrend');
const jobtrendbycity = require('./routes/jobtrendbycity');
const skill = require('./routes/skill');
const skilltrend = require('./routes/skilltrend');
const year = require('./routes/year');
const datascienceexperience = require('./routes/datascienceexperience');
const datasciencerole = require('./routes/datasciencerole');
const datasciencetopskill = require('./routes/datasciencetopskill');
const futureofwork = require('./routes/futureofwork');

/* Import errorHandler */
const errorHandler = require('./middlewares/errorHandler');

// Make express app
const app = express();

// CORS
app.use(cors());

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// ); // Support urlencode body

// To read form-data request
app.use(fileUpload());

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

app.get('/', async (req, res, next) => {
  try {
    res.redirect('https://documenter.getpostman.com/view/3884681/TzsWtV5N');
  } catch (error) {
    next(error);
  }
});

// Make routes
app.use('/bootcamp', bootcamp);
app.use('/bootcamptrendbyyear', bootcamptrendbyyear);
app.use('/jobvsbootcamp', jobvsbootcamp);
app.use('/city', city);
app.use('/company', company);
app.use('/companyjobdemand', companyjobdemand);
app.use('/industry', industry);
app.use('/industryneed', industryneed);
app.use('/industrytrend', industrytrend);
app.use('/job', job);
app.use('/jobtrend', jobtrend);
app.use('/jobtrendbycity', jobtrendbycity);
app.use('/skill', skill);
app.use('/skilltrend', skilltrend);
app.use('/year', year);
app.use('/datascienceexperience', datascienceexperience);
app.use('/datasciencerole', datasciencerole);
app.use('/datasciencetopskill', datasciencetopskill);
app.use('/futureofwork', futureofwork);

// Not found
app.all('*', (req, res, next) => {
  next({ message: 'Not Found', statusCode: 404 });
});

/* User errorHandler */
app.use(errorHandler);

// If environment is not test
if (process.env.NODE_ENV !== 'test') {
  // Running server
  app.listen(port, () => console.log(`Server running on ${port}`));
}

// Export for unit testing
module.exports = app;
