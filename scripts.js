// Weekly Activity Chart
const weeklyActivityCtx = document.getElementById('weeklyChart').getContext('2d');
const weeklyChart = new Chart(weeklyActivityCtx, {
    type: 'bar',
    data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Deposit',
                data: [500, 300, 400, 700, 200, 450, 500],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: 'Withdraw',
                data: [200, 150, 300, 500, 100, 250, 300],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: 'top' },
            title: {
                display: true,
                text: 'Weekly Activity',
            },
        },
    },
});

// Expense Statistics Chart
const expenseStatsCtx = document.getElementById('expenseChart').getContext('2d');
const expenseChart = new Chart(expenseStatsCtx, {
    type: 'pie',
    data: {
        labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
        datasets: [
            {
                data: [30, 15, 20, 35],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: { position: 'bottom' },
            title: {
                display: true,
                text: 'Expense Statistics',
            },
        },
    },
});

// Balance History Chart
const ctx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: 'Balance',
            data: [400, 500, 600, 700, 600, 650, 750],
            borderColor: '#009ffd',
            backgroundColor: 'rgba(0, 159, 253, 0.2)',
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointBackgroundColor: '#009ffd',
            pointBorderColor: '#fff',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#eee',
                }
            }
        }
    }
});
