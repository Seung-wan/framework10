const express = require('express');
const db = require('../db');

let router = express.Router();

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM TodoList';
  db.query(sql, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
});

router.post('/', (req, res) => {
  const { title, content } = req.body;
  const sql = 'INSERT INTO TodoList(title,content) values(?,?)';
  db.query(sql, [title, content], (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  // update <table> set col1 = val1 where ...
  const sql = 'UPDATE TodoList set title=? , content=? where id = ?';
  db.query(sql, [title, content, id], (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const sql = 'DELETE FROM TodoList where id = ?';
  db.query(sql, id, (err, result) => {
    if (err) console.error(err);
    res.send(result);
  });
});

module.exports = router;
