const express = require("express");

const todosRouter = require("./router/todos");
const todosError = require("./router/error");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded());

// Router
app.use("/todos", todosRouter);

app.use("/", todosError);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}, http://localhost:${port}`);
});
