const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3001;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 3001");
});
