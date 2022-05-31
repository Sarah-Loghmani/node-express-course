//   ! if we have a function in a module where the function is effectively executed we only need to import meaning require in a module where the function is effectively executed
//! require("./db/connect");

const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//Middleware for accessing the data
app.use(express.json());

//*routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manger APP");
// });

app.use("/api/v1/tasks", tasks);

//app.get('/api/v1/tasks')       => get all the tasks
//app.post('/api/v1/tasks')      => create a new task
//app.get('/api/v1/tasks/:id')   => get single task
//app.patch('/api/v1/tasks/:id') => update task
//app.delete('/api/v1/tasks/:id')=> delete task

const PORT = 8000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    //if the connection is be successful then:
    app.listen(PORT, console.log(`Server is listen on port ${PORT}`));
    //else:
  } catch (error) {
    console.log(error);
  }
};
start();
