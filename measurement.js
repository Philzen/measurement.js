
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
	window.measurement = MeasurementJs;

	MeasurementJs.Unit = {
		Speed: {
			MILES_PER_HOUR: 'mph',
			KILOMETRE_PER_HOUR: 'km/h',
			METRE_PER_SECOND: 'm/s',
			KNOT: 'kn'
		},
		Distance: {
			MILLIMETRE: 'mm',
			INCH: 'in',
			KILOMETRE: 'km',
			MILE: 'M',
			METRE: 'm',
			YARDS: 'y'
		},
		Pressure: {
			HECTOPASCAL: 'hPa',
			PASCAL: 'Pa',
			BAR: 'bar'
		},
		Temperature: {
			CELSIUS: 'c',
			FAHRENHEIT: 'f',
			KELVIN: 'k'
		},
		Duration: {
			HOUR: 'h',
			MINUTE: 'm',
			SECOND: 's'
		}
	};

	var speedUnit = MeasurementJs.Unit.Speed,
		pressureUnit = MeasurementJs.Unit.Pressure,
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
				key: MeasurementJs.Unit.Distance.KILOMETRE,
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
				key: MeasurementJs.Unit.Distance.METRE,
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
			},
			'mm': {
				key: MeasurementJs.Unit.Distance.MILLIMETRE,
				base: 'm',
				factor: 0.001
			},
			'in': {
				key: MeasurementJs.Unit.Distance.INCH,
				base: 'm',
				factor: 0.0254
			}
		},
		Pressure: {
			'hPa': {
				key: pressureUnit.HECTOPASCAL,
				base: 'Pa',
				factor: 100,
				name: {
					de: 'Hektopascal',
					en: 'Hectopascal',
					en_GB: 'Hectopascal'
				},
				plural: {
					en: 'Hectopascals'
				}
			},
			'Pa': {
				key: pressureUnit.PASCAL,
				base: null,
				name: {
					de: 'Pascal',
					en: 'Pascal',
					en_GB: 'Pascal'
				},
				plural: {
					en: 'Pascals'
				}
			},
			'bar': {
				key: pressureUnit.BAR,
				base: 'Pa',
				factor: 1000000,
				name: {
					de: 'Bar',
					en: 'Bar',
					en_GB: 'Bar'
				},
				plural: {
					en: 'Bars'
				}
			}
		},
		Temperature: {
			'c': {
				key: MeasurementJs.Unit.Temperature.CELSIUS,
				base: null
			},
			'f': {
				key: MeasurementJs.Unit.Temperature.FAHRENHEIT,
				base: MeasurementJs.Unit.Temperature.CELSIUS,
				factor: function(value, reverse) {
					if (reverse)
						return value * 1.8 + 32;

					return (value - 32) * 5 / 9;
				}
			},
			'k': {
				key: MeasurementJs.Unit.Temperature.KELVIN,
				base: MeasurementJs.Unit.Temperature.CELSIUS,
				factor: function(value, reverse) {
					/**
					 * Really strange rounding error:
					 * (100 - 273.15) gives -173.14999999999998 (tested in Chrome 26.0.1410.63)
					 * 
					 * Following workarounds:
					 */
					if (reverse) {
						return parseFloat((value + 273 + .15).toFixed(10));
					}
					
					return (value - 273) - .15;
				}
			}
		},
		Duration: {
			'h': {
				key: MeasurementJs.Unit.Duration.HOUR,
				base: 's',
				factor: 3600
			},
			'm': {
				key: MeasurementJs.Unit.Duration.MINUTE,			
				base: 's',
				factor: 60
			},
			's': {
				key: MeasurementJs.Unit.Duration.SECOND,
				base: null,
				factor: 1
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
						if (typeof inputDef.factor === 'function')
							return inputDef.factor(value);

						return value * inputDef.factor;
					} else if (inputDef.key === outputDef.base) {
						if (typeof outputDef.factor === 'function')
							return outputDef.factor(value, true);

						return value / outputDef.factor;

					} else {
						// We're here b/c neither input nor out type is base type to which we could directly convert

						/**
						 * TODO use direct reconversion factors, while trading off the higher accuracy / performance
						 * vs. larger configuration array/file size 
						 */
						var baseType = inputDef.base || outputDef.base, baseValue;
						if (typeof baseType === 'undefined')
							return false;
						
						if (baseType === inputDef.base) {
							baseValue = MeasurementJs(unitType).convert(value).from(inputDef.key).to(inputDef.base);
							inputUnit = inputDef.base;
						} else if (baseType === outputDef.base) {
							baseValue = MeasurementJs(unitType).convert(value).from(outputDef.key).to(outputDef.base);
							inputUnit = outputDef.base;
						}
						
						if (baseType === MeasurementJs.Unit.Temperature.CELSIUS)
							return parseFloat(self.convert(baseValue).toFixed(10));
						
						return self.convert(baseValue);
					}
				}
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
		var self = this;
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
		return {
			convert: self.convert
		};
	}

	if (typeof namespace !== 'undefined') {
		window.MeasurementJs = undefined;
		namespace.measurement = MeasurementJs;
		namespace.mJs = namespace.MeasurementJs;
		namespace.measurement.Converter = MeasurementConverter;
	}

})(typeof mJsNamespace !== 'undefined' ? mJsNamespace : undefined);

