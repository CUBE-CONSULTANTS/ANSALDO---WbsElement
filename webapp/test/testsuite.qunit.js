sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: ansaldowbselement",
		defaults: {
			page: "ui5://test-resources/ansaldowbselement/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "ansaldowbselement/",
				never: "test-resources/ansaldowbselement/"
			},
			loader: {
				paths: {
					"ansaldowbselement": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for ansaldowbselement"
			},
			"integration/opaTests": {
				title: "Integration tests for ansaldowbselement"
			}
		}
	};
});
