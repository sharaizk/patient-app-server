# How to run server:
1.	Extract the code from the ZIP file.
2.	Install node packages via “yarn add” or “npm install”
3.	Make.env file and add root password of your MYSQL in it <img width="226" alt="image" src="https://github.com/sharaizk/patient-app-server/assets/64202206/0b067eed-9c4e-45c3-bae6-4bfb28fe1859">
4.	Navigate to config > config.json and add your root password in development  <img width="339" alt="image" src="https://github.com/sharaizk/patient-app-server/assets/64202206/251cc704-a737-460f-b0c7-d6a58697811d">
5.	Create Database by name “health_app_db” in your MYSQL
6.	Use “yarn dev” or “npm run dev” to run the project. Your terminal should look like this <img width="416" alt="image" src="https://github.com/sharaizk/patient-app-server/assets/64202206/9392947b-01fa-49ee-9623-d3275ad43fc9">
7.	Run “npx sequelize-cli db:migrate” to auto generate tables inside your DATABASE
8.	Run “npx sequelize-cli db:seed” to auto generate random USERS and PATIENTS inside your database
