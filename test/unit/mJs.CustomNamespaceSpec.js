"use strict";

define([ 'measurement' ], function( measurement ) {

    // inject namespace
    var scriptNs = document.createElement('script');
    scriptNs.innerHTML = "var OurCoolCustomNamespace = { changeIT: {}};window.mJsNamespace = OurCoolCustomNamespace.changeIT;";
    document.getElementsByTagName('head')[0].appendChild(scriptNs);

    // load measurement.js once more
    var script = document.createElement('script');
    script.onload = function() {
        console.log("Reloaded measurement.js with custom namespace option");
    };
    script.src = "base/measurement.js";
    script.async = false;
    document.getElementsByTagName('head')[0].appendChild(script);

    waitsFor(function() {
        return typeof window.OurCoolCustomNamespace.changeIT.measurement !== 'undefined';
    }, "measurementJs to be loaded into custom namespace");

    describe("Assign a custom namespace for MeasurementJs:", function() {


        it("just set window.mJsNamespace = YourNamespace before measurement.js include", function() {
            expect(OurCoolCustomNamespace.changeIT.measurement)
                .toBeDefined();
        });

    });
});


