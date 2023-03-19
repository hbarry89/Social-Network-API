const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;

// ---------------------- VIRTUAL (ACTIVITY 22)
// const { connect, connection } = require('mongoose');

// connect('mongodb://localhost/fullnameVirtual', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
