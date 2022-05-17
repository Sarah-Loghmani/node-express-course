const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const getTask = (req, res) => {
  console.log(req.params); //{ id: 'harchi' }
  res.json({ id: req.params.id });
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
