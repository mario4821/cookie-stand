'use strict';

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var theTable = document.getElementById('theTable');
var theForm = document.getElementById('siteForm');

//var cookieStand = document.getElementById('cookieStand');

function CookieStore(storeName, hourlyMin, hourlyMax, avgPerSale){
  this.storeName = storeName;
  this.hourlyMin = hourlyMin;
  this.hourlyMax = hourlyMax;
  this.avgPerSale = avgPerSale;
  this.hourlyCustomers = [];
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  CookieStore.allStores.push(this);
}

CookieStore.allStores = [];

CookieStore.prototype.numHourlyCustomers = function() {
  for(var i = 0; i < times.length; i++) {
    this.hourlyCustomers.push(ranNum(this.hourlyMin, this.hourlyMax));
  }
};

CookieStore.prototype.numHourlyCookies = function() {
  this.numHourlyCustomers();
  this.dailyTotal = 0;

  for(var i = 0; i < times.length; i ++) {
    var oneHourCookie = Math.floor(this.avgPerSale * this.hourlyCustomers[i]);
    this.hourlyCookies.push(oneHourCookie);
    this.dailyTotal += oneHourCookie;
  }
};

CookieStore.prototype.render = function() {
  this.numHourlyCustomers();
  this.numHourlyCookies();

  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  trEl.appendChild(tdEl);
  tdEl.textContent = this.storeName;

  for(var i = 0; i < times.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookies[i];
    trEl.appendChild(tdEl);
  }
  var customerTotal = document.createElement('td');
  customerTotal.textContent = this.dailyTotal;
  trEl.appendChild(customerTotal);
  theTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('th');
  trEl.appendChild(tdEl);

  for(var i = 0; i < times.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl); }

  var customerTotal = document.createElement('td');
  customerTotal.textContent = 'Total Customers Daily';
  trEl.appendChild(customerTotal);

  theTable.appendChild(trEl);
}

function makeFooterRow() {
  var customerTotal = 0;
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = 'Hourly Totals for All Locations';
  trEl.appendChild(thEl);

  for (var i = 0; i < times.length; i++){
    var cookiesTotal = 0;
    for(var j in CookieStore.allStores) {
      cookiesTotal += CookieStore.allStores[j].hourlyCookies[i];
    }
    customerTotal += cookiesTotal;

    thEl = document.createElement('th');
    thEl.textContent = cookiesTotal;
    trEl.appendChild(thEl);
  }

  var tdEl = document.createElement('th');
  tdEl.textContent = customerTotal;
  trEl.appendChild(tdEl);

  theTable.appendChild(trEl);
}

function handleForm(event) {
  event.preventDefault();

  var newStoreName = event.target.storeName.value;
  var newHourlyMin = event.target.hourlyMin.value;
  var newHourlyMax = event.target.hourlyMax.value;
  var newAvgPerSale = event.target.avgPerSale.value;

  new CookieStore(newStoreName, newHourlyMin, newHourlyMax, newAvgPerSale);

  theTable.innerHTML = '';
  makeHeaderRow();
  renderTable();
  makeFooterRow();
  theForm.reset();
}

function ranNum(min,max) {
  return Math.random() * (max - min + 1) + min;
}

function renderTable() {
  for(var i in CookieStore.allStores){
    CookieStore.allStores[i].render();
  }
}

new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('SeaTac', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Captiol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

theForm.addEventListener('submit', handleForm);

makeHeaderRow();
renderTable();
makeFooterRow();

