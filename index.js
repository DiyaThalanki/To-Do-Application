import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set( 'view engine' , 'ejs' ); 
app.set('view options', {
    layout: false
});

let listItems1=[];

app.get("/",(req,res)=>{
    res.render("list1.ejs",{listItems:listItems1});
});

app.post("/add-item-list1",(req,res)=>{
    const newItem=req.body.new;
    listItems1.push(newItem);
    res.redirect("/");
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
