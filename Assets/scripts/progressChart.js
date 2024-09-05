document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("progressChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Alice", "Bob", "Charlie", "Dave"],
      datasets: [
        {
          data: [40, 25, 20, 15],
          backgroundColor: ["#1E3A8A", "#10B981", "#F59E0B", "#EF4444"],
          borderColor: "#FFFFFF",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw}%`;
            },
          },
        },
      },
    },
  });
});
