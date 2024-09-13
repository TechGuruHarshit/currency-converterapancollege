const BASE_URL =
" https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
  let finalAmount = amtVal * rate;
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateExchangeRate();
});






























































































































// const URL="https://cat-fact.herokuapp.com/facts";
// const getFacts=async()=>{
// console.log("getting data............");
// let response=await fetch(URL);
// console.log(response);
// let data=await response.json();
// console.log(data[0].text);
// };








































// const getpromise =()=>{
//     return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//     //reject("error")
// });
// };

// let promise=getpromise();
// promise.then((xyz)=>{
// console.log("promise fullfiled",xyz);
// })
// promise.catch((utr)=>{
//     console.log("promise not fullfiled",utr);
//     })

// const myPromise = new Promise((resolve, reject) => {    
//     let condition=9;    
      
//     if(condition<0) {      
//         resolve('Promise is resolved successfully and then() menthod will be called');    
//     } else {      
//         reject('Promise is rejected and catch() medhod will be called');    
//     }  
// });  
    
//   myPromise.then((message) => {   
//     console.log(message,"done");  
// }).catch((message) => {   
//     console.log(message,"not done");  
// });  
//--------------------------------------------Promise chaining-------------------------------------
// function getdata(dataId) {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("sucess");
//     }, 5000);
//      });
// }

// //console.log("get data1...");

// getdata(1)
// .then((res)=>{
//     return getdata(2);
// })
//     .then((res)=>{
//         return getdata(3);
//     })
//     .then((res)=>{
//         console.log("sucess");
//     });
   



//--------------------------------------callback hell use this with upr code------------------------------------------------- 
// getdata(1,()=>{
//     console.log("getting data 2......");
//     getdata(2,()=>{
//         console.log("getting data 3......");
//     getdata(3)
// });
// });





//-----------------------------------------this is promise -------------------------------
// function Asyncfunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data1");  
//        resolve("sucess");    
//                 }, 4000);
//     });
// };
// function Asyncfunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data2");  
//        resolve("sucess");    
//                 }, 4000);
//     });
// };
// console.log("fetching Asyncfunction1 data1...");
// Asyncfunction1().then((res) => {   
// console.log("fetching Asyncfunction2 data2...");
// Asyncfunction2().then((res) => {});
//     });  
//------------------------------------------Async await---------------------------------------------------------
//  function getdata(dataId) {
//          return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("sucess");
//         }, 5000);
//          });
//     }
// (async function(){
// console.log("getting data 1......");
// await getdata(1);
// console.log("getting data 2......");
// await getdata(2);
// console.log("getting data 3......");
// await getdata(3);
// console.log("getting data 3......");
// await getdata(4);
//     })();