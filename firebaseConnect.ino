#include <Arduino.h>
#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "nick" //Suspicious_Ice_Cream_Truck_2.4
#define WIFI_PASSWORD "nick12345" //heavycurtain473

// Insert Firebase project API Key
#define API_KEY "AIzaSyAomXZaUj1BdKiWj7Dy495bIdCtp9tkzSk"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://iotfinalproject-e2f0e-default-rtdb.firebaseio.com/" 


#define button 13
#define red 14
#define yellow 12
#define green 27

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int intValue;
float floatValue;
float tur;
float pH;
float temp;
float cond;

float t_tur;
float t_pH;
float t_temp;
float t_cond;
float total;
bool signupOK = false;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);

  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  }
  else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);

  digitalWrite(red, LOW);
  digitalWrite(yellow, LOW);
  digitalWrite(green, LOW);

}

void loop() {
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();    
    if (Firebase.RTDB.getFloat(&fbdo, "/Test/Tur")) {
        t_tur = fbdo.floatData();
        Serial.print("t_tur: ");
        Serial.println(t_tur);
      
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Test/Temp")) {
        t_temp = fbdo.floatData();
        Serial.print("t_temp: ");
        Serial.println(t_temp);
      
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Test/Cond")) {
        t_cond = fbdo.floatData();
        Serial.print("t_cond: ");
        Serial.println(t_cond);
      
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Test/pH")) {

        t_pH = fbdo.floatData();
        Serial.print("t_pH: ");
        Serial.println(t_pH);
    }
    else {
      Serial.println("Error Test: " + fbdo.errorReason());
    }
    
    if (Firebase.RTDB.getFloat(&fbdo, "/Sensor/Tur")) {
        tur = fbdo.floatData();
        Serial.print("Tur: ");
        Serial.println(tur);
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Sensor/Cond")) {
        cond = fbdo.floatData();
        Serial.print("Cond: ");
        Serial.println(cond);
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Sensor/Temp")) {
        temp = fbdo.floatData();
        Serial.print("Temp: ");
        Serial.println(temp);
    }
    if (Firebase.RTDB.getFloat(&fbdo, "/Sensor/pH")) {
        pH = fbdo.floatData();
        Serial.print("pH: ");
        Serial.println(pH);
    }
    else {
      Serial.println("Error Tur: " + fbdo.errorReason());
    }
    total = 0.0;
    total = tur + cond + temp + pH;
    bool yellowLight = false;
    bool redLight = false;

    if(tur > t_tur && cond > t_cond && temp > t_temp){
        digitalWrite(green, LOW);
        digitalWrite(red, HIGH);
        digitalWrite(yellow, LOW);
    }else if(tur > t_tur || cond > t_cond || temp > t_temp){
      digitalWrite(yellow, HIGH);
      digitalWrite(red, LOW);
      digitalWrite(green, LOW);
    }else{
      digitalWrite(green, HIGH);
      digitalWrite(red, LOW);
      digitalWrite(yellow, LOW);
    }
  }
}