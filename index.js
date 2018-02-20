// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.map( driver => console.log(driver.name))
}

function logDriversByHometown(drivers, location) {
  const filteredDrivers = drivers.filter( driver => driver.hometown === location);
  return logDriverNames(filteredDrivers);
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(a, b) {
    return a.revenue - b.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(total, driver) {
    return total + driver.revenue;
  }, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
