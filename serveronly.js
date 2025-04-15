// serveronly.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static directories
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/fonts", express.static(path.join(__dirname, "fonts")));
app.use("/modules", express.static(path.join(__dirname, "modules")));
app.use("/vendor", express.static(path.join(__dirname, "vendor")));

// Serve index.html from root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`MagicMirror server running on port ${PORT}`);
});
