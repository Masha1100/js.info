// [1, 2].forEach(alert)

// let admin, name;
let a, b, c;
c = 2 + 2;
b = c;
a = c;
console.log(c+''+b+''+a);

c = 6;
b = c;
a = c;
console.log(c+''+b+''+a);


// DATA TYPES
"" + 1 + 0 //10!
"" - 1 + 0 //-1!
true + false //1!
6 / "3" //2!
"2" * "3" //6!
4 + 5 + "px" //9px!
"$" + 4 + 5 //$45!
"4" - 2 //2!
"4px" - 2 // 2??? Nan
7 / 0 //Infinity!
"  -9  " + 5 //-95!?? - 9 5
"  -9  " - 5 //-14!
null + 1//Nan??? 1
undefined + 1//nan!
" \t \n" - 2 //-2!

// let a1 = prompt("First number?", 1);
// let b1 = prompt("Second number?", 2);
//console.log(+a1 + +b1); // 12
// DATA TYPES END

//COMPARISON
5 > 4                   //true
"apple" > "pineapple"   //false
"2" > "12"              //true
undefined == null       //true
undefined === null      //false
null == "\n0\n"         //false null only equals undefined
null === +"\n0\n"       //false
//COMPARISON END

//IF...ELSE
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

let resultNew = (a + b < 4)?'Below':'Over';

let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message2= (login == 'Employee') ? 'Hello':
//     (login == 'Director') ? 'Greetings':
//     (login == '') ? 'No login':
//     '';

// && and ||
let age = 99;
if(age<14 || age>90){
  console.log(age);
}

let age2 = 909;
if(!(age2<=14 && age2<=90)){
  console.log(age2);
}

let login = prompt("Login", "");
if(login=="" || login==null){
  console.log("Canceled");
}else if(login != "Admin"){
  console.log("I don’t know you");
}else {
  let pass = prompt("Pass", "");
  if(pass=="" || pass==null){
    console.log("Canceled");
  }else if(pass != "TheMaster"){
    console.log("Wrong password");
  }else {
    console.log("Welcome");
  }
}//????????????

// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }
let i=0;
while(i<=10){
  if(i%2==0){
    console.log(i);
  }
  i++;
}

for(let j=0; j<=10; j+=2){
  console.log(j);
}

for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}

let l=0;
while(l<3){
  console.log( `number ${l}!` );
  l++;
}

// let num;
// do{
//   num=prompt("HJj",0);
// }while(num <= 100 && num)

let prime;
let n = 10;
nextPrime: for(let i=2; i<=n; i++){
  console.log(i);
  for(let j=2; j<i; j++){
    console.log(j);
    if (i % j == 0) continue nextPrime;
  }
  console.log("Prime" + i);
}

//switch
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// if(browser === 'Edge'){
//     alert( "You've got the Edge!" );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// }else{
//     alert( 'We hope that this page looks ok!' );
// }

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

// let a = +prompt('a?', '');
// switch (a) {
//   case 0:
//     alert( 0 );
//     break;
//   case 1:
//     alert( 1 );
//     break;
//   case 2:
//   case 3:
//     alert( 2,3 );
//     break;
// }
//functions
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkAge2(age){
  return age > 18 ? true : confirm('Did parents allow you?');
}
console.log(checkAge2(15));

function checkAge3(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a,b){
  return (a < b) ? a : b;
}

let first = +prompt("Enter first number", 0);
let second = +prompt('Enter second number');
function pow (fir, sec) {
  if(sec == 1){
    return fir;
  } else {
    return fir * pow(fir, sec-1);
  }
}
function pow2 (fir, sec) {
  let res = fir;
  for (let i = 1; i<sec; i++){
    res = res*fir
  }
  return res;
}
console.log(pow2(first, second));
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);