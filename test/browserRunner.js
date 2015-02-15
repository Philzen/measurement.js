require.config({
    baseUrl: 'unit',
    urlArgs: 'cb=' + Math.random(),
    paths: {
        jquery: 'lib/jquery',
        measurement: '../../measurement',
        jasmine: '../lib/jasmine/jasmine',
        'jasmine-html': '../lib/jasmine/jasmine-html'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: [ 'jasmine' ],
            exports: 'jasmine'
        }
    }
});

require([ 'jasmine-html' ], function() {
    (function() {
        var jasmineEnv = jasmine.getEnv();
        jasmineEnv.updateInterval = 250;
        var htmlReporter = new jasmine.HtmlReporter();
        jasmineEnv.addReporter(htmlReporter);

        jasmineEnv.specFilter = function( spec ) {
            return htmlReporter.specFilter(spec);
        };
        var specs = [
            'mJs.ApiSpec',
            'mJs.convert.DistanceSpec', 'mJs.convert.DurationSpec',
            'mJs.convert.PressureSpec', 'mJs.convert.SpeedSpec',
            'mJs.convert.TemperatureSpec', 'mJs.convert.VolumeSpec',
            'mJs.CustomNamespaceSpec'
        ];

        function execJasmine( specs ) {
            require(specs, function() {
                jasmineEnv.execute();
            });
        }

        var currentWindowOnload = window.onload;
        function onLoad() {
            if (currentWindowOnload) {
                currentWindowOnload();
            }
            document.querySelector('.version').innerHTML = jasmineEnv.versionString();
            console.log('Executing Tests...');
            execJasmine(specs);
        }

        if (document.readyState === "complete")
            return onLoad();

        return window.onload = onLoad;

    })();
});
