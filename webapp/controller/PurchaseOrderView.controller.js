sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/ui/core/library",
  "sap/ui/core/UIComponent",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/core/util/Export",
  "sap/ui/core/util/ExportTypeCSV"
], function (Controller, JSONModel, MessageToast, MessageBox, MessagePopover, MessageItem, coreLibrary, UIComponent, Filter, FilterOperator, Export, ExportTypeCSV) {
  "use strict";

  // Shortcut for sap.ui.core.MessageType
  var MessageType = coreLibrary.MessageType;

  /**
   * @name converted.purchaseorderview.controller.PurchaseOrderView
   * @class Controller for the PurchaseOrderView.
   * @extends sap.ui.core.mvc.Controller
   */
  return Controller.extend("converted.purchaseorderview.controller.PurchaseOrderView", {
    /**
     * Called when the view is initialized.
     * @public
     */
    onInit: function () {
      // Load Purchase Order Header Data
      var oPurchaseOrderHeaderModel = new JSONModel();
      oPurchaseOrderHeaderModel.loadData("model/mockData/purchaseOrderHeaders.json");
      this.getView().setModel(oPurchaseOrderHeaderModel, "purchaseOrderHeader");

      // Load Purchase Order Item Data
      var oPurchaseOrderItemModel = new JSONModel();
      oPurchaseOrderItemModel.loadData("model/mockData/purchaseOrderItems.json");
      this.getView().setModel(oPurchaseOrderItemModel, "purchaseOrderItems");

      // Load Customer Data (Example)
      var oCustomerModel = new JSONModel();
      oCustomerModel.loadData("model/mockData/customers.json");
      this.getView().setModel(oCustomerModel, "customers");

      // Load Product Data (Example)
      var oProductModel = new JSONModel();
      oProductModel.loadData("model/mockData/products.json");
      this.getView().setModel(oProductModel, "products");

      // Load Delivery/Invoice Data for the Delivery/Invoice Tab
      var oDeliveryInvoiceModel = new JSONModel();
      oDeliveryInvoiceModel.loadData("model/mockData/deliveryInvoice.json");
      this.getView().setModel(oDeliveryInvoiceModel, "deliveryInvoice");

      // Load Conditions Data for the Conditions Tab
      var oConditionsModel = new JSONModel();
      oConditionsModel.loadData("model/mockData/conditions.json");
      this.getView().setModel(oConditionsModel, "conditions");

      // Load Texts Data for the Texts Tab
      var oTextsModel = new JSONModel();
      oTextsModel.loadData("model/mockData/texts.json");
      this.getView().setModel(oTextsModel, "texts");

      // Load Address Data for the Address Tab
      var oAddressModel = new JSONModel();
      oAddressModel.loadData("model/mockData/address.json");
      this.getView().setModel(oAddressModel, "address");

      // Load Communication Data for the Communication Tab
      var oCommunicationModel = new JSONModel();
      oCommunicationModel.loadData("model/mockData/communication.json");
      this.getView().setModel(oCommunicationModel, "communication");

      // Load Partners Data for the Partners Tab
      var oPartnersModel = new JSONModel();
      oPartnersModel.loadData("model/mockData/partners.json");
      this.getView().setModel(oPartnersModel, "partners");

      // Load Additional Data for the Additional Data Tab
      var oAdditionalDataModel = new JSONModel();
      oAdditionalDataModel.loadData("model/mockData/additionalData.json");
      this.getView().setModel(oAdditionalDataModel, "additionalData");

      // Load Status Data for the Status Tab
      var oStatusModel = new JSONModel();
      oStatusModel.loadData("model/mockData/status.json");
      this.getView().setModel(oStatusModel, "status");
      
      // Load Material Data for the Material Data Tab in Item Details
      var oMaterialDataModel = new JSONModel();
      oMaterialDataModel.loadData("model/mockData/materialData.json");
      this.getView().setModel(oMaterialDataModel, "materialData");

      // Load Quantities/Weights Data for the Quantities/Weights Tab in Item Details
      var oQuantitiesWeightsModel = new JSONModel();
      oQuantitiesWeightsModel.loadData("model/mockData/quantitiesWeights.json");
      this.getView().setModel(oQuantitiesWeightsModel, "quantitiesWeights");

      // Load Delivery Schedule Data for the Delivery Schedule Tab in Item Details
      var oDeliveryScheduleModel = new JSONModel();
      oDeliveryScheduleModel.loadData("model/mockData/deliverySchedule.json");
      this.getView().setModel(oDeliveryScheduleModel, "deliverySchedule");

      // Load Delivery Data for the Delivery Tab in Item Details
      var oDeliveryModel = new JSONModel();
      oDeliveryModel.loadData("model/mockData/delivery.json");
      this.getView().setModel(oDeliveryModel, "delivery");

      // Load Item Conditions Data for the Conditions Tab in Item Details
       var oItemConditionsModel = new JSONModel();
       oItemConditionsModel.loadData("model/mockData/itemConditions.json");
       this.getView().setModel(oItemConditionsModel, "itemConditions");

       // Load Purchase Order History Data for the Purchase Order History Tab in Item Details
       var oPurchaseOrderHistoryModel = new JSONModel();
       oPurchaseOrderHistoryModel.loadData("model/mockData/purchaseOrderHistory.json");
       this.getView().setModel(oPurchaseOrderHistoryModel, "purchaseOrderHistory");

       // Load Item Texts Data for the Texts Tab in Item Details
       var oItemTextsModel = new JSONModel();
       oItemTextsModel.loadData("model/mockData/itemTexts.json");
       this.getView().setModel(oItemTextsModel, "itemTexts");

       // Load Delivery Address Data for the Delivery Address Tab in Item Details
       var oDeliveryAddressModel = new JSONModel();
       oDeliveryAddressModel.loadData("model/mockData/deliveryAddress.json");
       this.getView().setModel(oDeliveryAddressModel, "deliveryAddress");

       // Load Confirmations Data for the Confirmations Tab in Item Details
       var oConfirmationsModel = new JSONModel();
       oConfirmationsModel.loadData("model/mockData/confirmations.json");
       this.getView().setModel(oConfirmationsModel, "confirmations");


      // 5. Initialize Message Model for MessageArea/MessagePopover
      var oMessageModel = new JSONModel({
        messages: [
          {
            type: MessageType.Success,
            title: "System Information",
            description: "Application converted successfully, Use AI optimize for better result",
            subtitle: "Conversion complete",
            counter: 1
          }
        ]
      });
      this.getView().setModel(oMessageModel, "messages");

      // Log initialization complete
      console.log("PurchaseOrderView controller initialized and mock data loaded.");
    },

    /**
     * Event handler for the "Save" button press.
     * @public
     */
    onActionSave: function () {
      MessageBox.information("Save button pressed.");
    },

    /**
     * Event handler for the "Document Overview" dropdown select.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onActionDocumentOverview: function (oEvent) {
      var sKey = oEvent.getParameter("selectedItem").getKey();
      MessageToast.show("Document Overview: " + sKey);
    },

    /**
     * Event handler for the "Print Preview" button press.
     * @public
     */
    onActionPrintPreview: function () {
      MessageBox.information("Print Preview button pressed.");
    },

    /**
     * Event handler for the "Messages" button press.
     * @public
     */
    onActionMessages: function () {
      MessageBox.information("Messages button pressed.");
    },

    /**
     * Event handler for the "Information" button press.
     * @public
     */
    onActionInformation: function () {
      MessageBox.information("Information button pressed.");
    },

    /**
     * Event handler for the "Personal Setting" button press.
     * @public
     */
    onActionPersonalSetting: function () {
      MessageBox.information("Personal Setting button pressed.");
    },

    /**
     * Event handler for the "Cancel" button press.
     * @public
     */
    onActionCancel: function () {
      MessageBox.confirm("Are you sure you want to cancel?", {
        actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        onClose: function (sAction) {
          if (sAction === MessageBox.Action.YES) {
            MessageToast.show("Action Cancelled");
          }
        }
      });
    },

    /**
     * Event handler for the "Exit" button press.
     * @public
     */
    onActionExit: function () {
      MessageBox.confirm("Are you sure you want to exit?", {
        actions: [MessageBox.Action.YES, MessageBox.Action.NO],
        onClose: function (sAction) {
          if (sAction === MessageBox.Action.YES) {
            MessageToast.show("Application Exited");
          }
        }
      });
    },

    /**
     * Event handler for the "Search" button press.
     * @public
     */
    onActionSearch: function () {
      MessageBox.information("Search button pressed.");
    },

    /**
     * Event handler for the "PO Type" dropdown select.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onActionSelectPOTyp: function (oEvent) {
      var sKey = oEvent.getParameter("selectedItem").getKey();
      MessageToast.show("Selected PO Type: " + sKey);
    },

    /**
     * Event handler for the header tab select.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onActionTabSelectHeader: function (oEvent) {
      var sKey = oEvent.getParameter("key");
      MessageToast.show("Selected Header Tab: " + sKey);
    },

    /**
     * Event handler for the "Display Item Details" button press.
     * @public
     */
    onActionDisplayItemDetails: function () {
      MessageBox.information("Display Item Details button pressed.");
    },

    /**
     * Event handler for the "Change Layout 1" button press.
     * @public
     */
    onActionChangeLayout1: function () {
      MessageBox.information("Change Layout 1 button pressed.");
    },

    /**
     * Event handler for the "Change Layout 2" button press.
     * @public
     */
    onActionChangeLayout2: function () {
      MessageBox.information("Change Layout 2 button pressed.");
    },

    /**
     * Event handler for the "Delete Item" button press.
     * @public
     */
    onActionDeleteItem: function () {
      MessageBox.information("Delete Item button pressed.");
    },

    /**
     * Event handler for the "Lock Item" button press.
     * @public
     */
    onActionLockItem: function () {
      MessageBox.information("Lock Item button pressed.");
    },

    /**
     * Event handler for the "Unlock Item" button press.
     * @public
     */
    onActionUnlockItem: function () {
      MessageBox.information("Unlock Item button pressed.");
    },

    /**
     * Event handler for the "Item Details" button press.
     * @public
     */
    onActionItemDetails: function () {
      MessageBox.information("Item Details button pressed.");
    },

    /**
     * Event handler for the "Filter" button press.
     * @public
     */
    onActionFilter: function () {
      MessageBox.information("Filter button pressed.");
    },

    /**
     * Event handler for the "Table Settings" button press.
     * @public
     */
    onActionTableSettings: function () {
      MessageBox.information("Table Settings button pressed.");
    },

    /**
     * Event handler for the "Addl Planning" button press.
     * @public
     */
    onActionAddlPlanning: function () {
      MessageBox.information("Addl Planning button pressed.");
    },

    /**
     * Event handler for the "Show Material Details" link press.
     * @public
     */
    onActionShowMaterialDetails: function () {
      MessageBox.information("Show Material Details link pressed.");
    },

    /**
     * Event handler for the "PO Item" dropdown select.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onActionSelectPOItem: function (oEvent) {
      var sKey = oEvent.getParameter("selectedItem").getKey();
      MessageToast.show("Selected PO Item: " + sKey);
    },

    /**
     * Event handler for the "Navigate Item Up" button press.
     * @public
     */
    onActionNavigateItemUp: function () {
      MessageBox.information("Navigate Item Up button pressed.");
    },

    /**
     * Event handler for the "Navigate Item Down" button press.
     * @public
     */
    onActionNavigateItemDown: function () {
      MessageBox.information("Navigate Item Down button pressed.");
    },

    /**
     * Event handler for the item tab select.
     * @param {sap.ui.base.Event} oEvent The event object.
     * @public
     */
    onActionTabSelectItem: function (oEvent) {
      var sKey = oEvent.getParameter("key");
      MessageToast.show("Selected Item Tab: " + sKey);
    },

    /**
     * Event handler for the "Inv. Receipt" checkbox toggle.
     * @public
     */
    onActionToggleInvReceipt: function () {
      MessageToast.show("Inv. Receipt toggled.");
    },

    /**
     * Event handler for the "Final Invoice" checkbox toggle.
     * @public
     */
    onActionToggleFinalInvoice: function () {
      MessageToast.show("Final Invoice toggled.");
    },

    /**
     * Event handler for the "GR-Bsd IV" checkbox toggle.
     * @public
     */
    onActionToggleGRBsdIV: function () {
      MessageToast.show("GR-Bsd IV toggled.");
    },

    /**
     * Event handler for the "ERS" checkbox toggle.
     * @public
     */
    onActionToggleERS: function () {
      MessageToast.show("ERS toggled.");
    },

    /**
     * Event handler for the "Show Taxes" button press.
     * @public
     */
    onActionShowTaxes: function () {
      MessageBox.information("Show Taxes button pressed.");
    },

    /**
     * Handle message popover press
     * @param {sap.ui.base.Event} oEvent The event object
     */
    handleMessagePopoverPress: function (oEvent) {
      if (!this._messagePopover) {
        this._messagePopover = new MessagePopover({
          items: {
            path: "messages>/messages",
            template: new MessageItem({
              type: "{messages>type}",
              title: "{messages>title}",
              description: "{messages>description}",
              subtitle: "{messages>subtitle}",
              counter: "{messages>counter}"
            })
          }
        });

        this.getView().byId("messagePopoverBtn").addDependent(this._messagePopover);
      }

      this._messagePopover.toggle(oEvent.getSource());
    },

    /**
     * Event handler for Export to CSV button press.
     */
    onExportToCSV: function () {
      var oTable = this.byId("poItemTable");
      var aData = oTable.getModel("purchaseOrderItems").getProperty("/PurchaseOrderItems"); // Ensure correct model name and path
      var sCsvContent = this._convertToCSV(aData);
      var oBlob = new Blob([sCsvContent], { type: 'text/csv' });
      var sUrl = URL.createObjectURL(oBlob);
      var oLink = document.createElement('a');
      oLink.href = sUrl;
      oLink.download = 'purchase_order_items.csv';
      oLink.click();
      URL.revokeObjectURL(sUrl);
    },

    /**
     * Converts JSON data to CSV format.
     * @param {Array} aData The JSON data array.
     * @returns {string} The CSV content.
     * @private
     */
    _convertToCSV: function (aData) {
      if (!aData || aData.length === 0) {
        return '';
      }
      var aHeaders = Object.keys(aData[0]);
      var sCsv = aHeaders.join(',') + '\n';
      aData.forEach(function (row) {
        var aValues = aHeaders.map(function (header) {
          return '"' + (row[header] || '').toString().replace(/"/g, '""') + '"';
        });
        sCsv += aValues.join(',') + '\n';
      });
      return sCsv;
    },

    /**
     * Event handler for Export to Excel button press.
     */
    onExportToExcel: function () {
      var oTable = this.byId("poItemTable");
      var oExport = new Export({
        exportType: new ExportTypeCSV({
          fileExtension: 'xlsx',
          mimeType: 'application/vnd.ms-excel'
        }),
        models: oTable.getModel("purchaseOrderItems"),  // Ensure correct model name
        rows: {
          path: "/PurchaseOrderItems"  // Ensure correct model path
        },
        columns: this._getExportColumns()
      });
      oExport.saveFile("purchase_order_items").then(function () {
        MessageToast.show("Export completed successfully");
      });
    },

    /**
     * Defines the columns for the Excel export.
     * @returns {Array} An array of column definitions.
     * @private
     */
    _getExportColumns: function () {
      return [
        {
          name: "Item Number",  // More descriptive name
          template: {
            content: "{ItemNumber}"
          }
        },
        {
          name: "Material Number",
          template: {
            content: "{MaterialNumber}"
          }
        },
        {
          name: "Short Text",
          template: {
            content: "{ShortText}"
          }
        },
        {
          name: "PO Quantity",
          template: {
            content: "{POQuantity}"
          }
        },
        {
          name: "Delivery Date",
          template: {
            content: "{DeliveryDate}"
          }
        },
        {
          name: "Net Price",
          template: {
            content: "{NetPrice}"
          }
        },
        {
          name: "Currency",
          template: {
            content: "{Currency}"
          }
        },
        {
          name: "Plant",
          template: {
            content: "{Plant}"
          }
        },
        {
          name: "Storage Location",
          template: {
            content: "{StorageLocation}"
          }
        },
        {
          name: "Material Group",
          template: {
            content: "{MaterialGroup}"
          }
        }
      ];
    },

    /**
     * Event handler for the table search.
     * @param {sap.ui.base.Event} oEvent The search event.
     */
    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query");
      var oTable = this.byId("poItemTable");
      var oBinding = oTable.getBinding("items");
      var aFilters = [];

      if (sQuery && sQuery.length > 0) {
        var aSearchFilters = [];
        // Search across multiple fields
        aSearchFilters.push(new Filter("MaterialNumber", FilterOperator.Contains, sQuery));
        aSearchFilters.push(new Filter("ShortText", FilterOperator.Contains, sQuery));
        aSearchFilters.push(new Filter("ItemNumber", FilterOperator.Contains, sQuery));

        aFilters.push(new Filter({
          filters: aSearchFilters,
          and: false
        }));
      }

      oBinding.filter(aFilters);
      this._updateSearchResultsCount(oBinding.getLength());
    },

    /**
     * Updates the search results count in the table header.
     * @param {int} iCount The number of search results.
     * @private
     */
    _updateSearchResultsCount: function (iCount) {
      var oTitle = this.byId("tableTitle");
      if (oTitle) {
        oTitle.setText("Purchase Order Items (" + iCount + ")"); // More appropriate title
      }
    }
  });
});
