// Code your solution in this file!


function logDriverNames(drivers){
  drivers.forEach((driver)=> {console.log(driver.name)})
}

function logDriversByHometown(drivers, location){
  let newArray = drivers.filter(driver=>driver.hometown === location)
  newArray.forEach((driver)=>{console.log(driver.name)})
}

function driversByRevenue(drivers){
  let newDrivers = drivers.slice();

  return newDrivers.sort((a,b)=>{return a.revenue - b.revenue});
}

function driversByName(drivers){
  let newDrivers = drivers.slice();

  return newDrivers.sort((a,b)=>((a.name).localeCompare(b.name)))
}

function totalRevenue(drivers){

  return drivers.reduce(((accumulator, currentValue) => (accumulator + currentValue.revenue)), 0);

}

function averageRevenue(drivers){
  
  return totalRevenue(drivers)/drivers.length
}





//
