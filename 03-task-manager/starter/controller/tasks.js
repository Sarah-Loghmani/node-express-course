const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const getTask = (req, res) => {
  res.send("Get single task");
};

const createTask = (req, res) => {
  //   res.send("Create a task");
  res.json(req.body);
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
