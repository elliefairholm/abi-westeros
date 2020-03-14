const express = require('express');

const app = express();
const cors = require('cors');
const router = require('./router')

const PORT = 3002;

app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
