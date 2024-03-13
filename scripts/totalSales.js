document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.getElementById('menuButton_totalSales');
    var menuContainer = document.getElementById('menuContainer_totalSales');
    var menuOptions = document.querySelectorAll('.menu-option');
    var chart;

    document.addEventListener('click', function (event) {
      var targetElement = event.target;

      // Cerrar el menú si se hace clic fuera de él
      if (!menuButton.contains(targetElement) && !menuContainer.contains(targetElement)) {
        menuContainer.style.display = 'none';
        menuButton.style.backgroundColor = '';
        // Eliminar bordes al cerrar el menú
        setTimeout(function () {
            menuOptions.forEach(option => option.style.borderBottom = "none");
        }, 50);
    }
});

    menuContainer.style.display = 'none';

    function viewOption() {
      console.log("View option selected");
      // Remover bordes de las opciones
      menuOptions.forEach(option => option.style.border = "none");
      // Establecer borde negro en la opción seleccionada
      this.style.border = "2px solid #344050";
      // Ocultar el contenedor del menú después de medio segundo
      setTimeout(function () {
          menuContainer.style.display = 'none';
          menuButton.style.backgroundColor = '';
      }, 50);
  }

  menuContainer.style.display = 'none';
  
  function exportOption() {
      console.log("Export option selected");
      // Remover bordes de las opciones
      menuOptions.forEach(option => option.style.border = "none");
      // Establecer borde negro en la opción seleccionada
      this.style.border = "2px solid #344050";
      // Ocultar el contenedor del menú después de medio segundo
      setTimeout(function () {
          menuContainer.style.display = 'none';
          menuButton.style.backgroundColor = '';
      }, 50);
  }

  menuContainer.style.display = 'none';
  
  function removeOption() {
      console.log("Remove option selected");
      // Remover bordes de las opciones
      menuOptions.forEach(option => option.style.border = "none");
      // Establecer borde rojo en la opción seleccionada
      this.style.border = "2px solid #E63757";
      // Ocultar el contenedor del menú después de medio segundo
      setTimeout(function () {
          menuContainer.style.display = 'none';
          menuButton.style.backgroundColor = '';
      }, 50);
  }

  menuContainer.style.display = 'none';

  function toggleMenu() {
    menuContainer.style.display = menuContainer.style.display === 'none' ? 'block' : 'none';
    // Cambiar color de fondo del botón al hacer clic
    menuButton.style.backgroundColor = menuContainer.style.display === 'none' ? '' : 'rgb(204, 204, 204)';
    // Restablecer bordes de las opciones
    menuOptions.forEach(option => option.style.border = "");
}

menuOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Agregar borde a la opción seleccionada
        menuOptions.forEach(option => option.style.border = "none");
        this.style.border = "none";
        // Ocultar el menú después de medio segundo
        setTimeout(function () {
            menuContainer.style.display = 'none';
            menuButton.style.backgroundColor = '';
            // Reiniciar bordes de las opciones
            menuOptions.forEach(option => option.style.border = "none");
        }, 50);
    });
});

document.addEventListener('click', function (event) {
    var targetElement = event.target;
    // Cerrar el menú si se hace clic fuera de él
    if (!menuButton.contains(targetElement) && !menuContainer.contains(targetElement)) {
        menuContainer.style.display = 'none';
        menuButton.style.backgroundColor = '';
        // Reiniciar bordes de las opciones
        menuOptions.forEach(option => option.style.border = "none");
    }
});

