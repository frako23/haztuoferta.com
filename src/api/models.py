import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250),unique=False, nullable=False)
    lastname = db.Column(db.String(50),unique=False, nullable=False)
    phone = db.Column(db.String(50),unique=False, nullable=False)
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
    marca = db.Column(db.String(50),unique=False, nullable=False)
    modelo = db.Column(db.String(250),unique=False, nullable=False)
    procesador = db.Column(db.String(250),unique=False, nullable=False)
    pantalla = db.Column(db.String(50),unique=False, nullable=False)
    memoria_ram = db.Column(db.String(50),unique=False, nullable=False)
    memoria_rom = db.Column(db.String(50), unique=False, nullable=False)
    sistema_operativo = db.Column(db.String(250), unique=False, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    
    def __init__(self, **kwargs):
        self.marca = kwargs['marca']
        self.modelo = kwargs['modelo']
        self.pantalla = kwargs['pantalla']
        self.memoria_ram = kwargs['memoria_ram']
        self.memoria_rom = kwargs['memoria_rom']
        self.sistema_operativo = kwargs['sistema_operativo']
        self.precio = kwargs['precio']
    
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
            "marca": self.marca,
            "modelo": self.modelo,
            "procesador": self.procesador,
            "pantalla": self.pantalla,
            "memoria_ram": self.memoria_ram,
            "memoria_rom": self.memoria_rom,
            "sistema_operativo": self.sistema_operativo,
            "precio": self.precio,
            # do not serialize the password, its a security breach
        }

class Celular(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    marca = db.Column(db.String(50),unique=False, nullable=False)
    modelo = db.Column(db.String(250),unique=False, nullable=False)
    procesador = db.Column(db.String(250),unique=False, nullable=False)
    pantalla = db.Column(db.String(50),unique=False, nullable=False)
    memoria_ram = db.Column(db.String(50),unique=False, nullable=False)
    memoria_rom = db.Column(db.String(50), unique=False, nullable=False)
    sistema_operativo = db.Column(db.String(250), unique=False, nullable=False)
    precio = db.Column(db.String(80), unique=False, nullable=False)
    bateria = db.Column(db.String(50), unique=False, nullable=False)

    def __init__(self, **kwargs):
        self.marca = kwargs['marca']
        self.modelo = kwargs['modelo']
        self.pantalla = kwargs['pantalla']
        self.memoria_ram = kwargs['memoria_ram']
        self.memoria_rom = kwargs['memoria_rom']
        self.sistema_operativo = kwargs['sistema_operativo']
        self.precio = kwargs['precio']
        self.bateria = kwargs['bateria']
    
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
            "marca": self.marca,
            "modelo": self.modelo,
            "procesador": self.procesador,
            "pantalla": self.pantalla,
            "memoria_ram": self.memoria_ram,
            "memoria_rom": self.memoria_rom,
            "sistema_operativo": self.sistema_operativo,
            "precio": self.precio,
            "bateria": self.bateria,
            # do not serialize the password, its a security breach
        }
