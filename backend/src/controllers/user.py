from db_config import engine


def update_user(username, email, first_name, last_name, passwd):
    query = """UPDATE users 
                SET username='%s', email='%s', first_name='%s', last_name='%s', passwd='%s'
                WHERE username = '%s' AND passwd = '%s';""" % (username, email, first_name, last_name, passwd, username, passwd)

    try:
        engine.execute(query)
        return {'username': username, 'email': email, 'password': passwd, 'first_name': first_name,
                'last_name': last_name}
    except Exception as e:
        return str(e)


def login_user(username, passwd):
    query = "SELECT * FROM users WHERE username = '%s' AND passwd = '%s';" % (username, passwd)
    records = engine.execute(query)
    users = []
    if records:
        for record in records:
            users.append({'is_logged': True, 'id': record[0], 'email': record[1], 'username': record[2], 'first_name': record[3], 'last_name': record[4], 'password': record[5], 'is_admin': record[6]})
        return users
    else:
        return None


def register_user(username, passwd, email, first_name, last_name):
    query = """INSERT INTO users(email, first_name, last_name, passwd, username, admin) VALUES 
        ('%s', '%s', '%s', '%s', '%s', FALSE);""" % (email, first_name, last_name, passwd, username)
    try:
        engine.execute(query)
        return {'username': username, 'email': email, 'password': passwd, 'first_name': first_name, 'last_name': last_name}
    except Exception as e:
        return str(e)

def delete_user(username, passwd):
    query = """DELETE FROM users WHERE username='%s' AND passwd='%s';""" % (username, passwd)
    try:
        engine.execute(query)
        return {'message': 'User successfully deleted.', 'username': username, 'password': passwd}
    except Exception as e:
        return str(e)