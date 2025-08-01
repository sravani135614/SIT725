const express = require('express');
const app = express();
const port = 3000;

// Serve static files from public folder
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
