// logDriverNames() — Receives an array of driver objects and logs the name attribute of each driver to the console.
function logDriverNames(drivers) {
  for (driver of drivers) {
    console.log(driver.name)
  }
}

// logDriversByHometown() — Receives an array of driver objects as the first argument and a location as the second argument. The function logs to the console the name attribute of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(drivers, hometown) {
  const matchingDrivers = drivers.filter(function (driver) { return driver.hometown === hometown });
  for (driver of matchingDrivers) {
    console.log(driver.name)
  }
}

// driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(drivers) {
  const driverSorter = function (driver1, driver2) { return driver1.revenue - driver2.revenue };
  const sortedDrivers = Object.assign([], drivers);
  return sortedDrivers.sort(driverSorter);
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
function driversByName(drivers) {
  // function (a, b) {
  // return a.localeCompare(b);
  const driverSorter = function (driver1, driver2) { return driver1.name.localeCompare(driver2.name) };
  const sortedDrivers = Object.assign([], drivers);
  return sortedDrivers.sort(driverSorter);
}

// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
function totalRevenue(drivers) {
  const reduceDriverRevenue = function (agg, el, i, arr) { return agg + el.revenue; };
  return drivers.reduce(reduceDriverRevenue, 0);
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
