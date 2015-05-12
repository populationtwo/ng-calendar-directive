angular.module( 'calendarApp', [] )
	.directive( 'calendar', function () {
		return {
			restrict   : 'E',
			templateUrl: 'calendar-template.html',
			controller : 'calendarCtrl'
		}
	} )
	.controller( 'calendarCtrl', function ($scope, $element, $attrs) {

		var date = new Date();
		var range1 = CalendarRange.getMonthlyRange(new Date());
		console.log(range1.first);
		console.log(range1.start);
		console.log(range1.end);
		console.log(range1.last);
		console.log(range1.days);


		$scope.range = CalendarRange.getMonthlyRange(new Date());
		$scope.range.days.forEach(changeDayClass);

		function changeDayClass(element){
			if ( element.month < date.getMonth() || element.month > date.getMonth()) {
				element.dayClass = 'outside';
			}

		}


	} )

// your controller and directive code go here