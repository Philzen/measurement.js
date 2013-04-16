describe("Assign a custom namespace for MeasurementJs:", function() {	
	it("just set window.mJsNamespace = YourNamespace before measurement.js include", function(){
		expect(OurCoolCustomNamespace.changeIT.measurement).toBeDefined();		
	});
});