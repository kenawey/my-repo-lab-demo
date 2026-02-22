var student = {
  fNmae: "john",
  age: 23,
  grades: { mathmatics: 90, science: 60, literature: 50 },
  contactInfo: {
    email: "mmostafa9396@gmail.com",
    phone: "01027208732",
    address: { city: "cairo", country: { cname: {names:"mohamed"} } },
  },
};
// console.log(typeof student);
var result = "";
var previousLabel = "";
function display(myObj) {
  var objKeys = Object.keys(myObj); // get keys 
  var myvalues = Object.values(myObj);//get values 
  for (var i = 0; i < objKeys.length; i++) {
    if (typeof myvalues[i] != "object") {
      result += `${previousLabel != objKeys[i] ? previousLabel : ""}${objKeys[i]}: ${myvalues[i]} \n`;
    } else {
      previousLabel += `${objKeys[i]}.`;
      // result+='.';
      display(myvalues[i]);
      previousLabel = "";
    }
  }
  return result;
}

/*********first customization by chat gpt  */

// var result = "";
// var previousLabel = "";
function display(myObj, prefix, result) {
  var keys; // get keys
  var i;//iterate with it 
  var key; // get key by key 
  var value; // get value key

  prefix = prefix || "";
  result = result || [];

  keys = Object.keys(myObj);

  for (i = 0; i < keys.length; i++) {
    key = keys[i];
    value = myObj[key];

    if (value !== null && typeof value === "object") {
      display(value, prefix + key + ".", result);
    } else {
      result[result.length] = prefix + key + ": " + value;
    }
  }

  return result.join("\n");
}



console.log(display(student));






/**
 * problem 2
 */

var book1 = {title : "book1", author : "name1"}
var book2 = {title : "book5", author : "name1"}
var Libarary={books: [book1, book2]}

function displayBookTitles(myObj){

    var mykeys=Object.keys(myObj);
    // console.log(mykeys.length)
    for(var i = 0 ;i<mykeys.length;i++){
        var element= myObj [mykeys[i]]
        for(var i=0;i<element.length;i++)
            console.log(element[i].title)
        // console.log(Object.keys(Libarary)[i])[i];

    }

}
displayBookTitles(Libarary);

/***
 * problem 3
 */
/*
 function applyOperation(operand1 , operand2 ,operation) {
    // console.log("do something");
    return operation(operand1,operand2);
}




function add (num1 ,num2) {
    return("adding!"+ (num1+num2));
}

function subtract (num1 ,num2) {
    
        return("subtract!"+ (num1-num2));
    
}

function mul (num1 ,num2) {
    
        return("mul!"+ (num1*num2));
    
}
function divid (num1 ,num2) {
    if(num2===0)
        return ("can not divid by 0 !");
    else 
        return(num1/num2)
    
}
console.log(applyOperation(5,3,add)); 
console.log(applyOperation(5,3,mul)); 
// console.log(applyOperation(5,3,divid)); 
// console.log(applyOperation(5,3,subtract)); 

console.log(applyOperation(5,3,(a,b)=>a-b)); 
console.log(applyOperation(5,3,(a,b)=>a/b)); 

*/

/**
 * problem 4
 */
/*
function processArray(numbers , myCallBack){
var arrLength=numbers.length;
var str="";

    for(var i=0 ;i <arrLength;i++){
        // str+= 
        str+= square(numbers[i])+' ';

    }
    return str;

}
function square(number){
    return number*number;
}
console.log(processArray([1,2,3,4,5,6],square));
*/
/*
function  createRandom(names){

var number1= Math.trunc((Math.random())*(names.length));
var numbrer2=Math.trunc((Math.random())*(names.length));
if(number1==numbrer2){
number1=(number1+1)%names.length;
}
return[names[number1],names[numbrer2]];

}

var names = ["mohmed","islam","sandra","fatma","Ali"]
document.writeln("input :   "+ names+"<br>");
document.writeln("output  : "+createRandom(names)+"<br>");

*/
