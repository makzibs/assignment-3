var express = require('express');
var router = express.Router();

const todos = []; // Array to store todos

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout');
});

/*router.post('/todo', function(req, res, next) {
  res.render('index', { message: 'My todos'});
});*/

router.post('/todo', (req, res) => {
  const { name, task } = req.body;

  // Check if the user already exists
  const existingUser = todos.find((user) => user.name === name);

  if (existingUser) {
    // User exists, add the task to their todos
    existingUser.todos.push(task);
    res.send('Todo added');
  } else {
    // User doesn't exist, create a new user and add the task
    const newUser = {
      name: name,
      todos: [task]
    };
    todos.push(newUser);
    res.send('User added');
  }
  console.log(req.body);
  console.log(todos);
});

module.exports = router;
