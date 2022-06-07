const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
 
} = require("../controller/tasks");

// console.log(express);

// router.route("/").get((req, res) => {
//   res.send("all items");
// });
// instead of this line to prevent get messy in this file we go to the controller folder and create task.js file and write it there. and change the code:
// router.get("/", getAllTasks);
// router.post("/", createTask);
router
  .route("/")
  .get(getAllTasks)
  .post(createTask);

router
  .route("/:id")
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)


module.exports = router;
