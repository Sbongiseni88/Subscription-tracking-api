import express from 'express';

const app= express();
app.use(express.json());

const body='Welcome to Subscription tracking API';
app.get('/', (req, res) =>{
    res.send(body);
});
const port=3000;
const hostname='localhost';
app.listen(port, hostname,() => {
    console.log('Subscription tracker api running at http://localhost:3000/');
});

export default app;

