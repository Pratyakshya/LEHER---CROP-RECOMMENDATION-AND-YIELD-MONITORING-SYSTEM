from datetime import datetime
from flask import *  
import sqlite3 


app = Flask(__name__)  
 
@app.route("/")  
def index():  
    return render_template("index.html");  
 
@app.route("/add")  
def add():  
    return render_template("add.html")  
 
@app.route("/savedetails",methods = ["POST","GET"])  
def saveDetails():  
    msg = "msg"  
    if request.method == "POST":  
        try:
            username = request.form["username"]  
            name = request.form["name"]  
            email = request.form["email"]  
            phone = request.form["phone"]
            address = request.form["address"]
            password = request.form['password']
            dob = request.form["dob"]
            with sqlite3.connect("FARMER.db") as con:  
                cur = con.cursor()  
                cur.execute("INSERT into Farmer_profiles (username, name , email , phone , address, dob, password) values (?,?,?,?,?,?,?)",(username, name , email , phone , address, dob,password))  
                con.commit()  
                msg = "Farmer successfully Added"  
        except:  
            con.rollback()  
            msg = "We can not add the Farmer to the list"  
        finally:  
            return render_template("success.html",msg = msg)  
            con.close()  
 
@app.route("/view")  
def view():  
    con = sqlite3.connect("FARMER.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()  
    cur.execute("select * from Farmer_profiles")  
    rows = cur.fetchall()  
    return render_template("view.html",rows = rows)  
 
 
@app.route("/delete")  
def delete():  
    return render_template("delete.html")  
 
@app.route("/deleterecord",methods = ["POST"])  
def deleterecord():  
    id = request.form["username"]  
    with sqlite3.connect("FARMER.db") as con:  
        try:  
            cur = con.cursor()  
            cur.execute("delete from Farmer_profiles where username = ?",(id,))  
            msg = "record successfully deleted"  
        except:  
            msg = "can't be deleted"  
        finally:  
            return render_template("delete_record.html",msg = msg)  

@app.route("/findid")  
def findid():  
    return render_template("findid.html")    

@app.route("/find",methods = ["POST"])
def find():
    id = request.form["username"]
    msg="msg"
    with sqlite3.connect("FARMER.db") as con:
        try:
            msg="Farmer displayed succesfully"
            con.row_factory = sqlite3.Row  
            cur = con.cursor()
            cur.execute("select * from Farmer_profiles where username = ?",(id,))
            row=cur.fetchall()
        except:
            msg="Record does not exist"
        finally:
            return render_template("view.html",rows=row)

@app.route("/update")  
def update():  
    return render_template("update.html")  
 
@app.route("/updatedetails",methods = ["POST","GET"])  
def updateDetails():  
    msg = "msg"  
    if request.method == "POST": 
        try: 
            username = request.form["username"]  
            name = request.form["name"]  
            email = request.form["email"]  
            phone = request.form["phone"]
            address = request.form["address"]
            password=request.form['password']
            dob = request.form["dob"]
            with sqlite3.connect("FARMER.db") as con:  
                cur = con.cursor()  
                cur.execute("Update Farmer_profiles set name=? , email=? , phone=? , address=?,  dob=?,password=? where username=?",(name , email , phone , address, dob,password,username))  
                con.commit()  
                msg = "Farmer successfully Updated"  
        except:  
            con.rollback()  
            msg = "We can not update the Farmer details"  
        finally:  
            return render_template("success.html",msg = msg)  
            con.close() 
if __name__ == "__main__":  
    app.run(debug = True) 
