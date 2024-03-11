function optionsButton() {
    var options = document.querySelector(".menu_button_TopProducts");
    options.style.display = options.style.display === "none" ? "block" : "none";
  }
  
  function viewOption() {
    console.log("View option selected");
  }
  
  function exportOption() {
    console.log("Export option selected");
  }
  
  function removeOption() {
    console.log("Remove option selected");
  }

const ctx = document.getElementById('chart_TopProducts');
          
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Boots4','Slick', 'Sparrow',,'Freya'],
      datasets: [
        {
          label: '2019',
          data: [43, 83, 86, 72, 80, 50, 80],
          backgroundColor: 'rgba(54, 162, 235, 0.7)', 
          borderColor: 'rgba(54, 162, 235, 1)', 
          borderWidth: 1
        },
        {
          label: '2018',
          data: [85, 73, 62, 53, 50, 70, 90],
          backgroundColor: 'rgba(169, 169, 169, 0.7)', 
          borderColor: 'rgba(169, 169, 169, 1)', 
          borderWidth: 1
        },
      ],
      borderDash: [5,5],
      fill: false
    },
    options: {
      scales: {
        x: {
          type: 'category',
          labels: ['Boots4','', 'Slick','', 'Sparrow','', 'Freya'],
          grid: {
            display: false
          },
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            display: true,
          },
          ticks: {
            stepSize: 20
          },
        }
      },
      elements: {
        bar:{
          borderRadius: {
            topLeft: 15,
            topRight: 15,
          },
          barPercentage: 1,
        },
      },
      plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'start',
            labels: {
              boxWidth: 12,
              boxHeight: 12,
              usePointStyle: true,
            }
        }
      },
      legend: {
        labels: {
        boxWidth: 12,
        boxHeight: 12,
        padding: {
            bottom: 20
        }
        }
      }
    }
  });