var args = arguments[0] || {};

$.closeBtn.addEventListener('click', function() {
	$.detailWindow.close();
});

$.car.set(args.data.attributes); 

$.detailWindow.addEventListener('click', function() {
	$.destroy();
	
});

$.table.addEventListener('click', function(_event) {
	var model = Alloy.Collections.cars._getbyCid(_event.rowData.modelId);
	var detailController = Alloy.createController('detail', {
		data:model
	});
	detailController.getView().open({
		modal : true
	});
});
