let kopceButton=document.getElementsByTagName("button");
let inputot=document.getElementById("vnesot");
let tema=document.getElementsByClassName("theme_number");
let defTema=document.getElementById("default");
let mainWrapper=document.getElementById("main_wrp");
let equal=document.getElementById("eq");
let reset=document.getElementById("rs");
let del = document.getElementById("dl");
let mrrr;
var me=2;

tema[0].addEventListener("click",function(){
    document.body.style.backgroundColor="#fabede";
    mainWrapper.style.backgroundColor="#347870";
    equal.style.backgroundColor="#b266de";
    reset.style.backgroundColor="#fabede";
    del.style.backgroundColor="#fabede";
});
tema[1].addEventListener("click",function(){
    document.body.style.backgroundColor="#a7ebb9";
    mainWrapper.style.backgroundColor="#eddc95";
    equal.style.backgroundColor="#a7ebb9";
    reset.style.backgroundColor="#a7ebb9";
    del.style.backgroundColor="#a7ebb9";
});
tema[2].addEventListener("click",function(){
    document.body.style.backgroundColor="#f0f558";
    mainWrapper.style.backgroundColor="#292824";
    equal.style.backgroundColor="#7c469c";
    reset.style.backgroundColor="#f0f558";
    del.style.backgroundColor="#f0f558";
    
});
defTema.addEventListener("click",function(){
    document.body.style.backgroundColor="#3d4562";
    mainWrapper.style.backgroundColor="#262d42";
    equal.style.backgroundColor="#b25241";
    reset.style.backgroundColor="#687292";
    del.style.backgroundColor="#687292";
});

let prvbroj;
let vtorbroj;
let parsiranPrv;
let parsiranVtor;
let sum;
let proizvod;
let kolicnik;
let razlika;
inputot.disabled=true;

document.addEventListener("click",function(e){
switch(e.target){
    case kopceButton[0]:
        inputot.value+=kopceButton[0].innerHTML;
        break;
    case kopceButton[1]:
        inputot.value+=kopceButton[1].innerHTML;
        break;
    case kopceButton[2]:
        inputot.value+=kopceButton[2].innerHTML;
        break;
    case kopceButton[3]:
       inputot.value=inputot.value.slice(0,-1);
        break;
    case kopceButton[4]:
        inputot.value+=kopceButton[4].innerHTML;
        break;
    case kopceButton[5]:
        inputot.value+=kopceButton[5].innerHTML;
        break;
    case kopceButton[6]:
        inputot.value+=kopceButton[6].innerHTML;
        break;
    case kopceButton[7]:
        if(inputot.value.slice(-1) !== "-" && inputot.value.slice(-1) !== "+" && inputot.value.slice(-1) !== "/" && inputot.value.slice(-1) !== "x" ){
            inputot.value+="+";
        }
        break;
    case kopceButton[8]:
        inputot.value+=kopceButton[8].innerHTML;
        break;
    case kopceButton[9]:
        inputot.value+=kopceButton[9].innerHTML;
        break;
    case kopceButton[10]:
        inputot.value+=kopceButton[10].innerHTML;
        break;
    case kopceButton[11]:
        if(inputot.value.slice(-1) !== "-" && inputot.value.slice(-1) !== "+" && inputot.value.slice(-1) !== "/" && inputot.value.slice(-1) !== "x"){
            inputot.value+="-";
        }
        break;
    case kopceButton[12]:
        inputot.value+=kopceButton[12].innerHTML;
        break;   
    case kopceButton[13]:
        inputot.value+=kopceButton[13].innerHTML;
        break;
    case kopceButton[14]:
        if(inputot.value.slice(-1) !== "-" && inputot.value.slice(-1) !== "+" && inputot.value.slice(-1) !== "/" && inputot.value.slice(-1) !== "x"){
            inputot.value+="/";
        }
        break;
    case kopceButton[15]:
        if(inputot.value.slice(-1) !== "-" && inputot.value.slice(-1) !== "+" && inputot.value.slice(-1) !== "/" && inputot.value.slice(-1) !== "x"){
            inputot.value+="x";
        }
        break;
    case kopceButton[16]:
        inputot.value="";
        break;
    case kopceButton[17]:
            if(inputot.value.includes("+")){

                inputot.value.split("+");
                prvbroj=inputot.value.split("+")[0];
                vtorbroj=inputot.value.split("+")[1];
                parsiranPrv=parseInt(prvbroj);
                parsiranVtor=parseInt(vtorbroj);
                sum=parsiranPrv+parsiranVtor;
                inputot.value=sum;

            }else if(inputot.value.includes("x")){

                inputot.value.split("x");
                prvbroj=inputot.value.split("x")[0];
                vtorbroj=inputot.value.split("x")[1];
                parsiranPrv=parseInt(prvbroj);
                parsiranVtor=parseInt(vtorbroj);
                proizvod=parsiranPrv*parsiranVtor;
                inputot.value=proizvod;

            }else if(inputot.value.includes("-")){

                inputot.value.split("-");
                prvbroj=inputot.value.split("-")[0];
                vtorbroj=inputot.value.split("-")[1];
                parsiranPrv=parseInt(prvbroj);
                parsiranVtor=parseInt(vtorbroj);
               razlika=parsiranPrv-parsiranVtor;
                inputot.value=razlika;

            }else if(inputot.value.includes("/")){

                inputot.value.split("/");
                prvbroj=inputot.value.split("/")[0];
                vtorbroj=inputot.value.split("/")[1];
                parsiranPrv=parseInt(prvbroj);
                parsiranVtor=parseInt(vtorbroj);
               kolicnik=parsiranPrv/parsiranVtor;
                inputot.value=kolicnik;

            }
        break;
}
if(inputot.value == kolicnik ||inputot.value== razlika || inputot.value== sum ||inputot.value== proizvod){
    kopceButton[3].disabled=true;
}
})
