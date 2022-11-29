import os
import sys
from datetime import datetime
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    lastname = db.Column(db.String(50), unique=False, nullable=False)
    phone = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.name = kwargs['name']
        self.lastname = kwargs['lastname']
        self.phone = kwargs['phone']
        self.email = kwargs['email']
        self.password = kwargs['password']

    @classmethod
    def create(cls, **kwargs):
        new_user = cls(**kwargs)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            raise Exception(error.args[0], 400)
        print(new_user.id)
        return new_user

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname,
            "phone": self.phone,
            # do not serialize the password, its a security breach
        }


class Computadora(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(250), unique=False, nullable=False)
    marca = db.Column(db.String(50), unique=False, nullable=False)
    modelo = db.Column(db.String(250), unique=False, nullable=False)
    procesador = db.Column(db.String(250), unique=False, nullable=False)
    pantalla = db.Column(db.String(50), unique=False, nullable=False)
    memoria_ram = db.Column(db.String(50), unique=False, nullable=False)
    disco_duro = db.Column(db.String(50), unique=False, nullable=False)
    sistema_operativo = db.Column(db.String(250), unique=False, nullable=False)
    moneda = db.Column(db.String(5), unique=False, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    tipo_de_negocio = db.Column(db.String(80), unique=False, nullable=False)
    nuevo_usado = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(500), unique=False, nullable=False)
    img_url = db.Column(db.String(250), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.titulo = kwargs['titulo']
        self.marca = kwargs['marca']
        self.modelo = kwargs['modelo']
        self.procesador = kwargs['procesador']
        self.pantalla = kwargs['pantalla']
        self.memoria_ram = kwargs['memoria_ram']
        self.disco_duro = kwargs['disco_duro']
        self.sistema_operativo = kwargs['sistema_operativo']
        self.moneda = kwargs['moneda']
        self.precio = kwargs['precio']
        self.tipo_de_negocio = kwargs['tipo_de_negocio']
        self.nuevo_usado = kwargs['nuevo_usado']
        self.descripcion = kwargs['descripcion']
        self.img_url = kwargs['img_url']

    @classmethod
    def create(cls, **kwargs):
        new_computadora = cls(**kwargs)
        db.session.add(new_computadora)
        try:
            db.session.commit()
            return new_computadora
        except Exception as error:
            raise Exception(error.args[0], 400)
        print(new_computadora.id)
        return new_computadora

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "marca": self.marca,
            "modelo": self.modelo,
            "procesador": self.procesador,
            "pantalla": self.pantalla,
            "memoria_ram": self.memoria_ram,
            "disco_duro": self.disco_duro,
            "sistema_operativo": self.sistema_operativo,
            "moneda": self.moneda,
            "precio": self.precio,
            "tipo_de_negocio": self.tipo_de_negocio,
            "nuevo_usado": self.nuevo_usado,
            "descripcion": self.descripcion,
            "img_url": self.img_url
            # do not serialize the password, its a security breach
        }


