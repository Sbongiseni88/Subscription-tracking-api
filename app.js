import express from 'express';
import {PORT} from './config/env.js';

import userRouter from './routes/user.route.js';
import subRouter from './routes/subscription.route.js';
import authRouter from './routes/auth.routes.js';

const app= express();
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subRouter);
app.use('/api/v1/auth', authRouter);


const body='Welcome to Subscription tracking API';
app.get('/', (req, res) =>{
    res.send(body);
});
//const PORT= process.env.PORT || 3000;
const hostname='localhost';
app.listen(PORT, hostname,() => {
    console.log('Subscription tracker api running at http://localhost:'+PORT+'/');
});

export default app;
