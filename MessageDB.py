import sqlite3  
  
con = sqlite3.connect("FARMER.db")  
print("Database opened successfully")  
  
con.execute("create table Messages (username TEXT PRIMARY KEY NOT NULL, query TEXT NOT NULL, reply TEXT)")  
  
print("Table created successfully")  
  
con.close()  