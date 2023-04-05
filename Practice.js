let tickets = new Map();
tickets.set("Paris", "Skopje");
tickets.set("Zurich", "Amsterdam");
tickets.set("Prague", "Zurich");
tickets.set("Barcelona", "Berlin");
tickets.set("Kiev", "Prague");
tickets.set("Skopje", "Paris");
tickets.set("Amsterdam", "Barcelona");
tickets.set("Berlin", "Kiev");
tickets.set("Berlin", "Amsterdam");

const getPath = (tickets, start) => {
  let currentCity = start;
  let path = start;
  //checks if currentCity is present on "From" side of ticket
  while (tickets.has(currentCity)) {
    //Adding next city to path (which is "To" side of currentCity)
    path += "->" + tickets.get(currentCity);
    //update current city to next city
    currentCity = tickets.get(currentCity);
    //checks if city is on "To" side already visited if yes then break
    if (path.includes(tickets.get(currentCity))) break;
  }
  //adding starting point again in end of path
  return path + "->" + start;
};

console.log("++++++++ Output ++++++++++");
console.log(getPath(tickets, "Kiev"));