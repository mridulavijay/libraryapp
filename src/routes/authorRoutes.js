const express=require("express");
const authorsrouter=express.Router();
function arouter(nav){
var authors=[{
    author:"Harper Lee",
    book:"To Kill a Mocking bird",
    genre:"Fiction",
    description:"Nelle Harper Lee (April 28, 1926 – February 19, 2016) was an American novelist best known for her 1960 novel To Kill a Mockingbird. It won the 1961 Pulitzer Prize and has become a classic of modern American literature. Lee published only two books, yet she was awarded the Presidential Medal of Freedom in 2007 for her contribution to literature.",
    img:"imga1.jpg"
},{
    author:"Paulo Coelho",
    book:"The Pilgrimage",
    genre:"Fiction",
    description:"Paulo Coelho de Souza ( born 24 August 1947) is a Brazilian lyricist and novelist, best known for his novel The Alchemist.His major works include Veronica decides to die,Brida,Eleven Minutes,Zahir etc",
    img:"imga2.jpg"
},{
    author:"Khaled Hosseini",
    book:"The Kite Runner",
    genre:"Fiction",
    description:"Khaled Hosseini was born in Kabul, Afghanistan, and moved to the United States in 1980. He is the author of the New York Times bestsellers The Kite Runner, A Thousand Splendid Suns, and And the Mountains Echoed. Hosseini is also a U.S. Goodwill Envoy to the UNHCR, the UN Refugee Agency, and the founder of The Khaled Hosseini Foundation, a nonprofit that provides humanitarian assistance to the people of Afghanistan.",
    img:"imga3.jpg"
}
]
authorsrouter.get('/',function(req,res){
    res.render("authors",{
        nav,
        title:"Welcome to Central Library",
        authors
    });
});

authorsrouter.get('/:id',(req,res)=>{
    const id=req.params.id;
    res.render("author",{
        nav,
        title:"Welcome to Central Library",
        author:authors[id]
});
});
return authorsrouter;
}
module.exports=arouter;