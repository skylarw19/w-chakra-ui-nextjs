const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} on ${db.host}:${db.port}`);
});