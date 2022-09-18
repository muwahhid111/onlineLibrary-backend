const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
// app.use(require("./routers/users.route"));
// app.use(require('./routers/comments.route'));
// app.use(require('./routers/posts.route'))


mongoose.connect(
  "mongodb+srv://Umar:Umar2002@cluster0.lfxnu2y.mongodb.net/online-library",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("База подключена");
  }
);

app.listen(3000, () => {
  console.log("started");
});