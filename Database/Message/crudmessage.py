from itertools import chain
from flask import *  
import sqlite3 
  
app = Flask(__name__)  
 
@app.route("/")  
def mindex():  
    return render_template("mindex.html");  
 
@app.route("/sendmsg")  
def sendmsg():  
    return render_template("sendmsg.html")  
 
@app.route("/sent",methods = ["POST","GET"])  
def sent():  
    msg = "msg"  
    if request.method == "POST":  
        try:
            username = request.form["username"]  
            query = request.form["query"]   
            with sqlite3.connect("FARMER.db") as con:  
                cur = con.cursor()  
                cur.execute("INSERT into Messages (username, query , reply) values (?,?,?)",(username, query , 'NULL'))  
                con.commit()  
                msg = "Query successfully Sent"  
        except:  
            con.rollback()  
            msg = "We can not send the query"  
        finally:  
            return render_template("sent.html",msg = msg)  
            con.close()  

@app.route("/reply")  
def reply():  
    return render_template("reply.html")    

@app.route("/viewreply",methods = ["POST"])
def viewreply():
    id = request.form["username"]
    con = sqlite3.connect("FARMER.db") 
    con.row_factory = sqlite3.Row  
    cur = con.cursor()
    cur.execute("select * from Messages where username = ?",[id,])
    row=cur.fetchall()
    return render_template("viewreply.html",rows=row)

if __name__ == "__main__":  
    app.run(debug = True) 
