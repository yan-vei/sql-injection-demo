# SQL Injection Playground
This is a sample Flask web application with the UI in Angular that demonstrates how an SQL injection can be achieved.  

This application was developed for the INF370 course at the American University in Bulgaria.

Team 4:  
Belgisa Hajna  
Martin Minchev  
Andrea Minxa  
Yana Veitsman  

## Contents of the repository  
The current repository contains the backend, the frontend, and the Selenium script. The script is run separately from the other contents.

## How to run the playground
To run the playground locally, make sure you have Docker installed. 

Navigated to the root folder of the application and run the following command:
```
docker-compose up build
```
This will create a multi-container environment. You can access the frontend of the application on localhost:4200, and the API calls will be done to localhost:5000.  

## Running Selenium script  
The Selenium script demo is run separately from the rest of the project. It takes 2 input files: input_links.txt and sql_strings.txt. In the first file you should place the urls of the websites' login pages that you would like to check for the SQL injection vulnerability. In the second file you enter the credentials (the SQL strings) to be tried in the inputs of the pages in the format SQL_string|password. If the injection is successful, the script will record the vulnerable website's url in the success.txt file.  

To run the Selenium script, start in the root directory of the project:  
```
cd backend
pip install requirements.txt
cd ../script
python script.py
```
