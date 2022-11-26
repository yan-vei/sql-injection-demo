from selenium import webdriver
from selenium.webdriver.common.by import By
import time

urls = []
logins = []
passwords = []

driver = webdriver.Chrome()
driver.maximize_window()

for line in open('input_links.txt', 'r'):
    urls.append(line)

for line in open('sql_strings.txt', 'r'):
    creds = line.split('|')
    logins.append(creds[0])
    passwords.append(creds[1])

for url in urls:
    driver.get(url)

    inputs = driver.find_elements(By.TAG_NAME, 'input')

    for index, login in enumerate(logins):
        loginField = None
        passwordField = None

        for el in inputs:
            id = el.get_property('id')
            if 'login' in id or 'user' in id or 'name' in id:
                loginField = el
            if 'password' in id:
                passwordField = el

        if loginField and passwordField:
            loginField.send_keys(login)
            passwordField.send_keys(passwords[index])

    submitButton = driver.find_element(By.TAG_NAME, 'button')
    submitButton.click()

    time.sleep(10)

    if driver.current_url != url:
        accessed = open('success.txt', 'w')
        accessed.write(url + " is vulnerable to SQL injection!")

driver.close()