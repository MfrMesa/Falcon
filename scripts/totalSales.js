function optionsButton() {
    var options = document.querySelector('.menu_button_totalSales');
    options.style.display = options.style.display === 'none' ? 'block' : 'none';
  }

  function viewOption() {
    console.log('View option selected');
  }

  function exportOption() {
    console.log('Export option selected');
  }

  function removeOption() {
    console.log('Remove option selected');
  }


  const chart_totalSales = document.getElementById('chart_totalSales');
         
  new Chart(chart_totalSales, {
    type: 'line',
    data: {
      labels: ['Jan 1','', 'Jan 5','', 'Jan 9','', 'Jan 13','', 'Jan 17','', 'Jan 21','', 'Jan 25'],
      datasets: [{
        data: [60, 80, 60, 80, 65, 130, 120, 100, 30, 40, 30, 70, 80],
        borderWidth: 1,        
        pointBackgroundColor: "white",
        pointBorderWidth: 2,
        borderWidth: 2,
      }],

    },
    options: {     
      plugins: {
        legend: false,
      }, 
      scales: {

        y: {
          beginAtZero: true ,
          grid : {
            display: true,
            borderDash: [5, 5],
          }, 
          ticks: {
            stepSize: 30   
          } 
        },

        x: {
          beginAtZero: true,
          grid : {
            display: false, 
          },

          ticks: {
            stepSize: 4
          }
        },

        animation: {
          onComplete: function () {
            const chartInstance = this.chart;
            const ctx = chartInstance.ctx;
    
            ctx.save();
            ctx.strokeStyle = "#ddd"; // Color de las líneas punteadas
            ctx.lineWidth = 1;
    
            chartInstance.scales.y.ticks.forEach(function (value) {
              const yPosition = chartInstance.scales.y.getPixelForValue(value);
              ctx.beginPath();
              ctx.moveTo(chartInstance.chartArea.left, yPosition);
              ctx.lineTo(chartInstance.chartArea.right, yPosition);
              ctx.setLineDash([5, 5]); 
              ctx.stroke();
              ctx.setLineDash([]); 
            });
    
            ctx.restore();
          }
        }
  
      }
    }
  });