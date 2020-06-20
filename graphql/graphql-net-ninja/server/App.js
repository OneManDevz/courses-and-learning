const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
var config = require('config');
const app = express();
const PORT = process.env.PORT || 4000;

//const.db = process.env.DB
const db = config.get('mongoURI');

mongoose.set('useFindAndModify', false);
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});