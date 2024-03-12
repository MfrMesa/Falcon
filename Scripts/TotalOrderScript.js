document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('ChartTotalOrderGraph').getContext('2d');
  
    let weeklySalesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 4', 'Week 5'],
        datasets: [{
        label: 'Sales',
        data: [15000, 43400],
        backgroundColor: 'rgb(44, 123, 229)',
        hoverBackgroundColor: 'rgba(44, 123, 229',
        }]
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
            intersect: false,
            position: 'nearest',
            displayColors: false,
            backgroundColor: '#FFFFFF',
            borderColor: 'rgba(0,0,0,.1)',
            padding: 12,
            borderWidth: 1,
            bodyColor: '#000000',
            filter: function (tooltipItem) {
              return tooltipItem.datasetIndex === 0;
            },
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