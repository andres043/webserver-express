const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application-json' });

        let salida = {
            nombre: 'Andres',
            edad: 22,
            url: req.url
        }

        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');
        res.end();
    })
    .listen(3000);

console.log('Escuchado el puerto 3000');