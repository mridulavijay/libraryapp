const express=require("express");
const addauthorrouter=express.Router();
function aarouter(nav){

addauthorrouter.get('/',function(req,res){
    res.render("addauthor",{
        nav,
        title:"Welcome to Central Library"
        
    });
});


return addauthorrouter;
}
module.exports=aarouter;