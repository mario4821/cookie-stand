'use strict';

var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

function cookieStore(storeName, hourlyMin, hourlyMax, avgPersale){
  this.store = storeName;
  this.min = hourlyMin;
  this.max = hourlyMax;
  this.avg = avgPersale;
}

var firstPike = new cookieStore('1st and Pike','23', '65', '6.3');
console.log(firstPike);

cookieStore.prototype.render = function () {
  //table row
  var trEl =document.createElement('tr');
};
//holds data
var tdEl = document.createElement('td');

//gives td content
tdel.textContent = this.min;

//append td to tr
trEl.appendChild(tdEl);

//append tr to table
tdEl = document.createElement('td');
tdEl.textContent = this.store;
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = this.max;
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = this.min;
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = this.avg;
trEl.appendChild(tdEl);

cookieStand.appendChild(trEl);

};


//table header
function makeHeaderRow() {
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = '6am';
trEl.appendChild(thEl);

var thEl = document.createElement('th');
thEl.textContent = '7am';
trEl.appendChild(thEl);

cookieStand.appendChild(trEl);
}

makeHeaderRow();
firstPike.render();










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

var seaTac = new cookieStore('3', '24', '1.2');
console.log(seaTac);

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

var seaCenter = new cookieStore('11', '38', '3.7');
console.log(seaCenter);

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

var capHill = new cookieStore('20', '38', '2.3');
console.log(capHill);

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

var alkiWest = new cookieStore('2', '16', '4.6');
console.log(alkiWest);

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



