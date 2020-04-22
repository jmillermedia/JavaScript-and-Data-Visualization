//Javascript START
new Chart(document.getElementById('pieChart'), {
	type: 'doughnut',
	data: {
		labels: ['Men', 'Women'],
		datasets: [
		{
			data: ['3944', '1826'],
			backgroundColor: ['#4e79a7', '#ff9da7'],
			borderColor: '#262626'
			}
		]
	},
	options: {
		title: {
			display: false,
			text: 'Total Medals Awarded Between 1924-2014 Split By Genders:'
		},
		animation: {
			duration: '5000',
			easing: 'easeInOutQuint'
		}
	}
});

new Chart(document.getElementById('advancedChart'), {
	type: 'bar',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
		{
			label: 'Men',
			data: ['112', '83', '110', '99', '125', '118', '123', '108', '139', '153', '155', '159', '167', '168', '201', '226', '232', '258', '273', '299', '296', '340'],
			backgroundColor: '#4e79a7'
		},{
			label: 'Women',
			data: ['6', '6', '6', '9', '15', '18', '27', '39', '46', '46', '45', '51', '51', '54', '63', '99', '111', '189', '208', '232', '233', '272'],
			backgroundColor: '#ff9da7'
			},
			{
				label: 'Trend',
				type: 'line',
				data: ['6', '6', '6', '9', '15', '18', '27', '39', '46', '46', '45', '51', '51', '54', '63', '99', '111', '189', '208', '232', '233', '272'],
				fill: false,
				borderColor: 'rgba(255, 157, 167, 0.2)',				
			},
			{
				label: 'Trend',
				type: 'line',
				data: ['112', '83', '110', '99', '125', '118', '123', '108', '139', '153', '155', '159', '167', '168', '201', '226', '232', '258', '273', '299', '296', '340'],
				fill: false,
				borderColor: 'rgba(78, 121, 167, 0.2)',
			}
		]
	},
	options: {
		legend: {
			display: false
		},
		title: {
			display: false,
			text: 'Medals Awards To Each Gender Separated By Year:',
		},
		animation: {
			duration: '10000',
			easing: 'easeInQuart'
		},
}});

new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
		{
			label: 'Men (Percentage)',
			data: ['94.92', '92.26', '94.83', '91.67', '89.29', '86.76', '82', '73.47', '75.14', '76.88', '77.50', '75.71', '76.61', '75.68', '76.14', '69.54', '67.64', '57.72', '56.76', '56.31', '55.95', '55.56'],
			fill: true,
			borderColor: '#4e79a7',
			backgroundColor: 'rgba(78, 121, 167, 0.2)'
		},{
			label: 'Women (Percentage)',
			data: ['5.08', '6.74', '5.17', '8.33', '10.71', '13.24', '18', '26.53', '24.86', '23.12', '22.50', '22.29', '23.39', '24.32', '23.86', '30.46', '32.36', '42.28', '43.24', '43.69', '44.05', '44.44'],
			fill: true,
			borderColor: '#ff9da7',
			backgroundColor: 'rgba(255, 157, 167, 0.2)'
			}	
		]
	},
	options: {
		title: {
			display: false,
			text: 'Medal Disparity Percentage Within Genders Over Time:',
		},
		animation: {
			duration: '3000',
			easing: 'easeInQuart'
		}
}});

var updatingChart = new Chart(document.getElementById('radarChart'), {
	type: 'radar',
	data: {
		labels: ['Four/Five "Man"', '500M', '1500M', 'Team', 'Curling', '4X7.5KM Relay', 'Pairs', 'Individual', 'Ice Hockey'],
		datasets: [
		{
			label: 'Men (Medal Count)',
			data: ['274', '252', '78', '77', '97', '156', '67', '144', '1231'],
			fill: true,
			borderColor: '#4e79a7',
			backgroundColor: 'rgba(78, 121, 167, 0.2)'
		},{
			label: 'Women (Medal Count)',
			data: ['0', '91', '57', '13', '75', '45', '67', '78', '305'],
			fill: true,
			borderColor: '#ff9da7',
			backgroundColor: 'rgba(255, 157, 167, 0.2)'
			}	
		]
	},
	options: {
		title: {
			display: true,
			text: '"Ice Hockey" Shows The Biggest Disparity Compared To Other Events 1924-2014:',
		},
		animation: {
			duration: '1000',
			easing: 'easeInQuart'
		}
}});

function removeData(chart) {
	chart.data.labels.pop();
	chart.data.datasets[0].data.pop();
	chart.data.datasets[1].data.pop();
	chart.update();
}

setTimeout(function () {
	removeData(updatingChart);
}, 8000);