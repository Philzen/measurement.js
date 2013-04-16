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

	it('which constant string keys', function() {
		for (var i in dc) {
			expect(typeof dc[i]).toBe('string');
			expect(dc[i].length).toBeGreaterThan(0);
		}
	});
	
	describe("convert():", function() {
		
		it('1 Distance.KILOMETRES equals 1000 Distance.METRES', function(){
			expect(measurement('Distance').convert(1).from(dc.KILOMETRES).to(dc.METRES) ).toBeDefined();
			expect(measurement('Distance').convert(1).from(dc.KILOMETRES).to(dc.METRES) ).toBe(1000);
		});
		
	});
});
