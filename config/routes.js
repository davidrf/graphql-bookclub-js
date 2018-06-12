require('dotenv').config();
const express = require('express');
const controllers = require('../controllers');

const app = express();
app.use(express.json());

app.get('/users', controllers.users.index);
app.get('/users/:userId', controllers.users.show);
app.post('/users', controllers.users.create);
app.patch('/users/:userId', controllers.users.update);
app.delete('/users/:userId', controllers.users.destroy);

app.listen(3000, () => console.log('Server is running on port 3000'));
