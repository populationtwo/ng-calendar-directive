describe( 'calendar', function () {
	var scope, element, html;

	beforeEach( module( 'calendarApp' ) );
	beforeEach( module( 'calendar-template.html' ) );

	beforeEach( inject( function ($rootScope, $compile) {
		elem = angular.element(
			'<calendar></calendar>'
		);
		scope = $rootScope;
		$compile( elem )( scope );
		scope.$digest();
	} ) );


	it( 'should render the element correctly', function () {
		var currDate = new Date(),
			range = CalendarRange.getMonthlyRange( currDate );

		expect( elem.find( 'select' )[0].length ).toBe( 12 );
		expect( elem.find( 'select' )[1].length ).toBe( 41 );
		expect( elem.find( 'select option[selected=\'selected\']' ).eq( 0 ).text() ).toEqual( currDate.toLocaleString( 'en-us', {month: "long"} ) );
		expect( elem.find( 'select option[selected=\'selected\']' ).eq( 1 ).text() ).toEqual( currDate.getFullYear().toString() );
		expect( elem.find( '.date' ).length ).toBe( range.days.length );
		expect( elem.find( '.outside' ).length ).toBe( range.days.length - range.end.getDate() );

	} );

} )