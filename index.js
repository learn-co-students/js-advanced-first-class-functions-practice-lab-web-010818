function logDriverNames(drivers) {
  for (const person of drivers) {
    console.log(person.name);
  }
}

function logDriversByHometown(drivers, location) {
  for (const person of drivers) {
    if (person.hometown === location) {
      console.log(person.name);
    }
  }
}

function driversByRevenue(drivers) {
  let current = drivers.slice();
  return current.sort((driverOne, driverTwo) => driverOne.revenue - driverTwo.revenue);
}

function driversByName(drivers) {
  let current = drivers.slice();
  return current.sort((driverOne, driverTwo) => driverOne.name.localeCompare(driverTwo.name));
}

function totalRevenue(drivers) {
  const revenueArr = drivers.map((e) => e.revenue)
  return revenueArr.reduce((total, amount) => total + amount);
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
