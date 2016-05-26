```
               _   ____   _____        __ _   
    /\        | | |___ \ / ____|      / _| |  
   /  \   _ __| |_  __) | (___   ___ | |_| |_ 
  / /\ \ | '__| __||__ < \___ \ / _ \|  _| __|
 / ____ \| |  | |_ ___) |____) | (_) | | | |_ 
/_/    \_\_|   \__|____/|_____/ \___/|_|  \__|
                                              
```

***
# **Art 3 Soft**
***

## Página Web v0.1 

### Uso del preprocesador SASS con NODE JS

1. Tener instalado [Node.JS](https://nodejs.org/en/)
2. Luego instalar con [NPM](https://www.npmjs.com/) el modulo de [SASS](https://www.npmjs.com/package/node-sass)

```bash
# desde linux instalamos ruby
sudo apt-get install ruby

# luego instalamos sass
sudo apt-get install ruby-sass

# instalamos por la terminal con NPM en windows - Node-Sass
npm install node-sass
```

3. Ejecutar el comando

```bash
# ruby desde linux
sass --watch sass/base.scss:stylesheets/main.css

# node-sass [archivo-sass] [archivo-css] [option](-w es para que este constantemente vigilando el archivo)
node-sass sass/base.scss stylesheets/main.css -w
```

4. Para compilar los archivos javascript con **browserify**

```bash
# genera el archivo main.js en la carpeta js
npm run build

# para vigilar constantemente el archivo ejecutamos el comando
npm run watch
```

5. Para minificar los archivos javascript con gulp

```bash
# ejecutar el comando en la terminal
gulp [nombre tarea]
```

### Tecnologías Usadas

* HTML5
* CSS3
* JavaScript
* SASS
* Node JS
* Browserify
* Gulp
* THREE JS
* Node-SASS

> Alojada en los servidores de Bitbucket. **[ver página](http://art3soft.bitbucket.org)**