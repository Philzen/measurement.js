'use strict';

describe("measurement.Unit.Distance", function() {
	expect(measurement.Unit.Distance).toBeDefined();
	
	/**
	 * dc Distance Constants
	 * @type @exp;measurement@pro;Unit@pro;Distance
	 */
	var dc = measurement.Unit.Distance;
	it('is an object', function() {
		expect(typeof dc).toBe('object');
	});

	it('which contains string keys that we can use as constants', function() {
		for (var i in dc) {
			expect(typeof dc[i]).toBe('string');
			expect(dc[i].length).toBeGreaterThan(0);
		}
	});
	
	describe("convert():", function() {
		
		it('1 Distance.KILOMETRES equals 1000 Distance.METRES', function(){
			expect(measurement('Distance').convert(1).from(dc.KILOMETRES).to(dc.METRES) ).toBe(1000);
		});

		it('1000 Distance.MILLIMETRES equal 1 Distance.METRES', function(){
			expect(measurement('Distance').convert(1000).from(dc.MILLIMETRES).to(dc.METRES) ).toBe(1);
		});
		
		it('254 Distance.MILLIMETRES equal 10 Distance.INCH', function(){
			expect(measurement('Distance').convert(254).from(dc.MILLIMETRES).to(dc.INCH) ).toBe(10);
		});
		
	});
});
