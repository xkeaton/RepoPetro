sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("namespace.HTML5Module.controller.Vista_Principal", {

		onInit: function () {

			this.getRouter().getRoute("Vista_Principal").attachMatched(this._onRouteMatched, this);

			console.log("sap.ui.Device.system.phone=" + sap.ui.Device.system.phone);
			console.log("sap.ui.Device.system.tablet=" + sap.ui.Device.system.tablet);
			console.log("sap.ui.Device.system.desktop=" + sap.ui.Device.system.desktop);
			console.log("sap.ui.Device.system.combi=" + sap.ui.Device.system.combi);
			console.log("sap.ui.Device.os.name=" + sap.ui.Device.os.name);
		},
		
		getRouter: function () {

			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onAfterRendering: function () {

			if (sap.ui.Device.system.phone) {
				console.log("M");
				console.log(this.getOwnerComponent().getTargets());
				this.getOwnerComponent().getTargets().display("Vista_M_Principal");

			} else if (sap.ui.Device.system.tablet || sap.ui.Device.system.desktop) {
				console.log("DT");
				console.log(this.getOwnerComponent().getTargets());
				this.getOwnerComponent().getTargets().display("Vista_DT_Principal");
			}
		}
	});
});