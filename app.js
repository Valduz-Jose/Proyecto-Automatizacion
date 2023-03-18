// Autorizacion de Google para firebase
var provider = new firebase.auth.GoogleAuthProvider();

// Api Google Chart
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.load("current", { 'packages': ["corechart", "line"] });
// LLamado a funciones
google.charts.setOnLoadCallback(drawChartTemp1);
google.charts.setOnLoadCallback(drawChartTemp2);
google.charts.setOnLoadCallback(drawChartTemp3);
google.charts.setOnLoadCallback(drawChartTemp4);

// Gauge 1
function drawChartTemp1() {

  var dataTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Therm_1', 0]
  ]);

  var optionsTemp = {
    width: 150, height: 150,
    redFrom: 10, redTo: 50,
    yellowFrom: 0, yellowTo: 10,
    greenFrom: -15, greenTo: 0,
    majorTicks: ['-15', '-10', '-5', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    minorTicks: 1,
    max: 50
  };

  var formatterTemp = new google.visualization.NumberFormat({
    suffix: 'C',
    fractionDigits: 1
  });
  formatterTemp.format(dataTemp, 1);

  var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp1"));

  chartTemp.draw(dataTemp, optionsTemp, formatterTemp);
  var temp = firebase.database().ref('Refrigerador/TThe1').limitToLast(1);


  temp.on('value', function (snapshot) {
    temp = snapshot.val();
    if (temp) {
      var currentValue;
      var data = [];
      for (var key in temp) {
        currentValue = temp[key];
        data.push(currentValue);
      }
    }
    temp = data[0];
  });

  setInterval(function () {
    dataTemp.setValue(0, 1, temp);
    formatterTemp.format(dataTemp, 1);
    chartTemp.draw(dataTemp, optionsTemp);
  }, 1300);
}

// Gauge 2
function drawChartTemp2() {

  var dataTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Therm_2', 0]
  ]);

  var optionsTemp = {
    width: 150, height: 150,
    redFrom: 10, redTo: 50,
    yellowFrom: 0, yellowTo: 10,
    greenFrom: -15, greenTo: 0,
    majorTicks: ['-15', '-10', '-5', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    minorTicks: 1,
    max: 50
  };

  var formatterTemp = new google.visualization.NumberFormat({
    suffix: 'C',
    fractionDigits: 1
  });
  formatterTemp.format(dataTemp, 1);

  var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp2"));

  chartTemp.draw(dataTemp, optionsTemp, formatterTemp);
  var temp = firebase.database().ref('Refrigerador/TThe2').limitToLast(1);


  temp.on('value', function (snapshot) {
    temp = snapshot.val();
    if (temp) {
      var currentValue;
      var data = [];
      for (var key in temp) {
        currentValue = temp[key];
        data.push(currentValue);
      }
    }
    temp = data[0];
  });

  setInterval(function () {
    dataTemp.setValue(0, 1, temp);
    formatterTemp.format(dataTemp, 1);
    chartTemp.draw(dataTemp, optionsTemp);
  }, 1300);
}

// Gauge 3
function drawChartTemp3() {

  var dataTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Therm_3', 0]
  ]);

  var optionsTemp = {
    width: 150, height: 150,
    redFrom: 10, redTo: 50,
    yellowFrom: 0, yellowTo: 10,
    greenFrom: -15, greenTo: 0,
    majorTicks: ['-15', '-10', '-5', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    minorTicks: 1,
    max: 50
  };

  var formatterTemp = new google.visualization.NumberFormat({
    suffix: 'C',
    fractionDigits: 1
  });
  formatterTemp.format(dataTemp, 1);

  var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp3"));

  chartTemp.draw(dataTemp, optionsTemp, formatterTemp);
  var temp = firebase.database().ref('Refrigerador/TThe3').limitToLast(1);


  temp.on('value', function (snapshot) {
    temp = snapshot.val();
    if (temp) {
      var currentValue;
      var data = [];
      for (var key in temp) {
        currentValue = temp[key];
        data.push(currentValue);
      }
    }
    temp = data[0];
  });

  setInterval(function () {
    dataTemp.setValue(0, 1, temp);
    formatterTemp.format(dataTemp, 1);
    chartTemp.draw(dataTemp, optionsTemp);
  }, 1300);
}

// Gauge 4
function drawChartTemp4() {

  var dataTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Therm_4', 0]
  ]);

  var optionsTemp = {
    width: 150, height: 150,
    redFrom: 10, redTo: 50,
    yellowFrom: 0, yellowTo: 10,
    greenFrom: -15, greenTo: 0,
    majorTicks: ['-15', '-10', '-5', '0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'],
    minorTicks: 1,
    max: 50
  };

  var formatterTemp = new google.visualization.NumberFormat({
    suffix: 'C',
    fractionDigits: 1
  });
  formatterTemp.format(dataTemp, 1);

  var chartTemp = new google.visualization.Gauge(document.getElementById("chart_Temp4"));

  chartTemp.draw(dataTemp, optionsTemp, formatterTemp);
  var temp = firebase.database().ref('Refrigerador/TThe4').limitToLast(1);


  temp.on('value', function (snapshot) {
    temp = snapshot.val();
    if (temp) {
      var currentValue;
      var data = [];
      for (var key in temp) {
        currentValue = temp[key];
        data.push(currentValue);
      }
    }
    temp = data[0];

  });

  setInterval(function () {
    dataTemp.setValue(0, 1, temp);
    formatterTemp.format(dataTemp, 1);
    chartTemp.draw(dataTemp, optionsTemp);
  }, 1300);
}

