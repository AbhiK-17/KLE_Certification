//Sync
// console.log("first");
// console.log("second");
// console.log("third");

//Async
// console.log("first");
// setTimeout(function(){
//     console.log("It will run after 2 seconds")
// },2000)
// console.log("third");

// console.log("Kohli");
// setTimeout(function(){
//     console.log("Kohli")
// },500)
// setTimeout(function(){
//     console.log("goes")
// },1000)
// setTimeout(function(){
//     console.log("down")
// },1500)
// setTimeout(function(){
//     console.log("the")
// },2000)
// setTimeout(function(){
//     console.log("ground")
// },2500)
// setTimeout(function(){
//     console.log("Kohli")
// },3000)
// setTimeout(function(){
//     console.log("goes")
// },3500)
// setTimeout(function(){
//     console.log("Out")
// },4000)
// setTimeout(function(){
//     console.log("of the")
// },4500)
// setTimeout(function(){
//     console.log("ground")
// },5000)
// console.log("Lift it Up");

//setInterval()

// setInterval(function(){
//     console.log("It will run after 2 sec")
// },2000)

let count = 0;
let intervalID = setInterval(function(){
    count++;
    console.log(`My counter count is: ${count}`);

    if(count === 10){
        clearInterval(intervalID);
        console.log('Task completed');
    }
},1000)