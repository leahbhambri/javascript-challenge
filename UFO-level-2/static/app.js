//define data from datatable
var tableData = data

//select table and body elements
var table = d3.select(".table")
var tbody = d3.select("tbody")

//print each data element
data.forEach(function(UFOsiting) {
    console.log(UFOsiting)
    var row = tbody.append("tr")
    Object.entries(UFOsiting).forEach(function([key, value]) {
        console.log(key, value);
        var dataElement = row.append("td")
        dataElement.text(value)
      });
    });

//define filter table button and entering
var button = d3.select("button")
var enter = d3.select(".form-control")

//create function to filter list by input
function filterList() {
  var inputElement = d3.select(".form-control")
  var inputValue = inputElement.property("value")
  //clear table body
  tbody.text("")
  //select table and body elements
  var table = d3.select(".table")
  var tbody = d3.select("tbody")

  //NEED TO CONVERT DATE OF INPUT TO DATETIME??
  filteredData = data.filter(d => d.datetime ===inputValue)
  //populate table with filtered list data
  filteredData.forEach(function(UFOsiting) {
    
      // Prevent the page from refreshing
​    d3.event.preventDefault();
    console.log(UFOsiting)
    var row = tbody.append("tr")
    Object.entries(UFOsiting).forEach(function([key, value]) {
        console.log(key, value);
        var dataElement = row.append("td")
        dataElement.text(value)
      });
    });
}

//create handles
button.on("click", filterList)
enter.on("change", filterList)