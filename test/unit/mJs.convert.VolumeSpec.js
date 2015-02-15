'use strict';

define([ 'measurement' ], function( measurement ) {
    describe("measurement.Unit.Volume", function() {
        expect(measurement.Unit.Volume).toBeDefined();

        var volumeUnit = measurement.Unit.Volume;
        it('is an object', function() {
            expect(typeof volumeUnit).toBe('object');
        });

        it('which contains string keys that we can use as constants', function() {
            for (var i in volumeUnit) {
                expect(typeof volumeUnit[i]).toBe('string');
                expect(volumeUnit[i].length).toBeGreaterThan(0);
            }
        });

        describe("convert():", function() {

            it('1 Volume.CUP equals 16 Volume.TABLESPOON', function() {
                expect(measurement('Volume').convert(1).from(volumeUnit.CUP)
                    .to(volumeUnit.TABLESPOON)).toBeCloseTo(16);
            });

            it('1 Volume.TABLESPOON equals 3 Volume.TEASPOON', function() {
                expect(measurement('Volume').convert(1).from(volumeUnit.TABLESPOON)
                    .to(volumeUnit.TEASPOON)).toBeCloseTo(3);
            });

            it('1 Volume.LITER equals 1000 Volume.MILLILITER', function() {
                expect(measurement('Volume').convert(1).from(volumeUnit.LITER)
                    .to(volumeUnit.MILLILITER)).toBe(1000);
            });


        });
    });
});
