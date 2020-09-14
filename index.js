const express = require('express');
const app = express();
const port = 3100;

app.use(express.static('banker'));

app.get('/', (req, res) => {
  res.sendFile('./banker/index.html', { root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`))
