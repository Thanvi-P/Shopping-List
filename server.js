const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemsRoute = require('./routes/api/items'); // ✅ ROUTE

const app = express();

// Body-parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Use routes ✅
app.use('/api/items', itemsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);










    
