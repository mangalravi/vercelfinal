


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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 10, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
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
  type: "horizontalBar",
  data: {
    labels: [], 
    datasets: [
      {
        label: "Bar 1",
        backgroundColor: barColors2[0],
        data: yValues2,
        barThickness: 50
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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 10, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
    },
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#000"
        }
      }]
    }
  }
});
const yValues3 = [5];
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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 10, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 10, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 10, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
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
      enabled: true,
      position: 'average',
      callbacks: {
        label: function(tooltipItem, data) {
          return tooltipItem.xLabel + " units";
        },
      },
      // Adjust the tooltip properties
      bodyFontSize: 20, // Set the font size of the tooltip body
      bodySpacing: 30, // Set spacing between tooltip elements
      bodyAlign: 'left', // Align tooltip text to the left
      titleFontSize: 24, // Set the font size of the tooltip title
      titleSpacing: 15, // Set spacing between the tooltip title and body
      caretPadding: 20, // Set padding between the tooltip caret and tooltip
      displayColors: false // Hide the color box from the tooltip
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
