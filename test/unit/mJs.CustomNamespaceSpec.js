"use strict";

describe("Assign a custom namespace for MeasurementJs:", function() {

// inject namespace
    var scriptNs = document.createElement('script');
    scriptNs.innerHTML = "var OurCoolCustomNamespace = { changeIT: {}};window.mJsNamespace = OurCoolCustomNamespace.changeIT;";
    document.getElementsByTagName('head')[0].appendChild(scriptNs);
    console.info('Injected namespace command into page');

    it("just set window.mJsNamespace = YourNamespace before measurement.js include", function() {
        var script = document.createElement('script');
        var basePath = '..';
        if (window.__karma__ !== undefined) {
            basePath = 'base';
        }
        script.src = basePath + "/measurement.js";
        script.async = false;
        script.onload = function() {
            console.info("CustomNamespaceSpec.js: Dynamically loaded measurement.js with custom namespace option");
            expect(OurCoolCustomNamespace.changeIT.measurement)
                .toBeDefined();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});
