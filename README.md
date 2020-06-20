# Node Developer Applicant - challenge

### **Configuración**:
Dentro del directorio /config se encuentran los archivos json de cada entorno, por defecto se usa "default.json".

```console
{
  "openWeather":{
    "baseUrl":"https://api.openweathermap.org/data/2.5/",
    "apiKey":"xxxxxxxxxxxxxxxxxxxxx"
  },
  "server":{
    "port":8080,
    "killTimeout":100
  }
}
```

### **Comandos**:

- Ejecutar test:
```console
damian@challenge:~$ npm test
```
- Ejecutar revisión de cobertura de codigo:
```console
damian@challenge:~$ npm run coverage
```
- Ejecutar servidor:
```console
damian@challenge:~$ npm start
```

- Crear imagén de docker:
```console
damian@challenge:~$ npm run build
```

### **Stack usado**:
- Node.js v10
- swagger-ui-express
- Docker
- Test: mocha / chai / sinon / proxyquire / nyc
  (Opte por usar estas librerias por que tengo más experiencia trabajando con ellas que las recomendadas, ademas de ser más modernas).
- config: Para manejar diferentes archivos de configuración por cada entorno.
- express.js
- pino: Para logear en forma de json al stdout.
- node-fetch: Para realizar request.

### **API REST**
Para observar la documentacion del api rest, el proyecto cuenta con un modulo de swagger, puede accederlo desde:
http://127.0.0.1:8080/doc/

### **Decisiones de arquitectura**
El api fue dividida en tres capas:
- Lib: Para codigo compartido o integraciones.
- Server: Contiene el codigo para ejecutar un servidor rest.
- Services: Resuelve logica de negocio.

Se opto por dividir la comunicación atravez de red de la logica de negocio por este motivo /services y /server estan al mismo nivel, este diseño esta pensado para en un escenario productivo poder cambiar la forma en que se comunica un microservicio sin tener que realizar mayores cambios.

**Middlewares**:
- Swagger: Genera un sandbox de prueba del api.
- Error Handler: Este fue desarrollado para resolver en un unico punto todos las excepciones recibidas, para logearlas y retornar la respuesta. /src/server/middleware.js

### **Versionado**:
Utilizo el campo "version" del archivo package.json del proyecto para registrar los cambios de versiones en el proyecto, este campo es el unico lugar en donde se registra la versión en todo el proyecto.

**Docker**: Al momento de buildear la imagén de docker, se puede observar en el archivo package.json
```console
"build": ". ./tag.sh && docker build . -t $PACKAGE_TAG"
```
Que se ejecuta un script tag.sh este script extrae del archivo package.json la version para poder ser usada para **taggear** imagenes.

### Unit test:
El proyecto contiene un script de analisis y reporte de cobertura del codigo usando el modulo npm "nyc" de istanbuljs.

```console
damian@challenge:~$ npm run coverage

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |     100 |    93.75 |     100 |     100 |                   
 lib               |     100 |      100 |     100 |     100 |                   
  http.js          |     100 |      100 |     100 |     100 |                   
  ipdata.js        |     100 |      100 |     100 |     100 |                   
  weather.js       |     100 |      100 |     100 |     100 |                   
 server            |     100 |       75 |     100 |     100 |                   
  middleware.js    |     100 |       75 |     100 |     100 | 12-15             
 server/controller |     100 |      100 |     100 |     100 |                   
  current.js       |     100 |      100 |     100 |     100 |                   
  forecast.js      |     100 |      100 |     100 |     100 |                   
  health.js        |     100 |      100 |     100 |     100 |                   
  not-found.js     |     100 |      100 |     100 |     100 |                   
 services          |     100 |      100 |     100 |     100 |                   
  current.js       |     100 |      100 |     100 |     100 |                   
  forecast.js      |     100 |      100 |     100 |     100 |                   
  location.js      |     100 |      100 |     100 |     100 |                   
-------------------|---------|----------|---------|---------|-------------------
```

El unit test es ejecutado dentro del archivo Dockerfile en el proceso de build de la imagén en caso de habar algun
error en los test no nos permitira realizarlo.
