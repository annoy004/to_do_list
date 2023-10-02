const express = require("express");
const bodyparser = require("body-parser");

const mongoose = require("mongoose");


const app = express();
app.set('view engine','ejs');

// const item = "";

app.use(bodyparser.urlencoded({entended : true}));
app.use(express.static("public"));// we have to make static folder for file like css
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB");

const itemsSchema = {
    name :String
}

const Item = mongoose.model("Item",itemsSchema);

const item1 = new Item({
name :"Welcome to your to do list!"
});
const item2 = new Item({
    name :"hit the + button to add a new items"
    });
    const item3 = new Item({
        name :"<-- hit to delete an element"
        });

const defaultItems = [item1,item2,item3];

const listSchemas= {
    name :String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchemas);




app.get("/",function(req,res) {
    const renderDocs = async () => {
        try{
            const result = await Item.find({});
            console.log(result);
            if (result.length === 0) {
            const createDocument = async () => {
                try{
                const result = await Item.insertMany(defaultItems);   
                }catch(err) {
                console.log(err);
                } 
              } 
            createDocument();
        res.redirect("/");
    }
            else {
                res.render("list",{listTitle :"Today", newListItem : result});// kindofday in list file will bereplaced by  elementsm of dsay
            }
        }catch(err) {
        console.log(err);
        }
      
      } 
      renderDocs();
});

app.post("/",function(req,res) {
    const itemName = req.body.newsome;
    const item = new Item({
        name :itemName
    })
    item.save();
    res.redirect("/");
    
//     console.log("b");
//    const item = req.body.newsome;
//     console.log(req.body); //isme na pehla hi word aat hai bas jaise pure day ke jagah sirf saturday aayega
//    if (req.body.lsit === "work") {
//     workItems.push(item);
//     res.redirect("/work");
//    }else {
  
//    items.push(item);//will push the entered elements of item in  items
//    res.redirect("/");//back to the loop which correspond to "/" route
//    }
});

app.post("/delete",function(req,res) {
   const remove = req.body.checkbox;
   const timepass =async () => { 
    try{
   let product = await Item.findByIdAndRemove(remove)
   

   console.log(product)
   res.redirect("/");
    }catch(err) {
        console.log(err);
        }
   }
   timepass();

});



// app.get('/:customListName', function (req, res) {
//     const customListName=req.params['customListName'];
//     // res.send();

//     const list = new List({
//         name :customListName,
//         items :defaultItems
//     });
//     list.save()
// });
app.get('/:customListName', function (req, res) {
    const customListName=req.params['customListName'];
    // res.send();
      const getdocument = async () => {
        try{
    const resultics = await List.findOne({ name: customListName }).exec();
    console.log (resultics);
        if (resultics === null ) {
            const createDocumentics = async () => {
                try{
                    const list = new List({
                                name :customListName,
                                items :defaultItems
                            });
                            list.save()
                }catch(err) {
                console.log(err);
                } 
                res.redirect("/" + customListName);
              } 
            createDocumentics();

        }else {
            
            res.render("list",{listTitle :resultics.name, newListItem : resultics.items});// kindofday in list file will bereplaced by  elementsm of dsay

        }
    }catch(err){
     console.log(err);
    }
      }
     
      

      getdocument();  
});






// app.get("/work", function(req,res) {
//     res.render("list",{listTitle : "work list", newListItem : workItems});
// })
// app.post("/work"  , function(req,res) {
//     let item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work")
// })


// app.get("/about",function(req,res) {
//     res.render("about");
// })
  
app.listen( 3000,function() { 
    console.log("server is running on port 3000");
})
//ejs ke sab file andar view folder ke aur app ke bahar
