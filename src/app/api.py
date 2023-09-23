#API
import uuid
from flask import Flask
from flask import request
import json

app = Flask(__name__)

data = []


@app.route('/Clients',methods=['GET'])
def get_clients():
    return data


@app.route('/Clients',methods=['POST'])
def post_client():

    user = json.loads(request.data)
    user["Id"] = str(uuid.uuid4())
    data.append(user)

    return data




app.run(port=5001, host='localhost', debug=True)
