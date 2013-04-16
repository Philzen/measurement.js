
/**
 * @type {Object} The namespace you want MeasurementJs to be available under, `window` by default
 */
var mJsNamespace = mJsNamespace || window;

/**
 * Measurement.Js
 * 
 * Unit-of-Measure conversion made easy.
 * 
 * @author Philipp Austermann
 * @version 0.1
 * @example text measurementJs.convert(3.5).from(DISTANCE.KMH).to(DISTANCE.M); or  measurementJs.convert(3.5).from(DISTANCE.KMH).to(DISTANCE.M);
 * 
 * @param {Object} namespace
 * @returns {undefined}
 */
(function(namespace) {
	
	namespace.measurement = MeasurementJs;
	namespace.measurement.Converter = MeasurementConverter;
	
	namespace.mJs = namespace.MeasurementJs;

	function MeasurementConverter() {

		var inputUnit = null,
			outputUnit = null,
			self = this;

		this.convert = function(value) {
			return 3;
		};

		this.inputUnit = null;
		this.setInputUnit = function(unit) {
			inputUnit = unit || null;
			this.inputUnit = inputUnit;
			
			return self;
		};

		this.outputUnit = null;
		this.setOutputUnit = function(unit) {
			outputUnit = unit || null;
			this.outputUnit = outputUnit;

			return self;
		};
	}

	function MeasurementJs() {

		/**
		 * 
		 * @param {type} value
		 * @returns {MeasurementConverter}
		 */
		this.convert = function(value) {
			var converter = new MeasurementConverter(value);

			function readyToConvert() {
				return converter.inputUnit !== null && converter.outputUnit !== null;
			};
			
			var easyApiConverter = {
				from: function(inputUnit) {
					converter.setInputUnit(inputUnit);
					if (readyToConvert())
						return converter.convert();
					
					return this;
				},
				to: function(outputUnit) {
					converter.setOutputUnit(outputUnit);
					if (readyToConvert())
						return converter.convert();
					
					return this;
				}
			};
			
			return easyApiConverter;
		};
		return this;
	}



})(mJsNamespace);


