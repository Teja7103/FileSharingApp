require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");
connectDB();

app.use(express.json());

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

//Template Engine
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Routes
app.use("/hello", console.log("hello"));
app.use("/api/files", require("./routes/files"));
app.use("/files", require("./routes/show"));
app.use("/files/download", require("./routes/download"));

// Serve your index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "homepage", "index.html"));
});

app.listen(PORT, console.log(`Listening on port ${PORT}.`));
