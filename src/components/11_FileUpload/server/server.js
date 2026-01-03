const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.json());
app.use(cors({
  origin:'https://musical-pancake-qw5gr697qr6cwpp-5173.app.github.dev'
}))

app.use('/api', userRouter);

app.listen(4000, ()=>{
  console.log('Server running')
})