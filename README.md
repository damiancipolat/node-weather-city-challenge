# node-weather-city-challenge

## **Comandos de ejecución**:

- Ejecutar test:
```console
damian@challenge:~$ npm test
```
- Ejecutar revisión de cobertuda de codigo:
```console
damian@challenge:~$ npm run coverage
```
- Ejecutar servidor:
```console
damian@challenge:~$ npm start
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
