// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, place) {
  const selectedDrivers = drivers.filter(function (driver) {
    return driver.hometown === place
  })
  logDriverNames(selectedDrivers)
}

function driversByRevenue(drivers) {
  const newDrivers =  drivers.slice().sort(function (a,b) {
    return a.revenue - b.revenue
  })
  console.log(drivers)
  return newDrivers
}

function driversByName(drivers) {
  const newDrivers = drivers.slice().sort(function (a,b) {
    return a.name.localeCompare(b.name)
  })
  return newDrivers
}

function totalRevenue(drivers) {
  return drivers.reduce(function (prev, curr) {
    return prev + curr.revenue
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
};
