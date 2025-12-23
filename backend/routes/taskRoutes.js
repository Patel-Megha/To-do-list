const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../controller/taskController");

router.use(auth);
router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
