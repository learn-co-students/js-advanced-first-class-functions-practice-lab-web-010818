function logDriverNames(drivers) {
  drivers.forEach(driver => console.log(driver.name));
}

function logDriversByHometown(drivers, loc) {
  let filteredDrivers = drivers.filter(driver => driver.hometown === loc);
  filteredDrivers.forEach(driver => console.log(driver.name));
}

function driversByRevenue(drivers) {
  newArr = [...drivers];
  return newArr.sort((a, b) => a.revenue - b.revenue );
}

function driversByName(drivers) {
  newArr = [...drivers];
  return newArr.sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
    let totalRevenue = 0;
    drivers.forEach(driver => totalRevenue += driver.revenue);
    return totalRevenue;
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / (drivers.length);
}
