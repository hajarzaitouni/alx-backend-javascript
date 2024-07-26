const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const payments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };
  res.json(payments);
});

app.get('/login', (req, res) => {
  res.end(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});