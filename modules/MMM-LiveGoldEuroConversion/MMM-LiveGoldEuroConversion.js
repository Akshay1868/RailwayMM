Module.register("MMM-LiveGoldEuroConversion", {
  // Default module config
  defaults: {
    updateInterval: 30000, // Update every 30 seconds
  },

  start: function () {
    Log.info("Starting module: " + this.name);
    this.sendSocketNotification("GET_GOLD_PRICE", null);
  },

  // Handle socket notifications from node_helper.js
  socketNotificationReceived: function (notification, payload) {
    if (notification === "GOLD_PRICE") {
      // Store the received data
      this.currentInr = payload.currentInr;
      this.currentEur = payload.currentEur;

      // Refresh the display
      this.updateDom();
    }
  },

  // Get data for display
  getDom: function () {
    var wrapper = document.createElement("div");

    if (this.currentInr && this.currentEur) {
      // Display current prices
      wrapper.innerHTML = `🟡 Current Gold Price: <br> ₹${this.currentInr} per gram <br> €${this.currentEur} per gram`;
    } else {
      // Display loading message if data is not available yet
      wrapper.innerHTML = "Loading Gold Price...";
    }

    return wrapper;
  },
});
