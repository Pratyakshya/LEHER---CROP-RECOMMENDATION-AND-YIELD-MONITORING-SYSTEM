import sqlite3  
  
con = sqlite3.connect("FARMER.db")  
print("Database opened successfully")  
  
con.execute("create table Farmer_profiles (username TEXT PRIMARY KEY NOT NULL,name TEXT NOT NULL, email TEXT UNIQUE NOT NULL,phone INTEGER NOT NULL, address TEXT NOT NULL,dob TEXT NOT NULL,password TEXT NOT NULL)")  
  
print("Table created successfully")  
  
con.close()  
