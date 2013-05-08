'use strict';

describe("measurement.Unit.Temperature", function() {
	expect(measurement.Unit.Temperature).toBeDefined();
	
	/**
	 * dc Distance Constants
	 * @type @exp;measurement@pro;Unit@pro;Temperature
	 */
	var tu = measurement.Unit.Temperature;
	it('is an object', function() {
		expect(typeof tu).toBe('object');
	});

	it('which string keys that we can use as constants', function() {
		for (var i in tu) {
			expect(typeof tu[i]).toBe('string');
			expect(tu[i].length).toBeGreaterThan(0);
		}
	});
	
	describe("tc...", function() {
		var tc = measurement('Temperature').convert;
		it('20° Celsius => 68° Fahrenheit', function(){
			expect(tc(20).from(tu.CELSIUS).to(tu.FAHRENHEIT) ).toBeDefined();
			expect(tc(20).from(tu.CELSIUS).to(tu.FAHRENHEIT) ).toBe(68);
		});
		
		it(' 0° Celsius => 32° Fahrenheit', function(){
			expect(tc(0).from(tu.CELSIUS).to(tu.FAHRENHEIT) ).toBeDefined();
			expect(tc(0).from(tu.CELSIUS).to(tu.FAHRENHEIT) ).toBe(32);
		});
		
		it('14° Fahrenheit => -10° Celsius', function(){
			expect(tc(14).from(tu.FAHRENHEIT).to(tu.CELSIUS) ).toBeDefined();
			expect(tc(14).from(tu.FAHRENHEIT).to(tu.CELSIUS) ).toBe(-10);
		});
		
		it('-22° Fahrenheit => -30° Celsius',function(){
			expect(tc(-22).from(tu.FAHRENHEIT).to(tu.CELSIUS) ).toBeDefined();
			expect(tc(-22).from(tu.FAHRENHEIT).to(tu.CELSIUS) ).toBe(-30);
		});
		
		it('100 Kelvin => -173.15° Celsius',function(){
			var value = tc(100).from(tu.KELVIN).to(tu.CELSIUS);
			expect(value ).toBeDefined();
			expect(value ).toBe(-173.15);
		});
		
		it('0 Kelvin =>  -459.67° Fahrenheit',function(){
			var value = tc(0).from(tu.KELVIN).to(tu.FAHRENHEIT);
			expect( value ).toBeDefined();
			expect( value ).toBe(-459.67);
		});
	});
});
