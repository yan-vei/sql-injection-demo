# coding=utf-8

from sqlalchemy import create_engine

db_url = 'db:5432'
db_name = 'sql-injection-demo'
db_user = 'postgres'
db_password = 'sq1-injection-dem0'
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_url}/{db_name}')

