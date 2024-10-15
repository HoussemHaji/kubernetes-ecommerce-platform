const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

app.post('/process-payment', (req, res) => {
  const { orderId, amount, cardDetails } = req.body;
  
  // Simulate payment processing
  const success = Math.random() < 0.8; // 80% success rate
  
  if (success) {
    res.json({ success: true, transactionId: `TX${Date.now()}` });
  } else {
    res.status(400).json({ success: false, message: 'Payment failed' });
  }
});

app.listen(port, () => {
  console.log(`Payment Gateway Service listening at http://localhost:${port}`);
});
