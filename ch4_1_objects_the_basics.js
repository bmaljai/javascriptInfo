let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);
//next
function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let obj1 = {};
let obj2 = {"a":1,"b":2};
//next
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let employee in salaries){
    sum += salaries[employee];
}
console.log(sum);
//next
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
const multiplyNumeric = function(obj){
    for(let key in obj){
        typeof obj[key] === 'number'?obj[key]=obj[key]*2:undefined
    }
    return obj;
}
//next
