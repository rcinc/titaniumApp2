Alloy.Collections.instance("cars");

var carsController = Alloy.createController("cars");

Alloy.Collections.cars.reset([{
	"make" : "Honda",
	"model" : "Civic"
}, {
	"make" : "Honda",
	"model" : "Accord"
}, {
	"make" : "Ford",
	"model" : "Escape"
}, {
	"make" : "Ford",
	"model"	: "Mustang"
}, {
	"make" : "Nissan",
	"model" : "Maxima"
}]);

carsController.mainWindow.open();

if (false) {
	function transformFunction(model) {
		var carObject = model.toJSON();
		return {
			"title" : carObject.model + " by " + carObject.make
		};
	}
	
	function filterFunction(collection){
		return collection.where({
			make: 'Honda'
		});
	}
	
	$.mainWindow.addEventListener('close', function() {
		$.destroy();
	});
	
	$.mainWindow.addEventListener('open', function() {
			Alloy.Collections.cars.reset([{
				"make" : "Honda",
				"model" : "Civic"
			}, {
				"make" : "Honda",
				"model" : "Accord"
			}, {
				"make" : "Ford",
				"model" : "Escape"
			}, {
				"make" : "Ford",
				"model"	: "Mustang"
			}, {
				"make" : "Nissan",
				"model" : "Maxima"
			}]);
	});
	
	$.mainWindow.open();
}
