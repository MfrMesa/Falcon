document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('ChartWeeklySalesGraph').getContext('2d');

  let weeklySalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [{
        label: 'Daily Sales',
        data: [6000, 10000, 7500, 4000, 3500, 5500, 6000],
        backgroundColor: 'rgb(44, 123, 229)',
        hoverBackgroundColor: 'rgba(44, 123, 229',
      },
      {
        label: 'Background Bars',
        data: Array(7).fill(10000),
        backgroundColor: '#EDF2F9',
        hoverBackgroundColor: '#EDF2F9',
      }],
    },
    options: {
      animation: false,
      indexAxis: 'x',
      barPercentage: 0.3,
      categoryPercentage: 0.8,
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: [true, false],
          position: 'nearest',
          displayColors: false,
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(0,0,0,.1)',
          borderWidth: 1,
          padding: 10,
          titleFontSize: 16,
          bodyFontSize: 14,
          titleFontFamily: 'Poppins',
          bodyFontFamily: 'Poppins',
          titleColor: '#000000',
          bodyColor: '#000000',
          callbacks: {
            label: (context) => {
              const { datasetIndex, label, formattedValue } = context;
              if (datasetIndex === 0) {
                return `${label}: ${formattedValue.replace(/,/g, '')}`;
              }
              return null;
            },
            title: function(tooltipItem, data) {
              return null;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false,
          }
        },
      },
      elements: {
        bar: {
          borderWidth: 0,
          borderRadius: 5,
          borderSkipped: 'none',
        },
      },
    },
  });
  
});   