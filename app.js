const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const todoListRouter = require('./route/todo-list.route');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});
require('dotenv').config();

app.use(connectLiveReload());

const port = process.env.PORT || 3000;
// middleware
app.use(cors());

app.use(express.json());

// routes
app.use('/api/v1/todos', todoListRouter);

// error handling middleware
app.use(notFound);
app.use(errorHandlerMiddleware);
const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
