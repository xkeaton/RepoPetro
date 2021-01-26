sap.ui.define([
	"sap/m/SinglePlanningCalendarView"
], function(SinglePlanningCalendarView) {
	"use strict";

	return SinglePlanningCalendarView.extend("namespace.HTML5Module.controller.CustomThreeDaysView", {
		getEntityCount: function () {
			return 3;
		},

		getScrollEntityCount: function () {
			return 3;
		},

		calculateStartDate: function (oStartDate) {
			return oStartDate;
		}
	});

});
