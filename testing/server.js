import express from "express";
const app = express();
import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("<h1 >home page</h1>");
});

app.get("/userdata", (req, res) => {
  res.status(200).json({ msg: "hello welome to chai mocha testing" });
});


app.post("/userlogin",(req,res)=>{
  if(req.body.email == "deepak@gmail.com" && req.body.pass == "test123"){
    res.status(200).json({msg:1})
  }else{
    res.status(200).json({msg:0})

  }
})


app.listen(8080, () => console.log("Server is running port on 8080"));

export default app;