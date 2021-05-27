const express=require("express");
const app=express();
const PORT=process.env.PORT||5000;
const nav=[
    {link:"/books",name:"Books"},
    {link:"/authors",name:"Authors"},
    {link:"/login",name:"Login"},
    {link:"/signup",name:"SignUp"},
    {link:"/addbook",name:"Add Book"},
    {link:"/addauthor",name:"Add Author"}
];
const booksrouter=require("./src/routes/bookRoutes")(nav)
const authorsrouter=require("./src/routes/authorRoutes")(nav)
const loginrouter=require("./src/routes/loginRoutes")(nav)
const addbookrouter=require("./src/routes/addbookRoutes")(nav)
const addauthorrouter=require("./src/routes/addauthorRoutes")(nav)
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");
app.use(express.static('./public'));
app.use('/books',booksrouter);
app.use('/authors',authorsrouter);
app.use('/login',loginrouter);
app.use('/addbook',addbookrouter);
app.use('/addauthor',addauthorrouter);
app.get('/',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        nav,
        title:"Welcome to Central Library"
    });
});
app.get('/signup',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html");
    res.render("signup",{
        nav,
        title:"Welcome to Central Library"
    });
});

//app.listen(5000);
app.listen(PORT,()=>{console.log("Server ready at"+PORT)});