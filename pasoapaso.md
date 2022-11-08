npm i init -y
npm i express
npm i -D nodemon
script
modif package.json linea script:
dev: nodemon index.js
start: node index.js

express: nos sirve para levantar nuestro servidor
express-validator: no servira para validar las solicitudes del cliente
mongoose: es un odm que nos servira para hacer todas las consultas a la base de datos
jsonwebtoken: token de seguridad para autenticar usuarios
dotenv: sirve para trabajar con variables de entorno ellas sirven para ocultar informacion sensibles.
cors: sirven para configurar la comunicacion entre backend y frontend
cookie-parser: sirve para almacenar los tokens en memoria y un refresh token en cookie
bcryptjs: sirve para hasherar o encriptar una contraseña

no podemos guardar la sesion del usuario en el servidor


ezequiel
aZcoOoxGOYSAeeRU
mongodb

uri

mongodb+srv://ezequiel:aZcoOoxGOYSAeeRU@cluster0.yucpy5y.mongodb.net/?retryWrites=true&w=majority
