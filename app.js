'use strict';

var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var customerTotal = 0;
var cookiesTotal = 0;

var cookieStand = document.getElementById('cookieStand');

function CookieStore(storeName, hourlyMin, hourlyMax,cookieMin, cookieMax, avgPersale){
  this.store = storeName;
  this.minHourly = hourlyMin;
  this.maxHourly = hourlyMax;
  this.minCookie = cookieMin;
  this.maxCookie = cookieMax;
  this.avg = avgPersale;
  this.trackedSales = [];
}

CookieStore.prototype.render = function () {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);
  for(var i = 0; i < times.length; i++) {

    var customers = Math.floor(Math.random() * (this.maxHourly - this.minHourly + 1) + this.minHourly);
    customerTotal += customers;

    var cookies = Math.round(this.maxCookie - this.minCookie) + this.minCookie;
    cookiesTotal += cookies;

    var totalHour = customers * cookies;
    this.trackedSales.push(totalHour);

    var tdEl2 = document.createElement('td');
    tdEl2.textContent = totalHour;
    trEl.appendChild(tdEl2);

  }
  cookieStand.appendChild(trEl);

};
//table header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  for(var i = 0; i < times.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
  }
  trEl.appendChild(thEl);
  cookieStand.appendChild(thEl);
}

var firstPike = new CookieStore('1st and Pike ', 22, 44, 22, 70, 6.3);
var seaTac = new CookieStore('SeaTac ', 15, 33, 30, 40, 1.2);
var seaCenter = new CookieStore('Seattle Center ', 25, 75, 25, 105, 3.7);
var capHill = new CookieStore('Captiol Hill ', 20, 55, 20, 40, 2.3);
var alkiWest = new CookieStore('Alki ', 40, 65, 40, 75, 4.6);


firstPike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alkiWest.render();
makeHeaderRow();
