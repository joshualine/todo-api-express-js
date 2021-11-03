const express = require('express')
const router = express.Router();
const uuid = require('uuid')
const todos = require('../../data/todos.json')
const fs = require('fs');
const path = require('path');


//Get all todos

router.get('/', (req, res) => {
  res.json(todos)
  // let rawdata = fs.readFileSync(path.resolve(__dirname, '../../data/'));
  // let student = JSON.parse(rawdata);
  // console.log(student);
});

// Get one todo
router.get('/:id', (req, res) => {
  const found = todos.some(todo => todo.id === parseInt(req.params.id))

  if (found) {
    res.json(todos.filter(todo => todo.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `No todo with the id of ${req.params.id}` })
  }
})

// Create todo
router.post('/', (req, res) => {
  const newTodo = {
    id: uuid.v4(),
    title: req.body.title,
    description: req.body.description,
    completed: false
  }
  if(!newTodo.id && !newTodo.title) {
    res.status(400).json({ msg: `Incomplete data` })
  }else {
    todos.push(newTodo);
    res.json(todos);
    fs.writeFileSync(path.resolve(__dirname, '../../data/todos.json'), JSON.stringify(todos));
  }
})

//Update todo


//Delete todo

module.exports = router;