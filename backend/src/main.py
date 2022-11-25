from flask import Flask, request, make_response, jsonify
from src.db_config import engine
from flask_cors import CORS
from src.controllers import user


app = Flask(__name__)
CORS(app)


@app.route("/login")
def login():
  username = request.args.get('username')
  password = request.args.get('password')
  user_login = user.login_user(username, password)

  if user_login:
      return make_response(jsonify(user_login), 200)
  else:
      return make_response(jsonify({"message":"User does not exist."}), 400)


@app.route("/delete-account", methods=['DELETE'])
def delete_account():
  username = request.args.get('username')
  password = request.args.get('password')
  deleted_user = user.delete_user(username, password)

  if 'username' not in deleted_user:
      return make_response(jsonify({"message": deleted_user}), 400)
  else:
      return make_response(jsonify(deleted_user), 200)


@app.route("/update-account", methods=['PATCH'])
def update_account():
    data = request.get_json()
    username = data['username']
    password = data['password']
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    updated_user = user.update_user(username, password, email, first_name, last_name)

    if 'email' not in updated_user:
        return make_response(jsonify({"message": updated_user}), 400)
    else:
        return make_response(jsonify(updated_user), 200)


@app.route("/register", methods=['POST'])
def register():
    data = request.get_json()
    username = data['username']
    password = data['password']
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
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