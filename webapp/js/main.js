window.onload =function() {
      drawChart();
    }

    function drawChart() {
  
        drawColumnChart3();
        drawColumnChart4();
        drawColumnChart5();
        drawColumnChart6();
        drawColumnChart7();
        drawColumnChart8();
        drawColumnChart9();
      }

    function drawColumnChart3() {
       var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "select ?year ?generatedwatts ?consumedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/generation> FROM NAMED <http://localhost:3030/MyNewDataset/data/consumption> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s1  <https://data.cdc.gov/resource/generation/year> ?year . ?s1 <https://data.cdc.gov/resource/generation/state> ?o FILTER (lcase(str(?o)) = 'us-total') . ?s1 <https://data.cdc.gov/resource/generation/energysource> 'Coal' . ?s1 <https://data.cdc.gov/resource/generation/output> ?generatedwatts  } GRAPH <http://localhost:3030/MyNewDataset/data/consumption> { ?s2 <https://data.cdc.gov/resource/consumption/year> ?year . ?s2 <https://data.cdc.gov/resource/consumption/state> ?o1 FILTER (lcase(str(?o1)) = 'us-total') . ?s2 <https://data.cdc.gov/resource/consumption/energysource> 'Coal' . ?s2 <https://data.cdc.gov/resource/consumption/output> ?consumedwatts }}";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'Year');
                table_data.addColumn('number', 'Electricity in MWH generated');
                table_data.addColumn('number', 'Electricity in MWH consumed');
                  
                var bindings = data.results.bindings; 
                var high_conf=0;
                for (var i in bindings) {
                    var our_data = data.results.bindings[i];  
                    var xData = our_data.year.value;   
                    var yData =  parseFloat(our_data.generatedwatts.value);
                    var yData1 =  parseFloat(our_data.consumedwatts.value);
                    console.log(xData,yData,yData1);

                    var all = [xData,yData,yData1];
                    table_data.addRow(all);
                }
                //Drawing a BarChart*/
                var barOptions = { 
                    vAxis: [0, 1],
                    hAxis: { title: "Year"},
                    series: {
                      0:{ type: "line", targetAxisIndex: 0 },
                      1: { type: "line", targetAxisIndex: 1}
                    }   
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material3'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
      
    }


    function drawColumnChart4() {

      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "select ?year ?generatedwatts ?consumedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/generation> FROM NAMED <http://localhost:3030/MyNewDataset/data/consumption> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s1  <https://data.cdc.gov/resource/generation/year> ?year . ?s1 <https://data.cdc.gov/resource/generation/state> ?o FILTER (lcase(str(?o)) = 'us-total') . ?s1 <https://data.cdc.gov/resource/generation/energysource> 'Natural Gas' . ?s1 <https://data.cdc.gov/resource/generation/output> ?generatedwatts  } GRAPH <http://localhost:3030/MyNewDataset/data/consumption> { ?s2 <https://data.cdc.gov/resource/consumption/year> ?year . ?s2 <https://data.cdc.gov/resource/consumption/state> ?o1 FILTER (lcase(str(?o1)) = 'us-total') . ?s2 <https://data.cdc.gov/resource/consumption/energysource> 'Natural Gas' . ?s2 <https://data.cdc.gov/resource/consumption/output> ?consumedwatts }}";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'Year');
                table_data.addColumn('number', 'Electricity in MWH generated');
                table_data.addColumn('number', 'Electricity in MWH consumed');
                  
                var bindings = data.results.bindings; 
                var high_conf=0;
                for (var i in bindings) {
                    var our_data = data.results.bindings[i];  
                    var xData = our_data.year.value;   
                    var yData =  parseFloat(our_data.generatedwatts.value);
                    var yData1 =  parseFloat(our_data.consumedwatts.value);
                    console.log(xData,yData,yData1);

                    var all = [xData,yData,yData1];
                    table_data.addRow(all);
                }
                //Drawing a BarChart*/
                var barOptions = { 
                    vAxis: [0, 1],
                    hAxis: { title: "Year"},
                    series: {
                      0:{ type: "line", targetAxisIndex: 0 },
                      1: { type: "line", targetAxisIndex: 1}
                    }   
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material4'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
      
   
    }




 function drawColumnChart5() {
      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "select ?year ?generatedwatts ?consumedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/generation> FROM NAMED <http://localhost:3030/MyNewDataset/data/consumption> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s1  <https://data.cdc.gov/resource/generation/year> ?year . ?s1 <https://data.cdc.gov/resource/generation/state> ?o FILTER (lcase(str(?o)) = 'us-total') . ?s1 <https://data.cdc.gov/resource/generation/energysource> 'Petroleum' . ?s1 <https://data.cdc.gov/resource/generation/output> ?generatedwatts  } GRAPH <http://localhost:3030/MyNewDataset/data/consumption> { ?s2 <https://data.cdc.gov/resource/consumption/year> ?year . ?s2 <https://data.cdc.gov/resource/consumption/state> ?o1 FILTER (lcase(str(?o1)) = 'us-total') . ?s2 <https://data.cdc.gov/resource/consumption/energysource> 'Petroleum' . ?s2 <https://data.cdc.gov/resource/consumption/output> ?consumedwatts }}";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'Year');
                table_data.addColumn('number', 'Electricity in MWH generated');
                table_data.addColumn('number', 'Electricity in MWH consumed');
                  
                var bindings = data.results.bindings; 
                var high_conf=0;
                for (var i in bindings) {
                    var our_data = data.results.bindings[i];  
                    var xData = our_data.year.value;   
                    var yData =  parseFloat(our_data.generatedwatts.value);
                    var yData1 =  parseFloat(our_data.consumedwatts.value);
                    console.log(xData,yData,yData1);

                    var all = [xData,yData,yData1];
                    table_data.addRow(all);
                }
                //Drawing a BarChart*/
                var barOptions = { 
                    vAxis: [0, 1],
                    hAxis: { title: "Year"},
                    series: {
                      0:{ type: "line", targetAxisIndex: 0 },
                      1: { type: "line", targetAxisIndex: 1}
                    }   
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material5'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
      
    }





     function drawColumnChart6() {
      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "select ?year ?generatedwatts ?consumedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/generation> FROM NAMED <http://localhost:3030/MyNewDataset/data/consumption> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s1  <https://data.cdc.gov/resource/generation/year> ?year . ?s1 <https://data.cdc.gov/resource/generation/state> ?o FILTER (lcase(str(?o)) = 'us-total') . ?s1 <https://data.cdc.gov/resource/generation/energysource> 'Geothermal' . ?s1 <https://data.cdc.gov/resource/generation/output> ?generatedwatts  } GRAPH <http://localhost:3030/MyNewDataset/data/consumption> { ?s2 <https://data.cdc.gov/resource/consumption/year> ?year . ?s2 <https://data.cdc.gov/resource/consumption/state> ?o1 FILTER (lcase(str(?o1)) = 'us-total') . ?s2 <https://data.cdc.gov/resource/consumption/energysource> 'Geothermal' . ?s2 <https://data.cdc.gov/resource/consumption/output> ?consumedwatts }}";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'Year');
                table_data.addColumn('number', 'Electricity in MWH generated');
                table_data.addColumn('number', 'Electricity in MWH consumed');
                  
                var bindings = data.results.bindings; 
                var high_conf=0;
                for (var i in bindings) {
                    var our_data = data.results.bindings[i];  
                    var xData = our_data.year.value;   
                    var yData =  parseFloat(our_data.generatedwatts.value);
                    var yData1 =  parseFloat(our_data.consumedwatts.value);
                    console.log(xData,yData,yData1);

                    var all = [xData,yData,yData1];
                    table_data.addRow(all);
                }
                //Drawing a BarChart*/
                var barOptions = { 
                    vAxis: [0, 1],
                    hAxis: { title: "Year"},
                    series: {
                      0:{ type: "line", targetAxisIndex: 0 },
                      1: { type: "line", targetAxisIndex: 1}
                    }   
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material6'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
   
    }




