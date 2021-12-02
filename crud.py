from itertools import chain
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
            cropid = request.form["cropid"]
            username = request.form["username"]  
            nitrogen = request.form["nitrogen"]  
            phosphorus = request.form["phosphorus"]  
            potassium = request.form["potassium"]
            pH = request.form["pH"]
            humidity = request.form["humidity"]
            temperature = request.form["temperature"]
            rainfall = request.form["rainfall"]
            delayinrainfall = request.form["delayinrainfall"]
            changeinpH = request.form["changeinpH"]
            landsize = request.form["landsize"]
            budget = request.form["budget"]
            cropname=request.form["cropname"]
            yield1=request.form["yield"]
            with sqlite3.connect("FARMER.db") as con:  
                cur = con.cursor()  
                cur.execute("INSERT into Crop_profiles (cropid, username, nitrogen , phosphorus , potassium , pH, humidity, temperature, rainfall, delayinrainfall, changeinpH, landsize, budget,cropname,yield) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",(cropid, username, nitrogen , phosphorus , potassium , pH, humidity, temperature, rainfall, delayinrainfall, changeinpH, landsize, budget,cropname,yield1))  
                con.commit()  
                msg = "Crop successfully Added"  
        except:  
            con.rollback()  
            msg = "We can not add the Crop to the list"  
        finally:  
            return render_template("success.html",msg = msg)  
            con.close() 
 
@app.route("/view")  
def view():  
    con = sqlite3.connect("FARMER.db")  
    con.row_factory = sqlite3.Row  
    cur = con.cursor()  
    cur.execute("select * from Crop_profiles")  
    rows = cur.fetchall()  
    return render_template("view.html",rows = rows)  
 
 
@app.route("/delete")  
def delete():  
    return render_template("delete.html")  
 
@app.route("/deleterecord",methods = ["POST"])  
def deleterecord():  
    id = request.form["cropid"]  
    with sqlite3.connect("FARMER.db") as con: 
        try: 
            cur = con.cursor()  
            cur.execute("delete from Crop_profiles where cropid = ?",(id,))  
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
    id = request.form["cropid"]
    msg="msg"
    with sqlite3.connect("FARMER.db") as con:
        try:
            msg="Crop displayed succesfully"
            con.row_factory = sqlite3.Row  
            cur = con.cursor()
            cur.execute("select * from Crop_profiles where cropid = ?",id)
            row=cur.fetchall()
        except:
            msg="Record does not exist"
        finally:
            return render_template("view.html",rows=row)

@app.route("/update")  
def update():  
    return render_template("updatecrop.html")  
 
@app.route("/updatedetails",methods = ["POST","GET"])  
def updatedetails():  
    msg = "msg"  
    if request.method == "POST":  
        try:
            cropid = request.form["cropid"] 
            nitrogen = request.form["nitrogen"]  
            phosphorus = request.form["phosphorus"]  
            potassium = request.form["potassium"]
            pH = request.form["pH"]
            humidity = request.form["humidity"]
            temperature = request.form["temperature"]
            rainfall = request.form["rainfall"]
            delayinrainfall = request.form["delayinrainfall"]
            changeinpH = request.form["changeinpH"]
            landsize = request.form["landsize"]
            budget = request.form["budget"]
            cropname=request.form["cropname"]
            yield1=request.form["yield"]

            with sqlite3.connect("FARMER.db") as con:  
                cur = con.cursor()  
                cur.execute("Update Crop_profiles set nitrogen =? , phosphorus=? , potassium=? , pH=?, humidity=?, temperature=?, rainfall=?, delayinrainfall=?, changeinpH=?, landsize=?, budget=?,cropname=?,yield=? where cropid=?",(nitrogen , phosphorus , potassium , pH, humidity, temperature, rainfall, delayinrainfall, changeinpH, landsize, budget,cropname,yield1,cropid))  
                con.commit()  
                msg = "Crop successfully updated"  
        except:  
            con.rollback()  
            msg = "We can not update the Crop to the list"  
        finally:  
            return render_template("success.html",msg = msg)  
            con.close()

if __name__ == "__main__":  
    app.run(debug = True) 