function drawChartTime(Titulo, TTh) {

  var dataTableTime = new google.visualization.DataTable();
  dataTableTime.addColumn('datetime', 'Time');
  dataTableTime.addColumn('number', 'Temperatura');

  var qtyDatos = 100;

  var optionsChartTime = {
    title: Titulo,
    titleTextStyle: {
      color: 'white',
      fontSize: 20,
      fontName: 'Arial',
      bold: true,
      italic: true
    },
    hAxis: {
      title: "Tiempo", format: 'HH:mm', titleTextStyle: {
        color: 'yellow', fontSize: 22,
        bold: true
      }
    },
    vAxis: {
      title: "Tempertura(°C)", titleTextStyle: {
        color: 'yellow', fontSize: 22,
        bold: true
      }, viewWindowMode: 'explicit', viewWindow: {
        max: 40,
        min: -30
      }
    },
    'width': 680,
    'height': 400,
    pointsVisible: true,
    backgroundColor: 'black',
    colors: ['yellow'],
    curveType: 'function'
  };


  var formatDate = new google.visualization.DateFormat(
    { prefix: 'Time: ', pattern: "dd MMM HH:mm" });

  formatDate.format(dataTableTime, 0);


  var chartTime = new google.visualization.LineChart(document.getElementById("chartTime"));
  var temp = firebase.database().ref(TTh).limitToLast(qtyDatos);
  var hora = firebase.database().ref('Refrigerador/Hora').limitToLast(qtyDatos);
  var minutos = firebase.database().ref('Refrigerador/Minutos').limitToLast(qtyDatos);
  var dia = firebase.database().ref('Refrigerador/Dia').limitToLast(qtyDatos);
  var mes = firebase.database().ref('Refrigerador/Mes').limitToLast(qtyDatos);
  var año = firebase.database().ref('Refrigerador/Ano').limitToLast(qtyDatos);

  temp.on('value', function (snapshot) {
    temp = snapshot.val();
    if (temp) {
      var currentValue;
      var data = [];
      for (var key in temp) {
        currentValue = temp[key];
        data.push(currentValue);
      }
    }
    temp = data;
  });

  hora.on('value', function (snapshot) {
    hora = snapshot.val();
    if (hora) {
      var currentValue;
      var data = [];
      for (var key in hora) {
        currentValue = hora[key];
        data.push(parseFloat(currentValue));
      }
    }
    hora = data;
  });

  minutos.on('value', function (snapshot) {
    minutos = snapshot.val();
    if (minutos) {
      var currentValue;
      var data = [];
      for (var key in minutos) {
        currentValue = minutos[key];
        data.push(parseFloat(currentValue));
      }
    }
    minutos = data;
  });

  dia.on('value', function (snapshot) {
    dia = snapshot.val();
    if (dia) {
      var currentValue;
      var data = [];
      for (var key in dia) {
        currentValue = dia[key];
        data.push(parseFloat(currentValue));
      }
    }
    dia = data;
  });

  mes.on('value', function (snapshot) {
    mes = snapshot.val();
    if (mes) {
      var currentValue;
      var data = [];
      for (var key in mes) {
        currentValue = mes[key];
        data.push(parseFloat(currentValue));
      }
    }
    mes = data;
  });

  año.on('value', function (snapshot) {
    año = snapshot.val();
    if (año) {
      var currentValue;
      var data = [];
      for (var key in año) {
        currentValue = año[key];
        data.push(parseFloat(currentValue));
      }
    }
    año = data;
  });

  setInterval(function () {
    dataTableTime = new google.visualization.DataTable();
    dataTableTime.addColumn('datetime', 'Time');
    dataTableTime.addColumn('number', 'Temperatura');
    for (index = 0; index < qtyDatos; index++) {
      dataTableTime.addRow(
        [new Date(año[index], mes[index] - 1, dia[index], hora[index], minutos[index], 0, 0), temp[index]]);
    }
    chartTime.draw(dataTableTime, optionsChartTime);
  }, 1300);
}


$('#login').click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then(function (result) {
      console.log(result.user);
      guardaDatos(result.user);
      $('#login').hide();
      $('#root').append("<img width='50px' src='" + result.user.photoURL + "'/>");
    });
});

//Guarda en la BD en RealTime
function guardaDatos(user) {
  var usuario = {
    uid: user.uid,
    nombre: user.displayName,
    email: user.email,
    foto: user.photoURL,
    dia: user.metadata.lastSignInTime
  }
  firebase.database().ref("Usuarios/" + user.uid)
    .set(usuario)
}

//Leyendo la BD
firebase.database().ref("Usuarios")
  .on("child_added", function (s) {
    var user = s.val();
    $('#root').append("<img width='50px' src='" + user.foto + "'/>");
  })


$('#Grafica1').click(function () {
  google.charts.setOnLoadCallback(drawChartTime('Cava 01', 'Refrigerador/TThe1'));
})
$('#Grafica2').click(function () {
  google.charts.setOnLoadCallback(drawChartTime('Cava 02', 'Refrigerador/TThe2'));
})
$('#Grafica3').click(function () {
  google.charts.setOnLoadCallback(drawChartTime('Cava 03', 'Refrigerador/TThe3'));
})
$('#Grafica4').click(function () {
  google.charts.setOnLoadCallback(drawChartTime('Cava 04', 'Refrigerador/TThe4'));
})


