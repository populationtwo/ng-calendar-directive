angular.module( 'calendarApp', [] )
	.directive( 'calendar', function () {
		return {
			restrict   : 'E',
			templateUrl: 'calendar-template.html',
			controller : 'calendarCtrl'
		}
	} )
	.controller( 'calendarCtrl', function ($scope, $element, $attrs) {

		// Set variables
		var date = new Date();
		var currentMonth = date.getMonth();
		var currentYear = date.getFullYear();
		var startYear = date.getFullYear() - 20;
		var endYear = date.getFullYear() + 20;

		// create month array
		$scope.monthNames = [
			{id: 0, name: 'January'},
			{id: 1, name: 'February'},
			{id: 2, name: 'March'},
			{id: 3, name: 'April'},
			{id: 4, name: 'May'},
			{id: 5, name: 'June'},
			{id: 6, name: 'July'},
			{id: 7, name: 'August'},
			{id: 8, name: 'September'},
			{id: 9, name: 'October'},
			{id: 10, name: 'November'},
			{id: 11, name: 'December'},
		];

		// create year array based on date selected
		$scope.yearArray = [];
		for (var start = +startYear, end = +endYear;
			 start <= end; start++) {
			$scope.yearArray.push( start );
		}

		// set month, year in drop down
		$scope.selectedMonth = currentMonth;
		$scope.selectedYear = currentYear;

		// on drop down change, recreate calendar

		// load the calendar

		// display calendar
		
		// set appropriate class for previous and next months

		var range1 = CalendarRange.getMonthlyRange( new Date() );
		//console.log( range1.first );
		//console.log( range1.start );
		//console.log( range1.end );
		//console.log( range1.last );
		//console.log( range1.days );


		$scope.range = CalendarRange.getMonthlyRange( new Date() );
		$scope.range.days.forEach( changeDayClass );

		function changeDayClass(element) {
			if (element.month < date.getMonth() || element.month > date.getMonth()) {
				element.dayClass = 'outside';
			}

		}


	} )

// your controller and directive code go here