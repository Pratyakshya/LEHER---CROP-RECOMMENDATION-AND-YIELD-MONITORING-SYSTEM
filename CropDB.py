import sqlite3  
  
con = sqlite3.connect("FARMER.db")  
print("Database opened successfully")  
  
con.execute("create table Crop_profiles (cropid INTEGER PRIMARY KEY NOT NULL,username TEXT NOT NULL, nitrogen FLOAT NOT NULL, phosphorus FLOAT NOT NULL,potassium FLOAT NOT NULL, pH FLOAT NOT NULL,humidity FLOAT NOT NULL,temperature FLOAT NOT NULL, rainfall FLOAT NOT NULL, delayinrainfall INTEGER, changeinpH FLOAT, landsize FLOAT, budget INTEGER,cropname TEXT, yield FLOAT, FOREIGN KEY(username) REFERENCES Farmer_profiles(username))")  
  
print("Table created successfully")  
  
con.close()  