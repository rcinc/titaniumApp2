function transformFunction(model){
	var carObject = model.toJSON();
	return {
		"title"	: carObject.model + " by "	+ carObject.make
	};
}

function filterFunction(collection){
	return collection.where({
		make : 'Honda'
	});
}

$.mainWindow.addEventListener('close', function() {
	$.destroy();
}); 