class Celular(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(250), unique=False, nullable=False)
    marca = db.Column(db.String(50), unique=False, nullable=False)
    modelo = db.Column(db.String(250), unique=False, nullable=False)
    pantalla = db.Column(db.String(50), unique=False, nullable=False)
    memoria_ram = db.Column(db.String(50), unique=False, nullable=False)
    almacenamiento_interno = db.Column(
        db.String(50), unique=False, nullable=False)
    sistema_operativo = db.Column(db.String(250), unique=False, nullable=False)
    moneda = db.Column(db.String(5), unique=False, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    bateria = db.Column(db.String(50), unique=False, nullable=False)
    camara_frontal = db.Column(db.String(50), unique=False, nullable=False)
    camara_trasera = db.Column(db.String(50), unique=False, nullable=False)
    tipo_de_negocio = db.Column(db.String(80), unique=False, nullable=False)
    nuevo_usado = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(500), unique=False, nullable=False)
    img_url = db.Column(db.String(250), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.titulo = kwargs['titulo']
        self.marca = kwargs['marca']
        self.modelo = kwargs['modelo']
        self.pantalla = kwargs['pantalla']
        self.memoria_ram = kwargs['memoria_ram']
        self.almacenamiento_interno = kwargs['almacenamiento_interno']
        self.sistema_operativo = kwargs['sistema_operativo']
        self.moneda = kwargs['moneda']
        self.precio = kwargs['precio']
        self.bateria = kwargs['bateria']
        self.camara_frontal = kwargs['camara_frontal']
        self.camara_trasera = kwargs['camara_trasera']
        self.tipo_de_negocio = kwargs['tipo_de_negocio']
        self.nuevo_usado = kwargs['nuevo_usado']
        self.descripcion = kwargs['descripcion']
        self.img_url = kwargs['img_url']

    @classmethod
    def create(cls, **kwargs):
        new_celular = cls(**kwargs)
        db.session.add(new_celular)
        try:
            db.session.commit()
            return new_celular
        except Exception as error:
            raise Exception(error.args[0], 400)
        print(new_celular.id)
        return new_celular

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "marca": self.marca,
            "modelo": self.modelo,
            "pantalla": self.pantalla,
            "memoria_ram": self.memoria_ram,
            "almacenamiento_interno": self.almacenamiento_interno,
            "sistema_operativo": self.sistema_operativo,
            "moneda": self.moneda,
            "precio": self.precio,
            "bateria": self.bateria,
            "camara_frontal": self.camara_frontal,
            "camara_trasera": self.camara_trasera,
            "tipo_de_negocio": self.tipo_de_negocio,
            "nuevo_usado": self.nuevo_usado,
            "descripcion": self.descripcion,
            "img_url": self.img_url
            # do not serialize the password, its a security breach
        }


class Compra(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(250), unique=False, nullable=False)
    categoria = db.Column(db.String(250), unique=False, nullable=False)
    oferta = db.Column(db.String(50), unique=False, nullable=False)
    descripcion = db.Column(db.String(500), unique=False, nullable=False)
    user_name = Column(String, ForeignKey('user.name'))
    user_lastname = Column(String, ForeignKey(user.lastname))
    user_email = Column(String, ForeignKey(user.email))
    user_phone = Column(String, ForeignKey(user.phone))

    def __init__(self, **kwargs):
        self.titulo = kwargs['titulo']
        self.categoria = kwargs['categoria']
        self.oferta = kwargs['oferta']
        self.descripcion = kwargs['descripcion']
        self.user_name = kwargs['user_name']
        self.user_lastname = kwargs['user_lastname']
        self.user_email = kwargs['user_email']
        self.user_phone = kwargs['user_phone']

    @classmethod
    def create(cls, **kwargs):
        new_compra = cls(**kwargs)
        db.session.add(new_compra)
        try:
            db.session.commit()
            return new_compra
        except Exception as error:
            raise Exception(error.args[0], 400)
        print(new_compra.id)
        return new_compra

    def serialize(self):
        return {
            "id": self.id,
            "titulo": self.titulo,
            "categoria": self.categoria,
            "oferta": self.oferta,
            "descripcion": self.descripcion,
            "user_name": self.user_name,
            "user_lastname": self.user_lastname,
            "user_email": self.user_email,
            "user_phone": self.user_phone
            # do not serialize the password, its a security breach
        }


class Publicar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    author = db.Column(db.Integer, db.ForeignKey('user.id'))
    titulo = db.Column(db.String(250), unique=False, nullable=False)
    categoria = db.Column(db.String(250), unique=False, nullable=False)
    precio = db.Column(db.Integer, unique=False)
    oferta = db.Column(db.String(50), unique=False, nullable=False)
    descripcion = db.Column(db.String(500), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.titulo = kwargs['titulo']
        self.categoria = kwargs['categoria']
        self.precio = kwargs['precio']
        self.oferta = kwargs['oferta']
        self.descripcion = kwargs['descripcion']
        self.author = kwargs['author']

    @classmethod
    def create(cls, **kwargs):
        new_publicacion = cls(**kwargs)
        db.session.add(new_publicacion)

    def serialize(self):
        return {
            "id": self.id,
            "author": self.author,
            "titulo": self.titulo,
            "categoria": self.categoria,
            "precio": self.precio,
            "oferta": self.oferta,
            "descripcion": self.descripcion
        }
