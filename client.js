// Number.toExponential() //
let x = 9.656;
document.getElementById("expo").innerHTML =
  x.toExponential() + "<br>" + 
  x.toExponential(2) + "<br>" + 
  x.toExponential(4) + "<br>" + 
  x.toExponential(6);

// Number.toFixed() //
let x = 9.656;
document.getElementById("fixed").innerHTML =
  x.toFixed(0) + "<br>" +
  x.toFixed(2) + "<br>" +
  x.toFixed(4) + "<br>" +
  x.toFixed(6);


// String.length; //
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("leng").innerHTML = text.length; 

// String.substring() //
let str = "Apple, Banana, Kiwi";
document.getElementById("sub").innerHTML = str.substring(7,13);


// Array.pop() //
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("pop1").innerHTML = fruits;
fruits.pop();
document.getElementById("pop2").innerHTML = fruits;

// Array.push() //
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo2").innerHTML = fruits;
