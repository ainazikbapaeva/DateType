// примитивные типы данных

// undefined

// let userName;
// console.log(userName);

let userName = "Jason";
let userAge = 40;
let city = "New York";
let kyrgyz = false;
let orus = false;
let america = true;
let car = "Mercedes";
let dataSmerti = undefined;

console.log(userName);
console.log(userAge);
console.log(city);
console.log(kyrgyz);
console.log(orus);
console.log(america);
console.log(car);
console.log(dataSmerti);

// boolean

// let city = true;

// console.log(city);

// number

// let number = "50";

// console.log(typeof number);

// string

// let userName = "Jason Stathem";
// let userName2 = "Jason Stathem";
// let userName3 = prompt("what is your name?");

// let userInfo = alert(`Hello ${userName3} i miss you`);

// console.log(typeof userName);
// console.log(typeof userName2);
// console.log(userInfo);

// let userName3 = prompt("what is your name?");

// let userInfo = console(`Hello ${userName3} i miss you`);

// console.log(userInfo);

// null

// bitInt

// 5 * 5 * 5 = 125
// 2 * 2 * 2 = 8
//  3 * 3 * 3 * 3 = 81

// symbol

// let info = Symbol("Ramazan").toString("");
// alert(info);

// не примитивные типы данных

// object

// const user = {
//   name: prompt("user name?"),
//   age: prompt("user age"),
//   city: prompt("user city"),
//   car: prompt("user car"),
//   phoneNumber: prompt("user phone number"),
//   phoneMarca: prompt("user phone marca"),
// };

// console.log(user);

// преобразование типов

// явное преобразование типов

// string to number

// const adidas = "100";

// console.log(adidas);

// console.log(typeof Number(adidas));

// number to string

// let nike = 50;

// console.log(typeof String(nike));

// boolean to number

// let kyrgyz = true;

// console.log(kyrgyz);

// console.log(Number(kyrgyz));

// number to boolean

// let number = -1;

// console.log(number);

// console.log(Boolean(number));

// не явное преобразование типов

// let number1 = prompt("type number");
// let number2 = prompt("type number");

// let sum = number1 - number2;

// console.log(sum);

// let n1 = "50" - 45;

// console.log(n1);



// const form=document.getElementById("form");
// const username=document.getElementById("username");
// const email=document.getElementById("email");
// const password=document.getElementById("password");
// const confirm=document.getElementById("confirm");
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     checkInputs();
// });
// function checkInputs(){
//     const usernamevalue=username.value.trim();
//     const emailvalue=email.value.trim();
//     const passwordvalue=password.value.trim();
//     const confirmvalue=confirm.value.trim();}   
//     if(usernamevalue ){
//         setError(username,"This fielt cannot be blank !!!!!!");
//     }
//     else{
//         setSuccess(username);
//     }


//     if(emailvalue  ){
//         setError(email,"This fielt cannot be blank !!!!!!");
//     }
//     else if (!isemail(emailvalue)){
//         setError(email,"Chect the email dude !!!!!!");
//     }
//     else{
//         setSuccess(email);
//     }

//     if(passwordvalue   ){
//         setError(password,"This fielt cannot be blank !!!!!!");
//     }
//     else if(passwordvalue.length<4){
//         setError(password,"Password is too smail!!");
//     }
//     else{
//         setSuccess(password);
//     }

// if(confirmvalue  ){
//     setError(confirm,"This field cannot be blank !!!!!!");
// }else if(passwordvalue = confirmvalue){
//     setError(confirm,"Passwort and Confirm Passwort must be same.");
// }
// else{
//     setSuccess(confirm);
// }

// function setError(input,msg){
//     const formControl = input.preventElement;
//     const small=formControl.querySelector("small");
//     small.innerText=msg;
//     formControl.className="form-control error";
// }

// function setSuccess(input){
//     const formControl=input.parentElement;
//     formControl.className="form-control success";
// }
