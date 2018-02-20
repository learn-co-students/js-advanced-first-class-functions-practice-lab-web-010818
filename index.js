// Code your solution in this file!
const logDriverNames = function(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name)
  });
}

const logDriversByHometown = function(drivers, location){
  drivers.forEach(function (driver) {
    if (driver.hometown === location){
      console.log(driver.name)
    }
  });
}

const driversByRevenue = function (drivers) {
  const revenueSorter = function (driver1, driver2) {
    return driver1.revenue - driver2.revenue;
  }
  return drivers.slice().sort(revenueSorter);
}

const driversByName = function (drivers) {
  const comparator = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name);
  };
  return drivers.slice().sort(comparator);
}

const totalRevenue = function (drivers) {
  return drivers.reduce(function (acc, driver){return acc + driver.revenue}, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers) / drivers.length;
}
