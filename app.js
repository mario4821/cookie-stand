//make sales.html file shows stores and number of cookies sold per store. Create separate JS object literal (5 for each locale)(no constructor functions) for each shop location that stores:
//Track sales from various location
//Track number of cookies sold per hour per location
//minimum number of customers per hour
//maximum number of customers per hour
//average number of cookies purchased per customer
//use random number generato
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPike = {
    min= 23,
    max= 65,
    avg= 6.3,
    cookies=

    render: function getRandomArbitrary(min, max) {
        return Math.random() * (max-min) + min);
    }; console:log(Math.random()),

    //access the ul from index.html

var firstpikeUl = document.getElementById('firstPike');

for(var i=0; i < this.cookies.length; i++) {
   //1.create list items 
    var firstpikeLi = document.createElement('li');
    //2.give them content
    firstpikeLi.textContent = times[i] + ':' + this.cookies;
    //3. append the li to the ul
    firstpikeUl.appendChild(firstpikeLi);
}
};

var seaTac = {
    min=3,
    max=24,
    avg=1.2,

    render: function getRandomArbitrary(min, max) {
        reture Math.random() * (max-min) + min);
    }; console.long(Math.random()),

    var seaTac = document.getElementById('seaTac');
    for(var i=0; i< this.minCustomers.length; i++) {

        varseatacLi
    }
}

var seaCenter =

var capHill =

var alkiWest



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