menuButton.addEventListener('click', toggleMenu);

    document.getElementById('viewOption_totalSales').addEventListener('click', viewOption);
    document.getElementById('exportOption_totalSales').addEventListener('click', exportOption);
    document.getElementById('removeOption_totalSales').addEventListener('click', removeOption);

    const chart_totalSales = document.getElementById("chart_totalSales");
    const ctx = chart_totalSales.getContext("2d");
    const hiddenLabels = [3, 7, 11, 15, 19, 23];
    const chartOptions = {
        plugins: {
            annotation: {
                annotations: {
                  line1: {
                    display: false,
                    type: "line",
                    mode: "x",
                    scaleID: "x",
                    value: "",
                    borderColor: "rgb(189,199,209)",
                    borderWidth: 1,
                    borderDash: [5, 5],
                  },
                },
            },
            legend: false,
            tooltip: {
                enabled: true,
                displayColors: false,
                callbacks: {
                    label: function (context) {
                        const dataIndex = context.dataIndex;
                        const xValue = context.chart.data.labels[dataIndex];
                        const yValue = context.chart.data.datasets[0].data[dataIndex];
                        return `${xValue}, ${yValue}`;
                    },
                    title: function () {
                        return '';
                    },
                },
            },
        },
        animation: {
            duration: 0
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
                ticks: {
                    stepSize: 30,
                    color: "#DBE0E8",
                },
                border: {
                    dash: [5, 5],
                    display: false,
                    drawBorder: false,
                },
                min: 0,
                max: 150,
                color: "#DBE0E8",
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 2,
                    color: "#DBE0E8",
                },
                border: {
                    dash: [5, 5],
                    display: false,
                    drawBorder: false,
                },
            },
        },
    };

    const monthlyData = {
        Jan: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80],
        Feb: [100, 70, 80, 50, 120, 100, 130, 140, 90, 100, 40, 50, 60],
        Mar: [80, 50, 60, 40, 60, 120, 100, 130, 60, 80, 50, 60, 70],
        Apr: [70, 80, 100, 70, 90, 60, 80, 130, 40, 60, 50, 80, 90],
        May: [90, 40, 80, 80, 100, 140, 100, 130, 90, 60, 70, 50, 60],
        Jun: [80, 60, 80, 60, 40, 100, 120, 100, 30, 40, 30, 70, 80],
        Jul: [20, 40, 20, 50, 70, 60, 110, 80, 90, 30, 50, 50, 60],
        Aug: [60, 70, 30, 40, 80, 140, 80, 140, 120, 130, 100, 110, 120],
        Sep: [90, 90, 40, 60, 40, 110, 90, 110, 60, 80, 60, 70, 80],
        Oct: [50, 80, 50, 80, 50, 80, 120, 80, 50, 120, 110, 110, 120],
        Nov: [60, 90, 60, 70, 40, 70, 100, 140, 30, 40, 30, 70, 180],
        Dec: [20, 40, 20, 50, 30, 80, 120, 100, 30, 40, 30, 70, 80],
    };

    const selectedMonth = "Jan";
    const selectedData = monthlyData[selectedMonth];

    const gradient = ctx.createLinearGradient(0, 0, 0, chart_totalSales.clientHeight);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');

    chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array.from({ length: 13 }, (_, i) => 2 * i + 1).map(day => `${selectedMonth.slice(0, 3)} ${Math.floor(day)}`),
            plugins: {
              legend: false,
              tooltip: {
                  enabled: true,
                  displayColors: false,
                  callbacks: {
                      label: function (context) {
                          const dataIndex = context.dataIndex;
                          const xValue = context.chart.data.labels[dataIndex];
                          const yValue = context.chart.data.datasets[0].data[dataIndex];
                          return `${xValue}, ${yValue}`;
                      },
                      title: function () {
                          return '';
                      },
                  },
              },
          },
            datasets: [
                {
                    data: selectedData,
                    borderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBorderWidth: 2,
                    pointHoverBackgroundColor: "white",
                    pointBackgroundColor: "white",
                    pointBorderColor: "rgba(75, 192, 192, 1)",
                    pointBorderWidth: 2,
                    fill: {
                        target: 'origin',
                        above: gradient,
                    },
                    borderColor: "rgba(75, 192, 192, 1)",
                },
            ],
            scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      display: true,
                  },
                  ticks: {
                      stepSize: 30,
                      color: "#DBE0E8",
                  },
                  border: {
                      dash: [5, 5],
                      display: false,
                      drawBorder: false,
                  },
                  min: 0,
                  max: 150,
                  color: "#DBE0E8",
              },
              x: {
                  beginAtZero: true,
                  grid: {
                      display: false,
                  },
                  ticks: {
                      stepSize: 2,
                      color: "#DBE0E8",
                  },
                  border: {
                      dash: [5, 5],
                      display: false,
                      drawBorder: false,
                  },
              },
          },
        },
        options: chartOptions,
    });
    
    chart.canvas.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX - ctx.canvas.getBoundingClientRect().left;
        const xAxis = chart.scales["x"];
        const xValue = xAxis.getValueForPixel(mouseX);
        chart.options.plugins.annotation.annotations.line1.value = xValue;
        chart.update();
      });
      chart.canvas.addEventListener("mouseover", () => {
        const line = chart.options.plugins.annotation.annotations.line1
        line.display = true
        chart.update();
      });
      ctx.canvas.addEventListener("mouseleave", () => {
        const line = chart.options.plugins.annotation.annotations.line1
        line.display = false
        chart.update();
      });

    document.querySelector(".select_totalSales").addEventListener("change", function () {
        const selectedMonth = this.value;
        const selectedData = monthlyData[selectedMonth];
        const updatedLabels = Array.from({ length: 13 }, (_, i) => 2 * i + 1).map(day => `${selectedMonth.slice(0, 3)} ${Math.floor(day)}`);

        chart.data.labels = updatedLabels;
        chart.data.datasets[0].data = selectedData;
        chart.update();
    });

    function cambiarMes({ value }) {
        let $arrayMesNombre = document.getElementsByClassName("mesNombre");
        for (let i = 0; i < $arrayMesNombre.length; i++) {
            $arrayMesNombre[i].innerHTML = value;
        }
    }

    var select = document.getElementById('select_Mes');
    select.addEventListener('change', function () {
        var selectedOption = this.options[select.selectedIndex];
        cambiarMes(selectedOption);
    });

    menuButton.addEventListener('click', function () {
        menuOptions.forEach(option => option.style.border = "");
    });

});