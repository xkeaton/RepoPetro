sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/library",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	'sap/ui/export/Spreadsheet'
], function (Controller, Device, JSONModel, MessageToast, MLibrary, Export, ExportTypeCSV, Spreadsheet) {
	"use strict";

	return Controller.extend("namespace.HTML5Module.controller.Vista_M_Principal", {

		oGlobalFecha: "",

		onInit: function () {

			this.getRouter().getRoute("Vista_M_Principal").attachMatched(this._onRouteMatched, this);
			//this.getView().addStyleClass("sapUiSizeCompact");
			this.getView().byId("idTblOrdenPedido1").setSelectionMode("None");
			this.getView().byId("idTblOrdenPedido1").setSelectionBehavior("RowOnly");
			this.getView().byId("idTblOrdenPedido2").setSelectionMode("None");
			this.getView().byId("idTblOrdenPedido2").setSelectionBehavior("RowOnly");
			this.getView().byId("idTblRegistroOrdenPedido").setSelectionMode("None");
			this.getView().byId("idTblRegistroOrdenPedido").setSelectionBehavior("RowOnly");
			this.getView().byId("idTblReporteScop").setSelectionMode("None");
			this.getView().byId("idTblReporteScop").setSelectionBehavior("RowOnly");
			this.getView().byId("idTblCotizacion1").setSelectionMode("None");
			this.getView().byId("idTblCotizacion1").setSelectionBehavior("RowOnly");
			this.metStyles();

			var iPagesCount = 1;
			if (Device.system.desktop) {
				iPagesCount = 7;
			} else if (Device.system.tablet) {
				iPagesCount = 4;
			}
			var oSettingsModel = new JSONModel({
				pagesCount: iPagesCount
			});
			this.getView().setModel(oSettingsModel, "settings");

			var iPagesCountv1 = 1;
			if (Device.system.desktop) {
				iPagesCountv1 = 4;
			} else if (Device.system.tablet) {
				iPagesCountv1 = 2;
			} else if (Device.system.phone) {
				iPagesCountv1 = 1;

			}
			var oSettingsModelv1 = new JSONModel({
				pagesCount: iPagesCountv1
			});
			this.getView().setModel(oSettingsModelv1, "settingsv1");
		},

		metStyles: function () {

			this.getView().byId("idCabeceraRojo").addStyleClass("styleCabeceraRojo");
			//this.getView().byId("idCabeceraBlanco").addStyleClass("styleCabeceraBlanco");
			this.getView().byId("idCabeceraVerde").addStyleClass("styleCabeceraVerde");
			this.getView().byId("idTexto1").addStyleClass("styleTexto1");
			this.getView().byId("idTexto2").addStyleClass("styleTexto2");
			this.getView().byId("idImagenFoto").addStyleClass("styleImagenFoto");
			this.getView().byId("idCuerpo").addStyleClass("styleCuerpo");
			this.getView().byId("idAtenderPedido").addStyleClass("styleBotonVerde");
			this.getView().byId("master1").addStyleClass("stylemaster1");
			//this.getView().byId("idComboTipoOrden").addStyleClass("styleComboBox");
			this.getView().byId("idSiguiente1").addStyleClass("styleBotonVerde");
			this.getView().byId("idLicencias").addStyleClass("styleBotonVerde");
			this.getView().byId("idRegistrarOrden1").addStyleClass("styleBotonVerde");
			this.getView().byId("idDescargarOrden1").addStyleClass("styleBotonVerde");
		},

		_onRouteMatched: function () {

			this.getView().byId("idSiguiente1").setEnabled(false);
			//this.handleSelectMenuItemGenerarOrdPedido();
		},

		onAfterRendering: function () {

			this.funFechaActual();
			this.getView().byId("idSiguiente1").setEnabled(false);
			//this.handleSelectMenuItemGenerarOrdPedido();

			this.getView().byId("master1").setShowHeader(false);
			if (sap.ui.Device.system.phone) {
				console.log("M");
				this.getView().byId("idDetail_0_1").setShowHeader(true);
				this.getView().byId("idDetail_1_1").setShowHeader(true);
				this.getView().byId("idDetail_1_2").setShowHeader(true);
				this.getView().byId("idDetail_1_3").setShowHeader(true);
				this.getView().byId("idDetail_2_1").setShowHeader(true);
				this.getView().byId("idDetail_3_1").setShowHeader(true);
				this.getView().byId("idDetail_6_1").setShowHeader(true);
				this.getView().byId("idEspacio1").setVisible(false);
			} else if (sap.ui.Device.system.tablet) {
				console.log("T");
				this.getView().byId("idDetail_0_1").setShowHeader(true);
				this.getView().byId("idDetail_1_1").setShowHeader(true);
				this.getView().byId("idDetail_1_2").setShowHeader(true);
				this.getView().byId("idDetail_1_3").setShowHeader(true);
				this.getView().byId("idDetail_2_1").setShowHeader(true);
				this.getView().byId("idDetail_3_1").setShowHeader(true);
				this.getView().byId("idDetail_6_1").setShowHeader(true);
				this.getView().byId("idEspacio1").setVisible(true);
			} else if (sap.ui.Device.system.desktop) {
				console.log("D");
				this.getView().byId("idDetail_0_1").setShowHeader(false);
				this.getView().byId("idDetail_1_1").setShowHeader(false);
				this.getView().byId("idDetail_1_2").setShowHeader(false);
				this.getView().byId("idDetail_1_3").setShowHeader(false);
				this.getView().byId("idDetail_2_1").setShowHeader(false);
				this.getView().byId("idDetail_3_1").setShowHeader(false);
				this.getView().byId("idDetail_6_1").setShowHeader(false);
				this.getView().byId("idEspacio1").setVisible(false);
			}
		},

		getRouter: function () {

			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onPressMenu: function () { // Celular: Habilitar
			
			this.getSplitAppObj().to(this.createId("master1"));
		},

		getSplitAppObj: function () {

			var oResult = this.byId("SplitAppDemo");
			if (!oResult) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return oResult;
		},

		funFechaActual: function () {

			var oFechaSistema = new Date();

			var oAnio = oFechaSistema.getFullYear();
			var oMes = oFechaSistema.getMonth() + 1;
			var oDia = oFechaSistema.getDate();

			oAnio = oAnio.toString();
			oMes = oMes.toString();
			oDia = oDia.toString();

			if (oDia.length === 1) {
				oDia = "0" + oDia;
			}
			if (oMes.length === 1) {
				oMes = "0" + oMes;
			}

			var oFecha = oAnio + '-' + oMes + '-' + oDia;
			this.oGlobalFecha = oFecha;

			this.getView().byId("idFechaDeEntrega").setValue(oFecha);
		},

		handleSelectMenuItemGenerarOrdPedido: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_1_1"));
		},

		handleSelectMenuItemGenerarCotizacion: function () {

			this.getView().byId("idNavigationList").setSelectedItem("8");
			this.getSplitAppObj().to(this.createId("idDetail_6_1"));
		},

		onPressSiguiente1: function () {

			this.getView().byId("idSeccion11").setIcon("sap-icon://accept");
			this.getView().byId("idSeccion12").setIcon("sap-icon://overlay");
			this.getView().byId("idWizard1").setCurrentStep(this.byId("idSeccion12"));
			var oControlStep1 = this.getView().byId("idSeccion12");
			this.getView().byId("idWizard1").goToStep(oControlStep1);
			this.getView().byId("idSeccion12").setValidated(false);
		},

		onPressRegistrarOrden1: function () {

			/*this.getView().byId("idSeccion12").setIcon("sap-icon://accept");
			this.getView().byId("idSeccion13").setIcon("sap-icon://overlay");
			this.getView().byId("idWizard1").setCurrentStep(this.byId("idSeccion13"));
			var oControlStep1 = this.getView().byId("idSeccion13");
			this.getView().byId("idWizard1").goToStep(oControlStep1);
			this.getView().byId("idSeccion13").setValidated(false);*/

			// @ts-ignore
			var oDialog = new sap.m.Dialog({
				title: "CONFIRMAR CREDENCIALES DE OSINERGMIN",
				type: "Message",
				draggable: false,
				resizable: false,
				icon: "sap-icon://key",
				contentWidth: "400px",
				content: [
					new sap.m.Label({
						text: "Código de usuario: ",
						wrapping: true,
						width: "100%"
					}),
					new sap.m.Input({
						value: "245775009",
						type: "Text",
						maxLength: 10,
						placeholder: "Ingrese código de usuario",
						width: "100%"
					}),
					new sap.m.Label({
						text: "",
						width: "100%"
					}),
					new sap.m.Label({
						text: "Contraseña: ",
						wrapping: true,
						width: "100%"
					}),
					new sap.m.Input("idPassWord", {
						value: "",
						type: "Password",
						maxLength: 10,
						placeholder: "Ingrese código de usuario",
						width: "86%",
						liveChange: function (evt) {
							console.log("OK");

							var oPassSistema = "123456";
							var oPassVista = sap.ui.getCore().byId('idPassWord').getValue();

							if (oPassSistema === oPassVista) {
								sap.ui.getCore().byId("idAceptar").setEnabled(true);
								sap.ui.getCore().byId("idPassWord").setValueState("None");
							} else if (oPassVista === "") {
								sap.ui.getCore().byId("idAceptar").setEnabled(false);
								sap.ui.getCore().byId("idPassWord").setValueState("None");
							} else {
								sap.ui.getCore().byId("idAceptar").setEnabled(false);
								sap.ui.getCore().byId("idPassWord").setValueState("Warning");
								sap.ui.getCore().byId("idPassWord").setValueStateText("Contraseña incorrecta. Vuelva a intentarlo");
							}
						}
					}),
					new sap.m.Label({
						text: "",
						width: "1%" // Celular: Cambiar a 1
					}),
					new sap.m.ToggleButton({
						icon: "sap-icon://show",
						press: function (oEvent) {
							var varTipoInput = sap.ui.getCore().byId('idPassWord').getType();
							if (varTipoInput === "Password") {
								sap.ui.getCore().byId('idPassWord').setType("Text");
							} else {
								sap.ui.getCore().byId('idPassWord').setType("Password");
							}
						},
						width: "10%"
					}),
					new sap.m.Label({
						text: "",
						width: "100%"
					}),
					new sap.m.Label({
						text: "",
						width: "4%"
					}),
					new sap.m.Button("idAceptar", {
						text: 'ACEPTAR',
						type: 'Emphasized',
						width: "45%",
						press: function () {

							var oDialogExitoOrden = new sap.m.Dialog({
								title: "Mensaje",
								type: "Message",
								state: "Success",
								draggable: false,
								resizable: false,
								contentWidth: "120px",
								content: [
									new sap.ui.layout.VerticalLayout({
										width: "100%",
										content: [
											new sap.ui.layout.Grid({
												containerQuery: true,
												defaultSpan: "XL12 L12 M12 S12",
												content: [
													new sap.m.HBox({
														items: [
															new sap.m.VBox({
																width: "100%",
																alignItems: "Center",
																items: [
																	new sap.m.Image({
																		src: "./img/Exito.PNG",
																		width: "90%",
																		height: "90%"
																	})
																]
															})
														],
														layoutData: new sap.ui.layout.GridData({
															span: "XL4 L4 M4 S4"
														})
													}),
													new sap.m.HBox({
														items: [
															new sap.m.VBox({
																width: "100%",
																alignItems: "Center",
																items: [
																	new sap.m.Label({
																		text: "",
																		textAlign: "Center",
																		wrapping: true,
																		width: "100%"
																	}),
																	new sap.m.Label({
																		text: "Su orden se registró con éxito",
																		textAlign: "Center",
																		wrapping: true,
																		width: "100%"
																	}).addStyleClass("styleTextoNegro_15")
																]
															})
														],
														layoutData: new sap.ui.layout.GridData({
															span: "XL8 L8 M8 S8"
														})
													})
												]
											})
										]
									}),
									new sap.m.Label({
										text: "",
										width: "20%"
									}),
									new sap.m.Button({
										text: 'ACEPTAR',
										type: 'Emphasized',
										width: "60%",
										press: function () {

											this.getView().byId("idSeccion12").setIcon("sap-icon://accept");
											this.getView().byId("idSeccion13").setIcon("sap-icon://accept");
											this.getView().byId("idWizard1").setCurrentStep(this.byId("idSeccion13"));
											var oControlStep1 = this.getView().byId("idSeccion13");
											this.getView().byId("idWizard1").goToStep(oControlStep1);
											this.getView().byId("idSeccion13").setValidated(false);

											oDialogExitoOrden.close();
											oDialogExitoOrden.destroy();
										}.bind(this)
									}),
									new sap.m.Label({
										text: "",
										width: "20%"
									})
								],
								afterClose: function () {
									oDialogExitoOrden.destroy();
								}
							});
							oDialogExitoOrden.open();

							oDialog.close();
							oDialog.destroy();
						}.bind(this)
					}),
					new sap.m.Label({
						text: "",
						width: "2%"
					}),
					new sap.m.Button({
						text: 'CANCELAR',
						type: 'Emphasized',
						width: "45%",
						press: function () {
							oDialog.close();
							oDialog.destroy();
						}.bind(this)
					}),
					new sap.m.Label({
						text: "",
						width: "4%"
					})
				],
				afterClose: function () {
					oDialog.destroy();
				}
			});
			oDialog.open();

			sap.ui.getCore().byId("idAceptar").setEnabled(false);
		},

		onPressDescargarOrden1: function () {

			this.getView().byId("idSeccion11").setIcon("sap-icon://overlay");
			this.getView().byId("idSeccion12").setIcon("sap-icon://circle-task");
			this.getView().byId("idSeccion13").setIcon("sap-icon://circle-task");
			this.getView().byId("idWizard1").setCurrentStep(this.byId("idSeccion11"));
			this.getView().byId("idSeccion11").setValidated(false);
		},

		handleSelectionChangePlanta: function () {

			this.funValidarSeccionSiguiente1();
		},

		handleChangePlacaTransporte: function (oEvent) {

			var oEstado = oEvent.getParameters().selectedItem.getIcon();
			console.log(oEstado);

			if (oEstado === "sap-icon://sys-cancel-2") {
				var oDialog = new sap.m.Dialog({
					title: "Placa bloqueada",
					type: "Message",
					state: "Error",
					draggable: false,
					resizable: false,
					contentWidth: "150px",
					content: [
						new sap.ui.layout.VerticalLayout({
							width: "100%",
							content: [
								new sap.ui.layout.Grid({
									containerQuery: true,
									defaultSpan: "XL12 L12 M12 S12",
									content: [
										new sap.m.HBox({
											items: [
												new sap.m.VBox({
													width: "100%",
													alignItems: "Center",
													items: [
														new sap.m.Image({
															src: "./img/PlacaBloqueada.PNG",
															width: "90.88px",
															height: "70px"
														})
													]
												})
											],
											layoutData: new sap.ui.layout.GridData({
												span: "XL6 L6 M6 S6"
											})
										}),
										new sap.m.HBox({
											items: [
												new sap.m.VBox({
													width: "100%",
													alignItems: "Center",
													items: [
														new sap.m.Label({
															text: "Ingrese otra placa de transporte o deje el campo en blanco",
															textAlign: "Center",
															wrapping: true,
															width: "100%"
														})
													]
												})
											],
											layoutData: new sap.ui.layout.GridData({
												span: "XL6 L6 M6 S6"
											})
										})
									]
								})
							]
						}),
						new sap.m.Label({
							text: "",
							width: "20%"
						}),
						new sap.m.Button({
							text: 'ACEPTAR',
							type: 'Emphasized',
							width: "60%",
							press: function () {
								this.getView().byId("idSelectPlacaTransporte").setSelectedKey("PT0000");
								this.funValidarSeccionSiguiente1();
								oDialog.close();
								oDialog.destroy();
							}.bind(this)
						}),
						new sap.m.Label({
							text: "",
							width: "20%"
						})
					],
					afterClose: function () {
						oDialog.destroy();
					}
				});
				oDialog.open();
			} else {
				this.funValidarSeccionSiguiente1();
			}
		},

		formatEstadoPlacaTransporte: function (oEstado) {

			if (oEstado !== "" && oEstado !== null && oEstado !== undefined) {
				if (oEstado === "O") {
					return "";
				} else if (oEstado === "A") {
					return "sap-icon://accept";
				} else if (oEstado === "N") {
					return "sap-icon://sys-cancel-2";
				}
			} else {
				return "";
			}
		},

		handleChangeFecEntrega: function () {

			var oFecha = this.getView().byId("idFechaDeEntrega").getDateValue();
			var oNumeroDiasAdd = 14;
			var oHoy = new Date();
			var oHoy14 = new Date();
			oHoy14.setDate(oHoy14.getDate() + oNumeroDiasAdd);
			var oDia = oHoy14.getDate();
			var oMes = oHoy14.getMonth() + 1;
			var oAnio = oHoy14.getFullYear();

			var oFecha14Resul = oAnio + "-" + oMes + "-" + oDia;
			var oFecha14 = new Date(oFecha14Resul);

			console.log("Nueva Hoy: " + oHoy);
			console.log("Nueva Fecha: " + oFecha14);
			console.log("Selec Fecha: " + oFecha);

			if (oFecha >= oHoy && oFecha <= oFecha14) {
				this.getView().byId("idFechaDeEntrega").setValueState("None");
			} else if (oFecha <= oHoy) {
				this.getView().byId("idFechaDeEntrega").setValueState("Warning");
				this.getView().byId("idFechaDeEntrega").setValueStateText("No puede seleccionar una fecha pasada");
			} else if (oFecha >= oFecha14) {
				this.getView().byId("idFechaDeEntrega").setValueState("Warning");
				this.getView().byId("idFechaDeEntrega").setValueStateText("Solo puede seleccionar en un rango de 2 semanas");
			}

			this.funValidarSeccionSiguiente1();
		},

		funValidarSeccionSiguiente1: function () {

			var oPlanta = this.getView().byId("idPlanta").getValue();
			var oPlacaTransporte = this.getView().byId("idSelectPlacaTransporte").getSelectedKey();
			var oFechaDeEntrega = this.getView().byId("idFechaDeEntrega").getValueState();

			console.log(oPlanta);
			console.log(oPlacaTransporte);
			console.log(oFechaDeEntrega);

			if (oPlanta !== "" && oFechaDeEntrega !== "Warning") {
				this.getView().byId("idSiguiente1").setEnabled(true);
			} else {
				this.getView().byId("idSiguiente1").setEnabled(false);
			}
		},

		onPressLicencias: function () {

			var oFechaEntrega = "2020-12-07";

			// Llamar modelo
			var oThis = this;
			var oModel = oThis.getView().getModel("myParam");

			var oTableLicencias = new sap.ui.table.Table({
				visibleRowCount: 3,
				alternateRowColors: true,
				selectionMode: "None",
				width: "100%",
				rows: "{myParam>/listTblLicencias}"
			});
			oTableLicencias.addColumn(new sap.ui.table.Column({
				width: "50%",
				hAlign: "Center",
				label: new sap.m.Text({
					text: "Tipo de licencias"
				}),
				template: new sap.m.Text({
					text: "{myParam>TIPO}"
				})
			}));
			oTableLicencias.addColumn(new sap.ui.table.Column({
				width: "50%",
				hAlign: "Center",
				label: new sap.m.Text({
					text: "F. Vencimiento"
				}),
				/*template: new sap.m.Text({
					text: "{'myParam>FEC_VENCIMIENTO'}"
				})*/
				template: new sap.tnt.InfoLabel({
					text: "{myParam>FEC_VENCIMIENTO}",
					colorScheme: {
						parts: [{
							path: 'myParam>FEC_VENCIMIENTO'
						}],
						formatter: function (oFecVencimiento) {

							var oRespuesta = 0;

							var oDiaFecVencimiento = oFecVencimiento.substring(8, 10);
							var oMesFecVencimiento = oFecVencimiento.substring(5, 7);
							var oAnioFecVencimiento = oFecVencimiento.substring(0, 4);

							if (oDiaFecVencimiento.substring(0, 1) === "0") {
								oDiaFecVencimiento = oDiaFecVencimiento.substring(1, 2);
							}

							if (oMesFecVencimiento.substring(0, 1) === "0") {
								oMesFecVencimiento = oMesFecVencimiento.substring(1, 2);
							}

							var oFechaFinalVencimiento = oAnioFecVencimiento + "-" + oMesFecVencimiento + "-" + oDiaFecVencimiento;
							var oFechaVencimientoSist = new Date(oFechaFinalVencimiento);

							console.log(oFechaVencimientoSist);

							var oDiaFecEntrega = oFechaEntrega.substring(8, 10);
							var oMesFecEntrega = oFechaEntrega.substring(5, 7);
							var oAnioFecEntrega = oFechaEntrega.substring(0, 4);

							if (oDiaFecEntrega.substring(0, 1) === "0") {
								oDiaFecEntrega = oDiaFecEntrega.substring(1, 2);
							}

							if (oMesFecEntrega.substring(0, 1) === "0") {
								oMesFecEntrega = oMesFecEntrega.substring(1, 2);
							}

							var oFechaFinalEntrega = oAnioFecEntrega + "-" + oMesFecEntrega + "-" + oDiaFecEntrega;
							var oFechaEntregaSist = new Date(oFechaFinalEntrega);
							var oFechaDiasAntesEntregaSist = new Date(oFechaFinalEntrega);

							oFechaDiasAntesEntregaSist.setDate(oFechaEntregaSist.getDate() - 6);
							var oDia = oFechaDiasAntesEntregaSist.getDate();
							var oMes = oFechaDiasAntesEntregaSist.getMonth() + 1;
							var oAnio = oFechaDiasAntesEntregaSist.getFullYear();
							var oFecha7Resul = oAnio + "-" + oMes + "-" + oDia;
							var oFechaFinalDiasAntesEntregaSist = new Date(oFecha7Resul);

							console.log(oFechaFinalDiasAntesEntregaSist);
							console.log(oFechaEntregaSist);

							if (oFechaVencimientoSist >= oFechaFinalDiasAntesEntregaSist && oFechaVencimientoSist <= oFechaEntregaSist) {
								oRespuesta = 9;
							} else {
								oRespuesta = 8;
							}

							return oRespuesta;
						}.bind(this)
					}
				})
			}));

			oTableLicencias.setModel(oModel, "myParam");

			var oDialog = new sap.m.Dialog({
				title: "LICENCIAS",
				type: "Message",
				draggable: false,
				resizable: false,
				icon: "sap-icon://business-card",
				contentWidth: "150px",
				content: [
					new sap.ui.layout.VerticalLayout({
						width: "100%",
						content: [
							new sap.ui.layout.Grid({
								containerQuery: true,
								defaultSpan: "XL12 L12 M12 S12",
								content: [
									new sap.m.HBox({
										items: [
											new sap.m.VBox({
												width: "100%",
												alignItems: "Center",
												items: [
													new sap.m.Image({
														src: "./img/CardLicencia.PNG",
														width: "75px",
														height: "54.5px"
													})
												]
											})
										],
										layoutData: new sap.ui.layout.GridData({
											span: "XL12 L12 M12 S12"
										})
									}),
									new sap.m.HBox({
										items: [
											new sap.m.HBox({
												width: "100%",
												alignItems: "Center",
												justifyContent: "Center",
												items: [
													new sap.m.Label({
														text: "Fecha de entrega: ",
														textAlign: "Center",
														design: "Bold",
														wrapping: true,
														width: "100%"
													}).addStyleClass("sapUiSmallMarginEnd"),
													new sap.m.Label({
														text: oFechaEntrega,
														textAlign: "Center",
														wrapping: true,
														width: "100%"
													})
												]
											})
										],
										layoutData: new sap.ui.layout.GridData({
											span: "XL12 L12 M12 S12"
										})
									})
								]
							})
						]
					}),
					oTableLicencias,
					new sap.m.Label({
						text: "",
						width: "100%"
					}),
					new sap.m.Label({
						text: "",
						width: "20%"
					}),
					new sap.m.Button({
						text: 'CERRAR',
						type: 'Emphasized',
						width: "60%",
						press: function () {
							oDialog.close();
							oDialog.destroy();
						}.bind(this)
					}),
					new sap.m.Label({
						text: "",
						width: "20%"
					})
				],
				afterClose: function () {
					oDialog.destroy();
				}
			});
			oDialog.open();
		},

		funValidarFecLicencia: function (oFecVencimiento) {

			var oDiaFecVencimiento = oFecVencimiento.substring(8, 10);
			var oMesFecVencimiento = oFecVencimiento.substring(5, 7);
			var oAnioFecVencimiento = oFecVencimiento.substring(0, 4);

			console.log(oDiaFecVencimiento);
			console.log(oMesFecVencimiento);
			console.log(oAnioFecVencimiento);
		},

		onPressReporteCodScop: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_1_2"));
		},

		handleLinkPressAtras1: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_1_1"));
		},

		handleCellClickReporteScop: function (evt) {

			try {
				var oObjeto = evt.getParameters().rowBindingContext.getPath();
				console.log(oObjeto);

				this.getView().byId("idNavigationList").setSelectedItem("2");
				this.getSplitAppObj().to(this.createId("idDetail_1_3"));
			} catch (oError) {}
		},

		handleLinkPressAtras2: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_1_2"));
		},

		onPressAnularScop: function () {

			var oDialog = new sap.m.Dialog({
				title: "Mensaje",
				type: "Message",
				state: "Error",
				draggable: false,
				resizable: false,
				contentWidth: "150px",
				content: [
					new sap.ui.layout.VerticalLayout({
						width: "100%",
						content: [
							new sap.ui.layout.Grid({
								containerQuery: true,
								defaultSpan: "XL12 L12 M12 S12",
								content: [
									new sap.m.HBox({
										items: [
											new sap.m.VBox({
												width: "100%",
												alignItems: "Center",
												items: [
													new sap.m.Image({
														src: "./img/Advertencia.PNG",
														width: "90%",
														height: "90%"
													})
												]
											})
										],
										layoutData: new sap.ui.layout.GridData({
											span: "XL6 L6 M6 S6"
										})
									}),
									new sap.m.HBox({
										items: [
											new sap.m.VBox({
												width: "100%",
												alignItems: "Center",
												items: [
													new sap.m.Label({
														text: "¿Está seguro que desea anular el SCOP?",
														textAlign: "Center",
														wrapping: true,
														width: "100%"
													}),
													new sap.m.HBox({
														width: "100%",
														alignItems: "Center",
														justifyContent: "Center",
														items: [
															new sap.m.Button({
																text: 'SI',
																type: 'Emphasized',
																width: "80%",
																press: function () {

																	var oDialogExitoAnulacion = new sap.m.Dialog({
																		title: "Mensaje",
																		type: "Message",
																		state: "Success",
																		draggable: false,
																		resizable: false,
																		contentWidth: "350px",
																		content: [
																			new sap.ui.layout.VerticalLayout({
																				width: "100%",
																				content: [
																					new sap.ui.layout.Grid({
																						containerQuery: true,
																						defaultSpan: "XL12 L12 M12 S12",
																						content: [
																							new sap.m.HBox({
																								items: [
																									new sap.m.VBox({
																										width: "100%",
																										alignItems: "Center",
																										items: [
																											new sap.m.Image({
																												src: "./img/Exito.PNG",
																												width: "90%",
																												height: "90%"
																											})
																										]
																									})
																								],
																								layoutData: new sap.ui.layout.GridData({
																									span: "XL4 L4 M4 S4"
																								})
																							}),
																							new sap.m.HBox({
																								items: [
																									new sap.m.VBox({
																										width: "100%",
																										alignItems: "Center",
																										items: [
																											new sap.m.Label({
																												text: "",
																												textAlign: "Center",
																												wrapping: true,
																												width: "100%"
																											}),
																											new sap.m.Label({
																												text: "Se anuló correctamente el SCOP",
																												textAlign: "Center",
																												wrapping: true,
																												width: "100%"
																											}).addStyleClass("styleTextoNegro_15")
																										]
																									})
																								],
																								layoutData: new sap.ui.layout.GridData({
																									span: "XL8 L8 M8 S8"
																								})
																							})
																						]
																					})
																				]
																			}),
																			new sap.m.Label({
																				text: "",
																				width: "20%"
																			}),
																			new sap.m.Button({
																				text: 'ACEPTAR',
																				type: 'Emphasized',
																				width: "60%",
																				press: function () {

																					this.getView().byId("idSeccion12").setIcon("sap-icon://accept");
																					this.getView().byId("idSeccion13").setIcon("sap-icon://accept");
																					this.getView().byId("idWizard1").setCurrentStep(this.byId("idSeccion13"));
																					var oControlStep1 = this.getView().byId("idSeccion13");
																					this.getView().byId("idWizard1").goToStep(oControlStep1);
																					this.getView().byId("idSeccion13").setValidated(false);

																					oDialogExitoAnulacion.close();
																					oDialogExitoAnulacion.destroy();
																				}.bind(this)
																			}),
																			new sap.m.Label({
																				text: "",
																				width: "20%"
																			})
																		],
																		afterClose: function () {
																			oDialogExitoAnulacion.destroy();
																		}
																	});
																	oDialogExitoAnulacion.open();

																	oDialog.close();
																	oDialog.destroy();
																}.bind(this)
															}).addStyleClass("sapUiSmallMarginEnd"),
															new sap.m.Button({
																text: 'NO',
																type: 'Emphasized',
																width: "100%",
																press: function () {
																	oDialog.close();
																	oDialog.destroy();
																}.bind(this)
															})
														]
													})
												]
											})
										],
										layoutData: new sap.ui.layout.GridData({
											span: "XL6 L6 M6 S6"
										})
									})
								]
							})
						]
					})
				],
				afterClose: function () {
					oDialog.destroy();
				}
			});
			oDialog.open();
		},

		onParentClickedCodScop: function (oEvent) {

			var oSelect = oEvent.getParameter('selected');
			console.log(oSelect);

			this.getView().byId("idInputCodCotizar").setValue("");

			if (oSelect) {
				this.getView().byId("idInputCodCotizar").setVisible(true);
				this.getView().byId("idButtonIrCotizar").setVisible(true);
			} else {
				this.getView().byId("idInputCodCotizar").setVisible(false);
				this.getView().byId("idButtonIrCotizar").setVisible(false);
			}
		},

		onPressIr: function () {

			this.getView().byId("idTblCotizacion1").setVisible(true);
			this.getView().byId("idFooterTabla1Cotizar").setVisible(true);
			this.getView().byId("idFooterTabla2Cotizar").setVisible(true);
		},

		onPressDescargar1: function () {

			var oView = this.getView();
			var oModel = oView.getModel("myParam");

			var olistTblReporteScop = oModel.getProperty("/listTblReporteScop");
			console.log(olistTblReporteScop);

			oModel.setProperty("/tblResFacRegExcel1", olistTblReporteScop);
			console.log(oModel.getProperty("/tblResFacRegExcel1"));

			this.onExport();
		},

		onExport: function () {
			var oCols, oProducts, oSettings, oSheet;

			oCols = this.createColumnConfig();
			oProducts = this.getView().getModel("myParam").getProperty('/tblResFacRegExcel1');

			oSettings = {
				workbook: {
					columns: oCols
				},
				dataSource: oProducts,
				fileName: "RepCódigosSCOP.xlsx"
			};

			oSheet = new Spreadsheet(oSettings);
			oSheet.build()
				.then(function () {
					this.getView().setBusy(false);
					sap.m.MessageToast.show("Se realizó la exportación del reporte con éxito.");
				}.bind(this))
				.finally(function () {
					this.getView().setBusy(false);
					oSheet.destroy();
				}.bind(this));
		},

		createColumnConfig: function () {

			var oCols = [];

			oCols.push({
				label: 'Código SCOP',
				property: 'CODIGO',
				type: 'string'
			});
			oCols.push({
				label: 'Planta',
				property: 'PLANTA',
				type: 'string'
			});
			oCols.push({
				label: 'Usuario comprador',
				property: 'USER_COMPRADOR',
				type: 'string'
			});
			oCols.push({
				label: 'Fecha pedido',
				property: 'FEC_PEDIDO',
				type: 'string'
			});
			oCols.push({
				label: 'Fecha entrega',
				property: 'FEC_ENTREGA',
				type: 'string'
			});
			oCols.push({
				label: 'Estado',
				property: 'ESTADO',
				type: 'string'
			});

			return oCols;
		},

		handleChangeDniConductor: function () {

			var oView = this.getView();
			var oModel = oView.getModel("myParam");

			var olistTblConductor1 = oModel.getProperty("/listConductor1");
			console.log(olistTblConductor1);

			var oDniConductor = this.getView().byId("idTextDniConductor").getValue();
			console.log(oDniConductor);

			for (var i = 0; i < olistTblConductor1.length; i++) {
				if (olistTblConductor1[i].DNI === oDniConductor) {
					this.getView().byId("idTextSetConductorNombre").setValue(olistTblConductor1[i].NOMBRE);
					this.getView().byId("idTextSetConductorDni").setValue(olistTblConductor1[i].DNI);
					this.getView().byId("idTextSetConductorApellido").setValue(olistTblConductor1[i].APELLIDO);
					this.getView().byId("idTextSetConductorNuoLicencia").setValue(olistTblConductor1[i].NUM_LICENCIA);
					this.getView().byId("idLabelSetConductorCalificacion").setText(olistTblConductor1[i].CALIFICACION + " | ");
					var oCalculo = parseFloat(olistTblConductor1[i].CALIFICACION, 10) / 10;
					console.log(oCalculo);
					this.getView().byId("idRaInSetConductorCalificacion").setValue(oCalculo);
				}
			}
		},

		// Temporal
		formatVencimiento1: function (tiempo, tipo_tiempo, status) {

			var oTiempo = "";
			var oRespuesta = "";

			if (tipo_tiempo === "D") {
				oTiempo = "días";
			} else if (tipo_tiempo === "A") {
				oTiempo = "años";
			}

			if (status === "V") {
				oRespuesta = "Licencia expirada";
			} else if (status === "W" || status === "A") {
				oRespuesta = tiempo + " " + oTiempo + " por vencer";
			}

			return oRespuesta;
		},

		formatStatusIcon1: function (status) {

			var oRespuesta = "";

			if (status === "A") {
				oRespuesta = "sap-icon://message-success";
			} else if (status === "W") {
				oRespuesta = "sap-icon://message-warning";
			} else if (status === "V") {
				oRespuesta = "sap-icon://message-error";
			}

			return oRespuesta;
		},

		formatStatusState1: function (status) {

			var oRespuesta = "";

			if (status === "A") {
				oRespuesta = "Success";
			} else if (status === "W") {
				oRespuesta = "Warning";
			} else if (status === "V") {
				oRespuesta = "Error";
			}

			return oRespuesta;
		},
		// Temporal

		handleChangeVolumnen: function () {

			var oView = this.getView();
			var oModel = oView.getModel("myParam");
			oView.setModel(oModel);

			var oVolumen = this.getView().byId("idTextVolumen1").getValue();
			console.log(oVolumen);

			var oVectorTabla = oModel.getProperty("/listTblCotizacion1");
			console.log(oVectorTabla);

			var oDato1 = oVectorTabla[0].VOLUMEN;
			var oDato2 = oVectorTabla[1].VOLUMEN;
			var oDato3 = oVectorTabla[2].VOLUMEN;
			var oDato4 = oVectorTabla[3].VOLUMEN;
			var oDato5 = oVectorTabla[4].VOLUMEN;
			var oDato6 = oVectorTabla[5].VOLUMEN;
			var oDato7 = oVectorTabla[6].VOLUMEN;

			if (oDato1 === "" || oDato1 === null) {
				oDato1 = "0.00";
			}

			if (oDato2 === "" || oDato2 === null) {
				oDato2 = "0.00";
			}

			if (oDato3 === "" || oDato3 === null) {
				oDato3 = "0.00";
			}

			if (oDato4 === "" || oDato4 === null) {
				oDato4 = "0.00";
			}

			if (oDato5 === "" || oDato5 === null) {
				oDato5 = "0.00";
			}

			if (oDato6 === "" || oDato6 === null) {
				oDato6 = "0.00";
			}

			if (oDato7 === "" || oDato7 === null) {
				oDato7 = "0.00";
			}

			// Calculo
			var oSuma = parseFloat(oDato1, 10) + parseFloat(oDato2, 10) + parseFloat(oDato3, 10) + parseFloat(oDato4, 10) + parseFloat(oDato5,
				10) + parseFloat(oDato6, 10) + parseFloat(oDato7, 10);
			oSuma = oSuma.toFixed(2);
			console.log(oSuma);

			this.getView().byId("idImporteTotal1").setValue(oSuma);
		},

		onPress: function (evt) {
			MessageToast.show("Fire press");
		},

		onPress1: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress2: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress3: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress4: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress5: function (evt) {
			if (evt.getSource().getPressed()) {

				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress6: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress7: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress8: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress9: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress10: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress11: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button7").setPressed(false);
				this.getView().byId("button12").setPressed(false);
			}
		},

		onPress12: function (evt) {
			if (evt.getSource().getPressed()) {
				this.getView().byId("button2").setPressed(false);
				this.getView().byId("button1").setPressed(false);
				this.getView().byId("button4").setPressed(false);
				this.getView().byId("button3").setPressed(false);
				this.getView().byId("button5").setPressed(false);
				this.getView().byId("button6").setPressed(false);
				this.getView().byId("button8").setPressed(false);
				this.getView().byId("button9").setPressed(false);
				this.getView().byId("button10").setPressed(false);
				this.getView().byId("button11").setPressed(false);
				this.getView().byId("button7").setPressed(false);
			}
		},

		onPressAtenderPedido: function () {

			this.getView().byId("navigationList").setSelectedItem(3);
		},

		handleSelectMenuItemValidarCisterna: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_2_1"));
		},

		handleSelectMenuItemAValidarconductor: function () {

			this.getView().byId("idNavigationList").setSelectedItem("2");
			this.getSplitAppObj().to(this.createId("idDetail_3_1"));
		}
	});
});