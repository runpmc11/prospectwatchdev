const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI)
  .then(_ => console.log('connected'))
  .catch(e=> console.log(e));

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000; // if there is an environment variable that has already been defined by HEROKU, assign that variable to PORT. Otherwise, use port 5000. DYNAMIC PORT BINDING.
app.listen(PORT);
