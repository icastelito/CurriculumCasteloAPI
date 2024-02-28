const express = require("express");
const routeCourses = require("./routes/courses");
const app = express();

app.use("/courses", routeCourses);
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World! Im glad to be here with you! I love programming!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
