function outerFunction(innerFunction){

innerFunction();

}
function innerFunction(){
console.log("Hello World From Inner Function");
}

outerFunction(innerFunction);