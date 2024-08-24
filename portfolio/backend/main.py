from flask import Flask
from flask_cors import CORS
import pymysql
from flask import request
import datetime
import logging
# from flask import globals as g



app = Flask(__name__)
CORS(app)


@app.route('/api/recommendations', methods=["GET"])
def get_recommendation():
 try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()
    query="SELECT * FROM recom WHERE showonpage=true;"
    cursor.execute(query)
    recommendations=cursor.fetchall()
    result=[]
    
    for recommendation in recommendations:
     recommendation_obj={
                "id":recommendation[0],
                "recommendation":recommendation[1],
                "designation":recommendation[3],
                "company":recommendation[4],
                } 
     result.append(recommendation_obj)
    db.close()
    cursor.close()
    return {"issuccessful":True, "result":result}
    

 except Exception as e:
   logging.error(e)
   return {"issuccessful":False, "result":[]}
 

@app.route('/api/projects', methods=["GET"])
def get_project():
 try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()
    query="SELECT * FROM projects WHERE showonpage=true;"
    cursor.execute(query)
    projects=cursor.fetchall()
    result=[]
    
    for project in projects:
     project_obj={
                "id":project[0],
                "title":project[1],
                "description":project[2],
                "body":project[3],
                "imageurl":project[4],
                } 
     result.append(project_obj)
    db.close()
    cursor.close()
    return {"issuccessful":True, "result":result}
    

 except Exception as e:
   logging.error(e)
   return {"issuccessful":False, "result":[]}
 
@app.route('/api/blogs', methods=["GET"])
def get_blog():
 try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()
    query="SELECT * FROM blogs WHERE showonpage=true;"
    cursor.execute(query)
    blogs=cursor.fetchall()
    result=[]
    
    for blog in blogs:
     blog_obj={
                "id":blog[0],
                "title":blog[1],
                "description":blog[2],
                "body":blog[3],
                "imageurl":blog[4],
                } 
     result.append(blog_obj)
    db.close()
    cursor.close()
    return {"issuccessful":True, "result":result}
    

 except Exception as e:
   logging.error(e)
   return {"issuccessful":False, "result":[]}
 
 
@app.route('/api/skills', methods=["GET"])
def get_skill():
 try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()
    query="SELECT * FROM skills WHERE showonpage=true;"
    cursor.execute(query)
    skills=cursor.fetchall()
    result=[]
    
    for skill in skills:
     skill_obj={
                "id":skill[0],
                "name":skill[1],
                "imageurl":skill[2],
                "totalstars":skill[3],
                "activestars":skill[4],
                } 
     result.append(skill_obj)
    db.close()
    cursor.close()
    return {"issuccessful":True, "result":result}
    

 except Exception as e:
   logging.error(e)
   return {"issuccessful":False, "result":[]}
 
@app.route('/api/project', methods=["POST"] )
def add_project():
  try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()

    project=request.json
    query="INSERT INTO PROJECTS VALUES(%s, %s, %s, %s, %s, %s, %s );"
    cursor.execute(query,[project["id"], project["title"], project["description"], project["body"], project["imageurl"], True, datetime.datetime.now()] )

    db.close()
    cursor.close()
    return {"issuccessful":True}


  except Exception as e:
   logging.error(e)
   return {"issuccessful":True}


@app.route("/api/blog", methods=["POST"])
def add_blog():
  try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()

    blog=request.json
    query="INSERT INTO blogs VALUES(%s, %s, %s, %s, %s, %s, %s);"
    cursor.execute(query, [blog["id"] , blog["title"], blog["description"], blog["body"], blog["imageurl"], True, datetime.datetime.now()])

    db.close()
    cursor.close()
    return{"issuccessful":True}
  
  except Exception as e:
    logging.error(e)
    return{"issuccessful":False}
  

@app.route("/api/recommendation", methods=["POST"])
def add_recommendation():
  try:
    db=pymysql.connect(host="localhost", user="root",password="ku$#@gr@22112002",database="portfolio",autocommit=True)
    cursor=db.cursor()

    recommendation=request.json
    query="INSERT INTO recom VALUES(%s, %s, %s, %s, %s, %s);"
    cursor.execute(query, [recommendation["id"] , recommendation["recommendation"], recommendation["email"], recommendation["designation"], recommendation["company"], True])

    db.close()
    cursor.close()
    return{"issuccessful":True}
  
  except Exception as e:
    logging.error(e)
    return{"issuccessful":False}