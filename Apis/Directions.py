from flask import Flask, jsonify, request, make_response, Response
from flask_cors import CORS
from bson import json_util
import json

import Backend.Functions as callFunction
import Backend.GlobalInfo.ResponseMessages as ResponseMessages

app = Flask(__name__)
CORS(app)


#####################################################################################
#
#                               Rutas POST 
#
######################################################################################

@app.route('/api/general/register', methods=['POST'])
def postRegisterUser():
    try:
        print("\n==============================|postRegisterUser|==============================\n")
        data = request.json
        objUser = callFunction.fnRegisterUser(data)
        return jsonify(objUser)
    except Exception as e:
        print("\nError en fnRegisterUser: ", e)
        return jsonify(ResponseMessages.err500)
    
@app.route('/api/general/createRecipe', methods=['POST'])
def postCreateRecipe():
    try:
        data = request.json
        objRecipe = callFunction.fnPostRecipe(data)
        return jsonify(objRecipe)
    except Exception as e:
        print("\nError en postCreateRecipe: ",e)
        return jsonify(ResponseMessages.err500)


@app.route('/api/general/addFavRecipe/<objIDParameter>', methods=['POST'])
def postFavRecipe(objIDParameter):
    try:
        data = request.json
        objRecipe = callFunction.fnPostFavRecipe(objIDParameter, data)
        return jsonify(objRecipe)
    except Exception as e:
        print("\nError en postCreateRecipe: ",e)
        return jsonify(ResponseMessages.err500)
    

#####################################################################################
#
#                               Rutas GET 
#
######################################################################################

@app.route('/api/general/user/check_email', methods=['POST'])
def checkEmail():
    try:
        data = request.json
        objFindUser = callFunction.fnCheckUser(data)
        return jsonify(objFindUser)
    except Exception as e:
        print("\nError en checkEmail: ",e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/users', methods=['GET'])
def getUsers():
    try:
        print("\n==============================|getUsers|==============================\n")
        print('Información de los usuarios:')
    except Exception as e:
        print("\nError en getUsers: ", e)
        return jsonify(ResponseMessages.err500)    
    
@app.route('/api/general/user/<strEmail>', methods=['GET'])
def getUser(strEmail):
    try:
        print("\n==============================|getUser|==============================\n")
        print("ID => ", strEmail)
        objUser = callFunction.fnGetUser(strEmail)
        json_util.dumps(objUser)
        print("Información del usuario", objUser)
        return jsonify(objUser)
    except Exception as e:
        print("\nError en getUser: ", e)
        return jsonify(ResponseMessages.err500)
    
@app.route('/api/general/recipes/<paramTime>', methods=['GET'])
def getRecipes(paramTime):
    try:
        print("\n==============================|getRecipes|==============================\n")
        objRecipes = callFunction.fnGetRecipes(paramTime)
        return jsonify(objRecipes)
    except Exception as e:
        print("\nError en getRecipes: ", e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/recipe/<paramID>', methods=['GET'])
def getRecipe(paramID):
    try:
        print("\n==============================|getRecipe|==============================\n")
        print("_ID RECETA => ", paramID)
        objRecipe = callFunction.fnGetRecipe(paramID)
        json_util.dumps(objRecipe)
        return jsonify(objRecipe)
    except Exception as e:
        print("\nError en getRecipe: ",e)
        return jsonify(ResponseMessages.err500)
    
@app.route('/api/general/favRecipes/<idUser>', methods=['GET'])
def getFavRecipe(idUser):
    try:
        objFavRecipe = callFunction.fnGetFavRecipes(idUser)
        json_util.dumps(objFavRecipe)
        return jsonify(objFavRecipe)
    except Exception as e:
        print("\nError en getFavRecipe: ",e)
        return jsonify(ResponseMessages.err500)
    

#####################################################################################
#
#                               Rutas PUT 
#
######################################################################################


#================================================| UPDATE USER |================================================

@app.route('/api/general/updateUser/<objIDParameter>', methods=['PUT'])
def putUpdateUser(objIDParameter):
    try:
        print("\n==============================|putUpdateUser|==============================\n")
        print("ID => ", objIDParameter)
        data = request.json
        print('DATA => ', data)
        objUpdateUser = callFunction.fnUpdateUser(objIDParameter, data)
        return jsonify(objUpdateUser)
    except Exception as e:
        print("\nError en la función putUpdateUser: ", e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/updateUserEmailPw/<objIDParameter>', methods=['PUT'])
def putUpdateEmailPw(objIDParameter):
    try:
        data = request.json
        print('DATA=> ', data)
        objUpdateEmailPw = callFunction.fnUpdateEmailPw(objIDParameter, data)
        return jsonify(objUpdateEmailPw)
    except Exception as e:
        print("\nError en la función putUpdateEmailPw: ", e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/updateRecipe/<objIDParameter>', methods=["PUT"])
def putUpdateRecipe(objIDParameter):
    try:
        data = request.json
        objUpdateRecipe = callFunction.fnUpdateRecipe(objIDParameter, data)
        return jsonify(objIDParameter)
    except Exception as e:
        print("\nError en la función putUpdateRecipe", e)
        return jsonify(ResponseMessages.err500)

#####################################################################################
#
#                               Rutas DELETE 
#
######################################################################################
    
    
@app.route('/api/general/deleteUser/<object_id>', methods=['DELETE'])
def deleteUser(object_id): 
    try:
        print("\n==============================|deleteUser|==============================\n")
        print("Eliminar usuario para el ID: ", )
        objDeleteUser = callFunction.fnDeleteUser(object_id)
        return jsonify(objDeleteUser)
    except Exception as e:
        print("\nError en la función fnDeleteUser: ", e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/deleteRecipe/<recipeID>', methods=['DELETE'])
def deleteRecipe(recipeID):
    try:
        objDeleteRecipe = callFunction.fnDeleteRecipe(recipeID)
        return jsonify(objDeleteUser)
    except Exception as e:
        print("\nError en deleteUser: ",e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/deleteFavRecipe/<userID>/<recipeID>', methods=['DELETE'])
def deleteFavRecipe(userID, recipeID):
    try:
        objDeleteFavRecipe = callFunction.fnDeleteFavRecipe(userID, recipeID)
        return jsonify(objDeleteFavRecipe)
    except Exception as e:
        print("\nError en deleteUser: ",e)
        return jsonify(ResponseMessages.err500)
    
    
#################### Config App de arranque #################################
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=9005, debug=True, threaded=True)