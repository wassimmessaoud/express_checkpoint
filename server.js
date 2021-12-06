const express = require("express");
const app = express();

const workTime = require("../middleware/middleware");
app.set("views", "./views");


app.set("view engine", "pug");
app.use(express.static("Public"));
app.use("/css", express.static(__dirname + "public/css"));

app.get("/", function (req, res) {
  res.render("Home", { title: "home" });
});

app.get("/OurServices", function (req, res) {
  res.render("OurServices", { title: "OurServices" });
});

app.get("/Contactus", function (req, res) {
  res.render("Contactus");
});


const port = 5000;
app.listen(port, () => console.log(`server is runing on ${port}`));