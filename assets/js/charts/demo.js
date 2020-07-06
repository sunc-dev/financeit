type = ['primary', 'info', 'success', 'warning', 'danger'];

demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function () {
        chartColor = "#FFFFFF";


    },


    initTrendCharts: function () {

        ChartOptionsConfigurationStock = {
            layout: {
                padding: {
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0
                }
            },

            animation: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },

            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                    display: false,
                    barPercentage: 1.6,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: "transparent",
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        suggestedMin: 60,
                        suggestedMax: 125,
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }],

                xAxes: [{
                    barPercentage: 1.6,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: 'rgba(225,78,202,0.1)',
                        zeroLineColor: "transparent",
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9a9a9a"
                    }
                }]
            }
        };


        var ctx = document.getElementById("chartStock").getContext("2d");

        var gradientStroke = ctx.createLinearGradient(0, 250, 0, 50);

        gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
        gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
        gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

        var data = {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
                label: "Data",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#d048b6',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#d048b6',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#d048b6',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 0,
                data: [80, 100, 70, 80, 120, 80],
            }]
        };

        var myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: ChartOptionsConfigurationStock
        });


        (function () { // self calling function replaces document.ready()

            //adding event listenr to button
            const classOrders = document.querySelectorAll('.orders')

            for (let i = 0; i < classOrders.length; i++) {
                classOrders[i].addEventListener("click", function () {
                    myChart.destroy();
                    myChart = new Chart(ctx, {
                        type: 'line',
                        data: data,
                        options: ChartOptionsConfigurationStock
                    });
                });
            };
        })();
    }
};


