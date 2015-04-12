$(document).ready(function()  {

    $.getJSON('/json/formaps2.json', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

        // Instanciate the map
        $('#maps').highcharts('Map', {

            chart : {
                borderWidth : 0,
				
			style: {
				fontFamily: "'Roboto', sans-serif"
				},
            },

            title : {
				
                 text : 'Number of U.S. Rail Equipment Accidents by State'
            },
			
	
			
			credits: {
				enabled: false
			},

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },
			
            colorAxis: {
                min: 1,
				max: 300,
                type: 'linear',
				// minColor: '#85bba0',
                minColor: '#b1e0cb',
                maxColor: '#002814',
                stops: [
                    // [0, '#85bba0'],
					[0, '#b1e0cb'],
                    [0.67, '#00934a'],
                    [1, '#002814']
                ]
            },

            series : [{
                animation: {
                    duration: 1000
                },
                data : data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: 'dimgray',
                    format: '{point.code}'
                },
				allowPointSelect: true,
				states: {
                    hover: {
                        color: 'gainsboro',
                        borderColor: 'gray'
                    },
					select: {
						color: 'gainsboro',
						borderColor: 'black',
						dashStyle: 'dot'
					}
                },
                name: 'U.S. Rail Equipment Accidents/Incidents',
                tooltip: {
					headerFormat: '<span style="color: #4b83b7">' + ' \u2666  ' + '</span>',
                    pointFormat: '{point.code}: {point.value} Incidents'
					}
					
                
            }]
        });
    });
});