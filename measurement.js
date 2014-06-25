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
//Add more time
(function (win, ns) {
    "use strict";

    var UNIT = {
        area: {
            ACRE: 'acre',
            ARE: 'a',
            BARN: 'b',
            HECTARE: 'ha',
            HOMESTEAD: 'homestead',
            ROOD: 'rood',
            SQUARE_CENTIMETER: 'sqcm',
            SQUARE_FOOT: 'sqf',
            SQUARE_INCH: 'sqin',
            SQUARE_KILOMETER: 'sqkm',
            SQUARE_METER: 'sqm',
            SQUARE_MILE: 'sqmi',
            SQUARE_MILLIMETER: 'sqmm',
            SQUARE_ROD: 'sqr',
            SQUARE_YARD: 'sqy',
            TOWNSHIP: 'twp'
        },
        Angle: {
            DEGREE: 'deg',
            FULL_CIRCLE: 'fcir',
            GRAD: 'grad',
            GON: 'gon',
            MINUTE: 'min',
            MIL: 'mil',
            QUADRANT: 'quad',
            RADIAN: 'rad',
            REVOLUTION: 'rev',
            RIGHT_ANGLE: 'ra',
            SECOND: 'sec'

        },
        Acceleration: {
            ACCELERATION_OF_GRAVITY: 'grav',
            ATTOMETER_SQUARE_SECOND: 'atto',
            CENTIMETER_SQUARE_SECOND: 'centi',
            DECIMETER_SQUARE_SECOND: 'deci',
            DEKAMETER_SQUARE_SECOND: 'deka',
            FEMTOMETER_SQUARE_SECOND: 'femto',
            GAL: 'gal',
            GALILEO: 'gali',
            HECTOMETER_SQUARE_SECOND: 'hecto',
            INCH_SQUARE_SECOND: 'inch',
            KILOMETER_SQUARE_SECOND: 'kilo',
            METER_SQUARE_SECOND: 'meter',
            MILLIMETER_SQUARE_SECOND: 'milli',
            MICROMETER_SQUARE_SECOND: 'micro',
            MILE_SQUARE_SECOND: 'mile',
            NANOMETER_SUQARE_SECOND: 'nano',
            PICOMETER_SQUARE_SECOND: 'pico',
            YARD_SQUARE_SECOND: 'yard'
        },
        Astronomical: {
            ASTRONOMICAL_UNIT: 'astro',
            KILOMETER: 'kilo',
            LIGHT_YEAR: 'year',
            LIGHT_WEEK: 'week',
            LIGHT_DAY: 'day',
            METER: 'm',
            MILE: 'mi',
            PARSEC: 'par'

        },
        Blood: {
            MMOL: 'mol',
            MGDL: 'mgd',
            MG: 'mg'
        },
        Capacitance: {
            ABFARAD: 'ab',
            ATTOFARAD: 'at',
            CENTIFARAD: 'centi',
            COULOMB_PER_VOLT: 'col',
            DECAFARAD: 'deca',
            DECIFARAD: 'deci',
            EXAFARAD: 'exa',
            FARAD: 'far',
            FEMTOFARAD: 'femot',
            GIGAFARAD: 'giga',
            HECTOFARAD: 'hecto',
            KILOFARAD: 'kilo',
            MEGAFARAD: 'mega',
            MICROFARAD: 'micro',
            MILLIFARAD: 'milli',
            NANOFARAD: 'nano',
            PETAFARAD: 'peta',
            PICOFARAD: 'pico',
            STATFARAD: 'stat',
            TERAFARAD: 'tera',
            YOCTOFARAD: 'yoct',
            YOTTAFARAD: 'yotta',
            ZEPTOFARAD: 'zepto',
            ZETTAFARAD: 'zeta'
        },
        Computerstorage: {
            BIT: 'bit',
            BYTE: 'b',
            KILOBIT: 'kilo',
            KILOBYTE: 'kilobyte',
            MEGABIT: 'mega',
            MEGABYTE: 'megamega',
            GIGABIT: 'giga',
            GIGABYTE: 'gigagiga',
            TERABIT: 'tera',
            TERABYTE: 'teratera',
            PETABIT: 'peta',
            PETABYTE: 'petapeta'
        },
        Cooking: {
            CUP: 'cup',
            DASH: 'dash',
            DESSERTSPOON_US: 'des',
            DESSERTSPOON_UK: 'desuk',
            DRAM_US: 'dram',
            DRAM_UK: 'dramuk',
            DROP: 'drop',
            FIFTH: 'fif',
            FLUID_OUNCE_US: 'fluid',
            FLUID_OUNCE_UK: 'fluidUK',
            GALLON_US_FLUID: 'gallon',
            GALLON_US_DRY: 'gallonUS',
            GALLON_UK: 'gallonUK',
            GILL_US: 'gillUS',
            GILL_UK: 'gillUK',
            LITER: 'lit',
            MILLILITER: 'milli',
            PINT_US_FLUID: 'pint',
            PINT_US_DRY: 'pintUS',
            PINT_UK: 'pintUK',
            QUART_US_FLUID: 'quart',
            QUART_US_DRY: 'quartUS',
            QUART_UK: 'quartUK',
            TABLEPOON_US: 'table',
            TEASPOON_US: 'teaUS'

        },
        Density: {
            GRAM_CUBIC_CENTIMETER: 'gc',
            GRAM_CUBIC_DECIMETER: 'gd',
            GRAM_CUBIC_METER: 'gm',
            GRAM_LITER: 'gl',
            GRAM_MILLILITER: 'gmili',
            MEGAGRAM_CUBIC_CENTIMETER: 'mc',
            MEGAGRAM_CUBIC_METER: 'mm',
            MEGAGRAM_LITER: 'ml',
            MEGAGRAM_MILLILITER: 'mmili',
            MILLIGRAM_CUBIC_CENTIMETER: 'milic',
            MILLIGRAM_CUBIC_DECIMETER: 'milid',
            MILLIGRAM_CUBIC_METER: 'milim',
            MILLIGRAM_LITER: 'milil',
            MILLIGRAM_MILLILITER: 'miligmili',
            KILOGRAM_CUBIC_CENTIMETER: 'kiloc',
            KILOGRAM_CUBIC_DECIMETER: 'kilod',
            KILOGRAM_CUBIC_METER: 'kilom',
            KILOGRAM_LITER: 'kilol',
            KILOGRAM_MILLILITER: 'kilomili',
            OUNCE_CUBIC_FOOT: 'of',
            OUNCE_CUBIC_INCH: 'oi',
            OUNCE_CUBIC_YARD: 'oy',
            OUNCE_GALLON_UK: 'ouk',
            OUNCE_GALLON_US: 'ous',
            POUND_CIRCULAR_MIL_FOOT: 'pmf',
            POUND_CUBIC_FOOT: 'pf',
            POUND_CUBIC_INCH: 'pi',
            POUND_CUBIC_YARD: 'py',
            POUND_GALLON_UK: 'puk',
            POUND_GALLON_US: 'pus',
            GRAIN_CUBIC_FOOT: 'gf',
            GRAIN_CUBIC_INCH: 'gi',
            GRAIN_CUBIC_YARD: 'gy',
            GRAIN_GALLON_UK: 'guk',
            GRAIN_GALLON_US: 'gus',
            TONNE_CUBIC_CENTIMETER: 'tc',
            TONNE_CUBIC_DECIMETER: 'td',
            TONNE_CUBIC_METER: 'tm',
            TONNE_LITER: 'tl',
            TONNE_MILLILITER: 'tmili'
        },
        Datatransfer: {
            BIT_SECOND: 'bs',
            BYTE_SECOND: 'bys',
            KILOBIT_SECOND: 'ks',
            KILOBYTE_SECOND: 'kilos',
            MEGABIT_SECOND: 'ms',
            MEGABYTE_SECOND: 'megas',
            GIGABIT_SECOND: 'gs',
            GIGABYTE_SECOND: 'gigas',
            BYTE_MINUTE: 'bm',
            BYTE_HOUR: 'bh',
            KILOBYTE_MINUTE: 'km',
            KILOBYTE_HOUR: 'kh',
            MEGABYTE_MINUTE: 'mm',
            MEGABYTE_HOUR: 'mh'
        },
        Electricalcharge: {
            ABCOULOMB: 'ab',
            AMPERE_HOUR: 'amp',
            COULOMB: 'c',
            ELEMENTARY_CHARGE: 'ec',
            FARADAY: 'far',
            KILOCOULOMB: 'kiloc',
            MEGACOULOMB: 'megac',
            MICROCOULOMB: 'microc',
            MILLIAMPERE_HOUR: 'mamp',
            MILLICOULOMB: 'milic',
            NANOCOULOMB: 'nanoc',
            STATCOULOMB: 'statc'
        },
        Electricalresistance: {
            ABOHM: 'ab',
            GIGAOHM: 'gig',
            KILOOHM: 'kilo',
            MEGAOHM: 'mega',
            MICROOHM: 'mico',
            MILLIOHM: 'milli',
            NANOOHM: 'nano',
            OHM: 'ohm',
            VOLT_PER_AMPERE: 'v'
        },
        Energy: {
            BTU: 'btu',
            CALORIE: 'cal',
            ELECTRONVOLT: 'electro',
            ERG: 'erg',
            FOOT_POUND: 'fp',
            GIGAJOULE: 'gj',
            JOULE: 'j',
            KILOCALORIE: 'kiloc',
            KILOJOULE: 'kiloj',
            KILOWATT_HOUR: 'kiloh',
            MEGAJOULE: 'mj',
            NUTRITION_CALORIE: 'nc',
            TON_OF_TNT: 'tnt',
            WATT_HOUR: 'wh'
        },
        Force: {
            ATTONEWTON: 'atto',
            CENTINEWTON: 'centi',
            DECIGRAM_FORCE: 'deci',
            DECINEWTON: 'decin',
            DEKAGRAM_FORCE: 'deka',
            DEKANEWTON: 'dekan',
            DYNE: 'dyne',
            EXANEWTON: 'exan',
            FEMTONEWTON: 'femto',
            GIGANEWTON: 'giga',
            GRAM_FORCE: 'gf',
            HECTONEWTON: 'hn',
            JOULE_METER: 'jm',
            KILOGRAM_FORCE: 'kf',
            KILONEWTON: 'kn',
            KILOPOND: 'kp',
            KIP: 'kip',
            MEGANEWTON: 'megan',
            MEGAPOND: 'megap',
            MICRONEWTON: 'micron',
            MILLINEWTON: 'milin',
            NANONEWTON: 'nanon',
            NEWTON: 'newton',
            OUNCE_FORCE: 'of',
            PETANEWTON: 'petan',
            PICONEWTON: 'picn',
            POND: 'pond',
            POUND_FORCE: 'pf',
            POUNDAL: 'pundal',
            STHENE: 'st',
            TERANEWTON: 'tera',
            TON_FORCE_LONG: 'tlong',
            TON_FORCE_METRIC: 'tmetric',
            TON_FORCE_SHORT: 'tshort',
            YOCTONEWTON: 'yoct',
            YOTTANEWTON: 'yot',
            ZEPTONEWTON: 'zepto',
            ZETTANEWTON: 'zeta'
        },
        Frequency: {
            SECOND: 'sec',
            CYCLE_SECOND: 'cs',
            DEGREE_HOUR: 'dh',
            DEGREE_MINUTE: 'dm',
            DEGREE_SECOND: 'ds',
            GIGAHERTZ: 'gh',
            HERTZ: 'h',
            KILOHERTZ: 'kh',
            MEGAHERTZ: 'mh',
            MILLIHERTZ: 'milih',
            RADIAN_HOUR: 'rh',
            RADIAN_MINUTE: 'rm',
            RADIAN_SECOND: 'rs',
            REVOLUTION_HOUR: 'revh',
            REVOLUTION_MINUTE: 'revm',
            REVOLUTION_SECOND: 'revs',
            RPM: 'rpm',
            TERRAHERTZ: 'terra'
        },
        Inductance: {
            ABHENRY: 'ab',
            GIGAHENRY: 'gig',
            HENRY: 'hen',
            KILOHENRY: 'kiloh',
            MEGAHENRY: 'megah',
            MICROHENRY: 'microh',
            MILLIHENRY: 'milih',
            NANOHENRY: 'nanoh',
            WEBER_PER_AMPERE: 'weber'
        },
        Length: {
            ANGSTROM: 'angs',
            ASTRONOMICAL_UNIT: 'astro',
            CENTIMETER: 'centi',
            CHAIN: 'chain',
            DECIMETER: 'deci',
            FATHOM: 'fathom',
            FOOT: 'foot',
            FURLONG: 'furlong',
            INCH: 'inch',
            KILOMETER: 'kilo',
            LEAGUE: 'league',
            LIGHT_YEAR: 'lightyear',
            METER: 'm',
            MILE: 'mile',
            MILLIMETER: 'mili',
            MICROMETER: 'micro',
            MICRON: 'micron',
            NANOMETER: 'nano',
            NAUTICAL_MILE: 'naumile',
            PARSEC: 'parsec',
            ROD: 'rod',
            YARD: 'yard'
        },
        Luminance: {
            CANDELA_PER_SQUARE_CENTIMETER: 'cendcenti',
            CANDELA_PER_SQUARE_FOOT: 'candfoot',
            CANDELA_PER_SQUARE_METER: 'candmeter',
            FOOT_LAMBERT: 'footlam',
            KILOCANDELA_PER_SQUARE_METER: 'kilom',
            LAMBERT: 'lamb',
            NIT: 'nit',
            STILB: 'stil'
        },
        Metric: {
            YOCTO: 'yocto',
            ZEPTO: 'zepto',
            ATTO: 'atto',
            FEMTO: 'femto',
            PICO: 'pico',
            NANO: 'nano',
            MICRO: 'micro',
            MILLI: 'milli',
            CENTI: 'centi',
            DECI: 'deci',
            BASE: 'base',
            DEKA: 'deka',
            HECTO: 'hecto',
            KILO: 'kilo',
            MEGA: 'mega',
            GIGA: 'giga',
            TERA: 'tera',
            PETA: 'peta',
            EXA: 'exa',
            ZETTA: 'zetta',
            YOTTA: 'yotta'
        },
        Power: {
            BTU_HOUR: 'btuh',
            BTU_SECOND: 'btus',
            CALORIES_PER_SECOND: 'calsec',
            ERG_PER_SECOND: 'ergsec',
            FOOT_POUND_PER_SECOND: 'foots',
            GIGAWATT: 'giga',
            HORSEPOWER: 'horse',
            KILOCALORIE_CALORIE_PER_SECOND: 'kilocalsec',
            KILOWATT: 'kilo',
            MEGAWATT: 'mega',
            MILLIWATT: 'milli',
            WATT: 'w'
        },
        Pressure: {
            ATMOSPHERE: 'atmo',
            BAR: 'bar',
            HECTOPASCAL: 'hecto',
            KILOGRAM_PER_SQ_CM: 'kilocm',
            KILOGRAM_PER_SQ_METER: 'kilometer',
            KILOPASCAL: 'kilopas',
            MILLIBAR: 'milibar',
            MILLIMETER_OF_MERCURY: 'mmerc',
            PASCAL: 'pascal',
            POUNDS_PER_SQUARE_FOOT: 'pfoot',
            POUNDS_PER_SQUARE_INCH: 'pinch',
            TORR: 'torr'
        },
        Radioactive: {
            BECQUEREL: 'bec',
            CURIE: 'curi',
            DISINTEGRATIONS_PER_MINUTE: 'dpm',
            GIGABECQUEREL: 'gb',
            KILOBECQUEREL: 'kb',
            MEGABECQUEREL: 'mb',
            RUTHERFORD: 'rf',
            TERABECQUEREL: 'tb'
        },
        Speed: {
            CENTIMETER_SECOND: 'cs',
            FOOT_SECOND: 'fs',
            KILOMETER_HOUR: 'kh',
            KILOMETER_MINUTE: 'km',
            KILOMETER_SECOND: 'ks',
            KNOT: 'kn',
            MACH: 'mach',
            METER_MINUTE: 'mmin',
            METER_SECOND: 'msec',
            MILE_HOUR: 'mhour',
            SPEED_OF_LIGHT: 'sl',
            SPEED_OF_SOUND: 'ss',
            YARD_SECOND: 'ys'
        },
        Substance: {
            MILLIMOLE: 'mm',
            MOL: 'm',
            GRAM_MOLE: 'gm',
            KILOMOLE: 'km',
            POUND_MOLE: 'pm'
        },
        Volume: {
            BARREL_PETROLEUM: 'bp',
            BUSHEL_UK: 'bushuk',
            BUSHEL_US: 'bushus',
            CENTILITER: 'centil',
            CUBIC_CENTIMETER: 'ccenti',
            CUBIC_DECIMETER: 'cdeci',
            CUBIC_FOOT: 'cfoot',
            CUBIC_INCH: 'cinch',
            CUBIC_METER: 'cmeter',
            CUBIC_MILLIMETER: 'cmilli',
            CUBIC_YARD: 'cyard',
            DEKALITER: 'dliter',
            FLUID_DRAM: 'fd',
            FLUID_OUNCE: 'fo',
            FLUID_OUNCE_UK: 'fouk',
            GALLON: 'gal',
            GALLON_UK: 'galuk',
            GILL: 'gill',
            HECTOLITER: 'hliter',
            LITER: 'l',
            MICROLITER: 'ml',
            MILLILITER: 'millil',
            MINIM: 'min',
            PECK_US: 'peckus',
            PINT_FLUID: 'pf',
            PINT_UK: 'puk',
            PINT_US: 'pus',
            QUART: 'quart',
            QUART_UK: 'quartuk',
            QUART_US: 'quartus',
        },
        Weight: {
            ATOMIC_MASS_UNIT: 'amu',
            CARAT: 'carat',
            CENTAL: 'cent',
            CENTIGRAM: 'centi',
            DEKAGRAM: 'deka',
            DRAM: 'dram',
            GRAIN: 'grain',
            GRAM: 'gram',
            HUNDREDWEIGHT: 'hundw',
            KILOGRAM: 'kilo',
            MICROGRAM: 'micro',
            MILLIGRAM: 'milig',
            NEWTON: 'newton',
            OUNCE: 'ounce',
            PENNYWEIGHT: 'penny',
            POUND: 'pound',
            QUARTER: 'quarter',
            STONE: 'stone',
            TON_UK: 'tonuk',
            TON_US: 'tonus',
            TONNE: 'tonne',
            TROY_OUNCE: 'troy'
        },

        Distance: {
            MILLIMETRE: 'mm',
            INCH: 'in',
            KILOMETRE: 'km',
            MILE: 'M',
            METRE: 'm',
            YARDS: 'y'
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
        area: {
            'acre': {
                key: UNIT.area.ACRE,
                base: UNIT.area.SQUARE_METER,
                factor: 0.00024710538146717
            },
            'a': {
                key: UNIT.area.ARE,
                base: UNIT.area.SQUARE_METER,
                factor: 0.01
            },
            'b': {
                key: UNIT.area.BARN,
                base: UNIT.area.SQUARE_METER,
                factor: 1e+28
            },
            'ha': {
                key: UNIT.area.HECTARE,
                base: UNIT.area.SQUARE_METER,
                factor: 0.0001
            },
            'homestead': {
                key: UNIT.area.HOMESTEAD,
                base: UNIT.area.SQUARE_METER,
                factor: 0.0000015444086341698
            },
            'rood': {
                key: UNIT.area.ROOD,
                base: UNIT.area.SQUARE_METER,
                factor: 0.00098842152586866
            },
            'sqcm': {
                key: UNIT.area.SQUARE_CENTIMETER,
                base: UNIT.area.SQUARE_METER,
                factor: 10000
            },
            'sqf': {
                key: UNIT.area.SQUARE_FOOT,
                base: UNIT.area.SQUARE_METER,
                factor: 10.76391041671
            },
            'sqin': {
                key: UNIT.area.SQUARE_INCH,
                base: UNIT.area.SQUARE_METER,
                factor: 1550.0031000062
            },
            'sqkm': {
                key: UNIT.area.SQUARE_KILOMETER,
                base: UNIT.area.SQUARE_METER,
                factor: 0.000001
            },
            'sqm': {
                key: UNIT.area.SQUARE_METER,
                base: null
            },
            'sqmi': {
                key: UNIT.area.SQUARE_MILE,
                base: UNIT.area.SQUARE_METER,
                factor: 3.8610215854245e-7
            },
            'sqmm': {
                key: UNIT.area.SQUARE_MILLIMETER,
                base: UNIT.area.SQUARE_METER,
                factor: 1000000
            },
            'sqr': {
                key: UNIT.area.SQUARE_ROD,
                base: UNIT.area.SQUARE_METER,
                factor: 0.039536861034746
            },
            'sqy': {
                key: UNIT.area.SQUARE_YARD,
                base: UNIT.area.SQUARE_METER,
                factor: 1.1959900463011
            },
            'twp': {
                key: UNIT.area.TOWNSHIP,
                base: UNIT.area.SQUARE_METER,
                factor: 1.0725059959512e-8
            }
        },
        Angle: {
            'deg': {
                key: UNIT.Angle.DEGREE,
                base: UNIT.Angle.RADIAN,
                factor: 57.295779513082

            },
            'fcir': {
                key: UNIT.Angle.FULL_CIRCLE,
                base: UNIT.Angle.RADIAN,
                factor: 0.1591549430919
            },
            'grad': {
                key: UNIT.Angle.GRAD,
                base: UNIT.Angle.RADIAN,
                factor: 63.661977237
            },
            'gon': {
                key: UNIT.Angle.GON,
                base: UNIT.Angle.RADIAN,
                factor: 63.661977237
            },
            'min': {
                key: UNIT.Angle.MINUTE,
                base: UNIT.Angle.RADIAN,
                factor: 3437.746770785
            },
            'mil': {
                key: UNIT.Angle.MIL,
                base: UNIT.Angle.RADIAN,
                factor: 1018.591635788
            },
            'quad': {
                key: UNIT.Angle.QUADRANT,
                base: UNIT.Angle.RADIAN,
                factor: 0.636619772
            },
            'rad': {
                key: UNIT.Angle.RADIAN,
                base: null

            },
            'rev': {
                key: UNIT.Angle.REVOLUTION,
                base: UNIT.Angle.RADIAN,
                factor: 0.159154943
            },
            'ra': {
                key: UNIT.Angle.TOWNSHIP,
                base: UNIT.Angle.RADIAN,
                factor: 0.636619772
            },
            'sec': {
                key: UNIT.Angle.SECOND,
                base: UNIT.Angle.RADIAN,
                factor: 206264.8062471
            }
        },
        Acceleration: {
            'grav': {
                key: UNIT.Acceleration.ACCELERATION_OF_GRAVITY,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.101971621
            },
            'atto': {
                key: UNIT.Acceleration.ATTOMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 1e+18
            },
            'centi': {
                key: UNIT.Acceleration.CENTIMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 100
            },
            'deci': {
                key: UNIT.Acceleration.DECIMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 10
            },
            'deka': {
                key: UNIT.Acceleration.DEKAMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.1
            },
            'femto': {
                key: UNIT.Acceleration.FEMTOMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 1e-16
            },
            'gal': {
                key: UNIT.Acceleration.GAL,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.001
            },
            'gali': {
                key: UNIT.Acceleration.GALILEO,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.001
            },
            'hecto': {
                key: UNIT.Acceleration.HECTOMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 10
            },
            'inch': {
                key: UNIT.Acceleration.INCH_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.00254
            },
            'kilo': {
                key: UNIT.Acceleration.KILOMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 100
            },
            'meter': {
                key: UNIT.Acceleration.METER_SQUARE_SECOND,
                base: null

            },
            'milli': {
                key: UNIT.Acceleration.MILLIMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.0001
            },
            'micro': {
                key: UNIT.Acceleration.MICROMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.0000001
            },
            'mile': {
                key: UNIT.Acceleration.MILE_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 160.9344
            },
            'nano': {
                key: UNIT.Acceleration.NANOMETER_SUQARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 1e-10
            },
            'pico': {
                key: UNIT.Acceleration.PICOMETER_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 1e-13
            },
            'yard': {
                key: UNIT.Acceleration.YARD_SQUARE_SECOND,
                base: UNIT.Acceleration.METER_SQUARE_SECOND,
                factor: 0.09144
            }
        },
        Astronomical: {
            'astro': {
                key: UNIT.Astronomical.ASTRONOMICAL_UNIT,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 173.1446327125
            },
            'kilo': {
                key: UNIT.Astronomical.KILOMETER,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 25902068370
            },
            'year': {
                key: UNIT.Astronomical.LIGHT_YEAR,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 0.002739726027397
            },
            'week': {
                key: UNIT.Astronomical.LIGHT_WEEK,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 0.1428571428571
            },
            'day': {
                key: UNIT.Astronomical.LIGHT_DAY,
                base: null

            },
            'm': {
                key: UNIT.Astronomical.METER,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 25902068370000
            },
            'mi': {
                key: UNIT.Astronomical.MILE,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 16090000000
            },
            'par': {
                key: UNIT.Astronomical.PARSEC,
                base: UNIT.Astronomical.LIGHT_DAY,
                factor: 0.0008394288614352
            }

        },
        Blood: {
            'mol': {
                key: UNIT.Blood.MMOL,
                base: null

            },
            'mgd': {
                key: UNIT.Blood.MGDL,
                base: UNIT.Blood.MMOL,
                factor: 18
            },
            'mg': {
                key: UNIT.Blood.MG,
                base: UNIT.Blood.MMOL,
                factor: 18
            }
        },
        Capacitance: {
            'ab': {
                key: UNIT.Capacitance.ABFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-9
            },
            'at': {
                key: UNIT.Capacitance.ATTOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000000000000000000
            },
            'centi': {
                key: UNIT.Capacitance.CENTIFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 100
            },
            'col': {
                key: UNIT.Capacitance.COULOMB_PER_VOLT,
                base: UNIT.Capacitance.FARAD,
                factor: 1

            },
            'deca': {
                key: UNIT.Capacitance.DECAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 0.1
            },
            'deci': {
                key: UNIT.Capacitance.DECIFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 10
            },
            'exa': {
                key: UNIT.Capacitance.EXAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-18
            },
            'far': {
                key: UNIT.Capacitance.FARAD,
                base: null
            },
            'femot': {
                key: UNIT.Capacitance.FEMTOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000000000000000
            },
            'giga': {
                key: UNIT.Capacitance.GIGAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-9
            },
            'hecto': {
                key: UNIT.Capacitance.HECTOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 0.01
            },
            'kilo': {
                key: UNIT.Capacitance.KILOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 0.001
            },
            'mega': {
                key: UNIT.Capacitance.MEGAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 0.000001
            },
            'micro': {
                key: UNIT.Capacitance.MICROFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000000
            },
            'milli': {
                key: UNIT.Capacitance.MILLIFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000
            },
            'nano': {
                key: UNIT.Capacitance.NANOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000000000
            },
            'peta': {
                key: UNIT.Capacitance.PETAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-15
            },
            'pico': {
                key: UNIT.Capacitance.PICOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1000000000000
            },
            'stat': {
                key: UNIT.Capacitance.STATFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 898755178736.5
            },
            'tera': {
                key: UNIT.Capacitance.TERAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-12
            },
            'yoct': {
                key: UNIT.Capacitance.YOCTOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E+24
            },
            'yotta': {
                key: UNIT.Capacitance.YOTTAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-24
            },
            'zepto': {
                key: UNIT.Capacitance.ZEPTOFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E+21
            },
            'zeta': {
                key: UNIT.Capacitance.ZETTAFARAD,
                base: UNIT.Capacitance.FARAD,
                factor: 1E-21
            }
        },
        Computerstorage: {
            'bit': {
                key: UNIT.Computerstorage.BIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 8589934592
            },
            'b': {
                key: UNIT.Computerstorage.BYTE,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 1073741824
            },
            'kilo': {
                key: UNIT.Computerstorage.KILOBIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 8388608
            },
            'kilobyte': {
                key: UNIT.Computerstorage.KILOBYTE,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 1048576
            },
            'mega': {
                key: UNIT.Computerstorage.MEGABIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 8192
            },
            'megamega': {
                key: UNIT.Computerstorage.MEGABYTE,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 1024
            },
            'giga': {
                key: UNIT.Computerstorage.GIGABIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 8

            },
            'gigagiga': {
                key: UNIT.Computerstorage.GIGABYTE,
                base: null

            },
            'tera': {
                key: UNIT.Computerstorage.TERABIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 0.0078125
            },
            'teratera': {
                key: UNIT.Computerstorage.TERABYTE,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 0.0009766
            },
            'peta': {
                key: UNIT.Computerstorage.PETABIT,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 0.0000076293945
            },
            'petapeta': {
                key: UNIT.Computerstorage.PETABYTE,
                base: UNIT.Computerstorage.GIGABYTE,
                factor: 2.5367432
            }
        },
        Cooking: {
            'cup': {
                key: UNIT.Cooking.CUP,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.00422675283773
            },
            'dash': {
                key: UNIT.Cooking.DASH,
                base: UNIT.Cooking.MILLIMETER,
                factor: 1.62307308967
            },
            'des': {
                key: UNIT.Cooking.DESSERTSPOON_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.10144206811
            },
            'desuk': {
                key: UNIT.Cooking.DESSERTSPOON_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0844681564
            },
            'dram': {
                key: UNIT.Cooking.DRAM_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.2705121816147
            },
            'dramuk': {
                key: UNIT.Cooking.DRAM_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.2815606378228
            },
            'drop': {
                key: UNIT.Cooking.DROP,
                base: UNIT.Cooking.MILLIMETER,
                factor: 19.476877076
            },
            'fif': {
                key: UNIT.Cooking.FIFTH,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.001320860261791
            },
            'fluid': {
                key: UNIT.Cooking.FLUID_OUNCE_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.03381402270184
            },
            'fluidUK': {
                key: UNIT.Cooking.FLUID_OUNCE_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.03519507972785
            },
            'gallon': {
                key: UNIT.Cooking.GALLON_US_FLUID,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0002641720523582
            },
            'gallonUS': {
                key: UNIT.Cooking.GALLON_US_DRY,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0002270194793043
            },
            'gallonUK': {
                key: UNIT.Cooking.GALLON_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0002199692482991
            },
            'gillUS': {
                key: UNIT.Cooking.GILL_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.008453505675461
            },
            'gillUK': {
                key: UNIT.Cooking.GILL_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.007039015945571
            },
            'lit': {
                key: UNIT.Cooking.LITER,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.001
            },
            'milli': {
                key: UNIT.Cooking.MILLIMETER,
                base: null

            },
            'pint': {
                key: UNIT.Cooking.PINT_US_FLUID,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.002113376418865
            },
            'pintUS': {
                key: UNIT.Cooking.PINT_US_DRY,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.001816155834434
            },
            'pintUK': {
                key: UNIT.Cooking.pintUK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.001759753986393
            },
            'quart': {
                key: UNIT.Cooking.QUART_US_FLUID,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.001056688209433
            },
            'quartUS': {
                key: UNIT.Cooking.QUART_US_DRY,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0009080779172171
            },
            'quartUK': {
                key: UNIT.Cooking.QUART_UK,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.0008798769931964
            },
            'table': {
                key: UNIT.Cooking.TABLEPOON_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.06762804540369
            },
            'teaUS': {
                key: UNIT.Cooking.TEASPOON_US,
                base: UNIT.Cooking.MILLIMETER,
                factor: 0.2028841362111
            }

        },
        Density: {
            'gc': {
                key: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                base: null

            },
            'gd': {
                key: UNIT.Density.GRAM_CUBIC_DECIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000
            },
            'gm': {
                key: UNIT.Density.GRAM_CUBIC_METER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000000
            },
            'gl': {
                key: UNIT.Density.GRAM_LITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000
            },
            'gmili': {
                key: UNIT.Density.GRAM_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1
            },
            'mc': {
                key: UNIT.Density.MEGAGRAM_CUBIC_CENTIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.00001
            },
            'mm': {
                key: UNIT.Density.MEGAGRAM_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1
            },
            'ml': {
                key: UNIT.Density.MEGAGRAM_LITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.001
            },
            'mmili': {
                key: UNIT.Density.MEGAGRAM_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.00001
            },
            'milic': {
                key: UNIT.Density.MILLIGRAM_CUBIC_CENTIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000
            },
            'milid': {
                key: UNIT.Density.MILLIGRAM_CUBIC_DECIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000000
            },
            'milim': {
                key: UNIT.Density.MILLIGRAM_CUBIC_METER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000000000
            },
            'milil': {
                key: UNIT.Density.MILLIGRAM_LITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000000
            },
            'miligmili': {
                key: UNIT.Density.MILLIGRAM_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000
            },
            'kiloc': {
                key: UNIT.Density.KILOGRAM_CUBIC_CENTIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.001
            },
            'kilod': {
                key: UNIT.Density.KILOGRAM_CUBIC_DECIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1
            },
            'kilom': {
                key: UNIT.Density.KILOGRAM_CUBIC_METER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1000
            },
            'kilol': {
                key: UNIT.Density.KILOGRAM_LITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1
            },
            'kilomili': {
                key: UNIT.Density.KILOGRAM_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.001
            },
            'of': {
                key: UNIT.Density.OUNCE_CUBIC_FOOT,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 998.84737348
            },
            'oi': {
                key: UNIT.Density.OUNCE_CUBIC_INCH,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.57803667444
            },
            'oy': {
                key: UNIT.Density.OUNCE_CUBIC_YARD,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 26968.879083
            },
            'ouk': {
                key: UNIT.Density.OUNCE_GALLON_UK,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 160.35860568
            },
            'ous': {
                key: UNIT.Density.OUNCE_GALLON_US,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 133.5264718
            },
            'pmf': {
                key: UNIT.Density.POUND_CIRCULAR_MIL_FOOT,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 340.4917061
            },
            'pf': {
                key: UNIT.Density.POUND_CUBIC_FOOT,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 62.427960841
            },
            'pi': {
                key: UNIT.Density.POUND_CUBIC_INCH,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.036127292153
            },
            'py': {
                key: UNIT.Density.POUND_CUBIC_YARD,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1685.5549427
            },
            'puk': {
                key: UNIT.Density.POUND_GALLON_UK,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 10.022412855
            },
            'pus': {
                key: UNIT.Density.POUND_GALLON_US,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 8.3454044873
            },
            'gf': {
                key: UNIT.Density.GRAIN_CUBIC_FOOT,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 436995.72588
            },
            'gi': {
                key: UNIT.Density.GRAIN_CUBIC_INCH,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 252.89104507
            },
            'gy': {
                key: UNIT.Density.GRAIN_CUBIC_YARD,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 11798884.599
            },
            'guk': {
                key: UNIT.Density.GRAIN_GALLON_UK,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 70156.889986
            },
            'gus': {
                key: UNIT.Density.GRAIN_GALLON_US,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 58417.831411
            },
            'tc': {
                key: UNIT.Density.TONNE_CUBIC_CENTIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.00001
            },
            'td': {
                key: UNIT.Density.TONNE_CUBIC_DECIMETER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.001
            },
            'tm': {
                key: UNIT.Density.TONNE_CUBIC_METER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 1
            },
            'tl': {
                key: UNIT.Density.TONNE_LITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.001
            },
            'tmili': {
                key: UNIT.Density.TONNE_MILLILITER,
                base: UNIT.Density.GRAM_CUBIC_CENTIMETER,
                factor: 0.00001
            }
        },
        Datatransfer: {
            'bs': {
                key: UNIT.Datatransfer.BIT_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 8589934592
            },
            'bys': {
                key: UNIT.Datatransfer.BYTE_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 1073741824
            },
            'ks': {
                key: UNIT.Datatransfer.KILOBIT_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 8388608
            },
            'kilos': {
                key: UNIT.Datatransfer.KILOBYTE_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 1048576
            },
            'ms': {
                key: UNIT.Datatransfer.MEGABIT_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 8192
            },
            'megas': {
                key: UNIT.Datatransfer.MEGABYTE_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 1024
            },
            'gs': {
                key: UNIT.Datatransfer.GIGABIT_SECOND,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 8
            },
            'gigas': {
                key: UNIT.Datatransfer.GIGABYTE_SECOND,
                base: null

            },
            'bm': {
                key: UNIT.Datatransfer.BYTE_MINUTE,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 64424509440
            },
            'bh': {
                key: UNIT.Datatransfer.BYTE_HOUR,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 3865470566400
            },
            'km': {
                key: UNIT.Datatransfer.KILOBYTE_MINUTE,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 62914560
            },
            'kh': {
                key: UNIT.Datatransfer.KILOBYTE_HOUR,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 3774873600
            },
            'mm': {
                key: UNIT.Datatransfer.MEGABYTE_MINUTE,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 61440
            },
            'mh': {
                key: UNIT.Datatransfer.MEGABYTE_HOUR,
                base: UNIT.Datatransfer.GIGABYTE_SECOND,
                factor: 3686400
            }
        },
        Electricalcharge: {
            'ab': {
                key: UNIT.Electricalcharge.ABCOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.1
            },
            'amp': {
                key: UNIT.Electricalcharge.AMPERE_HOUR,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.000277777777778
            },
            'c': {
                key: UNIT.Electricalcharge.COULOMB,
                base: null

            },
            'ec': {
                key: UNIT.Electricalcharge.ELEMENTARY_CHARGE,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 6241509474154000000
            },
            'far': {
                key: UNIT.Electricalcharge.FARADAY,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.00001036426864904
            },
            'kiloc': {
                key: UNIT.Electricalcharge.KILOCOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.001
            },
            'megac': {
                key: UNIT.Electricalcharge.MEGACOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.000001
            },
            'microc': {
                key: UNIT.Electricalcharge.MICROCOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 1000000
            },
            'mamp': {
                key: UNIT.Electricalcharge.MEGACOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 0.277777777778
            },
            'milic': {
                key: UNIT.Electricalcharge.MILLICOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 1000
            },
            'nanoc': {
                key: UNIT.Electricalcharge.NANOCOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 1000000000
            },
            'statc': {
                key: UNIT.Electricalcharge.STATCOULOMB,
                base: UNIT.Electricalcharge.COULOMB,
                factor: 2997924580
            },
        },
        Electricalresistance: {
            'ab': {
                key: UNIT.Electricalresistance.ABOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 1000000000
            },
            'gig': {
                key: UNIT.Electricalresistance.GIGAOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 1E-9
            },
            'kilo': {
                key: UNIT.Electricalresistance.KILOOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 0.001
            },
            'mega': {
                key: UNIT.Electricalresistance.MEGAOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 0.000001
            },
            'mico': {
                key: UNIT.Electricalresistance.MICROOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 1000000
            },
            'milli': {
                key: UNIT.Electricalresistance.MILLIOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 1000
            },
            'nano': {
                key: UNIT.Electricalresistance.NANOOHM,
                base: UNIT.Electricalresistance.OHM,
                factor: 1000000000
            },
            'ohm': {
                key: UNIT.Electricalresistance.OHM,
                base: null

            },
            'v': {
                key: UNIT.Electricalresistance.VOLT_PER_AMPERE,
                base: UNIT.Electricalresistance.OHM,
                factor: 1
            }
        },
        Energy: {
            'btu': {
                key: UNIT.Energy.BTU,
                base: UNIT.Energy.JOULE,
                factor: 0.0009478169879134
            },
            'cal': {
                key: UNIT.Energy.CALORIE,
                base: UNIT.Energy.JOULE,
                factor: 0.2388458966275
            },
            'electro': {
                key: UNIT.Energy.ELECTRONVOLT,
                base: UNIT.Energy.JOULE,
                factor: 6241509744512000000
            },
            'erg': {
                key: UNIT.Energy.ERG,
                base: UNIT.Energy.JOULE,
                factor: 10000000
            },
            'fp': {
                key: UNIT.Energy.FOOT_POUND,
                base: UNIT.Energy.JOULE,
                factor: 0.7375621492773
            },
            'gj': {
                key: UNIT.Energy.GIGAJOULE,
                base: UNIT.Energy.JOULE,
                factor: 1E-9
            },
            'j': {
                key: UNIT.Energy.JOULE,
                base: null

            },
            'kiloc': {
                key: UNIT.Energy.KILOCALORIE,
                base: UNIT.Energy.JOULE,
                factor: 0.0002388458966275
            },
            'kiloj': {
                key: UNIT.Energy.KILOJOULE,
                base: UNIT.Energy.JOULE,
                factor: 0.001
            },
            'kiloh': {
                key: UNIT.Energy.KILOWATT_HOUR,
                base: UNIT.Energy.JOULE,
                factor: 2.777777777778E-7
            },
            'mj': {
                key: UNIT.Energy.MEGAJOULE,
                base: UNIT.Energy.JOULE,
                factor: 0.000001
            },
            'nc': {
                key: UNIT.Energy.NUTRITION_CALORIE,
                base: UNIT.Energy.JOULE,
                factor: 0.0002388458966275
            },
            'tnt': {
                key: UNIT.Energy.TON_OF_TNT,
                base: UNIT.Energy.JOULE,
                factor: 2.390057361377E-10
            },
            'wh': {
                key: UNIT.Energy.WATT_HOUR,
                base: UNIT.Energy.JOULE,
                factor: 0.0002777777777778
            }
        },
        Force: {
            'atto': {
                key: UNIT.Force.ATTONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 10000000000000000000
            },
            'centi': {
                key: UNIT.Force.CENTINEWTON,
                base: UNIT.Force.NEWTON,
                factor: 100
            },
            'deci': {
                key: UNIT.Force.DECIGRAM_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 1019.716213
            },
            'decin': {
                key: UNIT.Force.DECINEWTON,
                base: UNIT.Force.NEWTON,
                factor: 10
            },
            'deka': {
                key: UNIT.Force.DEKAGRAM_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 10.19716213
            },
            'dekan': {
                key: UNIT.Force.DEKANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 0.1
            },
            'dyne': {
                key: UNIT.Force.DYNE,
                base: UNIT.Force.NEWTON,
                factor: 100000
            },
            'exan': {
                key: UNIT.Force.EXANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-17
            },
            'femto': {
                key: UNIT.Force.FEMTONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 10000000000000000
            },
            'giga': {
                key: UNIT.Force.GIGANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-8
            },
            'gf': {
                key: UNIT.Force.GRAM_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 101.9716213
            },
            'hn': {
                key: UNIT.Force.HECTONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 0.01
            },
            'jm': {
                key: UNIT.Force.JOULE_METER,
                base: UNIT.Force.NEWTON,
                factor: 1

            },
            'kf': {
                key: UNIT.Force.KILOGRAM_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 0.1019716
            },
            'kn': {
                key: UNIT.Force.KILONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 0.001
            },
            'kp': {
                key: UNIT.Force.KILOPOND,
                base: UNIT.Force.NEWTON,
                factor: 0.1019716
            },
            'kip': {
                key: UNIT.Force.KIP,
                base: UNIT.Force.NEWTON,
                factor: 0.0002248
            },
            'megan': {
                key: UNIT.Force.MEGANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 0.00001
            },
            'megap': {
                key: UNIT.Force.MEGAPOND,
                base: UNIT.Force.NEWTON,
                factor: 0.0001019716213
            },
            'micron': {
                key: UNIT.Force.MICRONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1000000
            },
            'milin': {
                key: UNIT.Force.MILLINEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1000
            },
            'nanon': {
                key: UNIT.Force.NANONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1000000000
            },
            'newton': {
                key: UNIT.Force.NEWTON,
                base: null,

            },
            'of': {
                key: UNIT.Force.OUNCE_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 3.5969431019
            },
            'petan': {
                key: UNIT.Force.PETANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-14
            },
            'picn': {
                key: UNIT.Force.PICONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1000000000000
            },
            'pond': {
                key: UNIT.Force.POND,
                base: UNIT.Force.JOULE_METER,
                factor: 101.9716213
            },
            'pf': {
                key: UNIT.Force.POUND_FORCE,
                base: UNIT.Force.NEWTON,
                factor: 0.22480894387
            },
            'pundal': {
                key: UNIT.Force.POUNDAL,
                base: UNIT.Force.NEWTON,
                factor: 7.2330140801
            },
            'st': {
                key: UNIT.Force.STHENE,
                base: UNIT.Force.NEWTON,
                factor: 0.001
            },
            'tera': {
                key: UNIT.Force.TERANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-11
            },
            'tlong': {
                key: UNIT.Force.TON_FORCE_LONG,
                base: UNIT.Force.NEWTON,
                factor: 0.00010036113566
            },
            'tmetric': {
                key: UNIT.Force.TON_FORCE_METRIC,
                base: UNIT.Force.NEWTON,
                factor: 0.0001019716213
            },
            'tshort': {
                key: UNIT.Force.TON_FORCE_SHORT,
                base: UNIT.Force.NEWTON,
                factor: 0.00011240447194
            },
            'yoct': {
                key: UNIT.Force.YOCTONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E+25
            },
            'yot': {
                key: UNIT.Force.YOTTANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-23
            },
            'zepto': {
                key: UNIT.Force.ZEPTONEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E+22
            },
            'zeta': {
                key: UNIT.Force.ZETTANEWTON,
                base: UNIT.Force.NEWTON,
                factor: 1E-20
            }
        },
        Frequency: {
            'sec': {
                key: UNIT.Frequency.SECOND,
                base: UNIT.Frequency.HERTZ,
                factor: 1
            },
            'cs': {
                key: UNIT.Frequency.CYCLE_SECOND,
                base: UNIT.Frequency.HERTZ,
                factor: 1
            },
            'dh': {
                key: UNIT.Frequency.DEGREE_HOUR,
                base: UNIT.Frequency.HERTZ,
                factor: 1296000
            },
            'dm': {
                key: UNIT.Frequency.DEGREE_MINUTE,
                base: UNIT.Frequency.HERTZ,
                factor: 21600
            },
            'ds': {
                key: UNIT.Frequency.DEGREE_SECOND,
                base: UNIT.Frequency.HERTZ,
                factor: 360
            },
            'gh': {
                key: UNIT.Frequency.GIGAHERTZ,
                base: UNIT.Frequency.HERTZ,
                factor: 1.0e-9
            },
            'h': {
                key: UNIT.Frequency.HERTZ,
                base: null

            },
            'kh': {
                key: UNIT.Frequency.KILOHERTZ,
                base: UNIT.Frequency.HERTZ,
                factor: 0.001
            },
            'mh': {
                key: UNIT.Frequency.MEGAHERTZ,
                base: UNIT.Frequency.HERTZ,
                factor: 0.000001
            },
            'milih': {
                key: UNIT.Frequency.MILLIHERTZ,
                base: UNIT.Frequency.HERTZ,
                factor: 1000
            },
            'rh': {
                key: UNIT.Frequency.RADIAN_HOUR,
                base: UNIT.Frequency.HERTZ,
                factor: 22619.467
            },
            'rm': {
                key: UNIT.Frequency.RADIAN_MINUTE,
                base: UNIT.Frequency.HERTZ,
                factor: 376.99112
            },
            'rs': {
                key: UNIT.Frequency.RADIAN_SECOND,
                base: UNIT.Frequency.HERTZ,
                factor: 6.2831853001
            },
            'revh': {
                key: UNIT.Frequency.REVOLUTION_HOUR,
                base: UNIT.Frequency.HERTZ,
                factor: 3600
            },
            'revm': {
                key: UNIT.Frequency.REVOLUTION_MINUTE,
                base: UNIT.Frequency.HERTZ,
                factor: 60
            },
            'revs': {
                key: UNIT.Frequency.REVOLUTION_SECOND,
                base: UNIT.Frequency.HERTZ,
                factor: 1
            },
            'rpm': {
                key: UNIT.Frequency.RPM,
                base: UNIT.Frequency.HERTZ,
                factor: 60
            },
            'terra': {
                key: UNIT.Frequency.TERRAHERTZ,
                base: UNIT.Frequency.HERTZ,
                factor: 1.0e-12
            }
        },
        Inductance: {
            'ab': {
                key: UNIT.Inductance.ABHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 1000000000
            },
            'gig': {
                key: UNIT.Inductance.GIGAHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 1E-9
            },
            'hen': {
                key: UNIT.Inductance.HENRY,
                base: null

            },
            'kiloh': {
                key: UNIT.Inductance.KILOHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 0.001
            },
            'megah': {
                key: UNIT.Inductance.MEGAHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 0.000001
            },
            'microh': {
                key: UNIT.Inductance.MICROHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 1000000
            },
            'milih': {
                key: UNIT.Inductance.MILLIHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 1000
            },
            'nanoh': {
                key: UNIT.Inductance.NANOHENRY,
                base: UNIT.Inductance.HENRY,
                factor: 1000000000
            },
            'weber': {
                key: UNIT.Inductance.WEBER_PER_AMPERE,
                base: UNIT.Inductance.HENRY,
                factor: 1
            }
        },
        Length: {
            'angs': {
                key: UNIT.Length.ANGSTROM,
                base: UNIT.Length.METER,
                factor: 10000000000
            },
            'astro': {
                key: UNIT.Length.ASTRONOMICAL_UNIT,
                base: UNIT.Length.METER,
                factor: 6.684587122671E-12
            },
            'centi': {
                key: UNIT.Length.CENTIMETER,
                base: UNIT.Length.METER,
                factor: 100
            },
            'chain': {
                key: UNIT.Length.CHAIN,
                base: UNIT.Length.METER,
                factor: 0.04970969537899
            },
            'deci': {
                key: UNIT.Length.DECIMETER,
                base: UNIT.Length.METER,
                factor: 10
            },
            'fathom': {
                key: UNIT.Length.FATHOM,
                base: UNIT.Length.METER,
                factor: 0.5468066491689
            },
            'foot': {
                key: UNIT.Length.FOOT,
                base: UNIT.Length.METER,
                factor: 3.280839895013
            },
            'furlong': {
                key: UNIT.Length.FURLONG,
                base: UNIT.Length.METER,
                factor: 0.004970969537899
            },
            'inch': {
                key: UNIT.Length.INCH,
                base: UNIT.Length.METER,
                factor: 39.37007874016
            },
            'kilo': {
                key: UNIT.Length.INCH,
                base: UNIT.Length.METER,
                factor: 0.001
            },
            'league': {
                key: UNIT.Length.LEAGUE,
                base: UNIT.Length.METER,
                factor: 0.0002071237307458
            },
            'lightyear': {
                key: UNIT.Length.LIGHT_YEAR,
                base: UNIT.Length.METER,
                factor: 1.057000834025E-16
            },
            'm': {
                key: UNIT.Length.METER,
                base: null

            },
            'mile': {
                key: UNIT.Length.MILE,
                base: UNIT.Length.METER,
                factor: 0.0006213711922373
            },
            'mili': {
                key: UNIT.Length.MILLIMETER,
                base: UNIT.Length.METER,
                factor: 1000
            },
            'micro': {
                key: UNIT.Length.MICROMETER,
                base: UNIT.Length.METER,
                factor: 1000000
            },
            'micron': {
                key: UNIT.Length.MICRON,
                base: UNIT.Length.METER,
                factor: 1000000
            },
            'nano': {
                key: UNIT.Length.NANOMETER,
                base: UNIT.Length.METER,
                factor: 1000000000
            },
            'naumile': {
                key: UNIT.Length.NAUTICAL_MILE,
                base: UNIT.Length.METER,
                factor: 0.0005399568034557
            },
            'parsec': {
                key: UNIT.Length.PARSEC,
                base: UNIT.Length.METER,
                factor: 3.240779289639E-17
            },
            'rod': {
                key: UNIT.Length.ROD,
                base: UNIT.Length.METER,
                factor: 0.198838781516
            },
            'yard': {
                key: UNIT.Length.YARD,
                base: UNIT.Length.METER,
                factor: 1.093613298338
            }
        },
        Luminance: {
            'cendcenti': {
                key: UNIT.Luminance.CANDELA_PER_SQUARE_CENTIMETER,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.0001
            },
            'candfoot': {
                key: UNIT.Luminance.CANDELA_PER_SQUARE_FOOT,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.09290304
            },
            'candmeter': {
                key: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                base: null

            },
            'footlam': {
                key: UNIT.Luminance.FOOT_LAMBERT,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.291863508
            },
            'kilom': {
                key: UNIT.Luminance.KILOCANDELA_PER_SQUARE_METER,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.001
            },
            'lamb': {
                key: UNIT.Luminance.LAMBERT,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.000314159265359
            },
            'nit': {
                key: UNIT.Luminance.NIT,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 1
            },
            'stil': {
                key: UNIT.Luminance.STILB,
                base: UNIT.Luminance.CANDELA_PER_SQUARE_METER,
                factor: 0.0001
            }
        },
        Metric: {
            'yocto': {
                key: UNIT.Metric.YOCTO,
                base: UNIT.Metric.BASE,
                factor: 1E+24
            },
            'zepto': {
                key: UNIT.Metric.ZEPTO,
                base: UNIT.Metric.BASE,
                factor: 1E+21
            },
            'atto': {
                key: UNIT.Metric.ATTO,
                base: UNIT.Metric.BASE,
                factor: 1000000000000000000
            },
            'femto': {
                key: UNIT.Metric.FEMTO,
                base: UNIT.Metric.BASE,
                factor: 1000000000000000
            },
            'pico': {
                key: UNIT.Metric.PICO,
                base: UNIT.Metric.BASE,
                factor: 1000000000000
            },
            'nano': {
                key: UNIT.Metric.NANO,
                base: UNIT.Metric.BASE,
                factor: 1000000000
            },
            'micro': {
                key: UNIT.Metric.MICRO,
                base: UNIT.Metric.BASE,
                factor: 1000000
            },
            'milli': {
                key: UNIT.Metric.MILLI,
                base: UNIT.Metric.BASE,
                factor: 1000
            },
            'centi': {
                key: UNIT.Metric.CENTI,
                base: UNIT.Metric.BASE,
                factor: 100
            },
            'deci': {
                key: UNIT.Metric.DECI,
                base: UNIT.Metric.BASE,
                factor: 10
            },
            'base': {
                key: UNIT.Metric.BASE,
                base: null,

            },
            'deka': {
                key: UNIT.Metric.DEKA,
                base: UNIT.Metric.BASE,
                factor: 0.1
            },
            'hecto': {
                key: UNIT.Metric.HECTO,
                base: UNIT.Metric.BASE,
                factor: 0.01
            },
            'kilo': {
                key: UNIT.Metric.KILO,
                base: UNIT.Metric.BASE,
                factor: 0.001
            },
            'mega': {
                key: UNIT.Metric.MEGA,
                base: UNIT.Metric.BASE,
                factor: 0.000001
            },
            'giga': {
                key: UNIT.Metric.GIGA,
                base: UNIT.Metric.BASE,
                factor: 1E-9
            },
            'tera': {
                key: UNIT.Metric.TERA,
                base: UNIT.Metric.BASE,
                factor: 1E-12
            },
            'peta': {
                key: UNIT.Metric.PETA,
                base: UNIT.Metric.BASE,
                factor: 1E-15
            },
            'exa': {
                key: UNIT.Metric.EXA,
                base: UNIT.Metric.BASE,
                factor: 1E-18
            },
            'zetta': {
                key: UNIT.Metric.ZETTA,
                base: UNIT.Metric.BASE,
                factor: 1E-21
            },
            'yotta': {
                key: UNIT.Metric.YOTTA,
                base: UNIT.Metric.BASE,
                factor: 1E-24
            }
        },
        Power: {
            'btuh': {
                key: UNIT.Power.BTU_HOUR,
                base: UNIT.Power.WATT,
                factor: 3.412141156488
            },
            'btus': {
                key: UNIT.Power.BTU_SECOND,
                base: UNIT.Power.WATT,
                factor: 0.0009478169879134
            },
            'calsec': {
                key: UNIT.Power.CALORIES_PER_SECOND,
                base: UNIT.Power.WATT,
                factor: 0.2388458966275
            },
            'ergsec': {
                key: UNIT.Power.ERG_PER_SECOND,
                base: UNIT.Power.WATT,
                factor: 10000000
            },
            'foots': {
                key: UNIT.Power.FOOT_POUND_PER_SECOND,
                base: UNIT.Power.WATT,
                factor: 0.7375621492773
            },
            'giga': {
                key: UNIT.Power.GIGAWATT,
                base: UNIT.Power.WATT,
                factor: 1E-9
            },
            'horse': {
                key: UNIT.Power.HORSEPOWER,
                base: UNIT.Power.WATT,
                factor: 0.001341022089595
            },
            'kilocalsec': {
                key: UNIT.Power.KILOCALORIE,
                base: UNIT.Power.WATT,
                factor: 0.0002388458966275
            },
            'kilo': {
                key: UNIT.Power.KILOWATT,
                base: UNIT.Power.WATT,
                factor: 0.001
            },
            'mega': {
                key: UNIT.Power.MEGAWATT,
                base: UNIT.Power.WATT,
                factor: 0.000001
            },
            'milli': {
                key: UNIT.Power.MILLIWATT,
                base: UNIT.Power.WATT,
                factor: 1000
            },
            'w': {
                key: UNIT.Power.WATT,
                base: null

            }
        },
        Pressure: {
            'atmo': {
                key: UNIT.Pressure.ATMOSPHERE,
                base: UNIT.Pressure.BAR,
                factor: 0.986923266716
            },
            'bar': {
                key: UNIT.Pressure.BAR,
                base: null

            },
            'hecto': {
                key: UNIT.Pressure.HECTOPASCAL,
                base: UNIT.Pressure.BAR,
                factor: 1000
            },
            'kilocm': {
                key: UNIT.Pressure.KILOGRAM_PER_SQ_CM,
                base: UNIT.Pressure.BAR,
                factor: 1.019716212978
            },
            'kilometer': {
                key: UNIT.Pressure.KILOGRAM_PER_SQ_METER,
                base: UNIT.Pressure.BAR,
                factor: 10197.16212978
            },
            'kilopas': {
                key: UNIT.Pressure.KILOPASCAL,
                base: UNIT.Pressure.BAR,
                factor: 100
            },
            'milibar': {
                key: UNIT.Pressure.MILLIBAR,
                base: UNIT.Pressure.BAR,
                factor: 1000
            },
            'mmerc': {
                key: UNIT.Pressure.MILLIMETER_OF_MERCURY,
                base: UNIT.Pressure.BAR,
                factor: 750.0616827042
            },
            'pascal': {
                key: UNIT.Pressure.PASCAL,
                base: UNIT.Pressure.BAR,
                factor: 100000
            },
            'pfoot': {
                key: UNIT.Pressure.POUNDS_PER_SQUARE_FOOT,
                base: UNIT.Pressure.BAR,
                factor: 2088.545632547
            },
            'pinch': {
                key: UNIT.Pressure.POUNDS_PER_SQUARE_INCH,
                base: UNIT.Pressure.BAR,
                factor: 14.50378911491
            },
            'torr': {
                key: UNIT.Pressure.TORR,
                base: UNIT.Pressure.BAR,
                factor: 750.0616827042
            }
        },
        Radioactive: {
            'bec': {
                key: UNIT.Radioactive.BECQUEREL,
                base: null

            },
            'curi': {
                key: UNIT.Radioactive.CURIE,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 2.702702702E-11
            },
            'dpm': {
                key: UNIT.Radioactive.DISINTEGRATIONS_PER_MINUTE,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 60
            },
            'gb': {
                key: UNIT.Radioactive.GIGABECQUEREL,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 1E-9
            },
            'kb': {
                key: UNIT.Radioactive.KILOBECQUEREL,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 0.001
            },
            'mb': {
                key: UNIT.Radioactive.MEGABECQUEREL,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 0.000001
            },
            'rf': {
                key: UNIT.Radioactive.RUTHERFORD,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 0.000001
            },
            'tb': {
                key: UNIT.Radioactive.TERABECQUEREL,
                base: UNIT.Radioactive.BECQUEREL,
                factor: 1E-12
            }
        },
        Speed: {
            'cs': {
                key: UNIT.Speed.CENTIMETER_SECOND,
                base: UNIT.Speed.METER_SECOND,
                factor: 100
            },
            'fs': {
                key: UNIT.Speed.FOOT_SECOND,
                base: UNIT.Speed.METER_SECOND,
                factor: 3.280839895013
            },
            'kh': {
                key: UNIT.Speed.KILOMETER_HOUR,
                base: UNIT.Speed.METER_SECOND,
                factor: 3.6
            },
            'km': {
                key: UNIT.Speed.KILOMETER_MINUTE,
                base: UNIT.Speed.METER_SECOND,
                factor: 0.06
            },
            'ks': {
                key: UNIT.Speed.KILOMETER_SECOND,
                base: UNIT.Speed.METER_SECOND,
                factor: 0.001
            },
            'kn': {
                key: UNIT.Speed.KNOT,
                base: UNIT.Speed.METER_SECOND,
                factor: 1.943844492441
            },
            'mach': {
                key: UNIT.Speed.MACH,
                base: UNIT.Speed.METER_SECOND,
                factor: 0.002915451895044
            },
            'mmin': {
                key: UNIT.Speed.METER_MINUTE,
                base: UNIT.Speed.METER_SECOND,
                factor: 60
            },
            'msec': {
                key: UNIT.Speed.METER_SECOND,
                base: null

            },
            'mhour': {
                key: UNIT.Speed.MILE_HOUR,
                base: UNIT.Speed.METER_SECOND,
                factor: 2.236936292054
            },
            'sl': {
                key: UNIT.Speed.SPEED_OF_LIGHT,
                base: UNIT.Speed.METER_SECOND,
                factor: 3.335640951982E-9
            },
            'ss': {
                key: UNIT.Speed.SPEED_OF_SOUND,
                base: UNIT.Speed.METER_SECOND,
                factor: 0.002915451895044
            },
            'ys': {
                key: UNIT.Speed.YARD_SECOND,
                base: UNIT.Speed.METER_SECOND,
                factor: 1.093613298338
            }
        },
        Substance: {
            'mm': {
                key: UNIT.Substance.MILLIMOLE,
                base: UNIT.Substance.MOL,
                factor: 1000
            },
            'm': {
                key: UNIT.Substance.MOL,
                base: null

            },
            'gm': {
                key: UNIT.Substance.GRAM_MOLE,
                base: UNIT.Substance.MOL,
                factor: 1
            },
            'km': {
                key: UNIT.Substance.KILOMOLE,
                base: UNIT.Substance.MOL,
                factor: 0.001
            },
            'pm': {
                key: UNIT.Substance.POUND_MOLE,
                base: UNIT.Substance.MOL,
                factor: 0.002204622621849
            }
        },

        Volume: {

            'bp': {
                key: UNIT.Volume.BARREL_PETROLEUM,
                base: UNIT.Volume.CUBIC_METER,
                factor: 6.289810770432
            },
            'bushuk': {
                key: UNIT.Volume.BUSHEL_UK,
                base: UNIT.Volume.CUBIC_METER,
                factor: 27.49615603739
            },
            'bushus': {
                key: UNIT.Volume.BUSHEL_US,
                base: UNIT.Volume.CUBIC_METER,
                factor: 28.3775932584
            },
            'centil': {
                key: UNIT.Volume.CENTILITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 100000
            },
            'ccenti': {
                key: UNIT.Volume.CUBIC_CENTIMETER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000000
            },
            'cdeci': {
                key: UNIT.Volume.CUBIC_DECIMETER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000
            },
            'cfoot': {
                key: UNIT.Volume.CUBIC_FOOT,
                base: UNIT.Volume.CUBIC_METER,
                factor: 35.31466672149
            },
            'cinch': {
                key: UNIT.Volume.CUBIC_INCH,
                base: UNIT.Volume.CUBIC_METER,
                factor: 61023.74409473
            },
            'cmeter': {
                key: UNIT.Volume.CUBIC_METER,
                base: null

            },
            'cmilli': {
                key: UNIT.Volume.CUBIC_MILLIMETER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000000000
            },
            'cyard': {
                key: UNIT.Volume.CUBIC_YARD,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1.307950619314
            },
            'dliter': {
                key: UNIT.Volume.DEKALITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 100
            },
            'fd': {
                key: UNIT.Volume.FLUID_DRAM,
                base: UNIT.Volume.CUBIC_METER,
                factor: 270512.1816147
            },
            'fo': {
                key: UNIT.Volume.FLUID_OUNCE,
                base: UNIT.Volume.CUBIC_METER,
                factor: 33814.02270184
            },
            'fouk': {
                key: UNIT.Volume.FLUID_OUNCE_UK,
                base: UNIT.Volume.CUBIC_METER,
                factor: 35195.07972785
            },
            'gal': {
                key: UNIT.Volume.GALLON,
                base: UNIT.Volume.CUBIC_METER,
                factor: 264.1720523581
            },
            'galuk': {
                key: UNIT.Volume.GALLON_UK,
                base: UNIT.Volume.CUBIC_METER,
                factor: 219.9692482991
            },
            'gill': {
                key: UNIT.Volume.GILL,
                base: UNIT.Volume.CUBIC_METER,
                factor: 8453.505675461
            },
            'hliter': {
                key: UNIT.Volume.HECTOLITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 10
            },
            'l': {
                key: UNIT.Volume.LITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000
            },
            'ml': {
                key: UNIT.Volume.MICROLITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000000000
            },
            'millil': {
                key: UNIT.Volume.MILLILITER,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1000000
            },
            'min': {
                key: UNIT.Volume.MINIM,
                base: UNIT.Volume.CUBIC_METER,
                factor: 16230730.89689
            },
            'peckus': {
                key: UNIT.Volume.PECK_US,
                base: UNIT.Volume.CUBIC_METER,
                factor: 113.5103730336
            },
            'pf': {
                key: UNIT.Volume.PINT_FLUID,
                base: UNIT.Volume.CUBIC_METER,
                factor: 2113.376418865
            },
            'puk': {
                key: UNIT.Volume.PINT_UK,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1759.753986393
            },
            'pus': {
                key: UNIT.Volume.PINT_US,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1816.165968538
            },
            'quart': {
                key: UNIT.Volume.QUART,
                base: UNIT.Volume.CUBIC_METER,
                factor: 1056.688209433
            },
            'quartuk': {
                key: UNIT.Volume.QUART_UK,
                base: UNIT.Volume.CUBIC_METER,
                factor: 879.8769931964
            },
            'quartus': {
                key: UNIT.Volume.QUART_US,
                base: UNIT.Volume.CUBIC_METER,
                factor: 908.0829842689
            },
        },

        Weight: {
            'amu': {
                key: UNIT.Weight.ATOMIC_MASS_UNIT,
                base: UNIT.Weight.KILOGRAM,
                factor: 6.022136651675E+26
            },
            'carat': {
                key: UNIT.Weight.CARAT,
                base: UNIT.Weight.KILOGRAM,
                factor: 5000
            },
            'cent': {
                key: UNIT.Weight.CENTAL,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.02204622621849
            },
            'centi': {
                key: UNIT.Weight.CENTIGRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 100000
            },
            'deka': {
                key: UNIT.Weight.DEKAGRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 100
            },
            'dram': {
                key: UNIT.Weight.DRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 564.3833911933
            },
            'grain': {
                key: UNIT.Weight.GRAIN,
                base: UNIT.Weight.KILOGRAM,
                factor: 15432.35835294
            },
            'gram': {
                key: UNIT.Weight.GRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 1000
            },
            'hundw': {
                key: UNIT.Weight.HUNDREDWEIGHT,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.01968413055222
            },
            'kilo': {
                key: UNIT.Weight.KILOGRAM,
                base: null

            },
            'micro': {
                key: UNIT.Weight.MICROGRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 1000000000
            },
            'milig': {
                key: UNIT.Weight.MILLIGRAM,
                base: UNIT.Weight.KILOGRAM,
                factor: 1000000
            },
            'newton': {
                key: UNIT.Weight.NEWTON,
                base: UNIT.Weight.KILOGRAM,
                factor: 9.80665
            },
            'ounce': {
                key: UNIT.Weight.OUNCE,
                base: UNIT.Weight.KILOGRAM,
                factor: 35.27396194958
            },
            'penny': {
                key: UNIT.Weight.PENNYWEIGHT,
                base: UNIT.Weight.KILOGRAM,
                factor: 643.0149313726
            },
            'pound': {
                key: UNIT.Weight.POUND,
                base: UNIT.Weight.KILOGRAM,
                factor: 2.204622621849
            },
            'quarter': {
                key: UNIT.Weight.QUARTER,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.07873652220889
            },
            'stone': {
                key: UNIT.Weight.STONE,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.1574730444178
            },
            'tonuk': {
                key: UNIT.Weight.TON_UK,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.0009842065276111
            },
            'tonus': {
                key: UNIT.Weight.TON_US,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.001102311310924
            },
            'tonne': {
                key: UNIT.Weight.TONNE,
                base: UNIT.Weight.KILOGRAM,
                factor: 0.001
            },
            'troy': {
                key: UNIT.Weight.TROY_OUNCE,
                base: UNIT.Weight.KILOGRAM,
                factor: 32.15074656863
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

        Temperature: {
            'c': {
                key: UNIT.Temperature.CELSIUS,
                base: null
            },
            'f': {
                key: UNIT.Temperature.FAHRENHEIT,
                base: UNIT.Temperature.CELSIUS,
                factor: function (value, reverse) {
                    if (reverse) {
                        return value * 1.8 + 32;
                    }

                    return (value - 32) * 5 / 9;
                }
            },
            'k': {
                key: UNIT.Temperature.KELVIN,
                base: UNIT.Temperature.CELSIUS,
                factor: function (value, reverse) {
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

        this.convert = function (value) {

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
                        var baseType = inputDef.base || outputDef.base,
                            baseValue;
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
        this.setInputUnit = function (unit) {
            inputUnit = unit || null;
            this.inputUnit = inputUnit;

            return self;
        };

        this.outputUnit = null;
        this.setOutputUnit = function (unit) {
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
        var convert = function (value) {
            var valueToConvert = value,
                converter = new MeasurementConverter(UnitType);

            function readyToConvert() {
                return converter.inputUnit !== null && converter.outputUnit !== null;
            }

            var easyApiConverter = {
                from: function (inputUnit) {
                    converter.setInputUnit(inputUnit);
                    if (readyToConvert()) {
                        return converter.convert(valueToConvert);
                    }

                    return this;
                },
                to: function (outputUnit) {
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
        win.define("measurement", [], function () {
            return mjs;
        });
    } else if (win.module !== undefined && win.module.exports) {
        win.module.exports.measurementjs = mjs;
    }

})(window, window.mJsNamespace);
