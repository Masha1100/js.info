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