sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"namespace/HTML5Module/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("namespace.HTML5Module.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");
            var oData = {

				"listTipoOrden": [{
					"CODIGO": "T0001",
					"DESCRIPCION": "O. de pedido simple"
				}],

				"listConductor1": [{
					"DNI": "48526485",
					"NOMBRE": "Raul",
					"APELLIDO": "Perez Ramirez",
					"NUM_LICENCIA": "Q40794583",
					"CALIFICACION": "20"
				}, {
					"DNI": "48526486",
					"NOMBRE": "Roberto",
					"APELLIDO": "Garcia Paredes",
					"NUM_LICENCIA": "Q40799433",
					"CALIFICACION": "35"
				}, {
					"DNI": "48526487",
					"NOMBRE": "María",
					"APELLIDO": "Sanchez Carrión",
					"NUM_LICENCIA": "Q40749632",
					"CALIFICACION": "12"
				}, {
					"DNI": "48526488",
					"NOMBRE": "Pablo",
					"APELLIDO": "Arciniega Torres",
					"NUM_LICENCIA": "Q84652883",
					"CALIFICACION": "30"
				}],

				"listTblOrdenPedido1": [{
					"PRODUCTO": "DIESEL B5",
					"VOL_MAX_COMPRADOR": "1000",
					"VOL_PEDIDO": "200",
					"VOL_VENDIDO": "0",
					"VOL_DESPACHADO": "0",
					"VOL_RECIBIDO": "0",
					"TRANSPORTE": "AHI-3456",
					"ESTADO": "SOLICITADO"
				}, {
					"PRODUCTO": "GASOHOL 95 PLUS",
					"VOL_MAX_COMPRADOR": "1000",
					"VOL_PEDIDO": "200",
					"VOL_VENDIDO": "0",
					"VOL_DESPACHADO": "0",
					"VOL_RECIBIDO": "0",
					"TRANSPORTE": "AHI-3456",
					"ESTADO": "SOLICITADO"
				}],

				"listTblOrdenPedido2": [{
					"PRODUCTO": "DIESEL B5",
					"VOL_MAX_COMPRADOR": "1000",
					"VOL_PEDIDO": "200",
					"VOL_VENDIDO": "0",
					"VOL_DESPACHADO": "0",
					"VOL_RECIBIDO": "0",
					"TRANSPORTE": "AHI-3456",
					"ESTADO": "SOLICITADO"
				}, {
					"PRODUCTO": "GASOHOL 95 PLUS",
					"VOL_MAX_COMPRADOR": "1000",
					"VOL_PEDIDO": "200",
					"VOL_VENDIDO": "0",
					"VOL_DESPACHADO": "0",
					"VOL_RECIBIDO": "0",
					"TRANSPORTE": "AHI-3456",
					"ESTADO": "SOLICITADO"
				}],

				"listTblRegistroOrdenPedido": [{
					"COMPARTIMIENTO": "Comp. 1",
					"CAPACIDAD_COMP": "200",
					"PRODUCTO": "Gasohol 90",
					"AGREGAR_CAPACIDAD": ""
				}, {
					"COMPARTIMIENTO": "Comp. 2",
					"CAPACIDAD_COMP": "400",
					"PRODUCTO": "Gasohol 84",
					"AGREGAR_CAPACIDAD": ""
				}],

				"listTblReporteScop": [{
					"CODIGO": "0793573948",
					"PLANTA": "Terminal Callao",
					"USER_COMPRADOR": "Las Flores Sede Surco",
					"FEC_PEDIDO": "2021-03-20",
					"FEC_ENTREGA": "2021-03-22",
					"ESTADO": "SOLICITADO"
				}, {
					"CODIGO": "0793573948",
					"PLANTA": "Terminal Callao",
					"USER_COMPRADOR": "Las Flores Ate",
					"FEC_PEDIDO": "2021-03-26",
					"FEC_ENTREGA": "2021-03-27",
					"ESTADO": "SOLICITADO"
				}, {
					"CODIGO": "0793573948",
					"PLANTA": "Terminal Callao",
					"USER_COMPRADOR": "Florencia La Molina",
					"FEC_PEDIDO": "2021-03-24",
					"FEC_ENTREGA": "2021-03-24",
					"ESTADO": "SOLICITADO"
				}, {
					"CODIGO": "0793573948",
					"PLANTA": "Terminal Callao",
					"USER_COMPRADOR": "Las Flores Sede Surco",
					"FEC_PEDIDO": "2021-03-19",
					"FEC_ENTREGA": "2021-04-10",
					"ESTADO": "SOLICITADO"
				}],

				"listTblCompartimiento": [{
					"VALOR": "1"
				}, {
					"VALOR": "2"
				}, {
					"VALOR": "3"
				}, {
					"VALOR": "4"
				}],

				"listTblLicencias": [{
					"TIPO": "Disiel",
					"FEC_ENTREGA": "2020-12-07",
					"FEC_VENCIMIENTO": "2021-01-26"
				}, {
					"TIPO": "Gasolina",
					"FEC_ENTREGA": "2020-12-07",
					"FEC_VENCIMIENTO": "2021-02-24"
				}, {
					"TIPO": "Disiel",
					"FEC_ENTREGA": "2020-12-07",
					"FEC_VENCIMIENTO": "2020-12-01"
				}],

				"listTblProducto1": [{
					"CODIGO": "PR0001",
					"DESCRIPCION": "Diesel 85 UV"
				}, {
					"CODIGO": "PR0002",
					"DESCRIPCION": "Gasohol 84"
				}, {
					"CODIGO": "PR0003",
					"DESCRIPCION": "Gasohol 90"
				}, {
					"CODIGO": "PR0004",
					"DESCRIPCION": "Gasohol 95"
				}],

				"T_PLANTA": [{
					"CODIGO": "P0001",
					"DESCRIPCION": "Terminal Callao"
				}, {
					"CODIGO": "P0002",
					"DESCRIPCION": "Terminal Supe"
				}, {
					"CODIGO": "P0003",
					"DESCRIPCION": "Unidad Centro"
				}, {
					"CODIGO": "P0004",
					"DESCRIPCION": "Planta de ventas Conchán"
				}],

				"listTblPlanta2": [{
					"CODIGO": "P0001",
					"DESCRIPCION": "Terminal Callao"
				}, {
					"CODIGO": "P0002",
					"DESCRIPCION": "Terminal Supe"
				}, {
					"CODIGO": "P0003",
					"DESCRIPCION": "Unidad Centro"
				}, {
					"CODIGO": "P0004",
					"DESCRIPCION": "Planta de ventas Conchán"
				}],

				"listTblDestinatario1": [{
					"CODIGO": "P0001",
					"DESCRIPCION": "Destino 1"
				}, {
					"CODIGO": "P0002",
					"DESCRIPCION": "Destino 2"
				}, {
					"CODIGO": "P0003",
					"DESCRIPCION": "Destino 3"
				}, {
					"CODIGO": "P0004",
					"DESCRIPCION": "Destino 4"
				}],

				"T_PLACA_TRANSPORTE": [{
					"CODIGO": "PT0000",
					"DESCRIPCION": "Ingresar una placa (opcional)",
					"ESTADO": "O"
				}, {
					"CODIGO": "PT0001",
					"DESCRIPCION": "AHI 3456",
					"ESTADO": "A"
				}, {
					"CODIGO": "PT0002",
					"DESCRIPCION": "G1H 8898",
					"ESTADO": "N"
				}, {
					"CODIGO": "PT0003",
					"DESCRIPCION": "F5Y 8800",
					"ESTADO": "A"
				}, {
					"CODIGO": "PT0004",
					"DESCRIPCION": "TF7 4569",
					"ESTADO": "N"
				}],

				"listTblCotizacion1": [{
					"PRODUCTO": "Producto 1",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 2",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 3",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 4",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 5",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 6",
					"VOLUMEN": "0"
				}, {
					"PRODUCTO": "Producto 7",
					"VOLUMEN": "0"
				}],

				"listTblplacatracto": [{
					"PLACA": "DRA-1234",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-1234",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-2345",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1234"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1238"
				}, {
					"PLACA": "ENA-3456",
					"PLACACIS": "ABC-1238"
				}],

				"Rows": [{
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10008-09077",
					"Unit Price": "$107,81",
					"Period": "001",
					"Target": 320,
					"Actual": 350,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 200,
					"APAC": 100,
					"EMEA": 50,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 64,
					"Online": 26,
					"Direct": 10
				}, {
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10012-20312",
					"Unit Price": "$168,56",
					"Period": "001",
					"Target": 170,
					"Actual": 160,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 50,
					"APAC": 30,
					"EMEA": 80,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 71,
					"Online": 19,
					"Direct": 10
				}, {
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10050-01469",
					"Unit Price": "$147,44",
					"Period": "001",
					"Target": 175,
					"Actual": 211,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 111,
					"APAC": 90,
					"EMEA": 10,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 64,
					"Online": 26,
					"Direct": 10
				}, {
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10062-01613",
					"Unit Price": "$130,57",
					"Period": "001",
					"Target": 330,
					"Actual": 300,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 70,
					"APAC": 100,
					"EMEA": 130,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 86,
					"Online": 4,
					"Direct": 10
				}, {
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10023-09679",
					"Unit Price": "$178,27",
					"Period": "001",
					"Target": 145,
					"Actual": 190,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 50,
					"APAC": 50,
					"EMEA": 90,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 75,
					"Online": 15,
					"Direct": 10
				}, {
					"Supplier": "ACME corp.",
					"Supplier ID": 4001256180,
					"Sales Manager": "Kroos",
					"Product ID": "10097-44674",
					"Unit Price": "$185,93",
					"Period": "001",
					"Target": 300,
					"Actual": 82,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 40,
					"APAC": 22,
					"EMEA": 20,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 69,
					"Online": 21,
					"Direct": 10
				}, {
					"Supplier": "McDermott Electronics",
					"Supplier ID": 4007066298,
					"Sales Manager": "Müller",
					"Product ID": "10074-65773",
					"Unit Price": "$149,00",
					"Period": "001",
					"Target": 120,
					"Actual": 195,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 100,
					"APAC": 5,
					"EMEA": 90,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 74,
					"Online": 16,
					"Direct": 10
				}, {
					"Supplier": "McDermott Electronics",
					"Supplier ID": 4007066298,
					"Sales Manager": "Müller",
					"Product ID": "10021-63924",
					"Unit Price": "$127,09",
					"Period": "001",
					"Target": 360,
					"Actual": 290,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 70,
					"APAC": 120,
					"EMEA": 100,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 80,
					"Online": 10,
					"Direct": 10
				}, {
					"Supplier": "McDermott Electronics",
					"Supplier ID": 4007066298,
					"Sales Manager": "Müller",
					"Product ID": "10007-08536",
					"Unit Price": "$117,01",
					"Period": "001",
					"Target": 150,
					"Actual": 140,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 50,
					"APAC": 40,
					"EMEA": 50,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 73,
					"Online": 17,
					"Direct": 10
				}, {
					"Supplier": "McDermott Electronics",
					"Supplier ID": 4007066298,
					"Sales Manager": "Müller",
					"Product ID": "10027-50129",
					"Unit Price": "$128,21",
					"Period": "001",
					"Target": 130,
					"Actual": 162,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 82,
					"APAC": 45,
					"EMEA": 35,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 81,
					"Online": 9,
					"Direct": 10
				}, {
					"Supplier": "McDermott Electronics",
					"Supplier ID": 4007066298,
					"Sales Manager": "Müller",
					"Product ID": "10066-53335",
					"Unit Price": "$175,35",
					"Period": "001",
					"Target": 210,
					"Actual": 275,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 175,
					"APAC": 10,
					"EMEA": 90,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 82,
					"Online": 8,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10030-60039",
					"Unit Price": "$182,56",
					"Period": "001",
					"Target": 100,
					"Actual": 120,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 40,
					"APAC": 40,
					"EMEA": 40,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 75,
					"Online": 15,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10055-63061",
					"Unit Price": "$131,63",
					"Period": "001",
					"Target": 100,
					"Actual": 95,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 35,
					"APAC": 15,
					"EMEA": 45,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 61,
					"Online": 29,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10016-47603",
					"Unit Price": "$123,98",
					"Period": "001",
					"Target": 200,
					"Actual": 159,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 59,
					"APAC": 40,
					"EMEA": 60,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 82,
					"Online": 8,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10090-23648",
					"Unit Price": "$105,54",
					"Period": "001",
					"Target": 300,
					"Actual": 450,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 100,
					"APAC": 150,
					"EMEA": 200,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 74,
					"Online": 16,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10030-45096",
					"Unit Price": "$161,90",
					"Period": "001",
					"Target": 100,
					"Actual": 107,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 77,
					"APAC": 20,
					"EMEA": 10,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 58,
					"Online": 32,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10058-11336",
					"Unit Price": "$151,12",
					"Period": "001",
					"Target": 108,
					"Actual": 145,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 10,
					"APAC": 45,
					"EMEA": 90,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 82,
					"Online": 8,
					"Direct": 10
				}, {
					"Supplier": "Nelson's Holdings",
					"Supplier ID": 4008171711,
					"Sales Manager": "Müller",
					"Product ID": "10070-09701",
					"Unit Price": "$134,42",
					"Period": "001",
					"Target": 205,
					"Actual": 255,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 55,
					"APAC": 110,
					"EMEA": 90,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 64,
					"Online": 26,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009476409,
					"Sales Manager": "Neuer",
					"Product ID": "10038-56115",
					"Unit Price": "$176,46",
					"Period": "001",
					"Target": 120,
					"Actual": 170,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 60,
					"APAC": 50,
					"EMEA": 60,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 68,
					"Online": 22,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009476409,
					"Sales Manager": "Neuer",
					"Product ID": "10024-06322",
					"Unit Price": "$171,88",
					"Period": "001",
					"Target": 200,
					"Actual": 150,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 30,
					"APAC": 100,
					"EMEA": 20,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 66,
					"Online": 24,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009476409,
					"Sales Manager": "Neuer",
					"Product ID": "10028-24734",
					"Unit Price": "$124,20",
					"Period": "001",
					"Target": 330,
					"Actual": 250,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 120,
					"APAC": 60,
					"EMEA": 70,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 73,
					"Online": 17,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009476409,
					"Sales Manager": "Neuer",
					"Product ID": "10020-33554",
					"Unit Price": "$150,61",
					"Period": "001",
					"Target": 115,
					"Actual": 70,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 35,
					"APAC": 0,
					"EMEA": 35,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 76,
					"Online": 14,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10066-15517",
					"Unit Price": "$139,30",
					"Period": "001",
					"Target": 130,
					"Actual": 70,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 0,
					"APAC": 35,
					"EMEA": 35,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 75,
					"Online": 15,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10032-22268",
					"Unit Price": "$157,42",
					"Period": "001",
					"Target": 160,
					"Actual": 120,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 50,
					"APAC": 20,
					"EMEA": 50,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 62,
					"Online": 28,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10059-15561",
					"Unit Price": "$199,85",
					"Period": "001",
					"Target": 180,
					"Actual": 135,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 60,
					"APAC": 35,
					"EMEA": 40,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 71,
					"Online": 19,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10059-49159",
					"Unit Price": "$176,96",
					"Period": "001",
					"Target": 100,
					"Actual": 140,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 40,
					"APAC": 70,
					"EMEA": 30,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 76,
					"Online": 14,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10053-29744",
					"Unit Price": "$196,37",
					"Period": "001",
					"Target": 350,
					"Actual": 300,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 100,
					"APAC": 90,
					"EMEA": 110,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 76,
					"Online": 14,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10058-87596",
					"Unit Price": "$125,99",
					"Period": "001",
					"Target": 250,
					"Actual": 100,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 33,
					"APAC": 37,
					"EMEA": 30,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 87,
					"Online": 3,
					"Direct": 10
				}, {
					"Supplier": "PCC&PPC",
					"Supplier ID": 4009948709,
					"Sales Manager": "Neuer",
					"Product ID": "10016-16107",
					"Unit Price": "$191,59",
					"Period": "001",
					"Target": 220,
					"Actual": 208,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 100,
					"APAC": 108,
					"EMEA": 0,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 74,
					"Online": 16,
					"Direct": 10
				}, {
					"Supplier": "SAPT Germany",
					"Supplier ID": 4009982679,
					"Sales Manager": "Özil",
					"Product ID": "10079-43500",
					"Unit Price": "$109,04",
					"Period": "001",
					"Target": 300,
					"Actual": 120,
					"maxValue": 600,
					"minValue": 0,
					"AMER": 30,
					"APAC": 30,
					"EMEA": 60,
					"maxValueC": 200,
					"minValueC": 0,
					"Retail": 62,
					"Online": 28,
					"Direct": 10
				}],

				"listTblestadoLic": [{
					"PRODUCTO": "DIESEL B5 PD",
					"TRANSPORTE": "20/10/2021",
					"ESTADO": "Activo"
				}],

				"listTbltipoLicencia": [{
					"Tipo_licencia": "Licencia ABC 123",
					"f_vencimiento": "20/10/2030",
					"Retail": 64,
					"Online": 26,
					"tiempo": 9,
					"tipo_tiempo": "A",
					"status": "A"
				}, {
					"Tipo_licencia": "Licencia XYZ 33333",
					"f_vencimiento": "06/08/2019",
					"Retail": 64,
					"Online": 10,
					"tiempo": 0,
					"tipo_tiempo": "A",
					"status": "V"
				}, {
					"Tipo_licencia": "Licencia 123444444",
					"f_vencimiento": "21/09/2021",
					"Retail": 64,
					"Online": 2,
					"tiempo": 14,
					"tipo_tiempo": "D",
					"status": "W"
				}, {
					"Tipo_licencia": "Licencia 12333",
					"f_vencimiento": "07/09/2023",
					"Retail": 64,
					"Online": 3,
					"tiempo": 7,
					"tipo_tiempo": "D",
					"status": "W"
				}],

				"listTblproducto": [{
					"Capacidad_total": "1000",
					"numero": "1"
				}, {
					"Capacidad_total": "800",
					"numero": "2"
				}, {
					"Capacidad_total": "600",
					"numero": "3"
				}, {
					"Capacidad_total": "500",
					"numero": "4"
				}, {
					"Capacidad_total": "300",
					"numero": "5"
				}, {
					"Capacidad_total": "100",
					"numero": "6"
				}, {
					"Capacidad_total": "800",
					"numero": "7"
				}, {
					"Capacidad_total": "900",
					"numero": "8"
				}]
			};

			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.setModel(oModel, "myParam");
		}
	});
});