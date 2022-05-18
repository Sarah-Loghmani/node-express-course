const mongoose = require("mongoose");
// ? for our app security we move this connection string to .env:
// const connectionString =
//   "mongodb+srv://SarahLoghmani:1234@nodeexpressproject.3poa3.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("************connected***********"))
//   .catch((err) => console.log(err));

// !if we have a function in a module where the function is effectively executed we only need to import meaning require in a module where the function is effectively executed(app.js)

//? in order to remove the deprecation warning from terminal we use second argument for connect method:
// mongoose
//   .connect(connectionString, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("************connected***********"))
//   .catch((err) => console.log(err));

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  // ! connectDB returns a promise so in app.js we write an async function(start)
};

module.exports = connectDB;
