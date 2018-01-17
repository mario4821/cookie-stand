'use strict';

var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

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
    return cookies + ' cookies';
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i < times.length; i++) {
      if(i === (times.length - 1)) {
        sales[i] = total + ' cookies';
        console.log(times[i] + sales[i]);
      } else {
        sales[i] = this.cookiesPurchased();
        console.log(times[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    } return sales;
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
firstPike.render();

var seaTac = {
  hourlyMin: 3,
  hourlyMax: 24,
  avgPersale: 1.2,
  randomCustomers: function () {
    var customers = Math.floor(Math.random() *
          (this.hourlyMax - this.hourlyMin + 1) +
          this.hourlyMin);
    return customers;
  },
  cookiesPurchased: function() {
    var cookies = Math.round(this.avgPersale * this.randomCustomers());
    return cookies + ' cookies';
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i < times.length; i++) {
      if(i === (times.length - 1)) {
        sales[i] = total + ' cookies';
        console.log(times[i] + sales[i]);
      } else {
        sales[i] = this.cookiesPurchased();
        console.log(times[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    } return sales;
  },
  render: function() {
    var ulEl = document.getElementById('seaTac');
    var salesToday = this.cookieSales();
    for (var i = 0; i < salesToday.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + salesToday[i];
      ulEl.appendChild(liEl);
    }
  }
};
seaTac.render();

var seaCenter = {
  hourlyMin: 11,
  hourlyMax: 38,
  avgPersale: 3.7,
  randomCustomers: function () {
    var customers = Math.floor(Math.random() *
            (this.hourlyMax - this.hourlyMin + 1) +
            this.hourlyMin);
    return customers;
  },
  cookiesPurchased: function() {
    var cookies = Math.round(this.avgPersale * this.randomCustomers());
    return cookies + ' cookies';
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i < times.length; i++) {
      if(i === (times.length - 1)) {
        sales[i] = total + ' cookies';
        console.log(times[i] + sales[i]);
      } else {
        sales[i] = this.cookiesPurchased();
        console.log(times[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    } return sales;
  },
  render: function() {
    var ulEl = document.getElementById('seaCenter');
    var salesToday = this.cookieSales();
    for (var i = 0; i < salesToday.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + salesToday[i];
      ulEl.appendChild(liEl);
    }
  }
};
seaCenter.render();

var capHill = {
  hourlyMin: 20,
  hourlyMax: 38,
  avgPersale: 2.3,
  randomCustomers: function () {
    var customers = Math.floor(Math.random() *
            (this.hourlyMax - this.hourlyMin + 1) +
            this.hourlyMin);
    return customers;
  },
  cookiesPurchased: function() {
    var cookies = Math.round(this.avgPersale * this.randomCustomers());
    return cookies + ' cookies';
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i < times.length; i++) {
      if(i === (times.length - 1)) {
        sales[i] = total + ' cookies';
        console.log(times[i] + sales[i]);
      } else {
        sales[i] = this.cookiesPurchased();
        console.log(times[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    } return sales;
  },
  render: function() {
    var ulEl = document.getElementById('capHill');
    var salesToday = this.cookieSales();
    for (var i = 0; i < salesToday.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + salesToday[i];
      ulEl.appendChild(liEl);
    }
  }
};
capHill.render();

var alkiWest = {
  hourlyMin: 2,
  hourlyMax: 16,
  avgPersale: 4.6,
  randomCustomers: function () {
    var customers = Math.floor(Math.random() *
            (this.hourlyMax - this.hourlyMin + 1) +
            this.hourlyMin);
    return customers;
  },
  cookiesPurchased: function() {
    var cookies = Math.round(this.avgPersale * this.randomCustomers());
    return cookies + ' cookies';
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
    for(var i = 0; i < times.length; i++) {
      if(i === (times.length - 1)) {
        sales[i] = total + ' cookies';
        console.log(times[i] + sales[i]);
      } else {
        sales[i] = this.cookiesPurchased();
        console.log(times[i] + sales[i]);
        total += parseInt(sales[i]);
      }
    } return sales;
  },
  render: function() {
    var ulEl = document.getElementById('alkiWest');
    var salesToday = this.cookieSales();
    for (var i = 0; i < salesToday.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = times[i] + salesToday[i];
      ulEl.appendChild(liEl);
    }
  }
};
alkiWest.render();


/*Location        | Min / Cust | Max / Cust | Avg Cookie / Sale
----------------|------------|------------|-------------------
1st and Pike      |      23    |     65     |        6.3
SeaTac Airport  |      3     |     24     |        1.2
Seattle Center     |      11    |     38     |        3.7
Capitol Hill |      20    |     38     |        2.3
Alki            |      2     |     16     |        4.6
*/

