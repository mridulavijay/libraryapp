const express=require("express");
const loginrouter=express.Router();
function lrouter(nav){

loginrouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:"Welcome to Central Library"
        
    });
});


return loginrouter;
}
module.exports=lrouter;