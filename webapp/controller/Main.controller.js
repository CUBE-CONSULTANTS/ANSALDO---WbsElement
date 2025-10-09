/* eslint-disable no-debugger */
sap.ui.define(["./BaseController", "sap/m/MessageBox","sap/ui/model/json/JSONModel","../model/API"],
	 function (BaseController, MessageBox, JSONModel, API) {
	"use strict";

	return BaseController.extend("ansaldowbselement.controller.Main", {
		onInit: function () {

		},
		onOpenValueHelp: function (oEvent) {
			debugger
			this.onOpenDialog("valueHelpDialog","ansaldowbselement.view.fragments.ValueHelpDialog",this);
		},
		onCloseValueHelp: function () {},
		onSearchValueHelp: function () {},
		onConfirmValueHelp: function () {},
		onCancelValueHelp: function () {},
		onSynchronizePressed: function () {}
	});
});
