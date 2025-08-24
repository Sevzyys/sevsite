const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

const buildDir = path.join(__dirname, "dist"); // Vite output; use "build" for CRA
app.use(express.static(buildDir));
app.get("*", (_, res) => res.sendFile(path.join(buildDir, "index.html")));
app.listen(port, () => console.log(`Web server listening on ${port}`));
