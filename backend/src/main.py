from flask import Flask, request, make_response, jsonify
from backend.src.db_config import engine
from flask_cors import CORS
from controllers import user


app = Flask(__name__)
CORS(app)


@app.route("/login", methods=['POST'])
def login():
  username = request.args.get('username')
  password = request.args.get('password')
  user_login = user.login_user(username, password)

  if user_login:
      return make_response(jsonify(user_login), 200)
  else:
      return make_response(jsonify({"message":"User does not exist."}), 400)



@app.route("/register", methods=['POST'])
def register():
  username = request.args.get('username')
  password = request.args.get('password')
  first_name = request.args.get('first_name')
  last_name = request.args.get('last_name')
  email = request.args.get('email')
  registered_user = user.register_user(username, password, email, first_name, last_name)

  if 'email' not in registered_user:
      return make_response(jsonify({"message": registered_user}), 400)
  else:
      return make_response(jsonify(registered_user), 200)


if __name__ == '__main__':
    engine.execute(
        '''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(50),
            username VARCHAR(50),
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            passwd VARCHAR(50),
            admin BOOL
        );
        '''
    )

    app.run()