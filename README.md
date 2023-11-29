# Water Quality Monitoring System

## Overview
This project is a comprehensive water quality monitoring system utilizing ESP32 microcontrollers for data collection, Firebase Realtime Database for data storage, and a React web application for data visualization and user interaction. It allows users to monitor various water quality parameters in real-time.

## Features
- **Data Collection:** Two ESP32 microcontrollers equipped with sensors to measure water quality parameters.
- **Realtime Database:** Firebase Realtime Database for storing and retrieving sensor data.
- **User Interface:** A React web application where users can view sensor values in real-time.
- **User Authentication:** Google account integration for user login.
- **Customization:** Users can set threshold values for water quality parameters through the React app.

## Hardware Requirements
- 2 x ESP32 Microcontrollers
- Water quality sensors (pH, turbidity, temperature, etc.)
- Power supply for ESP32 boards

## Software Requirements
- Arduino IDE for ESP32 programming
- Node.js and npm for the React app development
- Firebase account for database and authentication services

## Setting Up the ESP32 Microcontrollers
1. **Connect Sensors:** Attach the water quality sensors to the ESP32 boards.
2. **Program ESP32:** Use the Arduino IDE to program the ESP32s with the provided code.
3. **Configure Wi-Fi:** Set up Wi-Fi credentials to enable ESP32s to connect to the internet.
4. **Connect to Firebase:** Ensure each ESP32 is configured to send data to the Firebase Realtime Database.

## Configuring the Firebase Realtime Database
1. **Create Firebase Project:** Set up a new project in Firebase.
2. **Configure Database:** Initialize the Realtime Database in Firebase.
3. **Set Database Rules:** Ensure proper read/write permissions.

## Setting Up the React Web Application
1. **Install Dependencies:** Run `npm install` to install required dependencies.
2. **Configure Firebase:** Set up Firebase authentication and database connections.
3. **Run the Application:** Use `npm start` to launch the web app locally.

## Usage
- **Login:** Users can log in using their Google accounts.
- **View Data:** Real-time water quality data is displayed on the dashboard.
- **Set Thresholds:** Users can set threshold values for different parameters, receiving alerts when these thresholds are exceeded.



