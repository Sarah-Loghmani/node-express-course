const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete tasks");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
