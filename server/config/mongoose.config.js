const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/angularProject", {
    useFindAndModify: false,
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("successfully connected to mongodb"))
  .catch(reason => console.log("Something went wrong for some...", reason));
