const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./src/api/routes/user.routes');
const rickymortyRouter = require('./src/api/routes/rickymorty.routes');
dotenv.config();

const {connect} = require('./src/utils/db');
const { isAuth, isAdmin } = require('./src/middlewares/auth');
const port = process.env.PORT || 7000;

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use('/rickymorty', isAuth, rickymortyRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log('listening on port ' + port));