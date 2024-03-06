document.addEventListener("DOMContentLoaded", function () {
    // Define sales data for each day
    var salesData = {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
            {
                label: "Daily Sales",
                data: [6000, 10000, 7500, 4000, 3500, 5500, 6000],
                backgroundColor: [
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                    'rgb(44, 123, 229)',
                ],
                borderWidth: 0,
                z: 1,
            },
            {
                label: "Background",
                data: [10000, 10000, 10000, 10000, 10000, 10000, 10000],
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 0,
                z: 0
            }
            ]
    };

    // Get canvas element
    var ctx = document.getElementById('ChartWeeklySalesGraph').getContext('2d');

    // Create the chart
    var weeklySalesChart = new Chart(ctx, {
        type: 'bar',
        data: salesData,
        options: {
            plugins: {
                legend: {
                    display: false // Hide legend
                }
            },
            xAxes: [
                {
                  stacked: true,
                },
            ],
            yAxes: [
                {
                  stacked: false,
                  ticks: {
                    beginAtZero: true,
                  },
                },
            ],
            scales: {
                x: {
                    display: false, // Hide x-axis
                    grid: {
                        display: false // Hide gridlines
                    }
                },
                y: {
                    beginAtZero: true,
                    display: false,
                    ticks: {
                        display: false // Hide y-axis labels
                    },
                    grid: {
                        display: false // Hide gridlines
                    }
                }
            },
            elements: {
                bar: {
                    borderWidth: 0, // Hide border
                    borderRadius: 10, // Set border radius
                    borderSkipped: 'bottom' // Apply border radius to the lower side of the bars
                }
            },
            tooltips: {
                backgroundColor: '#000000', // Background color of the tooltip
                titleFontColor: '#ffffff', // Font color of the title
                bodyFontColor: '#ffffff', // Font color of the body
                cornerRadius: 10, // Border radius of the tooltip
                displayColors: false, // Hide color boxes
                callbacks: {
                    label: function(context) {
                        return '$' + context.raw.toLocaleString() + 'K'; // Format the label as desired
                    }
                }
            }            
        }
    });
});

