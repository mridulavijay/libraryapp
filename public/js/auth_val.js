let aname=document.getElementById("aname");
let abook=document.getElementById("abook");
let agenre=document.getElementById("agenre");
let adesc=document.getElementById("adesc");
let errorn=document.getElementById("errorn");
let errora=document.getElementById("errora");
let errorg=document.getElementById("errorg");
let errorad=document.getElementById("errorad");
function nam_val(){
let regnam=/(^[A-Za-z\ ]+)$/;
if(regnam.test(aname.value)){
    errorn.innerText="Valid author name";
    errorn.style.color="green";
    aname.style.border="2px solid green";
    return true;
}
else{
    errorn.innerText="Invalid author name";
    errorn.style.color="red";
    aname.style.border="2px solid red";
    return false;
}}
function bok_val(){
    let regbok=/(^[A-Za-z0-9\ ]+)$/;
    if(regbok.test(abook.value)){
        errora.innerText="Valid book name";
        errora.style.color="green";
        abook.style.border="2px solid green";
        return true;
    }
    else{
        errora.innerText="Invalid book name";
        errora.style.color="red";
        abook.style.border="2px solid red";
        return false;
    }}
 function gen_val(){
        let reggen=/(^[A-Za-z\ ]+)$/;
        if(reggen.test(agenre.value)){
            errorg.innerText="Valid genre";
            errorg.style.color="green";
            agenre.style.border="2px solid green";
            return true;
        }
        else{
            errorg.innerText="Invalid genre";
            errorg.style.color="red";
            agenre.style.border="2px solid red";
            return false;
        }}    
 function desc_val(){
            let regdes=/(^[A-Za-z0-9\. ]+)$/;
            if(regdes.test(adesc.value)){
                errorad.innerText="Valid format";
                errorad.style.color="green";
                adesc.style.border="2px solid green";
                return true;
            }
            else{
                errorad.innerText="Invalid format";
                errorad.style.color="red";
                adesc.style.border="2px solid red";
                return false;
            }}  
 function vald(){
                let t1=nam_val();
                let t2=bok_val();
                let t3=gen_val();
                let t4=desc_val();
                if(t1&&t2&&t3&&t4){
                  alert("Author has been added");
                  return true;
                }
                else{
                  alert("Add appropriate details in each field");
                  return false;
                }
              }                  