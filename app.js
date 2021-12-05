const express = require("express");
const pool = require("./database");
const app = express();

app.use(express.static(__dirname + "/res/styles"));
app.use(express.static(__dirname + "/res/images"));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// register the ejs view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });

app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts");
    res.json(posts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    console.log("get a post request has arrived");
    const posts = await pool.query("SELECT * FROM posts WHERE id = $1", [
      req.params.id,
    ]);
    res.json(posts.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
