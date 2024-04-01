from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from OpenAi import open_ai_response

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "*"}})

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

class OpenAiResponse(Resource):
    def get(self):
        return {"message": open_ai_response}
api.add_resource(OpenAiResponse, "/openai")


if __name__ == '__main__':
    app.run(debug=True, port=5555)
