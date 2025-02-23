//Functions
//way1
// function sum(a,b){
//     let sum = a+b;
//     return(`my sum is ${sum}`);
// }
// console.log(sum(12,6));

//way2 -> first class function
let ans = function print(){
    return ("I am print ka functon");
}
// console.log(print());
console.log(ans());