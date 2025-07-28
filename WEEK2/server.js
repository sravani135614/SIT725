const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];


app.get('/api/quote', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.get('/api/square', (req, res) => {
  const num = Number(req.query.num);
  if (isNaN(num)) {
    return res.status(400).json({ error: "Invalid number" });
  }
  res.json({ result: num * num });
});

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Invalid query parameters.");
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
