const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT | 3001;
const todo = require('./routes/todo');

app.use(cors());
app.use(express.json());

app.use('/api/0.1/todo', todo);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
