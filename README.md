# Notes Handler

Esta es una aplicación web básica, la cual te permite manejar notas simples, la aplicación fue creada con Handlebars (HBS) como motor de plantillas, y con tecnologías de JavaScript, como Node.js, MongoDB, y distintas librerías.

Las funciones de esta aplicación son:

- CRUD: Create, Read, Update, Delete (Notas)
- Permite crear un usuario, iniciar sesión y que cada usuario pueda interactuar con sus notas.

### Instalación

```sh
git clone https://github.com/FaztTech/nodejs-notes-app
cd nodejs-notes-app
npm i
npm run dev # Iniciar la aplicación en modo developer
npm start # Iniciar la aplicación en modo de producción
```

> Tienes que tener MongoDB instalado de forma local, o establecer la variable de entorno MONGODB_URI para poder conectarte a MongoDB Atlas, por ejemplo.

### Variables de Entorno

Esta aplicación necesita las siguientes variables de entorno

- `MONGODB_URI` Este es el string de la MongoDB URI.
- `PORT` El puerto HTTP para la aplicación

### Usuario Default

Para poder ver todas las funcionalidades, es necesario tener un usuario, así que cuando la app esté iniciada, automáticamente crea un usuario con los siguientes datos:

- Email: `admin@localhost`
- Contraseña: `adminpassword`