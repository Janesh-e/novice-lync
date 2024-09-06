document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("progressChart").getContext("2d");

  const progressChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Varun", "Vijay", "Syed", "Chris"], // Example names
      datasets: [
        {
          label: "Team Members",
          data: [12, 19, 15, 5],
          backgroundColor: ["#1E3A8A", "#10B981", "#F59E0B", "#EF4444"],
          borderColor: "#FFFFFF",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 10,
            padding: 10,
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.label + ": " + tooltipItem.raw;
            },
          },
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
    },
  });
});
