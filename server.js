const express = require("express");
const io = require("socket.io");
const path = require("path");
const app = express();
require("./server/config/mongoose.config");
app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  express.static(__dirname + "/public/dist/public")
);
require("./server/routes")(app);

app.all("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/dist/public/index.html"))
);

const server = app.listen(8000, () => console.log("I'm all set up!"));
const socketIO = io(server);
socketIO.on("connection", socket => {
  console.log("Sockets are fired up bro");
  socket.on("iamconnected", () => {
    console.log("Confirmed connected");
  });
});
