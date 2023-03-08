const express = require("express")
const path = require("path")
const api = require("./routes/APIroutes.js")

const PORT = 3002;

const app = express();

//middleware for parsing 
app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use("/api" , api);

app.use(express.static("public"));

//GET routes for home page 
app.get("/", (req, res ) =>
res.sendFile(path.join(__dirname, "/public/index.html"))
);

//GET route for feedback page 
app.get("/notes", (req, res ) =>
res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
console.log(`app listening at http://localhost:${PORT}`)
);