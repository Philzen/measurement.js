'use strict';

describe("measurement.Unit.Pressure", function() {
	expect(measurement.Unit.Pressure).toBeDefined();
	
	var pc = measurement.Unit.Pressure;
	it('is an object', function() {
		expect(typeof pc).toBe('object');
	});

	it('which constant string keys', function() {
		for (var i in pc) {
			expect(typeof pc[i]).toBe('string');
			expect(pc[i].length).toBeGreaterThan(0);
		}
	});
	
	describe("convert():", function() {
		var pressureConverter = measurement('Pressure');
		it('1 Pressure.BAR equals 1 000 000 Pressure.PASCAL', function(){
			var result = pressureConverter.convert(1).from(pc.BAR).to(pc.PASCAL);
			expect( result ).toBeDefined();
			expect( result ).toBe(1000000);
		});
		console.log(pressureConverter);
		it('1 Pressure.BAR equals 10 000 Pressure.HECTO_PASCAL ', function(){
			console.log('yo');
			var result = pressureConverter.convert(1).from(pc.BAR).to(pc.HECTOPASCAL);
			expect( result ).toBeDefined();
			expect( result ).toBe(10000);
		});		
	});
});
