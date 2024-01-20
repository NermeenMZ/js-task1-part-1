document.getElementById("test1").innerHTML="hi"
alert("hello")
console.log("Bay")


// المسألة الاولى 
function average (a,b,c,d,e,f,g,h,l,n){
 var numbers=(a+b+c+d+e+f+g+h+l+n)/ 2;
 console.log(numbers);
}
average(1,2,3,4,5,6,7,8,9,10,);


//المسألة الثانية
function triangle (base,height){
return (base * height)* 0.5 ;
}
console.log(triangle (5,10));


//المسألة الثالثة 
function AGE(YEARS) {
    return(YEARS *360);
}
console.log (AGE(10));

// المسالة الرابعة
function sum(a,b){
return(a+b);
}
console.log (sum(2,3));

// المسألة الخامسة
var names =["nour","kareem","nermeen","omnia","eman","lamia"]

document.getElementById("test2").innerHTML=names [0]
    
// المسالة السادسة 
var NONO = ("nermeen mohamed abd elhamed");
document.getElementById("test3").innerHTML= NONO;


// المسالة السابعة
function  second (a){
    var hour =(a)*360 ;
    console.log(hour);
}
second (2);

//المسالة الثامنة
function than350 (a,b,c,d){
    var sum =(a+b+c+d);
    if  ( sum > 350){
    return true;
 } else {( sum < 350)
        return false;
    }
}
console.log(sum (100,150,200,250));
// المسالة الثامنة طريقة 2
function than350 (sum){
    var sum =(100+200+150+120)
    if  ( sum > 350){
        return true;
    } else {( sum < 350)
           return false;
       }
   }
document.getElementById ("test4").innerHTML= than350 ;
console.log(than350);

// المسالة التاسعة
function zero(a){
    if(a===0){
        return true;
    }else{
        return false;
    }
}
console.log (zero(2));

//المسالة العاشرة 
function zero (x,y){
    return (x % y);
}
console.log (zero (75,3));

// المسالة الحادية عشر
function calce(num1,num2){
    if(num1> num2){
        return num1;
    } else if(num1===num2){
        return (num1===num2);
    }
}
console.log(calce(2,1));
console.log(calce(1,1));

//   (من شات )المسالة الثانية عشر

function isNumber(variable) {
    return !isNaN(variable) && typeof variable === 'number';
  }
  
  let num1 = 42;
  let num2 = 'abc';
  
  console.log(isNumber(num1)); 
  console.log(isNumber(num2)); 

  // المسالة الثالثة عشر 
  var time = new date().getday();
  document.getElementById("test6").innerHTML =time ;
  















