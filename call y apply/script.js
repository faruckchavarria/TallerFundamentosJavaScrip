let o = {
    carId: 123,
    getId: function(){
	 return this.carId;
    } 
};
let newCar = { carId: 456 };

console.log( o.getId().call(newCar));

//=============================
let o = {
    carId: 123,
    getId: function(prefix){
	 return prefix + this.carId;
    } 
};
let newCar = { carId: 456 };
console.loglet o = {
    carId: 123,
    getId: function(){
	 return this.carId;
    } 
};
let newCar = { carId: 456 };

console.log( o.getId().call(newCar));

//=============================
let o = {
    carId: 123,
    getId: function(prefix){
	 return prefix + this.carId;
    } 
};
let newCar = { carId: 456 };
console.log(o.getId().apply(newCar, ['ID: '])); //456
