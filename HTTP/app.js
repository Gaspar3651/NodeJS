var http = require('http');

http.createServer(
    function (requisicao, resposta) {
        resposta.end('Batatinha');
    }
).listen(8181);

console.log('------------------------------\n' + http);