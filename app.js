'use strict';
//make sales.html file shows stores and number of cookies sold per store. Create separate JS object literal (5 for each locale)(no constructor functions) for each shop location that stores:
//Track sales from various location
//Track number of cookies sold per hour per location
//minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer
//use random number generato
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total: '];

var firstPike = {
   hourlyMin: 23,
    hourlyMax: 65,
    avgPersale: 6.3,
    randomCustomers: function () {
        var customers = Math.floor(Math.random() *
        (this.hourlyMax - this.hourlyMin + 1) +
        this.hourlyMin);
        return customers;
    },
    cookiesPurchased: function() {
        var cookies = Math.round(this.avgPersale * this.randomCustomers());
        return cookies + 'cookies';
    },
    cookieSales: function() {
        var sales = [];
        var total = 0;
for(var i = 0; i < times.length; i++) {
   if(i === (times.length - 1)) {
       sales[i] = total + 'cookies';
       console.log(times[i] + sales[i]);
   } else {
       sales[i] = this.cookiesPurchased();
       console.log(times[i] + sales[i]);
       total += parseInt(sales[i]);
   }
}   return sales;
    },
render: function() {
        var ulEl = document.getElementById('firstPike');
        var salesToday = this.cookieSales();
    for (var i = 0; i < salesToday.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = times[i] + salesToday[i];
        ulEl.appendChild(liEl);
    }
}
}; 
firstPike.render()

//firstPike.cookieSales();

//v//ar seaTac =

//var seaCenter =

//var capHill =

//var alkiWest



/*Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
1st and Pike      |      23    |     65     |        6.3
SeaTac Airport  |      3     |     24     |        1.2
Seattle Center     |      11    |     38     |        3.7
Capitol Hill |      20    |     38     |        2.3
Alki            |      2     |     16     |        4.6
*/


//function getRandomArbitrary(min, max) {
//    return Math.random() * (max-min) + min);
//}