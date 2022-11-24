from flask import Flask
from backend.src.db_config import engine


app = Flask(__name__)


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

    engine.execute(
        '''
        INSERT INTO users(email, first_name, last_name, passwd, username, admin) VALUES 
        ('john.doe@zmail.com', 'John', 'Doe', 'john@123', 'johnd', FALSE);
        '''
    )
    for record in engine.execute('SELECT * FROM users;'):
        print(record)

    app.run()