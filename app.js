'use strict';

var times = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var customerTotal = 0;
var cookiesTotal = 0;
var tableId = document.getElementById('tableId');
var trEl = document.createElement('tr');

function CookieStore(storeName, hourlyMin, hourlyMax,cookieMin, cookieMax, avgPersale){
  this.store = storeName;
  this.minHourly = hourlyMin;
  this.maxHourly = hourlyMax;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
  this.avg = avgPersale;
}

CookieStore.prototype.render = function () {
  var trEl = document.createElement('tr');
  for(var i = 0; i < times.length; i++) {

    var customers = Math.floor(Math.random() *
    (this.hourlyMax - this.hourlyMin + 1) +
    this.hourlyMin);
    customerTotal += customers;

    var cookies = Math.round(this.maxCookie - this.minCookie) + this.minCookie;
    cookiesTotal += cookies;
  }
  
  //gives td content
  var tdEl = document.createElement('td');
  tdel.textContent = this.storeName + customers + 'customers and' + cookies + 'cookies sold.';

  //append td to tr
  trEl.appendChild(tdEl);
  cookieStand.appendChild(trEl);

//append tr to table
var tdEl = document.createElement('td');
tdEl.textContent = customerTotal + ' total customers today and ' + cookiesTotal + ' cookies sold.';

trEl.appendChild(tdEl);
cookieStand.appendChild(trEl);


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
var seaTac = new CookieStore('SeaTac ', 15, 33, 30, 40);
var seaCenter = new CookieStore('Seattle Center ', 25, 75, 25, 105, 1.2);
var capitalHill = new CookieStore('Captiol Hill ', 20, 55, 20, 40);
var alkiWest = new CookieStore('Alki ', 40, 65, 40, 75);

makeHeaderRow();
firstPike.render();
seaTac.render();
seaCenter.render();
capHill.render();
alkiWest.render();