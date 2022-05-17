const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://SarahLoghmani:1234@nodeexpressproject.3poa3.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("************connected***********"))
  .catch((err) => console.log(err));

//   ! if we have a function in a module where the function is effectively executed we only need to import meaning require in a module where the function is effectively executed(app.js)
