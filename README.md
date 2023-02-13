# Welcome to Flight Service

# Project Setup
- clone the project on your local
- Execute `npm install` on the same path as your root directory of tech downloaded project
- Create a `.env` file in root dirctory and add the following enviroment variable
- `PORT = 3000`
- Inside the `src/config` folder create new file `config.json` and add the following piece of json

```
{
"development": {
    "username": <YOUR_DB_LOGIN_Name>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```