let user = {};
user.name = "John";
user['surname'] = 'Smith';
user.name = 'Pete';
delete user.name;
let empty = {}; 

function isEmpty(object) {
    for (let key in object){
        return false;//Just loop over the object and return false immediately if there’s at least one property.
    }
    return true
}

function countSallary (object) {
    let sum = 0;
    for (let key in object) {
        sum += object[key];
    } 
    return sum;
}

let team = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let teamE = {};

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
function multiplyNumeric(obj) {
    for (const key in obj) {
        console.log(typeof(obj[key]));
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;   
            console.log(obj[key]); 
        }
    }
}  
multiplyNumeric(menu);
console.log(menu);  

