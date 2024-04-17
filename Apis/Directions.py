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
    

#####################################################################################
#
#                               Rutas GET 
#
######################################################################################

@app.route('/api/general/users', methods=['GET'])
def getUsers():
    try:
        print("\n==============================|getUsers|==============================\n")
        print('Información de los usuarios:')
    except Exception as e:
        print("\nError en getUsers: ", e)
        return jsonify(ResponseMessages.err500)    
    
@app.route('/api/general/user/<objIDParameter>', methods=['GET'])
def getUser(objIDParameter):
    try:
        print("\n==============================|getUser|==============================\n")
        print("ID => ", objIDParameter)
        objUser = callFunction.fnGetUser(objIDParameter)
        json_util.dumps(objUser)
        print("Información del usuario", objUser)
        return Response(objUser, mimetype="application/json")
    except Exception as e:
        print("\nError en getUser: ", e)
        return jsonify(ResponseMessages.err500)
    
@app.route('/api/general/recipes/<paramTime>', methods=['GET'])
def getRecipes(paramTime):
    try:
        print("\n==============================|getRecipes|==============================\n")
        objRecipes = callFunction.fnGetRecipes(paramTime)
        recipes_list = json_util.dumps(list(objRecipes))
        return jsonify(recipes_list)
    except Exception as e:
        print("\nError en getRecipes: ", e)
        return jsonify(ResponseMessages.err500)

@app.route('/api/general/recipe/<paramID>', methods=['GET'])
def getRecipe(paramID):
    try:
        print("\n==============================|getRecipe|==============================\n")
        print("_ID RECETA => ", paramID)
        objRecipe = callFunction.fnGetRecipe(paramID)
        response = json_util.dumps(objRecipe)
        print(response)
        return response
        #return Response(response, mimetype="application/json")
    except Exception as e:
        print("\nError en getRecipe: ",e)
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
        objUpdateUser = callFunction.fnUpdateUser(objIDParameter ,data)
        return jsonify(objUpdateUser)
    except Exception as e:
        print("\nError en la función putUpdateUser: ", e)
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

    
    
#################### Config App de arranque #################################
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=9005, debug=True, threaded=True)