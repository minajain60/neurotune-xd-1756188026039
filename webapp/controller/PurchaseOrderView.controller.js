sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  "sap/m/MessageToast",
  "sap/m/MessageBox",
  "sap/m/MessagePopover",
  "sap/m/MessageItem",
  "sap/ui/core/library",
  "sap/ui/core/UIComponent"
], function (Controller, JSONModel, MessageToast, MessageBox, MessagePopover, MessageItem, coreLibrary, UIComponent) {
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
      // 1. Load Purchase Order Header Data
      var oPurchaseOrderHeaderModel = new JSONModel();
      oPurchaseOrderHeaderModel.loadData("model/mockData/purchaseOrderHeaders.json");
      this.getView().setModel(oPurchaseOrderHeaderModel, "purchaseOrderHeader");

      // 2. Load Purchase Order Item Data
      var oPurchaseOrderItemModel = new JSONModel();
      oPurchaseOrderItemModel.loadData("model/mockData/purchaseOrderItems.json");
      this.getView().setModel(oPurchaseOrderItemModel, "purchaseOrderItems");

      // 3. Load Customer Data (Example)
      var oCustomerModel = new JSONModel();
      oCustomerModel.loadData("model/mockData/customers.json");
      this.getView().setModel(oCustomerModel, "customers");

      // 4. Load Product Data (Example)
      var oProductModel = new JSONModel();
      oProductModel.loadData("model/mockData/products.json");
      this.getView().setModel(oProductModel, "products");

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
    }
  });
});
