 $(document).ready(function () {});

            $.getScript('http://www.chartjs.org/assets/Chart.js', function () {

                var data = [{
                        value: 94,
                        color: "#42A8C0"
                    },
                    {
                        value: 6,
                        color: "#fff"
                    }
                ];

                var options = {
                    animation: true
                };

                //Get the context of the canvas element we want to select
                var c = $('#myChart');
                var ct = c.get(0).getContext('2d');
                var ctx = document.getElementById("myChart").getContext("2d");
                /*************************************************************************/
                myNewChart = new Chart(ct).Doughnut(data, options);

            });
            
            $.getScript('http://www.chartjs.org/assets/Chart.js', function () {

                var data = [{
                        value: 85,
                        color: "#42A8C0"
                    },
                    {
                        value: 15,
                        color: "#fff"
                    }
                ];

                var options = {
                    animation: true
                };

                //Get the context of the canvas element we want to select
                var c1 = $('#myChart1');
                var ct1 = c1.get(0).getContext('2d');
                var ctx1 = document.getElementById("myChart1").getContext("2d");
                /*************************************************************************/
                myNewChart1 = new Chart(ct1).Doughnut(data, options);

            });
            
            $.getScript('http://www.chartjs.org/assets/Chart.js', function () {

                var data = [{
                        value: 60,
                        color: "#42A8C0"
                    },
                    {
                        value: 40,
                        color: "#fff"
                    }
                ];

                var options = {
                    animation: true
                };

                //Get the context of the canvas element we want to select
                var c2 = $('#myChart2');
                var ct2 = c2.get(0).getContext('2d');
                var ctx2 = document.getElementById("myChart2").getContext("2d");
                /*************************************************************************/
                myNewChart2 = new Chart(ct2).Doughnut(data, options);

            });
            
            $.getScript('http://www.chartjs.org/assets/Chart.js', function () {

                var data = [{
                        value: 30,
                        color: "#42A8C0"
                    },
                    {
                        value: 70,
                        color: "#fff"
                    }
                ];

                var options = {
                    animation: true
                };

                //Get the context of the canvas element we want to select
                var c3 = $('#myChart3');
                var ct3 = c3.get(0).getContext('2d');
                var ctx3 = document.getElementById("myChart3").getContext("2d");
                /*************************************************************************/
                myNewChart3 = new Chart(ct3).Doughnut(data, options);

            });
