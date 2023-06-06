const express = require("express");
const { connection } = require("./config/db");
const UserRouter = require("./routes/User.Router");
const PostRouter = require("./routes/Post.Router");

const app = express();


app.use(express.json());

// Home route
app.get("/", async (req, res) => {
  try {
    res.send(`<h1> Social_💻 media_app 😊 </h1>`);

  } catch (error) {
    console.log(error.message);

  }

})

// routers

app.use('/', UserRouter);
app.use('/post', PostRouter)

// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});
