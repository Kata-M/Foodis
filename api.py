# Spaghetti by Patrik Jokela
# Junction 2019

import mysql.connector
from flask import Flask, request
from flask_restful import Resource, Api
from json import dumps
from flask import jsonify

mydb = mysql.connector.connect(
            host="mysql-138a8d13-patrik-e2ce.aivencloud.com",
            user="avnadmin",
            database='defaultdb',
            passwd="xlh62r1ha3vkniyb",
            port="17083"
            )

app = Flask(__name__)
api = Api(app)

class Products(Resource):
    def get(self):
        mycursor = mydb.cursor()
        query = mycursor.execute("select * from products")
        return jsonify(mycursor.fetchall())

    def post(self, name, price):
        mycursor = mydb.cursor()
        sql = "INSERT INTO products (name, price) VALUES (%s, %s)" % (name, price)
        mycursor.execute(sql)
        mydb.commit()
        return print('Done!')

class Products_Name(Resource):
    def get(self, name):
        mycursor = mydb.cursor()
        mycursor.execute("select price from products where name =%s ;" %name )
        return jsonify(mycursor.fetchall())

class Products_ID(Resource):
    def get(self, id):
        mycursor = mydb.cursor()
        mycursor.execute("select price from products where id =%d ;" %int(id) )
        return jsonify(mycursor.fetchall())
        

api.add_resource(Products, '/products')
api.add_resource(Products_ID, '/products/<id>')
# api.add_resource(Products_Name, '/products/<name>')


if __name__ == '__main__':
     app.run(port='5002')