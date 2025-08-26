sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
  "use strict";

  /**
   * @name converted.purchaseorderview.controller.App
   * @class Main application controller. Handles app initialization and routing.
   * @extends sap.ui.core.mvc.Controller
   */
  return Controller.extend("converted.purchaseorderview.controller.App", {
    /**
     * Called when the app controller is initialized.
     * Sets up routing and handles initial navigation.
     * @public
     */
    onInit: function () {
      // Log app initialization for debugging
      console.log("App controller initialized");

      // Get the router instance
      var oRouter = UIComponent.getRouterFor(this);

      // Check if the router is available
      if (oRouter) {
        console.log("Router found, initializing navigation");

        // Attach a bypassed event handler to catch routing errors
        oRouter.attachBypassed(function (oEvent) {
          console.log("Route bypassed:", oEvent.getParameter("hash"));
        });

        // If no hash is present, navigate to the main route after a short delay
        if (!window.location.hash || window.location.hash === "#") {
          console.log("No hash found, navigating to main route");
          // Use setTimeout to avoid issues with router initialization
          setTimeout(function () {
            oRouter.navTo("RouteMain");
          }, 100);
        }
      } else {
        // Log an error if the router is not found
        console.error("Router not found in App controller");
      }
    }
  });
});
