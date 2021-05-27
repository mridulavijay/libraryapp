const express=require("express");
const booksrouter=express.Router();
function router(nav){
var books=[{
    title:"To kill a Mocking Bird",
    author:"Harper Lee",
    genre:"Fiction",
    img:"img1.jpg"
},{
    title:"The Pilgrimage",
    author:"Paulo Coelho",
    genre:"Fiction",
    img:"img2.jpg"
},{
    title:"The Kite Runner",
    author:"Khaled Hosseini",
    genre:"Fiction",
    img:"img3.jpg"
}
]
booksrouter.get('/',function(req,res){
    res.render("books",{
        nav,
        title:"Library",
        books
    });
});

booksrouter.get('/:id',(req,res)=>{
    const id=req.params.id;
    res.render("book",{
        nav,
        title:"Library",
        book:books[id]
});
});
return booksrouter;
}
module.exports=router;