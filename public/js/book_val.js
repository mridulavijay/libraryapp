let btitle=document.getElementById("btitle");
let bauthor=document.getElementById("bauthor");
let bgenre=document.getElementById("bgenre");
let bdesc=document.getElementById("bdesc");
let errorb=document.getElementById("errorb");
let errora=document.getElementById("errora");
let errorg=document.getElementById("errorg");
let errorbd=document.getElementById("errorbd");
function tit_val(){
let regtil=/(^[A-Za-z0-9\ ]+)$/;
if(regtil.test(btitle.value)){
    errorb.innerText="Valid book title";
    errorb.style.color="green";
    btitle.style.border="2px solid green";
    return true;
}
else{
    errorb.innerText="Invalid book title";
    errorb.style.color="red";
    btitle.style.border="2px solid red";
    return false;
}}
function aut_val(){
    let regauth=/(^[A-Za-z\ ]+)$/;
    if(regauth.test(bauthor.value)){
        errora.innerText="Valid author name";
        errora.style.color="green";
        bauthor.style.border="2px solid green";
        return true;
    }
    else{
        errora.innerText="Invalid author name";
        errora.style.color="red";
        bauthor.style.border="2px solid red";
        return false;
    }}
 function gen_val(){
        let reggen=/(^[A-Za-z\ ]+)$/;
        if(reggen.test(bgenre.value)){
            errorg.innerText="Valid genre";
            errorg.style.color="green";
            bgenre.style.border="2px solid green";
            return true;
        }
        else{
            errorg.innerText="Invalid genre";
            errorg.style.color="red";
            bgenre.style.border="2px solid red";
            return false;
        }}    
 function desc_val(){
            let regdes=/(^[A-Za-z0-9\. ]+)$/;
            if(regdes.test(bdesc.value)){
                errorbd.innerText="Valid format";
                errorbd.style.color="green";
                bdesc.style.border="2px solid green";
                return true;
            }
            else{
                errorbd.innerText="Invalid format";
                errorbd.style.color="red";
                bdesc.style.border="2px solid red";
                return false;
            }}  
 function vald(){
                let t1=tit_val();
                let t2=aut_val();
                let t3=gen_val();
                let t4=desc_val();
                if(t1&&t2&&t3&&t4){
                  alert("Book has been added");
                  return true;
                }
                else{
                  alert("Add appropriate details in each field");
                  return false;
                }
              }                  