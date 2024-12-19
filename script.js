// Chapter-4
// Question-1

document.write("<h1>Rules for naming JS variables</h1><br>");
document.write("<p>variable names only coantian ,number,$ and_ .For Example: $my_1stVaraible </p>");
document.write("<p>variable must begin with a letter, $ or _ . For Example :$name, _name or name</p> ");
document.write("<p>Variable names are case Sensitive</p>");
document.write("<p>Variable names should not be JS keyword</p> <br><br>");


// Chapter-5
// Question-1
// Additon of two numbers
var num1 = 3;
var num2 = 5;
var result = num1 + num2;
document.write("<br><br><br>");
document.write("<strong>Sum of " + num1 + " and " + num2 + " is " + result + "</strong>");


// Question-2
// Subtraction of two numbers
var num1 = 3;
var num2 = 5;
var result = num1 - num2;
document.write("<br>");
document.write("<strong>Sum of " + num1 + " and " + num2 + " is " + result + "</strong>");

// Multiplication of two numbers
var num1 = 3;
var num2 = 5;
var result = num1 * num2;
document.write("<br>");
document.write("<strong>Sum of " + num1 + " and " + num2 + " is " + result + "</strong>");

// Division of two numbers
var num1 = 3;
var num2 = 5;
var result = num1 / num2;
document.write("<br>");
document.write("<strong>Sum of " + num1 + " and " + num2 + " is " + result + "</strong>");

//Modulus of two numbers
var num1 = 3;
var num2 = 5;
var result = num1%num2 == 0 ? "Even" : "Odd";
document.write("<br>");
document.write("<strong>Sum of " + num1 + " and " + num2 + " is " + result + "</strong><br><br><br><br>");

// Question-3
var num ;
document.write("<br><br><br>");
document.write("<stronge>Value after variable declaration is "+ num +"</stronge><br>")

var initialNum = 5
document.write("<stronge>initial value: "+ initialNum +"</stronge><br>")

num = 6
document.write("<stronge>value after  increment: "+ num +"</stronge><br>")

num =13
document.write("<stronge>value after  addition: "+ num +"</stronge><br>")

num =12
document.write("<stronge>value after  decrement: "+ num +"</stronge><br>")

num =0
document.write("<stronge>The Remainder is: "+ num +"</stronge><br><br><br><br>")


// Question-3

var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
var result = celsius + "C  is  " + fahrenheit + "F.";
document.write("<br><br><br>");
document.write("<strong>"+ result +"</strong><br>");

var fahrenheit =70;
var celsius = (fahrenheit - 32) * 5/9;
var result = fahrenheit + "F  is  " + celsius + "C.";
document.write("<strong>"+ result +"</strong><br><br><br><br>");




// Chapter-6
// Question-5

let table = 4;
document.write(table + " x 1 = " + table*1 + "<br>");
document.write(table + " x 2 = " + table*2 + "<br>");
document.write(table + " x 3 = " + table*3 + "<br>");
document.write(table + " x 4 = " + table*4 + "<br>");
document.write(table + " x 5 = " + table*5 + "<br>");
document.write(table + " x 6 = " + table*6 + "<br>");
document.write(table + " x 7 = " + table*7 + "<br>");
document.write(table + " x 8 = " + table*8 + "<br>");
document.write(table + " x 9 = " + table*9 + "<br>");
document.write(table + " x 10 = " + table*10 + "<br>");



// Question-5

document.write("<h1> Shoppong Cart</h1>")
var price1 = 650;
document.write("Price of 1st item is "+ price1 +"<br>");
var quantity1 = 3;
document.write("Quantity of 1st item is "+ quantity1 +"<br>");
var price2 = 100;
document.write("Price of 2nd item is "+ price2 +"<br>");
var quantity2 = 7;
document.write("Quantity of 2nd item is "+ quantity2 +"<br>");
const shipping  =100;
document.write("Shipping Cost is "+ shipping +"<br>");
var resultCart = (price1 * quantity1) + (price2 * quantity2) + shipping;
document.write("<br><br>");
document.write("Total Cart Price is "+ resultCart +"<br>");

// Question-6

document.write("<h1> MARKS SHEET</h1>")
var  totalmark = 980;
document.write("totalMarks:"+ totalmark + "<br>");
var marks_Obtained = 840;
document.write("Mark Obtained:"+ marks_Obtained +"<br>");
var percantage = (marks_Obtained/totalmark)*100
document.write("Percentage:"+ percantage +"%<br>");


// Question-6

document.write("<h1> Currency IN PKR</h1>")
var dollar =10;
var rupee = 104.80
var resultpkrs = dollar * rupee;
var riyal = 25;
var rupeepk = 28
var resultpk = riyal * rupeepk;
var hamza = resultpk+ resultpkrs;
document.write("<br>");
document.write("Total Currency In PKR:"+hamza +"<br>");



// Question-7

document.write("<h1> AGE CALCULATOR</h1>")
var currentYear = 2024;
document.write("Current Year:"+currentYear+"<br>");
var birthyear1= 2004;
document.write("Birth Year:"+birthyear1+"<br>");
var age = currentYear - birthyear1;

document.write("your Age:"+age +"<br>");


// Question-8

document.write("<h1>THE GEOMETRIZER</h1>")
var radius = 20;
document.write("Radius:"+radius+"<br>");
var area = Math.PI * radius * radius;
document.write("Area of Circle:"+area +"<br>");
var circumference = 2 * Math.PI * radius;
document.write("Circumference of Circle:"+circumference +"<br>");


// Question-9

document.write("<h1>The Lifetime Supply Calculator:</h1>")
var fvrtsnacks = "CHOCOLATE CHIP "
document.write("Favourite Snacks:"+fvrtsnacks+"<br>");
var age20 = 20;
document.write(" Current Age:"+age20+"<br>");
var maxage = 100;
document.write(" Estimated Maximum Age:"+maxage+"<br>");
var perday1 = 3;
document.write(" Amount of Snacks Per Day:"+perday1+"<br>");
var total1 = (maxage - age20) * perday1 * 365;
document.write("You will need "+total1+" "+fvrtsnacks+" to last you until the ripe old age of "+maxage+".");    


// Question-9


document.write("<h1>Result:</h1>")
var a10 = 10;
document.write("The Value of a is : "+a10+"<br>")
document.write("....................................")
document.write("<br><br>")
++a10
document.write("The Value of ++a is : "+ +a10+"<br>")
document.write("Now The vlaue of a  is :"+a10+"<br><br>")
document.write("The Value of ++a is : "+ +a10+"<br>")
document.write("Now The vlaue of a  is :"+ ++a10+"<br><br>")
--a10
document.write("The Value of --a is : "+ +a10+"<br>")
document.write("Now The vlaue of a  is :"+a10+"<br><br>")
document.write("The Value of --a is : "+ +a10+"<br>")
document.write("Now The vlaue of a  is :"+ --a10+"<br><br>")
