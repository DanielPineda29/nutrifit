from pymongo import MongoClient
import Backend.GlobalInfo.Keys as Keys
import Backend.GlobalInfo.ResponseMessages as ResponseMessages
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash

from flask import jsonify

# Connection to database
if Keys.dbconn == None:
    mongoConnect = MongoClient(Keys.strConnection)
    Keys.dbconn = mongoConnect[Keys.strDBConnection]
    dbConnectUsers = Keys.dbconn["users"]
    dbConnectRecipes = Keys.dbconn["recipes"]
    dbConnectExcercises = Keys.dbconn["excercises"]
    dbConnectRoutines = Keys.dbconn["routines"]
    dbConnectFavRecipes = Keys.dbconn["favRecipes"]
    print("dbConnectUsers: ", dbConnectUsers)


#####################################################################################
#
#                               Función CREATE 
#
######################################################################################

def fnRegisterUser(data):
    print("\n==============================|fnRegisterUser|==============================\n")
    try:
        print("DATA => ", data)
        hashed_password = generate_password_hash(data['strPassword'])
        objCreateUser = dbConnectUsers.insert_one({
            "strEmail": data["strEmail"],
            "strPassword": hashed_password,
            "strName": data["strName"], 
            "strLastname": data["strLastname"],
            "numAge": data["numAge"],
            "numHeight": data["numHeight"],
            "strSexo": data["strSexo"],
            "numWeight": data["numWeight"],
            "strActivity": data["strActivity"],
            })
        objResponse = ResponseMessages.succ200.copy()
        return objResponse
    except Exception as e:
        print("\nError en fnRegisterUser: ", e)
        return jsonify(ResponseMessages.err500)
    
def fnPostRecipe(data):
    try:
        objCreateRecipe = dbConnectRecipes.insert_one({
            "strNameFood": data["strNameFood"],
            "numKcal": data["numKcal"],
            "strTime": data["strTime"]
        })
        objCreateRecipe = ResponseMessages.suc200.copy()
        return objCreateRecipe
    except Exception as e:
        print("\nError en fnRegisterUser: ", e)
        return jsonify(ResponseMessages.err500)
    
def fnPostFavRecipe(idUser, idRecipe):
    try:
        objCreateFavRecipe = dbConnectFavRecipes.insert_one({
            "idUser": idUser,
            "idRecipes": [{"_idRecipe": idRecipe}]
        })
        objCreateFavRecipe = ResponseMessages.succ200.copy()
        return objCreateFavRecipe
    except Exception as e:
        print("\nError en fnPostFavRecipe: ",e)
        return jsonify(ResponseMessages.err500)

    
#####################################################################################
#
#                               Funciones GET 
#
######################################################################################

def fnGetUser(objIDParameter):
    print("\n==============================|fnGetUser|==============================\n")
    try:
        print("ID => ", objIDParameter)
        objFindUser = dbConnectUsers.find_one({'_id':ObjectId(objIDParameter)})
        objFindUser["_id"] = str(objFindUser["_id"])
        objResponse = ResponseMessages.succ200.copy()
        objResponse = objFindUser
        return objResponse
    except Exception as e:
        print("\nError en fnGetUser: ", e)
        return jsonify(ResponseMessages.err500)
    
def fnGetRecipes(strTime):
    print("\n==============================|fnGetRecipes|==============================\n")
    try:
        objFindRecipes = dbConnectRecipes.find({"strTime":strTime})
        objFindRecipes = [{**doc, "_id": str(doc["_id"])} for doc in objFindRecipes]
        objResponse = ResponseMessages.succ200.copy()
        objResponse = objFindRecipes
        return objResponse
    except Exception as e:
        print("\nError en fnGetUsers: ", e)
        return jsonify(ResponseMessages.err500)
    
def fnGetRecipe(paramID):
    print("\n==============================|fnGetRecipe|==============================\n")
    try:
        objFindRecipe = dbConnectRecipes.find_one({'_id': ObjectId(paramID)})
        objFindRecipe["_id"] = str(objFindRecipe["_id"])
        objResponse = ResponseMessages.succ200.copy()
        objResponse = objFindRecipe
        return objResponse
    except Exception as e:
        print("\nError en fnGetRecipe: ", e)
        return jsonify(ResponseMessages.err500)

def fnGetFavRecipe(idUser):
    try:
        objFindFavRecipe = dbConnectFavRecipes.find_one({'_idUser': ObjectId(idUser)})
        objFindFavRecipe["_idUser"] = str(objFindFavRecipe["_idUser"])
        for favRecipe in objFindFavRecipe.get('recipes', []):
            favRecipe['_idRecipe'] = str(favRecipe['_idRecipe'])
        objFindFavRecipe = ResponseMessages.succ200.copy()
        return objFindFavRecipe
    except Exception as e :
        return jsonify(ResponseMessages.err500)
    

#####################################################################################
#
#                               Función UPDATE 
#
######################################################################################

def fnUpdateUser(objIDParameter, data):
    print("\n==============================|fnUpdateUser|==============================\n")
    try:
        print("ID => ", objIDParameter)
        print("DATA => ", data)
        hashed_password = generate_password_hash(data['strPassword'])
        objUpdateUser = dbConnectUsers.update_one({"_id":ObjectId(objIDParameter)},
                                                   {"$set":{
                                                       "strEmail": data["strEmail"],
                                                        "strPassword": hashed_password,
                                                        "strName": data["strName"], 
                                                        "strLastname": data["strLastname"],
                                                        "numAge": data["numAge"],
                                                        "numHeight": data["numHeight"],
                                                        "strSexo": data["strSexo"],
                                                        "numWeight": data["numWeight"],
                                                        "strActivity": data["strActivity"],}})
        objResponse = ResponseMessages.succ200.copy()
        return objResponse
    except Exception as e:
        print("\nError en fnUpdateUser: ", e)
        return jsonify(ResponseMessages.err500)
    
    
#####################################################################################
#
#                               Función DELETE 
#
######################################################################################

def fnDeleteUser(objIDParameter):
    print("\n==============================|fnDeleteUser|==============================\n")
    try:
        print("ID => ", objIDParameter)
        objDeleteUser = dbConnectUsers.delete_one({"_id": ObjectId(objIDParameter)})
        objResponse = ResponseMessages.succ200.copy()
        return objResponse
    except Exception as e:
        print("\nError en fnDeleteUser: ", e)
        return jsonify(ResponseMessages.err500)
    
def fnDeleteRecipe(objIDParameter):
    try:
        objDeleteRecipe = dbConnectRecipes.delete_one({"_id": ObjectId(objIDParameter)})
        objResponse = ResponseMessages.succ200.copy()
        return objResponse
    except Exception as e:
        print("\nError en fnDeleteRecipe: ",e)
        return jsonify(ResponseMessages.err500)