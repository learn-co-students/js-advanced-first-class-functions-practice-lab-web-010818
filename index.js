// Code your solution in this file!
function logDriverNames(array){
  return array.forEach(function (person){
    console.log(person.name);
  });
};

function logDriversByHometown(array, hometown){
  return array.forEach(function(person){

    if (person.hometown === hometown){
      console.log(person.name);
    };
  });
};

function driversByRevenue(array){
  //const revs = array.forEach(function(person){ return person.revenue});
  const new_arr = [...array]
  const revSorter = function (a, b){
    return a.revenue - b.revenue;
  }
  return new_arr.sort(revSorter);
}

function driversByName(array){
  const new_arr = [...array]
  const nameSorter = function(a, b){
    return a.name.localeCompare(b.name);
  };
  return new_arr.sort(nameSorter);
};

function totalRevenue(array){

  const reduceRevs = function (agg, el, i, arr){
    return agg + el.revenue;
  }
  return array.reduce(reduceRevs, 0);
}

function averageRevenue(array){
  const reduceRevs = function (agg, el, i, arr){
    return agg + el.revenue;
  }
  return array.reduce(reduceRevs, 0)/array.length;
}
