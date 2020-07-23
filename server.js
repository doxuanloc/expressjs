const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.set("view engine", "pug");
app.set("views", "./views");
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const port = 3000;
var todos = ['Đi chợ', 'nấu cơm', 'Rửa Bát', 'Học code tại CoderX'];

app.get("/", (req, res) => {
  res.render('index')
})
app.get("/todos", (req, res) => {
  res.render('todos/index', {
    todos: todos
  })
});

app.get("/todos/search", (req, res) =>{
  var q = req.query.q;
  var findTodo = todos.filter(function(todos){
    return todos.toLowerCase().indexOf(q.toLowerCase()) !== -1
  })
  res.render('todos/index', {
    todos: findTodo
  });
});
app.get('/todos/create', (req, res) =>{
        res.render('/todos/create')
});
app.post('/todos/create', (req,res) =>{
  todos.push(req.body.todo);
  res.redirect('/todos')
})

app.listen(3000,  () => {
  console.log("Server listening on port " + port);
});
