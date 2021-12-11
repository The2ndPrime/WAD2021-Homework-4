const express = require("express");
const pool = require("./database");
const cors = require("cors");
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// register the ejs view engine
app.set("view engine", "ejs");

app.listen(3000);

app.use(express.static(__dirname + '/res/styles'));
app.use(express.static(__dirname + "/res/images"));
app.use(express.static('Public'));

const _avatar_url =
  "https://www.writeups.org/wp-content/uploads/Gordon-Freeman-Half-Life-Portrait-1.jpg";
const _avatar_name = "Gordon Freeman";

app.get("/create", (req, res) => {
  res.render("addnewpost");
});

app.get("/", async (req, res) => {
  try {
   res.redirect("posts")
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts ORDER BY id ASC");
    res.render("posts", { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/singlepost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params.id);
    console.log("get a single post request has arrived");
    const posts = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
    if (posts.rowCount > 0) {
    res.render("singlepost", { posts: posts.rows[0] });
    } else {
      res.status("404").send("404 - post does not exist");
    }
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/singlepost/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.params.id);
    console.log("Update like count added");
    const posts = await pool.query("UPDATE posts SET likes = likes + 1 WHERE id = $1", [id]);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/posts/", async (req, res) => {
  try {
    console.log("a post request has arrived");
    const post = req.body;
    const newpost = await pool.query(
      "INSERT INTO posts(avatar_url, avatar_name, title, media_url, body) values ($1, $2, $3, $4, $5) RETURNING*",
      [_avatar_url, _avatar_name, post.title, post.media_url, post.body]
    );
    res.redirect("posts");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query("DELETE FROM posts WHERE id = $1", [
      id,
    ]);
    res.redirect("posts");
  } catch (err) {
    console.error(err.message);
  }
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
