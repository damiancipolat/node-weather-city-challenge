<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# PROJECT X - challenge

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

- Ejecutar servidor:

```console
damian@challenge:~$ npm start
```

- Crear imagén de docker:

```console
damian@challenge:~$ npm run build
```

- Ejecutar contenedor de la ultima imagén subida:

```console
damian@challenge:~$ npm run docker
```

### **Stack usado**:

- Node.js v10
- Docker
- config: Para manejar diferentes archivos de configuración por cada entorno.
- express.js
- pino: Para logear en forma de json al stdout.
# mini-webs-api
