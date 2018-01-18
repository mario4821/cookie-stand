# cookie-stand
salmon cookie stand

makeHeaderRow();
firstPike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alkiWest.render();

console.log(firstPike);

//holds data

tdel.textContent = this.min;




tdEl = document.createElement('td');
tdEl.textContent = this.max;
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = this.min;
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = this.avg;
trEl.appendChild(tdEl);


};



var thEl = document.createElement('th');
thEl.textContent = '7am';
trEl.appendChild(thEl);

cookieStand.appendChild(trEl);
}

makeHeaderRow();
firstPike.render();










  randomCustomers: function () {
  },
  cookiesPurchased: function() {
  },
  cookieSales: function() {
    var sales = [];
    var total = 0;
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
