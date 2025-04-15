const NodeHelper = require("node_helper");
const fs = require("fs");

module.exports = NodeHelper.create({
  // Start the helper and load the gold price data
  start: function () {
    console.log("Starting the MMM-LiveGoldEuroConversion helper");
  },

  // Function to get the gold price data
  getGoldPrice: function () {
    const goldPriceFilePath = "modules/MMM-LiveGoldEuroConversion/gold_price.json";

    // Read the gold price data from the JSON file
    fs.readFile(goldPriceFilePath, 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading gold price data:", err);
        return;
      }

      const goldPriceData = JSON.parse(data);

      // Extract the current gold price in INR and EUR
      const currentPriceInr = goldPriceData.current.price_inr_per_gram;
      const eurToInr = goldPriceData.current.eur_to_inr;
      const currentPriceEur = currentPriceInr / eurToInr;

      // Send the gold price data to the frontend (client-side)
      this.sendSocketNotification("GOLD_PRICE", {
        currentInr: currentPriceInr,
        currentEur: currentPriceEur.toFixed(2),
      });
    });
  },

  // Socket notification handler (for receiving notifications from the frontend)
  socketNotificationReceived: function (notification, payload) {
    if (notification === "GET_GOLD_PRICE") {
      this.getGoldPrice();
    }
  }
});
