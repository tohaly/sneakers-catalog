const express = require('express');
const limiter = require('express-rate-limit');
const history = require('connect-history-api-fallback');

const RATE_LIMIT_MESSAGE = 'Too many requests from the same IP, please try later';

const app = express();
app.use(history());

const { PORT = 3000 } = process.env;

app.use(
  limiter({
    max: 100,
    message: { message: RATE_LIMIT_MESSAGE }
  })
);

app.use(express.static('./build'));

app.listen(PORT, function () {
  console.log('\x1b[32m%s\x1b[0m', `Server working on port ${PORT}.`);
});