'use strict';

define(['measurement'], function (measurement) {
    describe("measurement.Unit.Distance", function () {

        it('is defined', function () {
            expect(measurement.Unit.Distance).toBeDefined();
        });

        var dc = measurement.Unit.Distance;
        it('is an object', function () {
            expect(typeof dc).toBe('object');
        });

        it('which contains string keys that we can use as constants', function () {
            for (var i in dc) {
                expect(typeof dc[i]).toBe('string');
                expect(dc[i].length).toBeGreaterThan(0);
            }
        });

        describe("convert():", function () {

            it('1 Distance.KILOMETRE equals 1000 Distance.METRE', function () {
                expect(measurement('Distance').convert(1).from(dc.KILOMETRE)
                        .to(dc.METRE)).toBe(1000);
            });

            it('1000 Distance.MILLIMETRES equal 1 Distance.METRES', function () {
                expect(measurement('Distance').convert(1000)
                        .from(dc.MILLIMETRE).to(dc.METRE)).toBe(1);
            });

            it('100 Distance.MILLIMETRES equal 10 Distance.CENTIMETRES', function () {
                expect(measurement('Distance').convert(100)
                        .from(dc.MILLIMETRE).to(dc.CENTIMETRE)).toBe(10);
            });

            it('254 Distance.MILLIMETRES equal 10 Distance.INCH', function () {
                expect(measurement('Distance').convert(254).from(dc.MILLIMETRE)
                        .to(dc.INCH)).toBe(10);
            });

        });
    });
});
