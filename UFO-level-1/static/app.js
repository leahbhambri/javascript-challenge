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