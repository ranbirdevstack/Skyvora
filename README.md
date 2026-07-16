# 🌤️ Skyvora Weather App

A modern, responsive **Weather Application** built using **React** and **Material UI (MUI)**. The application connects directly to the **OpenWeatherMap API** to fetch real-time geographic coordinates and comprehensive meteorological data for cities worldwide.

**🌍 Live Demo:** [weather-forecastingranbir.vercel.app](https://vercel.app)

---

## 🚀 Features

*   **Two-Step Location Resolution:** Geocodes text-based city strings into exact coordinates (`lat`, `lon`) before querying weather data.
*   **Real-Time Data Parsing:** Tracks live temperature, local humidity, description indexes, min/max ranges, and thermal sensations ("feels like").
*   **Built-in Error Handling:** Displays an active warning message (`No such place exists in API`) if a location mismatch or API exception occurs.
*   **Material UI Layouts:** Leverages pristine text input wrappers and structured button layers directly from `@mui/material`.
*   **Keyboard Form Submissions:** Form submission handles automatic trigger responses seamlessly via standard keyboard events.

---

## 🛠️ Tech Stack

*   **Frontend Library:** [React](https://react.dev)
*   **UI Framework:** [Material UI (MUI)](https://mui.com)
*   **Data Provider:** [OpenWeatherMap API](https://openweathermap.org)
*   **Build Tool:** [Vite](https://vite.dev)
*   **Hosting & Deployment:** [Vercel](https://vercel.com)

---

## 📂 Project Structure

This project adopts a flat, centralized layout within the code folder. All operational runtime code, entry scripts, and component layouts are managed directly inside `/src`, avoiding complex deeply-nested subfolder trees.

```text
├── public/              # Uncompiled static assets served from the root URL
│   └── vite.svg         # Default branding asset
├── src/                 # Application codebase directory (Flat layout)
│   ├── Searchbox.jsx    # Handles input geocoding and API endpoints
│   ├── Searchbox.css    # Form layout and input padding adjustments
│   ├── InfoBox.jsx      # Functional presentation component mapping weather data
│   ├── WeatherApp.jsx   # State hub handling search updates and lifting hooks
│   ├── WeatherApp.css   # Main dashboard canvas layout rules
│   ├── App.jsx          # Primary container wrapper layout mounting <WeatherApp />
│   ├── App.css          # Viewport shell centering styles and shell layout overrides
│   ├── index.css        # Global CSS rules, body resets, and baseline configurations
│   └── main.jsx         # Target script mounting React to the page DOM
├── .gitignore           # File exclusion mappings for git commits
├── eslint.config.js     # Code quality and syntax rule validation configurations
├── index.html           # Core HTML skeleton mounting file
├── package.json         # Dependency manifest containing run/build commands
├── package-lock.json    # Exact dependency tree resolution log
└── vite.config.js       # Bundling and configuration rules for Vite plugins
```

---

## 💻 Getting Started

Follow these steps to configure, run, and modify this weather application locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed along with your required packages.

### 1. Clone the Repository
```bash
git clone https://github.com
cd Skyvora
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
The app will resolve internally at `http://localhost:5173`.

---

## 🧠 Core Architecture & Integration

### State Lifecycle
*   **`weatherinfo`** (Managed in `WeatherApp.jsx`): Tracks the current focused city context. Defaults safely to data from a reference city (Delhi).
*   **`city`** (Managed in `Searchbox.jsx`): Local text hook tracking typing interactions.
*   **`error`** (Managed in `Searchbox.jsx`): Boolean toggle managing visual validation feedback layout conditions.

### API Processing Flow
1.  **Geocoding Request:** Resolves the text string input via the `geo/1.0/direct` endpoint to get precise latitude (`lat`) and longitude (`lon`).
2.  **Weather Query:** Passes coordinate tokens to `data/2.5/weather` with the parameters `units=metric` to calculate dynamic data packets.
3.  **Lift State Up:** Triggers the functional callback `updateinfo(result)` to update properties in the master layout component.

---

## 🚀 Production Deployment to Vercel

This app is optimized and configured for continuous deployment via [Vercel](https://vercel.com).

### Manual CLI Deployment
To push updates live to your Vercel instance from your terminal:
```bash
npm install -g vercel
vercel
```

---# 🌤️ Skyvora Weather App

A modern, responsive **Weather Application** built using **React** and **Material UI (MUI)**. The application connects directly to the **OpenWeatherMap API** to fetch real-time geographic coordinates and comprehensive meteorological data for cities worldwide.

**🌍 Live Demo:** [weather-forecastingranbir.vercel.app](https://vercel.app)

---

## 🚀 Features

*   **Two-Step Location Resolution:** Geocodes text-based city strings into exact coordinates (`lat`, `lon`) before querying weather data.
*   **Real-Time Data Parsing:** Tracks live temperature, local humidity, description indexes, min/max ranges, and thermal sensations ("feels like").
*   **Built-in Error Handling:** Displays an active warning message (`No such place exists in API`) if a location mismatch or API exception occurs.
*   **Material UI Layouts:** Leverages pristine text input wrappers and structured button layers directly from `@mui/material`.
*   **Keyboard Form Submissions:** Form submission handles automatic trigger responses seamlessly via standard keyboard events.

---

## 🛠️ Tech Stack

*   **Frontend Library:** [React](https://react.dev)
*   **UI Framework:** [Material UI (MUI)](https://mui.com)
*   **Data Provider:** [OpenWeatherMap API](https://openweathermap.org)
*   **Build Tool:** [Vite](https://vite.dev)
*   **Hosting & Deployment:** [Vercel](https://vercel.com)

---

## 📂 Project Structure

This project adopts a flat, centralized layout within the code folder. All operational runtime code, entry scripts, and component layouts are managed directly inside `/src`, avoiding complex deeply-nested subfolder trees.

```text
├── public/              # Uncompiled static assets served from the root URL
│   └── vite.svg         # Default branding asset
├── src/                 # Application codebase directory (Flat layout)
│   ├── Searchbox.jsx    # Handles input geocoding and API endpoints
│   ├── Searchbox.css    # Form layout and input padding adjustments
│   ├── InfoBox.jsx      # Functional presentation component mapping weather data
│   ├── WeatherApp.jsx   # State hub handling search updates and lifting hooks
│   ├── WeatherApp.css   # Main dashboard canvas layout rules
│   ├── App.jsx          # Primary container wrapper layout mounting <WeatherApp />
│   ├── App.css          # Viewport shell centering styles and shell layout overrides
│   ├── index.css        # Global CSS rules, body resets, and baseline configurations
│   └── main.jsx         # Target script mounting React to the page DOM
├── .gitignore           # File exclusion mappings for git commits
├── eslint.config.js     # Code quality and syntax rule validation configurations
├── index.html           # Core HTML skeleton mounting file
├── package.json         # Dependency manifest containing run/build commands
├── package-lock.json    # Exact dependency tree resolution log
└── vite.config.js       # Bundling and configuration rules for Vite plugins
```

---

## 💻 Getting Started

Follow these steps to configure, run, and modify this weather application locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) installed along with your required packages.

### 1. Clone the Repository
```bash
git clone https://github.com
cd Skyvora
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
The app will resolve internally at `http://localhost:5173`.

---

## 🧠 Core Architecture & Integration

### State Lifecycle
*   **`weatherinfo`** (Managed in `WeatherApp.jsx`): Tracks the current focused city context. Defaults safely to data from a reference city (Delhi).
*   **`city`** (Managed in `Searchbox.jsx`): Local text hook tracking typing interactions.
*   **`error`** (Managed in `Searchbox.jsx`): Boolean toggle managing visual validation feedback layout conditions.

### API Processing Flow
1.  **Geocoding Request:** Resolves the text string input via the `geo/1.0/direct` endpoint to get precise latitude (`lat`) and longitude (`lon`).
2.  **Weather Query:** Passes coordinate tokens to `data/2.5/weather` with the parameters `units=metric` to calculate dynamic data packets.
3.  **Lift State Up:** Triggers the functional callback `updateinfo(result)` to update properties in the master layout component.

---

## 🚀 Production Deployment to Vercel

This app is optimized and configured for continuous deployment via [Vercel](https://vercel.com).

### Manual CLI Deployment
To push updates live to your Vercel instance from your terminal:
```bash
npm install -g vercel
vercel
```

---
