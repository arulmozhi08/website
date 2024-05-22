document.addEventListener("DOMContentLoaded", function() {
    // Assuming 'data' is an array of objects with two properties: 'column1' and 'column2'
    var data = [
        { column1: "Data 1", column2: "Data A" },
        { column1: "Data 2", column2: "Data B" },
        // Add more data as needed
    ];

    var tableBody = document.getElementById("data-table").getElementsByTagName("tbody")[0];

    data.forEach(function(rowData) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = rowData.column1;
        cell2.innerHTML = rowData.column2;
    });
});
