/*global QUnit*/

sap.ui.define([
	"namespace/HTML5Module/controller/Vista_Principal.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Vista_Principal Controller");

	QUnit.test("I should test the Vista_Principal controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
