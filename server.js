import express from "express";
const app = express();
import  {addEmp,emplist,updateEmp}  from "./firebase.config.js";



app.get('/',(req,res)=>{
    res.send("Home route")
})


app.get('/addEmp',(req,res)=>{
    const emodata = {
        dob:"20-12-2001",
        fname:"ritick",
        mname:"kr",
        lname:"gupta",
        salary:160000,
    };

    addEmp(emodata).then((data)=>{
        res.send("recorded inserted "+data.id)
    })

})

app.get("/emplist",(req,res)=>{
    emplist()
    .then((data) => {
      var empdata = "";
      for (let i = 0; i < data.length; i++) {
        empdata += data[i].fname+"--";
      }
      console.log(empdata);
      res.send(empdata);
    })
    .catch((error) => {
      console.error("Error fetching employee data:", error);
      res.status(500).send("Error fetching employee data");
    });
  

})

app.get('/update',(req,res)=>{
    let emprecord = {
        dob:"20-12-2006",
        fname:"ritick",
        mname:"kumar",
        lname:"gupta",
        salary:160000,
    }
    updateEmp( emprecord).then((msg)=>{
        res.send(msg);
    })
})



app.listen(3000,()=>{
    console.log("server is running")
})