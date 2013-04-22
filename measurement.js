
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

	namespace.measurement.Unit = {
		Speed: {
			MILES_PER_HOUR: 'mph',
			KILOMETRE_PER_HOUR: 'km/h',
			METRE_PER_SECOND: 'm/s',
			KNOT: 'kn'
		},
		Distance: {
			KILOMETRES: 'km',
			MILES: 'M',
			METRES: 'm',
			YARDS: 'y'
		}
	};

	var speedUnit = namespace.measurement.Unit.Speed,
		DEFINITIONS = {
		Speed: {
			'mph': {
				key: speedUnit.MILES_PER_HOUR,
				base: speedUnit.KILOMETRE_PER_HOUR,
				factor: 1.609344
			},
			'km/h': {
				key: speedUnit.KILOMETRE_PER_HOUR,
				base: null
			},
			'm/s': {
				key: speedUnit.METRE_PER_SECOND,
				base: speedUnit.KILOMETRE_PER_HOUR,
				factor: 3.6
			},
			'kn': {
				key: speedUnit.KNOT,
				base: speedUnit.KILOMETRE_PER_HOUR,
				factor: 1.852
			}
		},
		Distance: {
			'km': {
				base: 'm',
				factor: 1000,
				name: {
					de: 'Kilometer',
					en: 'Kilometer',
					en_GB: 'Kilometre'
				},
				plural: {
					en: 'Kilometers',
					en_GB: 'Kilometres'
				}
			},
			'm': {
				base: null, // equals factor of 1
				name: {
					de: 'Meter',
					en: 'Meter',
					en_GB: 'Metre'
				},
				plural: {
					en: 'Meters',
					en_GB: 'Metres'
				}
			}
		}
	};

	function MeasurementConverter(unitType) {
		var inputUnit = null,
			outputUnit = null,
			self = this;

		this.convert = function(value) {
			
			if (DEFINITIONS[unitType]) {
				var inputDef = DEFINITIONS[unitType][inputUnit],
				outputDef = DEFINITIONS[unitType][outputUnit];
				if (inputDef && outputDef) {
					
					if (inputDef.base === outputUnit) {
						return value * inputDef.factor;
					} else if(inputDef.key === outputDef.base) {
						return value / outputDef.factor;
					} else {
						/**
						 * TODO use direct reconversion factors, while trading off the higher accuracy / performance
						 * vs. larger configuration array/file size 
						 */
						var baseType = inputDef.base || outputDef.base, baseValue;
						if (baseType === inputDef.base) {
							baseValue = MeasurementJs(unitType).convert(value).from(inputDef.key).to(inputDef.base);
							inputUnit = inputDef.base;
						} else if (baseType === outputDef.base) {
							baseValue = MeasurementJs(unitType).convert(value).from(outputDef).to(outputDef.base);
							inputUnit = outputDef.base;
						}
						if (typeof baseType === 'undefined')
							return false;
						
						return self.convert(baseValue);
					}
				}
				console.log(value, inputDef, outputDef);
				console.log('ToDo!');
			}
			
			return false;
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

	function MeasurementJs(UnitType) {

		/**
		 * 
		 * @param {type} value
		 * @returns {MeasurementConverter}
		 */
		this.convert = function(value) {
			var valueToConvert = value,
				converter = new MeasurementConverter(UnitType);

			function readyToConvert() {
				return converter.inputUnit !== null && converter.outputUnit !== null;
			}
			;

			var easyApiConverter = {
				from: function(inputUnit) {
					converter.setInputUnit(inputUnit);
					if (readyToConvert())
						return converter.convert(valueToConvert);

					return this;
				},
				to: function(outputUnit) {
					converter.setOutputUnit(outputUnit);
					if (readyToConvert())
						return converter.convert(valueToConvert);

					return this;
				}
			};

			return easyApiConverter;
		};
		return this;
	}

})(mJsNamespace);
