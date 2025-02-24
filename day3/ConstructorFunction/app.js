

// function Details(){
//     this.name = "Abhi";
//     this.age = "20";
//     this.address = "Kothali"
// }

// let user = new Details();
// console.log(user.name);

//custom constructor function
function Details(hesaru,vayassu,ooru){
    this.name = hesaru;
    this.age = vayassu;
    this.address = ooru;
    this.description = function(){
        return(`My name is ${this.name} and My age is ${this.age}`);
    }
}

let user = new Details("Abhi",20,"Kothali")
let user1 = new Details("Vivek",21,"Bedakihal");
//console.log(user);
console.log(user.description());
//console.log(user1);
console.log(user1.description());