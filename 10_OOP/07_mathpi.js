const descriminator = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriminator);
//{
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// } we can make it our obj like this
console.log(Math.PI)
Math.PI = 4
console.log(Math.PI)//cant change still same value => 3.141592653589793

const Chai = {
    name: "Ginger",
    Price: "250",
    isAvailable: true
}
console.log(Chai);

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));
// {
//   value: 'Ginger',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//to change make chnges in this properties==
Object.defineProperty(Chai, "name", {writable: false, enumerable: false});
console.log(Object.getOwnPropertyDescriptor(Chai, "name"));
// {
//   value: 'Ginger',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key, value] of Object.entries(Chai)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}//those who are set to false we cant get it so we r not getting name property 