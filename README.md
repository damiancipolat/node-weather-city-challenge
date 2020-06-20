# Node.js challenge

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
- Docker
- Test: mocha / chai / sinon / proxyquire / nyc
  (Opte por usar estas librerias por que tengo más experiencia trabajando con ellas que las recomendadas, ademas de ser más modernas).
- config: Para manejar diferentes archivos de configuración por cada entorno.
- express.js
- pino: Para logear en forma de json al stdout.
- node-fetch: Para realizar request.

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
