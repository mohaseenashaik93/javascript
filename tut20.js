

let vegitables = ['tomato','mirchi', 'potato'];

localStorage.setItem('Name', 'Mohaseena');
localStorage.setItem('vegitables1', JSON.stringify(vegitables));

let veg = JSON.parse(localStorage.getItem('vegitables1'));

console.log(veg); 

