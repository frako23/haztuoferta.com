"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Computadora, Celular, Compra
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
import os


api = Blueprint('api', __name__)


@api.route("/token", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"msg": "Mal Email o Password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


users = []


@api.route('/users', methods=['GET', 'POST'])
def get_users():
    if request.method == 'GET':
        users = User.query.all()
        users_dictionaries = []
        for user in users:
            users_dictionaries.append(user.serialize())
        return jsonify(users_dictionaries), 200
    new_user_data = request.json
    try:
        if "name" not in new_user_data or new_user_data["name"] == "":
            raise Exception("No ingresaste tu nombre", 400)
        if "lastname" not in new_user_data or new_user_data["lastname"] == "":
            raise Exception("No ingresaste tu apellido", 400)
        if "phone" not in new_user_data or new_user_data["phone"] == "":
            raise Exception("No ingresaste tu telefono", 400)
        if "email" not in new_user_data or new_user_data["email"] == "":
            raise Exception("No ingresaste el email", 400)
        if "password" not in new_user_data or new_user_data["password"] == "":
            raise Exception("No ingresaste el password", 400)
        new_user = User.create(**new_user_data)
        return jsonify(new_user.serialize()), 201
    except Exception as error:
        return jsonify(error.args[0]), error.args[1]


computadoras = []


@api.route('/computadoras', methods=['GET', 'POST'])
def get_computadoras():
    if request.method == 'GET':
        computadoras = Computadora.query.all()
        computadoras_dictionaries = []
        for computadora in computadoras:
            computadoras_dictionaries.append(computadora.serialize())
        return jsonify(computadoras_dictionaries), 200
    new_computadora_data = request.json
    try:
        if "marca" not in new_computadora_data or new_computadora_data["marca"] == "":
            raise Exception("No ingresaste el modelo", 400)
        if "modelo" not in new_computadora_data or new_computadora_data["modelo"] == "":
            raise Exception("No ingresaste la marca", 400)
        if "procesador" not in new_computadora_data or new_computadora_data["procesador"] == "":
            raise Exception("No ingresaste el procesador", 400)
        if "pantalla" not in new_computadora_data or new_computadora_data["pantalla"] == "":
            raise Exception("No ingresaste la pantalla", 400)
        if "memoria_ram" not in new_computadora_data or new_computadora_data["memoria_ram"] == "":
            raise Exception("No ingresaste la memoria Ram", 400)
        if "disco_duro" not in new_computadora_data or new_computadora_data["disco_duro"] == "":
            raise Exception("No ingresaste el disco duro", 400)
        if "sistema_operativo" not in new_computadora_data or new_computadora_data["sistema_operativo"] == "":
            raise Exception("No ingresaste el sistema operativo", 400)
        if "precio" not in new_computadora_data or new_computadora_data["precio"] == "":
            raise Exception("No ingresaste el precio", 400)
        new_computadora = Computadora.create(**new_computadora_data)
        return jsonify(new_computadora.serialize()), 201
    except Exception as error:
        return jsonify(error.args[0]), error.args[1]


celulares = []


@api.route('/celulares', methods=['GET', 'POST'])
def get_celulares():
    if request.method == 'GET':
        celulares = Celular.query.all()
        celulares_dictionaries = []
        for celular in celulares:
            celulares_dictionaries.append(celular.serialize())
        return jsonify(celulares_dictionaries), 200
    new_celular_data = request.json
    try:
        if "marca" not in new_celular_data or new_celular_data["marca"] == "":
            raise Exception("No ingresaste el modelo", 400)
        if "modelo" not in new_celular_data or new_celular_data["modelo"] == "":
            raise Exception("No ingresaste la marca", 400)
        if "procesador" not in new_celular_data or new_celular_data["procesador"] == "":
            raise Exception("No ingresaste el procesador", 400)
        if "pantalla" not in new_celular_data or new_celular_data["pantalla"] == "":
            raise Exception("No ingresaste la pantalla", 400)
        if "memoria_ram" not in new_celular_data or new_celular_data["memoria_ram"] == "":
            raise Exception("No ingresaste la memoria Ram", 400)
        if "disco_duro" not in new_celular_data or new_celular_data["disco_duro"] == "":
            raise Exception("No ingresaste el disco duro", 400)
        if "sistema_operativo" not in new_celular_data or new_celular_data["sistema_operativo"] == "":
            raise Exception("No ingresaste el sistema operativo", 400)
        if "precio" not in new_celular_data or new_celular_data["precio"] == "":
            raise Exception("No ingresaste el precio", 400)
        if "bateria" not in new_celular_data or new_celular_data["bateria"] == "":
            raise Exception("No ingresaste la bateria", 400)
        if "camara_frontal" not in new_celular_data or new_celular_data["camara_frontal"] == "":
            raise Exception("No ingresaste la camara frontal", 400)
        if "camara_trasera" not in new_celular_data or new_celular_data["camara_trasera"] == "":
            raise Exception("No ingresaste la camara trasera", 400)
        new_celular = Celular.create(**new_celular_data)
        return jsonify(new_celular.serialize()), 201
    except Exception as error:
        return jsonify(error.args[0]), error.args[1]


ofertas_de_compras = []


@api.route('/ofertas_de_compras', methods=['GET', 'POST'])
def get_ofertas_de_compras():
    if request.method == 'GET':
        ofertas_de_compras = Compra.query.all()
        ofertas_de_compras_dictionaries = []
        for oferta_de_compra in ofertas_de_compras:
            ofertas_de_compras_dictionaries.append(
                oferta_de_compra.serialize())
        return jsonify(ofertas_de_compras_dictionaries), 200
    new_oferta_de_compra_data = request.json
    try:
        if "titulo" not in new_oferta_de_compra_data or new_oferta_de_compra_data["titulo"] == "":
            raise Exception("No ingresaste el titulo", 400)
        if "categoria" not in new_oferta_de_compra_data or new_oferta_de_compra_data["categoria"] == "":
            raise Exception("No ingresaste la categoria", 400)
        if "oferta" not in new_oferta_de_compra_data or new_oferta_de_compra_data["oferta"] == "":
            raise Exception("No ingresaste la oferta", 400)
        if "descripcion" not in new_oferta_de_compra_data or new_oferta_de_compra_data["descripcion"] == "":
            raise Exception("No ingresaste la descripcion", 400)
        new_oferta_de_compra = Compra.create(**new_oferta_de_compra_data)
        return jsonify(new_oferta_de_compra.serialize()), 201
    except Exception as error:
        return jsonify(error.args[0]), error.args[1] if len(error.args) > 1 else 500


@api.route('/producto/<string:product_name>', methods=['GET'])
def get_products(product_name):

    # product_name = f"%{product_name}%"image.png

    products = Computadora.query.filter(
        Computadora.modelo.ilike('%' + product_name + '%')).limit(10).all()
    if products is None:
        return jsonify({'message': 'No se encontraron resultados'}), 404
    else:
        response = list(map(lambda item: item.serialize(), products))
        return jsonify(response), 200
