const express = require('express');
const app = express();
const port = 3003;

app.use(express.json());

const orders = [];

app.post('/orders', (req, res) => {
  const { userId, products } = req.body;
  const order = {
    id: orders.length + 1,
    userId,
    products,
    status: 'processing',
    createdAt: new Date()
  };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
});

app.listen(port, () => {
  console.log(`Order Processing Service listening at http://localhost:${port}`);
});
