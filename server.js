const express = require("express");
const app = express();

app.use(express.json())//this line allow server to read json data.
//POST API
const user = {
  email: "test@gmail.com",
  password: "12345"
};

app.post("/user", (req, res) => {
    console.log(("Client sent:", req.body));
    
    res.json({
        message:"DATA RECEIVED",
        data: req.body
    })
})

app.post("/product", (req, res) => {
    console.log((req.body));
    
    res.json({
        message:"Products Recived",
        data: res.body
    })
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.json({
        message:"Task 1",
        data: res.body
    })
    
})

app.post("/add-number", (req, res) => {
    const { a, b} = req.body;
    const sum = a+b;
    res.send("Sum is :"+sum);
});


app.post("/full-name",(req,res)=>{
    const {first, last} = req.body;

    const fullName = first + " " + last
    res.send("Full name is:" +fullName)
});

app.post("/check-age", (req, res) => {
  const { age } = req.body;

  if (age >= 18) {
    res.send("You are an adult");
  } else {
    res.send("You are a minor");
  }
});


app.post("/revice",(req,res) => {
    const {age} = req.body;
    if (age >= 18){
        res.send("kive a singh")
    }else{
        res.send("Waheguru ji da khalsa WaheGuru ji di fathe")
    }
})
//login fake email and password
app.post("/login1", (req, res) => {
    const {email, password} = req.body;

    if ( email === user.email && password === usr.password){
        res.send("Login successful");
    } else {
        res.send("Invalid email and password")
    }
});


app.listen(3000, ()=>{
    console.log("Server running on port 3000")
});