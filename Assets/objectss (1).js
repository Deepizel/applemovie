
// let x = 10;
// let= y = x;
// console.log("y outside ", y);
// function increaseNum(x){
//     x++;
//     console.log("x inside ", x);
    
// }

// increaseNum(x);
// console.log("x outside ", x);
// console.log("y outside after x ", y);


// const circle = {
//     radius : 1,
//     draw(){
//         console.log("draw");
//     }
// };

// circle["color"] = "yellow";

//console.log("circle", circle);

// function createCircle(radius){
//     return {
//         radius,
//         isVisible: true,
//         draw() {

//         }
//     }
// }

// let another = { color:'yellow', ...circle, name:'kenny' };
// console.log("another ", another);

// let zeros = new Number(0);
// console.log("zer ",zeros);

// let val = Number("23");
// console.log(typeof(val.toString()));

// let guestList = "Guests:\n * John\n * Peter\n * Mary";
// console.log(guestList);



// let bill = 1e9;
// console.log(bill);

// function Circle(){
//     this.radius = 1,
//     this.draw = function(){
//         console.log("draw");
//     }
// }

// let anotherCircle = new Circle(1);

// const obj = Object.assign({}, circle);
// console.log("obj", obj);


//construction function

function Address(state, city, location){
    this.state = state;
    this.city = city;
    this.location = location;
}

let addressA = new Address('a', 'b', 'c');
let addressB = new Address('a', 'b', 'c');
let addressC = addressA;


console.log(addressA);
console.log(addressB);
console.log(addressC);

//addressC.city = 'D';

console.log(areEqual(addressA, addressB));
console.log(theSame(addressA, addressB));
console.log(theSame(addressA, addressC));


function areEqual(AddressA, AddressB){
  if(AddressA.state === AddressB.state &&
    AddressA.city === AddressB.city &&
    AddressA.location === AddressB.location){
        return true;
    }  
    return false;
}

function theSame(AddressA, AddressB){
    return AddressA === AddressB;
}

// function addressFac(state, city, location){
//     return {
//         state: state,
//         city: city,
//         location: location
//     };
// }



// let AddressX = {
//     state: 'a',
//     city: 'b',
//     location: 'c'
// }

















