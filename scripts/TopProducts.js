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
        labels: ['Boots4', 'Reign Pro','Slick', 'Falcon', 'Sparrow', 'Hideway', 'Freya'],
        datasets: [
          {
            label: '2019',
            data: [43, 83, 86, 72, 80, 50, 80],
            backgroundColor: "rgb(44, 123, 229)", 
            borderColor: "rgb(44, 123, 229)", 
            borderWidth: 0.1,
            barThickness: 12,
            barPercentage: 10,
          },
          {
            label: '2018',
            data: [85, 73, 62, 53, 50, 70, 90],
            backgroundColor: "rgb(193, 201, 211)", 
            borderColor: 'rgb(193, 201, 211)', 
            borderWidth: 0.1,
            barThickness: 12,
            barPercentage: 10,
          },
        ],
        fill: false
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: ['Boots4', 'Reign Pro','Slick', 'Falcon', 'Sparrow', 'Hideway', 'Freya'],
            grid: {
              display: false
            },
            ticks: {
              autoSkip: false,
              maxRotation: 45,
              minRotation: 45,
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
            },
            ticks: {
              stepSize: 20
            },
            border: {
              dash: [5,5],
              display: false,
              drawBorder: false,
            },
            min: 0,
            max: 100,
          }
        },
        elements: {
          bar:{
            borderRadius: {
              topLeft: 15,
              topRight: 15,
            },
            barPercentage: 5,
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
            boxWidth: 6,
            boxHeight: 6,
            padding: {
              bottom: 10
            }
          }
        }
      }
  });
  