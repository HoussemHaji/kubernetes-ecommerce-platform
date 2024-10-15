const express = require('express');
const app = express();
const port = 3005;

const products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Smartphone', category: 'Electronics' },
  { id: 3, name: 'Headphones', category: 'Electronics' },
  { id: 4, name: 'T-shirt', category: 'Clothing' },
  { id: 5, name: 'Jeans', category: 'Clothing' },
];

app.get('/recommendations/:userId', (req, res) => {
  // Simple recommendation logic: return random products
  const recommendations = products
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  res.json(recommendations);
});

app.listen(port, () => {
  console.log(`Recommendation Service listening at http://localhost:${port}`);
});
