const express=require("express");
const addbookrouter=express.Router();
function abrouter(nav){

addbookrouter.get('/',function(req,res){
    res.render("addbook",{
        nav,
        title:"Welcome to Central Library"
        
    });
});


return addbookrouter;
}
module.exports=abrouter;