const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { items: [] });
});

app.get('/generate-items', (req, res) => {
  const quantity = parseInt(req.query.quantity) || 0;
  const items = Array.from({ length: quantity }, (_, i) => `Item ${i + 1}`);
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
