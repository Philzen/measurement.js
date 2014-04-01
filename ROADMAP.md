# Planned / Suggested developments

v0.2 - better API
----

- may remove `Unit` sub-namespace, setting up the unit classes right under measurement (`measurement.Speed` instead of `measurement.Unit.Speed`) --> API compatitibility break!
- Make Constants usable everywhere, so one may never have to use strings and maximise IDE code-completion gains 
` measurement(measurement.Speed).convert(...)...`
- dynamically generate a `toString()` method on unit classes, so `"My " + measurement.Speed` will evaluate to `My Speed` rather than `My [object Object]` 
    - this will also provoke type-sensitive programming in users
- Evaluate marking a measurement as conforming to the metric system. Decision framework:
    - MUST save space by making explicit configuration redundant
    - MUST be easy to understand how to use for measurement definitions
    - MUST NOT have a negative impact on performance


v0.3 - i18n 
----

- Externalise localised names and descriptions currently stored in main script file 
    - main file MUST only include `en` (and also `en_GB` where applicable)  
- Implement printing localised unit descriptions identified by [ISO-639 codes](http://www.andiamo.co.uk/resources/iso-language-codes)
    - SHOULD map `en_AU`, `en_BZ`, `en_IE`, `en_JM`, `en_NZ`, `en_TT`, `en_UK` (not part of ISO but [commonly used](http://en.wikipedia.org/wiki/British_English#firstHeading)) & `en_ZA` to `en_GB`
    - MUST assume American English for any other code starting `en` as this will cover slightly [more native speakers](http://en.wikipedia.org/wiki/English_language#Geographical_distribution) than otherwise
- Implement at least 3 localisations based on those features 

v0.x - (future muzak)
----

- Raise float precision (currently ~7 digits) when cross-converting between types of common-base type  
- Implement more conversions, such as  
    - weight
    - volume  
- Make Unit Configs seperatable from measurement.js  



# Accomplished &#10004;

v0.1 
----

- Set up completely test-driven project with contiuous integration on Travis CI  
- Implement easy-to-use, behaviour driven API  
- Implement basic conversions for  
    - Speed  
    - Pressure  
    - Distance  
    - Temperature  
    - Duration  

