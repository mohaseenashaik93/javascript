

// let vegitables = ['tomato','mirchi', 'potato'];

// localStorage.setItem('Name', 'Mohaseena');
// localStorage.setItem('vegitables1', JSON.stringify(vegitables));

// let veg = JSON.parse(localStorage.getItem('vegitables1'));

// console.log(veg); 



localStorage.setItem("Name", "Mohaseena");

let cartypes = ['benz', 'adi', 'maruti' ];

let carcheck = localStorage.setItem('cars', JSON.stringify(cartypes));

console.log(carcheck);

let newcars = JSON.parse(localStorage.getItem('cars'));

console.log(newcars);