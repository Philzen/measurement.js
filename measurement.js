
/**
 * Measurement.Js
 * 
 * Unit-of-Measure conversion made easy.
 * 
 * @author Philipp Austermann
 * @version 0.1
 * @example text measurementJs.convert(3.5).from(DISTANCE.KMH).to(DISTANCE.M); or  measurementJs.convert(3.5).from(DISTANCE.KMH).to(DISTANCE.M);
 * 
 * @param {Object} ns
 * @returns {undefined}
 */
(function(win, ns) {
	"use strict";

	var UNIT = {
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

	var DEFINITIONS = {
		Speed: {
			'mph': {
				key: UNIT.Speed.MILES_PER_HOUR,
				base: UNIT.Speed.KILOMETRE_PER_HOUR,
				factor: 1.609344
			},
			'km/h': {
				key: UNIT.Speed.KILOMETRE_PER_HOUR,
				base: null
			},
			'm/s': {
				key: UNIT.Speed.METRE_PER_SECOND,
				base: UNIT.Speed.KILOMETRE_PER_HOUR,
				factor: 3.6
			},
			'kn': {
				key: UNIT.Speed.KNOT,
				base: UNIT.Speed.KILOMETRE_PER_HOUR,
				factor: 1.852
			}
		},
		Distance: {
			'km': {
				key: UNIT.Distance.KILOMETRE,
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
				key: UNIT.Distance.METRE,
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
				key: UNIT.Distance.MILLIMETRE,
				base: 'm',
				factor: 0.001
			},
			'in': {
				key: UNIT.Distance.INCH,
				base: 'm',
				factor: 0.0254
			}
		},
		Pressure: {
			'hPa': {
				key: UNIT.Pressure.HECTOPASCAL,
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
				key: UNIT.Pressure.PASCAL,
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
				key: UNIT.Pressure.BAR,
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
				key: UNIT.Temperature.CELSIUS,
				base: null
			},
			'f': {
				key: UNIT.Temperature.FAHRENHEIT,
				base: UNIT.Temperature.CELSIUS,
				factor: function(value, reverse) {
					if (reverse) {
						return value * 1.8 + 32;
                    }

					return (value - 32) * 5 / 9;
				}
			},
			'k': {
				key: UNIT.Temperature.KELVIN,
				base: UNIT.Temperature.CELSIUS,
				factor: function(value, reverse) {
					/**
					 * Really strange rounding error:
					 * (100 - 273.15) gives -173.14999999999998 (tested in Chrome 26.0.1410.63)
					 * 
					 * Following workarounds:
					 */
					if (reverse) {
						return parseFloat((value + 273 + 0.15).toFixed(10));
					}
					
					return (value - 273) - 0.15;
				}
			}
		},
		Duration: {
			'h': {
				key: UNIT.Duration.HOUR,
				base: 's',
				factor: 3600
			},
			'm': {
				key: UNIT.Duration.MINUTE,
				base: 's',
				factor: 60
			},
			's': {
				key: UNIT.Duration.SECOND,
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
						if (typeof inputDef.factor === 'function') {
							return inputDef.factor(value);
                        }

						return value * inputDef.factor;
					} else if (inputDef.key === outputDef.base) {
						if (typeof outputDef.factor === 'function') {
							return outputDef.factor(value, true);
                        }

						return value / outputDef.factor;

					} else {
						// We're here b/c neither input nor out type is base type to which we could directly convert

						/**
						 * TODO use direct reconversion factors, while trading off the higher accuracy / performance
						 * vs. larger configuration array/file size 
						 */
						var baseType = inputDef.base || outputDef.base, baseValue;
						if (typeof baseType === 'undefined') {
							return false;
                        }
						
						if (baseType === inputDef.base) {
							baseValue = mjs(unitType).convert(value).from(inputDef.key).to(inputDef.base);
							inputUnit = inputDef.base;
						} else if (baseType === outputDef.base) {
							baseValue = mjs(unitType).convert(value).from(outputDef.key).to(outputDef.base);
							inputUnit = outputDef.base;
						}
						
						if (baseType === UNIT.Temperature.CELSIUS) {
							return parseFloat(self.convert(baseValue).toFixed(10));
                        }
						
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
		var convert = function(value) {
			var valueToConvert = value,
				converter = new MeasurementConverter(UnitType);

			function readyToConvert() {
				return converter.inputUnit !== null && converter.outputUnit !== null;
			}

			var easyApiConverter = {
				from: function(inputUnit) {
					converter.setInputUnit(inputUnit);
					if (readyToConvert()) {
						return converter.convert(valueToConvert);
                    }

					return this;
				},
				to: function(outputUnit) {
					converter.setOutputUnit(outputUnit);
					if (readyToConvert()) {
						return converter.convert(valueToConvert);
                    }

					return this;
				}
			};

			return easyApiConverter;
		};

		return {
			convert: convert
		};
	}

    var mjs = MeasurementJs;
    mjs.Unit = UNIT;

	if (ns === undefined) {
        win.measurement = mjs;
	} else {
		ns.measurement = mjs;
		ns.mJs = mjs;
		ns.measurement.Converter = MeasurementConverter;
    }

    // AMD definition - i.e. for require.js
    if (typeof win.define === "function" && win.define.amd) {
        win.define("measurement", [], function() {
            return mjs;
        });
    } else if (win.module !== undefined && win.module.exports) {
        win.module.exports.measurementjs = mjs;
    }

})(window, window.mJsNamespace);
