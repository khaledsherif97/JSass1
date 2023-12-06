//p.1
/*var num= Number( window.prompt("enter ur num"));
document.getElementById("print").innerHTML= num;*/
//=================================================
//p.2
/*var num= Number( window.prompt("enter ur num "));
if(num % 4===0 && num % 3===0){
    document.getElementById("p2").innerHTML= "yes";
}
else{
    document.getElementById("p2").innerHTML= "no";
}*/
//================================================
//p.3
/*var num1=Number(window.prompt("enter your num1") );
var num2=Number(window.prompt("enter your num2") );
if (num2 > num1) {
    document.getElementById("p3").innerHTML= num2;
} else {
    document.getElementById("p3").innerHTML= num1;
}*/
//================================================
//p.4
/*var num= Number( window.prompt("enter ur num "));
if(num >0){
    document.getElementById("p4").innerHTML= "postive";
}
else{
    document.getElementById("p4").innerHTML= "negative";
} */
//=================================================
//p.5
/*var num1= Number( window.prompt("enter ur num1 "));
var num2= Number( window.prompt("enter ur num2 "));
var num3= Number( window.prompt("enter ur num3 "));
if(num1>num2 && num1>num3){
    document.getElementById("p5").innerHTML+= num1;
}
else if ( num2>num1 && num2>num3) {
    document.getElementById("p5").innerHTML+= num2;
}
else if ( num3>num1 && num3>num2) {
    document.getElementById("p5").innerHTML+= num3;
}
if ( num1<num2 && num1<num3) {
    document.getElementById("demo").innerHTML+= num1;
}
else if ( num2<num1 && num2<num3) {
    document.getElementById("demo").innerHTML+= num2;
}
else if ( num3<num1 && num3<num2) {
    document.getElementById("demo").innerHTML+= num3;
} */
//==================================================
//p.6
/*var num= Number( window.prompt("enter ur num "));
if (num%2==0) {
    document.getElementById("p6").innerHTML="even number";
} else {
    document.getElementById("p6").innerHTML="odd number";
}*/
//===================================================
//p.8
/*var char=  window.prompt("enter ur char ");
if ( char=="u" || char=="a" || char=="e" || char=="i" || char=="o") {
    document.getElementById("p8").innerHTML=" vowel letter";
} else {
    document.getElementById("p8").innerHTML=" consonant";
} */
//====================================================
//p.9
/*var num= Number( window.prompt("enter ur num "));
for (i=1; i<=num; i++) {
    console.log(i)
} */
//====================================================



//=================================================
//p.11
/*var num= Number( window.prompt("enter ur num "));
for (i=1;i<=num;i++)
{
  if(i%2==0){
    console.log(i)
  }
}*/
//=================================================

//p.12
/*var num1= Number( window.prompt("enter ur num "));
var num2= Number( window.prompt("enter ur power "));
 console.log(num1**num2);*/
//=================================================

//p.12.12
/*var num1= Number( window.prompt("enter ur num1 "));
var num2= Number( window.prompt("enter ur num2 "));
var num3= Number( window.prompt("enter ur num3 "));
var num4= Number( window.prompt("enter ur num4 "));
var num5= Number( window.prompt("enter ur num5 "));
document.getElementById("p122").innerHTML+=(num1+num2+num3+num4+num5);
document.getElementById("p1222").innerHTML+=(num1+num2+num3+num4+num5)/5;
document.getElementById("p12222").innerHTML+=(num1+num2+num3+num4+num5)/5;*/
//=================================================

//p.13
/*var num= Number( window.prompt("enter month number"));
if (num==1 || num==3 || num==5 || num==7 || num==9 || num==11 || num==12) {
  document.getElementById("p13").innerHTML+=("31 day");
} 
else if (num==4|| num==6 ||num==8 ||num==10) {
  document.getElementById("p13").innerHTML+=("30 day");
}
else{
  document.getElementById("p13").innerHTML+=("28 day");
}*/
//=================================================

//p.14
/*var num1= Number( window.prompt("enter your mark in Physics "));
var num2= Number( window.prompt("enter your mark in Chemistry "));
var num3= Number( window.prompt("enter your mark in Biology "));
var num4= Number( window.prompt("enter your mark in Math"));
var num5= Number( window.prompt("enter your mark in Computer "));

var grad= (((num1+num2+num3+num4+num5)/500)*100);
console.log(grad);
if (grad>=90) {
  document.getElementById("p14").innerHTML+=("A");
}
 else if(grad>=80){
  document.getElementById("p14").innerHTML+=("B");
  
}
else if(grad>=70){
  document.getElementById("p14").innerHTML+=("C");
  
}
else if(grad>=60){
  document.getElementById("p14").innerHTML+=("D");
  
}
else if(grad>=40){
  document.getElementById("p14").innerHTML+=("E");
  
}
else{
  document.getElementById("p14").innerHTML+=("F");
}*/
//=================================================

//p.15
/*var num= Number( window.prompt("enter month number"));
switch (true) {
    case num==1 || num==3 || num==5 || num==7 || num==9 || num==11 || num==12:
        document.getElementById("p15").innerHTML+=("31 day");
    break;
    case num==4|| num==6 ||num==8 ||num==10:
      document.getElementById("p15").innerHTML+=("30 day");
    break;
    case num==2:
      document.getElementById("p15").innerHTML+=("28 day");
    break;
}*/
//===================================================
//p.16
/*var char=  window.prompt("enter ur char ");
switch (true) {
  case char=="u" || char=="a" || char=="e" || char=="i" || char=="o" :
    document.getElementById("p16").innerHTML=" vowel letter";
    break;

  default:
    document.getElementById("p16").innerHTML=" consonant";
    break;
}*/
//====================================================
//p.17
/*var num1= Number( window.prompt("enter ur num1 "));
var num2= Number( window.prompt("enter ur num2 "));

switch (true) {
  case num1>num2:
    document.getElementById("p17").innerHTML+= num1;
    break;

  default:
    document.getElementById("p17").innerHTML+= num2;
    break;
}*/
//====================================================
//p.18
/*var num= Number( window.prompt("enter ur num"));
switch (true) {
  case num%2==0:
    document.getElementById("p18").innerHTML+= "even number";
    break;

  default:
    document.getElementById("p18").innerHTML+= "odd number";
    break;
}*/
//====================================================
//p.19
/*var num= Number( window.prompt("enter ur num"));
switch (true) {
  case num>0:
    document.getElementById("p19").innerHTML+= "positive number";
    break;
    case num<0:
    document.getElementById("p19").innerHTML+= "negative number";
    break;

  default:
    document.getElementById("p19").innerHTML+= "Zero";
    break;
}*/
//===================================================







