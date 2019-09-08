from __future__ import print_function
from flask import Flask, jsonify, Response
# from flask_cors import CORS
from Helpers.MongoClient import MongoClient

app = Flask(__name__)

# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
response = Response()
db = MongoClient().connect()


@app.route('/', methods=['GET'])
def home():
    res = db.findone({'test': 'test data'}, 2)
    return res, 200


@app.route('/api/proc/', methods=['GET'])
def proc():
    data = db.insert({"test": "test data", "objectNew": {"name": "Asiri"}})
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=False, port=8090)
