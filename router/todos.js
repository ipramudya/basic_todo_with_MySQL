const { Router } = require("express");

const db = require("../db");

const router = Router();

// POST -> todo/
router.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const postQuery = "INSERT INTO todo (description) VALUES (?)";
    const newTodo = await db.query(postQuery, [description]);

    res.json(`New Todo with id of ${newTodo[0].insertId} has been added !`);
  } catch (err) {
    console.log(err.message);
  }
});
// GET -> todo/
router.get("/", async (req, res) => {
  try {
    const getQuery = "SELECT * FROM todo";
    const todos = await db.query(getQuery);

    res.json(todos[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// GET -> todo/:id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getIdQuery = "SELECT * FROM todo WHERE id = ?";
    const todos = await db.query(getIdQuery, [id]);

    res.json(todos[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// PUT -> todo/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateQuery = "UPDATE todo SET description = ? WHERE id = ?";
    const updateTodo = await db.query(updateQuery, [description, id]);

    res.json("Todo was updated");
  } catch (err) {
    console.log(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteQuery = "DELETE FROM todo WHERE id = ?";
    const deleteTodo = await db.query(deleteQuery, [id]);

    res.json(`Todo with id of ${id} has been deleted !`);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
