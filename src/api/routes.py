"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import requests
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import os


api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email = email, password = password).first()
    if user is None:
        return jsonify({"msg": "Mal Email o Password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

users = []

@api.route('/users', methods=['GET','POST'])
def get_users():
    if request.method == 'GET':
        users = User.query.all()
        users_dictionaries = []
        for user in users:
            users_dictionaries.append(user.serialize())
        return jsonify(users_dictionaries), 200
    new_user_data = request.json
    try:
        if "full_name" not in new_user_data or new_user_data["full_name"] == "": 
            raise Exception("No ingresaste el name",400)
        if "email" not in new_user_data or new_user_data["email"] == "": 
            raise Exception("No ingresaste el email",400)
        if "password" not in new_user_data or new_user_data["password"] == "": 
            raise Exception("No ingresaste el password",400)
        new_user = User.create(**new_user_data)
        return jsonify(new_user.serialize()),201
    except Exception as error:
        return jsonify(error.args[0]), error.args[1]
