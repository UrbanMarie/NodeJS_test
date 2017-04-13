var http = require('http');
var ip = '127.0.0.1';
var port = 42;

var server = http.createServer( // Singleton, fabrique d'objet , on crée l'objet de type serveur
    function(request,response){
        response.statusCode = 200; // ??
        response.setHeader('Content-Type','text/plain'); // en tête rest
        response.end('allez fuck')  // Contenus
    }
);

server.listen(port,ip,function(){  //-> methode listen sur le port/adress ip
    console.log('le serveur tourne aussi bien que ta maman');
});
