function logDriverNames (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue (drivers) {
  let driversCopy = drivers.slice();
  driversCopy.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return driversCopy;
}

function driversByName (drivers) {
  let driversCopy = drivers.slice();
  driversCopy.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  })
  return driversCopy;
}

function totalRevenue (drivers) {
  return drivers.reduce(function (sum, driver) {
    return sum + driver.revenue;
  }, 0);
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
