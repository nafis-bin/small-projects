# Weather Card App
This is a simple weather card web application that allows users to search for a city and view current weather information like temperature, humidity, and wind speed.


### Features
 - City-based weather search

 - Displays temperature in Celsius

 - Humidity and 🌬️ wind speed info

️ - Dynamic weather icon based on conditions

 - Stylish and responsive weather card UI

### Tech Stack
 - HTML5

 - CSS3

 - JavaScript (Vanilla)


🌐 API Used
OpenWeatherMap API
Provides weather data including current conditions, temperature, humidity, wind speed, etc.

### How It Works
The user types a city name in the input field.

On clicking the search icon, a fetch request is sent to the weather API.

Weather data is extracted from the response and displayed on the card.

### Security Note
To keep your API key safe:

Do not push .env files or API keys to public repositories. Instead use a config.js file
and put it in: 

```js
  window.env = {
    API_KEY: 'kfjsdlfjsd1234'; // your key
  }
```