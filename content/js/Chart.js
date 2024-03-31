


const yValues1 = [5]; // Adjusted to match the length of xValues
const barColors = ["#45a9e7"];

new Chart("myChart1", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors[0], // Color for the first bar
        data: yValues1,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
        // Customize tooltip appearance
        // custom: function(tooltipModel) {
        //   // Tooltip element
        //   var tooltipEl = document.getElementById('chartjs-tooltip');
          
        //   // Create tooltip if it doesn't exist
        //   if (!tooltipEl) {
        //     tooltipEl = document.createElement('div');
        //     tooltipEl.id = 'chartjs-tooltip';
        //     tooltipEl.innerHTML = '<div></div>';
        //     document.body.appendChild(tooltipEl);
        //   }

        //   // Hide if no tooltip
        //   if (tooltipModel.opacity === 0) {
        //     tooltipEl.style.opacity = 0;
        //     return;
        //   }

        //   // Set tooltip text and style
        //   tooltipEl.classList.remove('above', 'below', 'no-transform');
        //   if (tooltipModel.yAlign) {
        //     tooltipEl.classList.add(tooltipModel.yAlign);
        //   } else {
        //     tooltipEl.classList.add('no-transform');
        //   }
        //   tooltipEl.innerHTML = tooltipModel.body[0].lines[0];
          
        //   // Apply custom CSS styles
        //   tooltipEl.style.fontSize = '46px'; // Customize font size
        //   tooltipEl.style.fontFamily = 'Arial'; // Customize font family
        //   tooltipEl.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Customize background color
        //   tooltipEl.style.padding = '20px'; // Customize padding
        //   tooltipEl.style.borderRadius = '4px'; // Customize border radius
        //   tooltipEl.style.color = '#fff'; // Customize text color
        //   tooltipEl.style.position = 'absolute'; // Position the tooltip
        //   tooltipEl.style.left = tooltipModel.caretX + 'px'; // Set left position
        //   tooltipEl.style.top = tooltipModel.caretY + 'px'; // Set top position
        //   tooltipEl.style.pointerEvents = 'none'; // Ensure tooltip does not block mouse events
        //   tooltipEl.style.transition = 'opacity 0.3s'; // Add smooth transition
        //   tooltipEl.style.opacity = 1; // Ensure tooltip is visible
        // }
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
const yValues2 = [5]; // Adjusted to match the length of xValues
const barColors2 = ["#2a2a61"];

new Chart("myChart2", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors2[0], // Color for the first bar
        data: yValues2,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
       
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
const yValues3 = [5]; // Adjusted to match the length of xValues
const barColors3 = ["#45a9e7"];

new Chart("myChart3", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors3[0], // Color for the first bar
        data: yValues3,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
       
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
const yValues4 = [5]; // Adjusted to match the length of xValues
const barColors4 = ["#2a2a61"];

new Chart("myChart4", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors4[0], // Color for the first bar
        data: yValues4,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
      
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
const yValues5 = [5]; // Adjusted to match the length of xValues
const barColors5 = ["#45a9e7"];

new Chart("myChart5", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors5[0], // Color for the first bar
        data: yValues5,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
       
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
const yValues6 = [5]; // Adjusted to match the length of xValues
const barColors6 = ["#2a2a61"];

new Chart("myChart6", {
  type: "horizontalBar", // Set chart type to horizontalBar
  data: {
    labels: [], // Remove x-values label array
    datasets: [
      {
        label: "Bar 1", // Label for the first bar
        backgroundColor: barColors6[0], // Color for the first bar
        data: yValues6,
        barThickness: 50 // Adjust the width of the bars
      }
    ]
  },
  options: {
    legend: {
      display: false,
      labels: {
        fontFamily: 'Arial',
        fontSize: 50
      }
    },
    title: {
      display: true,
      // text: "163(100%)"
    },
    tooltips: {
      enabled: true, // Set to true to enable tooltips
      position: 'average', // Position the tooltip on top of the bar
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units"; // Customize tooltip label here
        },
       
      }
    },
    scales: {
      xAxes: [{
        display: false, // Hide the x-axis
      }],
      yAxes: [{
        gridLines: {
          display: false // Hide the horizontal grid lines
        },
        ticks: {
          fontColor: "#000" // Adjust font color of y-axis labels if needed
        }
      }]
    }
  }
});
