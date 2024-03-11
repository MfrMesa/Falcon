document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.getElementById('menuButton_totalSales');
  var menuContainer = document.getElementById('menuContainer_totalSales');

  
  menuContainer.style.display = 'none';

  function viewOption() {
      console.log("View option selected");
  }

  function exportOption() {
      console.log("Export option selected");
  }

  function removeOption() {
      console.log("Remove option selected");
  }

  function toggleMenu() {
      menuContainer.style.display = menuContainer.style.display === 'none' ? 'block' : 'none';
  }

 
  menuButton.addEventListener('click', toggleMenu);

 
  document.getElementById('viewOption_totalSales').addEventListener('click', viewOption);
  document.getElementById('exportOption_totalSales').addEventListener('click', exportOption);
  document.getElementById('removeOption_totalSales').addEventListener('click', removeOption);

 
  document.addEventListener('click', function (event) {
      if (!menuContainer.contains(event.target) && event.target !== menuButton) {
          menuContainer.style.display = 'none';
      }
  });
});


const chart_totalSales = document.getElementById("chart_totalSales");

new Chart(chart_totalSales, {
  type: "line",
  data: {
    labels: [
      "Jan 1",
      "",
      "Jan 5",
      "",
      "Jan 9",
      "",
      "Jan 13",
      "",
      "Jan 17",
      "",
      "Jan 21",
      "",
      "Jan 25",
    ],
    datasets: [
      {
        data: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80],
        borderWidth: 1,
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 2,
        fill: false,
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          borderDash: [1, 1],
        },
        ticks: {
          stepSize: 30
        },
      },

      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },

        ticks: {
          stepSize: 4,
        },
      },
    },
  },
});
