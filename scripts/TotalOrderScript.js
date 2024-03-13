document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('ChartTotalOrderGraph').getContext('2d');

  // Create a linear gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 60); // Adjust the gradient dimensions as needed

  // Add color stops to the gradient
  gradient.addColorStop(0, 'rgba(203, 223, 248, 1)'); // Start color with alpha channel
  gradient.addColorStop(1, 'rgba(203, 223, 248, 0)'); // End color with alpha channel



  let ChartTotalOrderGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week 4', 'Week 5'],
        datasets: [{
          label: 'Sales',
          data: [15000, 43400], // Add more data points for the curve
          order: 1,
          tension: 0.5, // Add tension to the curve
          borderColor: 'rgba(44, 123, 229)', // Solid color for the line
          pointBackgroundColor: 'white',
          pointBackgroundHoverColor: 'white',
          pointBorderColor: 'rgba(44, 123, 229)',
          pointBorderHoverColor: 'rgba(44, 123, 229)',
          pointRadius: 4,
          pointHoverRadius: 4,
          pointBorderWidth: 1.7,
          pointHoverBorderWidth: 1.7,
          fill: true,
          backgroundColor: gradient,
      }]
    },

    options: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          position: 'custom',
          intersect: false,
          caretSize: 0,
          displayColors: false,
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(0,0,0,.1)',
          padding: 10,
          borderWidth: 1,
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
        
        clip: {
          borderColor: 'rgba(44, 123, 229)', // Solid color for the line
        },
      },

      scales: {
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          display: false,
          grid: {
            display: false,
          },
          min: 12000, // Set minimum value for y-axis
          max: 46100, // Set maximum value for y-axis
        },
      },
    },
  });
    
});   
