sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/unified/library",
	"sap/ui/core/Fragment",
	"sap/m/SinglePlanningCalendarView",
	"sap/m/SinglePlanningCalendarDayView",
	"sap/m/SinglePlanningCalendarWorkWeekView",
	"sap/m/SinglePlanningCalendarWeekView",
	"./CustomThreeDaysView"	
], function (Controller, JSONModel, unifiedLibrary, Fragment,
	SinglePlanningCalendarView, SinglePlanningCalendarDayView, SinglePlanningCalendarWorkWeekView, SinglePlanningCalendarWeekView,
	CustomThreeDaysView) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;
	
	return Controller.extend("namespace.HTML5Module.controller.Vista_DT_Cita", {

		onInit: function () {

			this.getView().byId("idCabeceraRojo").addStyleClass("styleCabeceraRojo");
			//this.getView().byId("idCabeceraBlanco").addStyleClass("styleCabeceraBlanco");
			this.getView().byId("idCabeceraVerde").addStyleClass("styleCabeceraVerde");
			this.getView().byId("idTexto1").addStyleClass("styleTexto1");
			this.getView().byId("idTexto2").addStyleClass("styleTexto2");
			//this.getView().byId("idTexto5").addStyleClass("styleTexto5");
			this.getView().byId("idImagenFoto").addStyleClass("styleImagenFoto");
			//this.getView().byId("idCuerpo").addStyleClass("styleCuerpo");
			//this.getView().byId("idAtenderPedido").addStyleClass("styleBotonVerde");
			this.getView().byId("master1").addStyleClass("stylemaster1");
			//this.getView().byId("idComboTipoOrden").addStyleClass("styleComboBox");
			//this.getView().byId("idSiguiente1").addStyleClass("styleBotonVerde");
			//this.getView().byId("idRegistrarOrden1").addStyleClass("styleBotonVerde");
			//this.getView().byId("idImprimirOrden1").addStyleClass("styleBotonVerde");

			//this.getView().byId("idTblOrdenPedido").setSelectionMode("Single");
			//this.getView().byId("idTblOrdenPedido").setSelectionBehavior("RowOnly");

			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2018", "6", "9"),
				specialDates: [{
					startDate: new Date("2018", "6", "11", "2", "0"),
					endDate: new Date("2018", "6", "11", "3", "0"),
					type: CalendarDayType.Type01
					
				}],
				appointments: [{
					title: "Meet John Miller",
					type: CalendarDayType.NonWorking,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0"),
					text: "Manikonda,Hyderabad",
					description: "MVP Colony,Visakapatnam",
					tentative: false,
					tooltip: "Tooltip 2"
					
				}, {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0")
				}, 
				 {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0")
				},
				 {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0")
				},
				 {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type04,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0")
				},
				 {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type03,
				
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "3", "0")
				},
				 {
					title: "",
					text: "",
					type: CalendarDayType.NonWorking,
					startDate: new Date("2018", "6", "10", "2", "0"),
					endDate: new Date("2018", "6", "10", "2", "0.5"),
					color: "#ffffff"
				},
				{
					title: "Meet John Miller",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "10", "4", "0"),
					endDate: new Date("2018", "6", "10", "5", "0"),
					text: "Manikonda,Hyderabad"
					
				}, {
					title: "Discussion of the plan",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "8", "6", "0"),
					endDate: new Date("2018", "6", "8", "7", "9")
				}, {
					title: "Lunch",
					text: "canteen",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "8", "7", "0"),
					endDate: new Date("2018", "6", "8", "8", "0")
				}, {
					title: "New Product",
					text: "room 105",
					type: CalendarDayType.Type01,
				
					startDate: new Date("2018", "6", "8", "8", "0"),
					endDate: new Date("2018", "6", "8", "9", "0")
				}, {
					title: "Team meeting",
					text: "Regular",
					type: CalendarDayType.Type01,
				
					startDate: new Date("2018", "6", "8", "9", "9"),
					endDate: new Date("2018", "6", "8", "10", "0")
				}, {
					title: "Discussion with clients",
					text: "Online meeting",
					type: CalendarDayType.Type08,
				
					startDate: new Date("2018", "6", "8", "10", "0"),
					endDate: new Date("2018", "6", "8", "11", "0")
				}, {
					title: "Discussion of the plan",
					text: "Online meeting",
					type: CalendarDayType.Type08,
				
					tentative: true,
					startDate: new Date("2018", "6", "8", "11", "0"),
					endDate: new Date("2018", "6", "8", "12", "0")
				}, {
					title: "Discussion with clients",
					type: CalendarDayType.Type08,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "8", "12", "0"),
					endDate: new Date("2018", "6", "8", "13", "9")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "8", "13", "9"),
					endDate: new Date("2018", "6", "8", "13", "9")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "9", "6", "30"),
					endDate: new Date("2018", "6", "9", "7", "0")
				}, {
					title: "Lunch",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "9", "7", "0"),
					endDate: new Date("2018", "6", "9", "8", "0")
				}, {
					title: "Team meeting",
					text: "online",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "8", "0"),
					endDate: new Date("2018", "6", "9", "9", "0")
				}, {
					title: "Discussion with clients",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "9", "9", "0"),
					endDate: new Date("2018", "6", "9", "10", "0")
				}, {
					title: "Team meeting",
					text: "room 5",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "11", "0"),
					endDate: new Date("2018", "6", "9", "14", "0")
				}, {
					title: "Daily standup meeting",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "9", "0"),
					endDate: new Date("2018", "6", "9", "9", "15", "0")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "11", "9", "9"),
					endDate: new Date("2018", "6", "11", "9", "20")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "10", "6", "0"),
					endDate: new Date("2018", "6", "10", "7", "0")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "10", "15", "0"),
					endDate: new Date("2018", "6", "10", "15", "30")
				}, {
					title: "Meet John Doe",
					type: CalendarDayType.Type05,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "11", "7", "0"),
					endDate: new Date("2018", "6", "11", "7", "30")
				}, {
					title: "Team meeting",
					text: "online",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "11", "8", "0"),
					endDate: new Date("2018", "6", "11", "9", "30")
				}, {
					title: "Workshop",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "11", "8", "30"),
					endDate: new Date("2018", "6", "11", "12", "0")
				}, {
					title: "Team collaboration",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "12", "4", "0"),
					endDate: new Date("2018", "6", "12", "12", "30")
				}, {
					title: "Out of the office",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "12", "15", "0"),
					endDate: new Date("2018", "6", "12", "19", "30")
				}, {
					title: "Working out of the building",
					type: CalendarDayType.Type07,
					startDate: new Date("2018", "6", "12", "20", "0"),
					endDate: new Date("2018", "6", "12", "21", "30")
				}, {
					title: "Reminder",
					type: CalendarDayType.Type09,
					startDate: new Date("2018", "6", "12", "00", "00"),
					endDate: new Date("2018", "6", "13", "00", "00")
				}, {
					title: "Team collaboration",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "6", "00", "00"),
					endDate: new Date("2018", "6", "16", "00", "00")
				}, {
					title: "Workshop out of the country",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "14", "00", "00"),
					endDate: new Date("2018", "6", "20", "00", "00")
				}, {
					title: "Payment reminder",
					type: CalendarDayType.Type09,
					startDate: new Date("2018", "6", "7", "00", "00"),
					endDate: new Date("2018", "6", "8", "00", "00")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "6", "9", "0"),
					endDate: new Date("2018", "6", "6", "10", "0")
				}, {
					title: "Daily standup meeting",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "7", "10", "0"),
					endDate: new Date("2018", "6", "7", "10", "30")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "6", "11", "30"),
					endDate: new Date("2018", "6", "6", "12", "0")
				}, {
					title: "Lunch",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "6", "12", "0"),
					endDate: new Date("2018", "6", "6", "13", "0")
				}, {
					title: "Team meeting",
					text: "online",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "16", "8", "0"),
					endDate: new Date("2018", "6", "16", "9", "0")
				}, {
					title: "Discussion of the plan",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "16", "11", "0"),
					endDate: new Date("2018", "6", "16", "12", "0")
				}, {
					title: "Lunch",
					text: "canteen",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "16", "12", "0"),
					endDate: new Date("2018", "6", "16", "13", "0")
				}, {
					title: "Team meeting",
					text: "room 200",
					type: CalendarDayType.Type01,
					icon: "sap-icon://meeting-room",
					startDate: new Date("2018", "6", "16", "16", "0"),
					endDate: new Date("2018", "6", "16", "17", "0")
				}, {
					title: "Working out of the building",
					type: CalendarDayType.Type07,
					startDate: new Date("2018", "6", "17", "6", "0"),
					endDate: new Date("2018", "6", "17", "9", "30")
				}, {
					title: "Team meeting",
					text: "room 5",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "18", "11", "0"),
					endDate: new Date("2018", "6", "18", "14", "0")
				}, {
					title: "Discussion with clients",
					text: "Online meeting",
					type: CalendarDayType.Type08,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "17", "15", "30"),
					endDate: new Date("2018", "6", "17", "16", "30")
				}],
				legendAppointmentItems: [{
					text: "Team Meeting",
					type: CalendarDayType.Type01
				}, {
					text: "Personal",
					type: CalendarDayType.Type05
				}, {
					text: "Discussions",
					type: CalendarDayType.Type08
				}, {
					text: "Out of office",
					type: CalendarDayType.Type09
				}, {
					text: "Private meeting",
					type: CalendarDayType.Type03
				}]
			});
			this.getView().setModel(oModel);

			var oSPC = this.getView().byId("SPC1"),
				oMyCustomThreeDaysView = new CustomThreeDaysView({
					title: "3 Days",
					key: "3Days"
				});

			oSPC.addView(oMyCustomThreeDaysView);
		},
		handleHeaderDateSelect: function (oEvent) {
			this._createInitialDialogValues(oEvent.getParameter("date"));
		},
		_createInitialDialogValues: function (oDate) {
			var oStartDate = new Date(oDate),
				oEndDate = new Date(oStartDate);

			oStartDate.setHours(this._getDefaultAppointmentStartHour());
			oEndDate.setHours(this._getDefaultAppointmentEndHour());
			this.sPath = null;

			this._arrangeDialogFragment("Nueva cita");
		},
		_getDefaultAppointmentStartHour: function () {
			return 9;
		},

		_getDefaultAppointmentEndHour: function () {
			return 10;
		},
		btnBackMenu: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Vista_Principal");
		},
		_arrangeDialogFragment: function (sTitle) {
			var oView = this.getView();

			if (!this._pNewAppointmentDialog) {
				this._pNewAppointmentDialog = Fragment.load({
					id: oView.getId(),
					name: "PROYECTO_PETRO_PERU_V1.PROYECTO_PETRO_PERU_V1.view.Modify",
					controller: this
				}).then(function (oModifyDialog) {
					oView.addDependent(oModifyDialog);
					return oModifyDialog;
				});
			}

			this._pNewAppointmentDialog.then(function (oModifyDialog) {
				this._arrangeDialog(sTitle, oModifyDialog);
			}.bind(this));
		},
		_arrangeDialog: function (sTitle, oModifyDialog) {
			this._setValuesToDialogContent();
			oModifyDialog.setTitle(sTitle);
			oModifyDialog.open();
		},
		handleDialogCancelButton: function () {
			this.sPath = null;
			this.byId("modifyDialog").close();
		},

		_setValuesToDialogContent: function () {
			//var bAllDayAppointment = (this.byId("allDay")).getSelected(),
			//sStartDatePickerID = bAllDayAppointment ? "DPStartDate" : "DTPStartDate",
			//sEndDatePickerID = bAllDayAppointment ? "DPEndDate" : "DTPEndDate",
			//oTitleControl = this.byId("appTitle"),
			//oTextControl = this.byId("moreInfo"),
			//oTypeControl = this.byId("appType"),
			//oStartDateControl = this.byId(sStartDatePickerID),
			//oEndDateControl = this.byId(sEndDatePickerID),
			//oContext,
			// 	oContextObject,
			// 	oSPCStartDate,
			// 	sTitle,
			// 	sText,
			// 	oStartDate,
			// 	oEndDate,
			// 	sType;

			// if (this.sPath) {
			// 	oContext = this.byId("detailsPopover").getBindingContext();
			// 	oContextObject = oContext.getObject();
			// 	sTitle = oContextObject.title;
			// 	sText = oContextObject.text;
			// 	oStartDate = oContextObject.startDate;
			// 	oEndDate = oContextObject.endDate;
			// 	sType = oContextObject.type;
			// } else {
			// 	sTitle = "";
			// 	sText = "";
			// 	oSPCStartDate = this.getView().byId("SPC1").getStartDate();
			// 	oStartDate = new Date(oSPCStartDate);
			// 	oStartDate.setHours(this._getDefaultAppointmentStartHour());
			// 	oEndDate = new Date(oSPCStartDate);
			// 	oEndDate.setHours(this._getDefaultAppointmentEndHour());
			// 	sType = "Type01";
			// }

			//oTitleControl.setValue(sTitle);
			//oTextControl.setValue(sText);
			// oStartDateControl.setDateValue(oStartDate);
			// oEndDateControl.setDateValue(oEndDate);
			//oTypeControl.setSelectedKey(sType);
		},
		
		handleAppointmentSelect: function (oEvent) {
			console.log(oEvent);
			var oAppointment = oEvent.getParameter("appointment");
			if (oAppointment) {
				alert("Appointment selected: " + oAppointment.getTitle());
			}else {
				var aAppointments = oEvent.getParameter("appointments");
				var sValue = aAppointments.length + " Appointments selected";
				alert(sValue);
			}
		},
		handleCellPress: function (oEvent) {
			console.log(oEvent);
			var cell = oEvent.getParameter("appointment");
			if (cell) {
				alert("cell selected: " + cell.getTitle());
			}else {
				var cells = oEvent.getParameter("Cell");
				var sValue = cells.length + " Appointments selected";
				alert(sValue);
			}
		},		
		handleDialogOkButton: function () {
			var bAllDayAppointment = (this.byId("allDay")).getSelected(),
				sStartDate = bAllDayAppointment ? "DPStartDate" : "DTPStartDate",
				sEndDate = bAllDayAppointment ? "DPEndDate" : "DTPEndDate",
				sTitle = this.byId("appTitle").getValue(),
				sText = this.byId("moreInfo").getValue(),
				sType = this.byId("appType").getSelectedItem().getKey(),
				oStartDate = this.byId(sStartDate).getDateValue(),
				oEndDate = this.byId(sEndDate).getDateValue(),
				oModel = this.getView().getModel(),
				sAppointmentPath;

			if (this.byId(sStartDate).getValueState() !== ValueState.Error
				&& this.byId(sEndDate).getValueState() !== ValueState.Error) {

				if (this.sPath) {
					sAppointmentPath = this.sPath;
					oModel.setProperty(sAppointmentPath + "/title", sTitle);
					oModel.setProperty(sAppointmentPath + "/text", sText);
					oModel.setProperty(sAppointmentPath + "/type", sType);
					oModel.setProperty(sAppointmentPath + "/startDate", oStartDate);
					oModel.setProperty(sAppointmentPath + "/endDate", oEndDate);
				} else {
					oModel.getData().appointments.push({
						title: sTitle,
						text: sText,
						type: sType,
						startDate: oStartDate,
						endDate: oEndDate
					});
				}

				oModel.updateBindings();

				this.byId("modifyDialog").close();
			}
		},		
		onListPlanningCalendarDrop: function(oEvent) {
			var oDroppedControl = oEvent.getParameter("droppedControl");
			var oDragSession = oEvent.getParameter("dragSession");
			var cliId = oDroppedControl.getId();
			var rowId = cliId.replace("-CLI", "");
			var pcRow = sap.ui.getCore().byId(rowId);
			var oBindingContext = pcRow.getBindingContext("calendarModel");
			var resourceObj = oBindingContext.getObject();
			var oDraggedRowContext = oDragSession.getComplexData("onListDragContext");
		},
	
		onListPlanningCalendardragStart: function(oEvent) {
			var oDragSession = oEvent.getParameter("dragSession");
			var oDraggedRow = oEvent.getParameter("target");
			var oContextBinding = oDraggedRow.getBindingContext("listModel").getObject();
			oDragSession.setComplexData("onListDragContext", oDraggedRow);
		}	




	});

});