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
}

CookieStore.prototype.calcCookiesEachHour = function() {
  this.calcCustomersEachHour();
  for(var i in hours) {

    var oneHour = Math.floor(this.hourlyCustomers[i] * 
    this.avgPerSale);
    this.hourlyCookies.push(oneHour);
    this.dailyTotal += oneHour;
}
}

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
} 
function random(min,max) {
  return Math.floor(Math.random() * max - min +1)) + min)
}:


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

// var firstPike = new CookieStore('1st and Pike ', 22, 44, 22, 70, 6.3);
// var seaTac = new CookieStore('SeaTac ', 15, 33, 30, 40, 1.2);
// var seaCenter = new CookieStore('Seattle Center ', 25, 75, 25, 105, 3.7);
// var capHill = new CookieStore('Captiol Hill ', 20, 55, 20, 40, 2.3);
// var alkiWest = new CookieStore('Alki ', 40, 65, 40, 75, 4.6);


// firstPike.render();
// seaTac.render();
// seaCenter.render();
// capHill.render();
// alkiWest.render();
// makeHeaderRow();
