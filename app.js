const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname + "/date.js");



const app = express();
const workItems = [];
// const item = "";
const items = ["buy food", " cook food" , "eat food"];// data type const to the array in javascript means we can enter new its but cannot re make it
app.use(bodyparser.urlencoded({entended : true}));
app.use(express.static("public"));// we have to make static folder for file like css

app.set('view engine','ejs');



app.get("/",function(req,res) {
const day = date.getDay(); // you have to mention which function you are calling
   
    res.render("list",{listTitle : day, newListItem : items});// kindofday in list file will bereplaced by  elementsm of dsay
    
});

app.post("/",function(req,res) {
    console.log("b");
   const item = req.body.newsome;
    console.log(req.body); //isme na pehla hi word aat hai bas jaise pure day ke jagah sirf saturday aayega
   if (req.body.lsit === "work") {
    workItems.push(item);
    res.redirect("/work");
   }else {
  
   items.push(item);//will push the entered elements of item in  items
   res.redirect("/");//back to the loop which correspond to "/" route
   }
    
  

 
});



app.get("/work", function(req,res) {
    res.render("list",{listTitle : "work list", newListItem : workItems});
})
// app.post("/work"  , function(req,res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work")
// })
app.get("/about",function(req,res) {
    res.render("about");
})
  
app.listen( 3000,function() { 
    console.log("server is running on port 3000");
})
//ejs ke sab file andar view folder ke aur app ke bahar
