# Node.js challenge

## **Configuración**:
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

## **Comandos**:

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

## **Stack usado**:
- Node.js v10
- Docker
- Test: mocha / chai / sinon / proxyquire / nyc
  (Opte por usar estas librerias por que tengo más experiencia trabajando con ellas que las recomendadas, ademas de ser más modernas).
- config: Para manejar diferentes archivos de configuración por cada entorno.
- express.js
- pino: Para logear en forma de json al stdout.
- node-fetch: Para realizar request.

## **Decisiones de arquitectura**
En esta api se opto por separar la logica de resolución de la capa de comunicación REST, por ende
la mayor parte del codigo esta desarrollada usando simple JS "servicios" comunicando situaciones de error atravez de excepciones, y la parte del servidor "expressjs" es donde se resuelven las distintas rutas y dentro de contoladores invocar servicios.
