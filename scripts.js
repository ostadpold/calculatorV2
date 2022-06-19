let firstOp = document.getElementById("hiddenOp");
let secondOp = document.getElementById("shownOp");
let Display = document.getElementById("myDisplay");
let inDisplay = String();
let invalue = String();
let hiddenOp = document.querySelectorAll('.hideOp');
let hiddenOpvalue = ["pow","sqrt","braces","pi","e"];
let operators = document.querySelectorAll('.Op');
let Operatorsvalue = ["clear","delete","percent","equals"];
let basicOp = document.querySelectorAll('.basicOp');
let basicOpvalue = ["/","*","-","+"];
let powflag = false;
let count = 0;
for(let i=0;i<basicOp.length;i++){
    basicOp[i].setAttribute("value",basicOpvalue[i]);
}
for(let i=0;i<operators.length;i++){
    operators[i].setAttribute("value",Operatorsvalue[i]);
}
for(let i=0;i<hiddenOp.length;i++){
    hiddenOp[i].setAttribute("value",hiddenOpvalue[i]);
}
function Operators_basic(event) {
    invalue = event.target.attributes[2].value;

    changevalue(invalue,invalue,"Add");
    invalue="";
}
function Operators(event){
    let key =  event.target.attributes[2].value;
    if(key == "clear"){
        Clear();
    }
    if(key == "delete"){
        Delete();
    }
    if(key == "percent"){
        Percent();
    }
    if(key == "equals"){
        Equals();
    }
    if(key == "pow"){
        Pow();
    }
    if(key == "sqrt"){
        sqrt();
    }
    if(key == "braces"){
        braces();
    }
    invalue="";
}
function Clear(){
    // invalue = inDisplay;
    invalue = "";

    changevalue(invalue,invalue,"Replace");
    invalue = "";
}
function Delete(){
    // invalue = inDisplay;
    invalue = inDisplay;
    invalue = invalue.slice(0,-1);

    changevalue(invalue,invalue,"Replace");
    invalue = "";
}
function Percent(){
    // invalue = inDisplay;
    invalue = inDisplay;
    invalue = String(invalue/100);
    animate();

    changevalue(invalue,invalue,"Replace");
    invalue = "";
}
function Equals(){
    // invalue = inDisplay;
    if(powflag){
        let array = Display.value.split("^");
        // console.log(array);
        invalue = Math.pow(array[0],array[1]);
        powflag = false;
    }else{
        invalue = inDisplay;
        invalue = eval(invalue);
    }
    animate();

    changevalue(invalue,invalue,"Replace");
    invalue = "";
}
function Numbers(event){
    let spinvalue = (event.path[0].textContent);
        let value = spinvalue.trim();
    if(value == "e"){
        value = "2.71";
    }
    if(value == "pi"){
        value = "3.14";
    }
    changevalue(value,value,"Add");
}
function Pow(){
    invalue = "^";
    powflag =true;

    changevalue(invalue,invalue,"Add");
    invalue = "";
}
function sqrt(){
    invalue = Display.value;
    invalue = Math.sqrt(invalue);
    
    animate();
    changevalue(invalue,invalue,"Replace");
    invalue = "";
}
function braces(){
    invalue = "(";
    if(count%2 == 0){
        invalue = "(";
    }else{
        invalue = ")";
    }
    changevalue(invalue,invalue,"Add");
    invalue = "";
    count++;
}
function animate(){
    Display.classList.replace('dark:bg-slate-800','dark:bg-orange-400');
    Display.classList.replace('bg-slate-200','bg-orange-400');
    setTimeout(function(){
        Display.classList.replace('dark:bg-orange-400','dark:bg-slate-800');
        Display.classList.replace('bg-orange-400','bg-slate-200');
    },800);
}
function changevalue(newvalue,invalue,method){
    if(method == "Replace"){
        Display.value = newvalue;
        inDisplay = invalue;
    }
    if(method == "Add"){
        Display.value += newvalue;
        inDisplay += invalue;
    }
    console.log("inDisplay =  " + inDisplay);
}
function toggleOperator(){
    firstOp.classList.toggle("hidden");
    firstOp.classList.toggle("block");

    secondOp.classList.toggle("w-full");
    secondOp.classList.toggle("w-4/5");
}