const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const schema = require('./schema');
const path = require('path');

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
