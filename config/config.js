var config = {
  address: "0.0.0.0", // Listen on all addresses
    port: process.env.PORT || 8080, // Default port
  language: "en",
  ipWhitelist: [],   
  timeFormat: 24, // 24-hour format
  units: "metric", // Metric system (Celsius)
  
  // Basic modules to display
  modules: [
    {
      module: "clock",
      position: "top_left",
      config: {
        timezone: "Europe/Amsterdam",
        title: "Amsterdam"
      }
    },
    {
      module: "clock",
      position: "top_right",
      config: {
        timezone: "Asia/Kolkata",
        title: "Hyderabad"
      }
    },
  /*  {
      module: 'weather',
      position: 'top_left',
      config: {
        weatherProvider: 'openweathermap',
        type: 'current',
        latitude: 52.52,  // Amsterdam Latitude
        longitude: 13.405, // Amsterdam Longitude
        apiKey: "bd162f46ddf472772d4f71e7e556faa7" // <-- Replace with your actual API key
      }
    },
    {
      module: "weather",
      position: "top_right",
      config: {
        weatherProvider: "openweathermap",
        type: "current", // or "forecast"
        location: "Hyderabad",
        locationID: "1269843", // Hyderabad city ID
        apiKey: "bd162f46ddf472772d4f71e7e556faa7" // <-- Replace with your actual API key
      }
    },
   {
      module: "compliments", // Display compliments
      position: "bottom_left", // Compliments in bottom-left
    },*/
	{
  module: "MMM-LiveGoldEuroConversion",
  position: "top_center",
  config: {
    updateInterval: 30000, // Update every 30 seconds
  },
},
/*	{
  module: "MMM-LiveGoldEuroConversion",
  position: "top_center",
  config: {
    updateInterval: 30000
  },
  page: "goldprice" // Optional: only if using multi-page setup
},*/
    {
      module: "newsfeed",
      position: "bottom_bar", // Newsfeed at the bottom
      config: {
    feeds: [
      {
        url: "https://www.dutchnews.nl/rss", // Amsterdam News RSS feed
        title: "Amsterdam News",
      },
      /*{
        url: "https://www.newindianexpress.com/rss/Hyderabad", // New Indian Express Hyderabad News RSS feed
        title: "Hyderabad News (New Indian Express)",
      },*/
      {
        url: "https://telanganatoday.com/feed", // Telangana Today RSS feed
        title: "Hyderabad News (Telangana Today)",
      },
      {
        url: "https://www.thehansindia.com/rss/hyderabad", // The Hans India Hyderabad News RSS feed
        title: "Hyderabad News (The Hans India)",
      },
    ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        // updateInterval: 10 * 60 * 1000 // Update news every 10 minutes
    updateInterval: 10 * 1000 // Update news every 30 seconds
      }
    }
  ]
}

if (typeof module !== "undefined") {
    module.exports = config;
}