function drawColumnChart7() {
      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> select ?state ?source ?co2_count ?foutput WHERE { { select ?state ?source (sum(xsd:decimal(?co2)) as ?co2_count) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/pollution> { ?s1 <https://data.cdc.gov/resource/pollution/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s1 <https://data.cdc.gov/resource/pollution/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s1 <https://data.cdc.gov/resource/pollution/co2> ?co2 }} GROUP BY ?state ?source ORDER BY ?state ?source }  { select ?state ?source (sum(xsd:double(?wattsgenerated)) as ?foutput) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s2 <https://data.cdc.gov/resource/generation/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s2 <https://data.cdc.gov/resource/generation/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s2 <https://data.cdc.gov/resource/generation/output> ?wattsgenerated } } GROUP BY ?state ?source ORDER BY ?state ?source } }";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'State');
                table_data.addColumn('number', 'CO2 Coal');
                table_data.addColumn('number', 'CO2 Natural Gas');
                table_data.addColumn('number', 'CO2 Petroleum');
                table_data.addColumn('number', 'Electricity by Coal');
                table_data.addColumn('number', 'Electricity by Natural Gas');
                table_data.addColumn('number', 'Electricity by Petroleum');


                var bindings = data.results.bindings; 

                for(var i = 0; i <= bindings.length-3; i = i+3 ) {
                  var our_data = data.results.bindings[i];
                  var our_data1 = data.results.bindings[i+1];
                  var our_data2 = data.results.bindings[i+2];  
                  var xData = our_data.state.value;   
                  var yData = parseFloat(our_data.co2_count.value);
                  var yData1 = parseFloat(our_data1.co2_count.value);
                  var yData2 = parseFloat(our_data2.co2_count.value);
                  var yData3 = parseFloat(our_data.foutput.value);
                  var yData4 = parseFloat(our_data1.foutput.value);
                  var yData5 = parseFloat(our_data2.foutput.value);
                  var all = [xData,yData,yData1,yData2,yData3,yData4,yData5];
                  table_data.addRow(all);
                }

                //Drawing a BarChart*/
                var barOptions = { 
                    //'legend':'left',
                    vAxis: [[0, 1, 2], [3, 4, 5]],
                    hAxis: { title: "State"},
                    series: {
                      0: { color: "#76D7C4", type: "bar", targetAxisIndex: 0},
                      1: { color: "#F5B7B1", type: "bar", targetAxisIndex: 0},
                      2: { color: "#F4D03F", type: "bar", targetAxisIndex: 0},
                      3: { color: "#1A5276", type: "line", targetAxisIndex: 1},
                      4: { color: "#E74C3C", type: "line", targetAxisIndex: 1},
                      5: { color: "#B7950B", type: "line", targetAxisIndex: 1}
                    },
                    isStacked: true  
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material7'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
   
    }


function drawColumnChart8() {
      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> select ?state ?source ?so2_count ?foutput WHERE { { select ?state ?source (sum(xsd:decimal(?so2)) as ?so2_count) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/pollution> { ?s1 <https://data.cdc.gov/resource/pollution/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s1 <https://data.cdc.gov/resource/pollution/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s1 <https://data.cdc.gov/resource/pollution/so2> ?so2 }} GROUP BY ?state ?source ORDER BY ?state ?source }  { select ?state ?source (sum(xsd:double(?wattsgenerated)) as ?foutput) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s2 <https://data.cdc.gov/resource/generation/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s2 <https://data.cdc.gov/resource/generation/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s2 <https://data.cdc.gov/resource/generation/output> ?wattsgenerated } } GROUP BY ?state ?source ORDER BY ?state ?source } }";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'State');
                table_data.addColumn('number', 'SO2 Coal');
                table_data.addColumn('number', 'SO2 Natural Gas');
                table_data.addColumn('number', 'SO2 Petroleum');
                table_data.addColumn('number', 'Electricity by Coal');
                table_data.addColumn('number', 'Electricity by Natural Gas');
                table_data.addColumn('number', 'Electricity by Petroleum');


                var bindings = data.results.bindings; 

                for(var i = 0; i <= bindings.length-3; i = i+3 ) {
                  var our_data = data.results.bindings[i];
                  var our_data1 = data.results.bindings[i+1];
                  var our_data2 = data.results.bindings[i+2];  
                  var xData = our_data.state.value;   
                  var yData = parseFloat(our_data.so2_count.value);
                  var yData1 = parseFloat(our_data1.so2_count.value);
                  var yData2 = parseFloat(our_data2.so2_count.value);
                  var yData3 = parseFloat(our_data.foutput.value);
                  var yData4 = parseFloat(our_data1.foutput.value);
                  var yData5 = parseFloat(our_data2.foutput.value);
                  var all = [xData,yData,yData1,yData2,yData3,yData4,yData5];
                  table_data.addRow(all);
                }

                //Drawing a BarChart*/
                var barOptions = { 
                    //'legend':'left',
                    vAxis: [[0, 1, 2], [3, 4, 5]],
                    hAxis: { title: "State"},
                    series: {
                      0: { color: "#76D7C4", type: "bar", targetAxisIndex: 0},
                      1: { color: "#F5B7B1", type: "bar", targetAxisIndex: 0},
                      2: { color: "#F4D03F", type: "bar", targetAxisIndex: 0},
                      3: { color: "#1A5276", type: "line", targetAxisIndex: 1},
                      4: { color: "#E74C3C", type: "line", targetAxisIndex: 1},
                      5: { color: "#B7950B", type: "line", targetAxisIndex: 1}
                    },
                    isStacked: true  
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material8'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
   
    }


    function drawColumnChart9() {
      var url = 'http://localhost:3030/MyNewDataset/query';
      
      var query = "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> select ?state ?source ?nox_count ?foutput WHERE { { select ?state ?source (sum(xsd:decimal(?nox)) as ?nox_count) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/pollution> { ?s1 <https://data.cdc.gov/resource/pollution/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s1 <https://data.cdc.gov/resource/pollution/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s1 <https://data.cdc.gov/resource/pollution/nox> ?nox }} GROUP BY ?state ?source ORDER BY ?state ?source }  { select ?state ?source (sum(xsd:double(?wattsgenerated)) as ?foutput) WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s2 <https://data.cdc.gov/resource/generation/state> ?state FILTER ( (lcase(str(?state)) != 'us-total') && (lcase(str(?state)) != 'dc') && (lcase(str(?state)) != 'hi') && (lcase(str(?state)) != 'ri') && (lcase(str(?state)) != 'vt')) . ?s2 <https://data.cdc.gov/resource/generation/energysource> ?source  FILTER (lcase(str(?source)) != 'geothermal') . ?s2 <https://data.cdc.gov/resource/generation/output> ?wattsgenerated } } GROUP BY ?state ?source ORDER BY ?state ?source } }";

    //AJAX code
     $.ajax({
          async: false,
          global: false,
          url: encodeURI(url),
          type: 'POST',
          data: { query : query },
          crossDomain: true,
          dataType: 'jsonp',
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
          success: function (data) {

              // create new data 
                var table_data = new google.visualization.DataTable();
                table_data.addColumn('string', 'State');
                table_data.addColumn('number', 'NOX Coal');
                table_data.addColumn('number', 'NOX Natural Gas');
                table_data.addColumn('number', 'NOX Petroleum');
                table_data.addColumn('number', 'Electricity by Coal');
                table_data.addColumn('number', 'Electricity by Natural Gas');
                table_data.addColumn('number', 'Electricity by Petroleum');


                var bindings = data.results.bindings; 

                for(var i = 0; i <= bindings.length-3; i = i+3 ) {
                  var our_data = data.results.bindings[i];
                  var our_data1 = data.results.bindings[i+1];
                  var our_data2 = data.results.bindings[i+2];  
                  var xData = our_data.state.value;   
                  var yData = parseFloat(our_data.nox_count.value);
                  var yData1 = parseFloat(our_data1.nox_count.value);
                  var yData2 = parseFloat(our_data2.nox_count.value);
                  var yData3 = parseFloat(our_data.foutput.value);
                  var yData4 = parseFloat(our_data1.foutput.value);
                  var yData5 = parseFloat(our_data2.foutput.value);
                  var all = [xData,yData,yData1,yData2,yData3,yData4,yData5];
                  table_data.addRow(all);
                }

                //Drawing a BarChart*/
                var barOptions = { 
                    
                    vAxis: [[0, 1, 2], [3, 4, 5]],
                    hAxis: { title: "State"},
                    series: {
                      0: { color: "#76D7C4", type: "bar", targetAxisIndex: 0},
                      1: { color: "#F5B7B1", type: "bar", targetAxisIndex: 0},
                      2: { color: "#F4D03F", type: "bar", targetAxisIndex: 0},
                      3: { color: "#1A5276", type: "line", targetAxisIndex: 1},
                      4: { color: "#E74C3C", type: "line", targetAxisIndex: 1},
                      5: { color: "#B7950B", type: "line", targetAxisIndex: 1}
                    },
                    isStacked: true  
                };
            
                var barChart = new google.visualization.ColumnChart(document.getElementById('barchart_material9'));
                barChart.draw(table_data, barOptions);
                      
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
   
    }



$(document).ready(function(){

      $('#year,#resource').on('change', function() {
           var year  = $("#year option:selected").val();
           var resource = $("#resource option:selected").val();

           if(resource != "") {

          var url = 'http://localhost:3030/MyNewDataset/query';


          var query = "select ?state ?generatedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/generation> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/generation> { ?s  <https://data.cdc.gov/resource/generation/year> '" + year + "' . ?s  <https://data.cdc.gov/resource/generation/energysource> '" + resource + "' . ?s <https://data.cdc.gov/resource/generation/state> ?state . ?s <https://data.cdc.gov/resource/generation/output> ?generatedwatts } }"

          $.ajax({
            async: false,
            global: false,
            url: encodeURI(url),
            type: 'POST',
            data: { query : query },
            crossDomain: true,
            dataType: 'jsonp',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (data) {
              

            var table_data = new google.visualization.DataTable();
            table_data.addColumn('string', 'State');
            table_data.addColumn('number', 'Generated Watts');
          
                
               var bindings = data.results.bindings; 
                  var high_conf=0;
                  for (var i in bindings) {
                      var our_data = data.results.bindings[i];  
                      var xData = our_data.state.value; 
                      var res = xData.toUpperCase();
                      if(res == "US-TOTAL") {              
                        continue;  
                      }
                      var yData=  parseFloat(our_data.generatedwatts.value);
                      console.log(xData,yData);

                      var all = [xData,yData];
                      table_data.addRow(all);
                  }

                  //Drawing a BarChart*/
                  var barOptions = { 
                      title: 'Year and Cause wise number of deaths in US',

                      region: 'US',
                      displayMode: 'regions',
                      
                       resolution: 'provinces',
                
                      };

            
                var barChart = new google.visualization.GeoChart(document.getElementById('barchart_material1'));
                barChart.draw(table_data, barOptions);
                        
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
        }
      });




            $('#year1,#resource1').on('change', function() {
           var year  = $("#year1 option:selected").val();
           var resource = $("#resource1 option:selected").val();
        

           if(resource != "") {

          var url = 'http://localhost:3030/MyNewDataset/query';


          var query = "select ?state ?consumedwatts FROM NAMED <http://localhost:3030/MyNewDataset/data/consumption> WHERE { GRAPH <http://localhost:3030/MyNewDataset/data/consumption> { ?s  <https://data.cdc.gov/resource/consumption/year> '" + year + "' . ?s  <https://data.cdc.gov/resource/consumption/energysource> '" + resource + "' . ?s <https://data.cdc.gov/resource/consumption/state> ?state . ?s <https://data.cdc.gov/resource/consumption/output> ?consumedwatts } }"

          $.ajax({
            async: false,
            global: false,
            url: encodeURI(url),
            type: 'POST',
            data: { query : query },
            crossDomain: true,
            dataType: 'jsonp',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            success: function (data) {
              

            var table_data = new google.visualization.DataTable();
            table_data.addColumn('string', 'State');
            table_data.addColumn('number', 'Consumed Watts');
          
                
               var bindings = data.results.bindings; 
                  var high_conf=0;
                  for (var i in bindings) {
                      var our_data = data.results.bindings[i];  
                      var xData = our_data.state.value; 
                      var res = xData.toUpperCase();
                      if(res == "US-TOTAL") {              
                        continue;  
                      }
                      var yData=  parseFloat(our_data.consumedwatts.value);
                      console.log(xData,yData);

                      var all = [xData,yData];
                      table_data.addRow(all);
                  }

                  //Drawing a BarChart*/
                  var barOptions = { 
                      title: 'Year and Cause wise number of deaths in US',

                      region: 'US',
                      displayMode: 'regions',
                      
                       resolution: 'provinces',
                
                      };

            
                var barChart = new google.visualization.GeoChart(document.getElementById('barchart_material2'));
                barChart.draw(table_data, barOptions);
                        
          },
          error: function (data) {
            console.log(JSON.stringify(data));
          }
        });
        }
      });

      
});
