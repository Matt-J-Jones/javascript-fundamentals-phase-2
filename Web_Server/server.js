const express = require('express');
const app = express();
const port = 3000;
let count = 0;

app.get('/', (req, res) => {
  res.send('Counter is: ' + count)
});

app.post('/counter', (req, res) => {
  res.send('Got a POST Request')
  count ++;
})

app.delete('/counter', (req, res) => {
  res.send('Counter reset!')
  count = 0;
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);