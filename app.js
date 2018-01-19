'use strict';

var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];

var theTable = document.getElementById('salesTable');
var theForm = document.getElementById('siteForm');





var customerTotal = 0;
var cookiesTotal = 0;

var cookieStand = document.getElementById('cookieStand');

function CookieStore(storeName, hourlyMin, hourlyMax, avgPerSale){
  this.storeName = storeName;
  this.hourlyMin = hourlyMin;
  this.hourlyMax = hourlyMax;
  this.avgPerSale = avgPerSale;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  CookieStore.all.push(this);
  // this.trackedSales = [];
}
CookieStore.allStores = [];

CookieStore.prototype.calcCustomersEachHour = function() {
  for(var i in hours) {
    this.hourlyCustomers.push(random(this.hourlyMin, this.hourlyMax));
  }
};

CookieStore.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for(var i in hours) {

    var oneHour = Math.floor(this.hourlyCustomers[i] *
    this.avgPerSale);
    this.hourlyCookies.push(oneHour);
    this.dailyTotal += oneHour;
  }
};

CookieStore.prototype.render = function() {
  this.calcCookiesEachHour();

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.hourlyCookies;
  trEl.appendChild(tdEl);

  for(var i in hours) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookies[i];
    trEl.appendChild(tdel);
  }
  var thEl = document.createElement('th');
  thEl.textContent = this.dailyTotal;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
};
function random(min,max) {
  return Math.floor(Math.random() * max - min + 1) + min;
}

function makeFooterRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals for All Stores';
  trEl.appendChild(trEl);

  for(var i in hours) {
    var hourlyTotal = 0;
    for(var j in CookieStore.allStores) {
      hourlyTotal += CookieStore.allStores[j].hourlyCookies[i]
      ;
    }
    thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  theTable.appendChild(trEl);

}

var firstPike = new CookieStore('1st and Pike ', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac ', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center ', 11, 38, 3.7);
var capHill = new CookieStore('Captiol Hill ', 20, 38, 2.3);
var alkiWest = new CookieStore('Alki ', 2, 16, 4.6);


firstPike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alkiWest.render();
makeFooterRow();

// CookieStore.prototype.render = function () {
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = this.store;
//   trEl.appendChild(tdEl);
//   for(var i = 0; i < times.length; i++) {

//     var customers = Math.floor(Math.random() * (this.maxHourly - this.minHourly + 1) + this.minHourly);
//     customerTotal += customers;

//     var cookies = Math.round(this.maxCookie - this.minCookie) + this.minCookie;
//     cookiesTotal += cookies;

//     var totalHour = customers * cookies;
//     this.trackedSales.push(totalHour);

//     var tdEl2 = document.createElement('td');
//     tdEl2.textContent = totalHour;
//     trEl.appendChild(tdEl2);

//   }
//   cookieStand.appendChild(trEl);

// };
// //table header
// function makeHeaderRow() {
//   var trEl = document.createElement('tr');
//   for(var i = 0; i < times.length; i++){
//     var thEl = document.createElement('th');
//     thEl.textContent = times[i];
//   }
//   trEl.appendChild(thEl);
//   cookieStand.appendChild(thEl);
// }




