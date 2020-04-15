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
			display: true,
			text: 'Total Medals Awarded Between 1924-2014 Split By Genders'
		}
	}
});

new Chart(document.getElementById('lineChart'), {
	type: 'line',
	data: {
		labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1994', '1998', '2002', '2006', '2010', '2014'],
		datasets: [
		{
			label: 'Men',
			data: ['94.92', '92.26', '94.83', '91.67', '89.29', '86.76', '82', '73.47', '75.14', '76.88', '77.50', '75.71', '76.61', '75.68', '76.14', '69.54', '67.64', '57.72', '56.76', '56.31', '55.95', '55.56'],
			fill: false,
			borderColor: '#4e79a7',
		},{
			label: 'Women',
			data: ['5.08', '6.74', '5.17', '8.33', '10.71', '13.24', '18', '26.53', '24.86', '23.12', '22.50', '22.29', '23.39', '24.32', '23.86', '30.46', '32.36', '42.28', '43.24', '43.69', '44.05', '44.44'],
			fill: false,
			borderColor: '#ff9da7'
			}	
		]
	},
	options: {
		title: {
			display: true,
			text: 'Medal Disparity Percentage Within Genders Over Time',
		
		animation: {
			duration: '3000',
			easing: 'easeInQuart'
		}
	}

}});