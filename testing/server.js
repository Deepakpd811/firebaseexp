import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1 >home page</h1>");
});

app.get("/userdata", (req, res) => {
  res.status(200).json({ msg: "hello welome to chai mocha testing" });
});

app.listen(8080, () => console.log("Server is running port on 8080"));

export default app;