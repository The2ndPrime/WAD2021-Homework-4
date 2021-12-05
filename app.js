const express = require("express");
const pool = require("./database");
const app = express();

app.use(express.static(__dirname + "/res/styles"));
app.use(express.static(__dirname + "/res/images"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post("/posts/", async (req, res) => {
  try {
    console.log("a post request has arrived");
    const post = req.body;
    console.log(req);
    console.log(post);
    const newpost = await pool.query(
      "INSERT INTO posts(title, body, urllink) values ($1, $2, $3) RETURNING*",
      [post.title, post.body, post.urllink]
    );
    res.json(newpost);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query("DELETE FROM nodetable WHERE id = $1", [
      id,
    ]);
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});

app.use((req, res) => {
  // res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});