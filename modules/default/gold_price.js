const fs = require("fs");
const path = require("path");

// Resolve path relative to this file
const dataPath = path.join(__dirname, "gold_price.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Current price
const currentInr = data.current.price_inr_per_gram;
const eurToInr = data.current.eur_to_inr;
const currentEur = currentInr / eurToInr;

// Historical price
const historicalDate = "2024-04-01";
const historicalInr = data.historical[historicalDate]?.price_inr_per_gram;
const historicalEur = historicalInr ? historicalInr / eurToInr : null;

console.log("🟡 Current Gold Price:");
console.log(`- ₹${currentInr} per gram`);
console.log(`- €${currentEur.toFixed(2)} per gram`);

if (historicalInr) {
  console.log(`\n📅 Gold Price on ${historicalDate}:`);
  console.log(`- ₹${historicalInr} per gram`);
  console.log(`- €${historicalEur.toFixed(2)} per gram`);
} else {
  console.log(`\n❌ No data for ${historicalDate}`);
}
