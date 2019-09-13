from __future__ import print_function
from flask import Flask, jsonify, Response
from flask_cors import CORS
#from Helpers.MongoClient import MongoClient

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
response = Response()
#db = MongoClient().connect()


@app.route('/', methods=['GET'])
def home():
    #res = db.findone({'test': 'test data'}, 2)
    return 0


@app.route('/api/proc/vendors', methods=['GET'])
def proc():
    data = { 'message' : 'Found', 'response' : '200',
    'data':[
    {'name':'Asia Tools PVT LTD', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'China','items':['A','B']},
    {'name':'Alibaba Constructions', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg','country': 'Sri Lanka','items':['D','B']},
    {'name':'Asia Metals Industries', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'India','items':['E','B']},
    {'name':'Lanwa SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']},
    {'name':'Iron SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']},
    {'name':'Cement SL', 'image':'https://mdbootstrap.com/img/Photos/Others/images/16.jpg', 'country': 'Japan','items':['A','C']}]}
    return jsonify(data)


if __name__ == '__main__':
    try:
        app.run(debug=True, port=8090)
    except Exception as e:
        print(e)
