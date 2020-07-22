const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.send("I love CodersX");
});
var todos = ["Đi chợ", "Nấu Cơm", "Rửa Bát", "Học code tại CoderX"];
app.get("/todos", (req, res) => {
  res.render("todos/index", {
    todos: todos
});
// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

var q = req.query.q;
var matchNau = todos.filter(function())