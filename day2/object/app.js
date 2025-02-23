// //object

// let person = {
//     name : 'Abhi',
//     age : 20,
//     favcolor : 'Black',
//     place : 'Kothali',
//     favathlete : 'Virat Kohli'
// }

// // console.log(person);

// // console.log(person.name);

// // // console.log(person.age);

// // console.log(person['age']);

// // change properties in object
// person.name = 'Abhi Kamagouda'
// console.log(person);

// //adding new property
// person.gender = 'male';
// console.log(person);

// //delete property
// delete person.favcolor;
// console.log(person);

//advance object
// let person = {
//     name : 'Abhi',
//     age : 20,
//     favcolor : 'Black',
//     place : 'Kothali',
//     favathlete : 'Virat Kohli',
//     fun: function (){
//         return (`My name is ${this.name} and my age is ${this.age}`);
//     }
// }

// console.log(person.fun());

let person = {
    name : 'Abhi',
    age : 20,
    favcolor : 'Black',
    place : 'Kothali',
    favathlete : 'Virat Kohli',
    fun: function (){
        return (`My name is ${this.name} and my age is ${this.age}`);
    },
    newobj:{
        gender : "Male",
        Address : "Kothali",
    }
}

// console.log(person.fun());
console.log(person.newobj.Address);