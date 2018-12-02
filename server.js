const express = require("express"),
      exphbs = require("express-handlebars"),
      PORT = process.env.PORT || 8080,
      app = express(),
      routes = require("./controllers/burger_controller.js");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
