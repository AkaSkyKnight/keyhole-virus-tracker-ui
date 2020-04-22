const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api', {
            'target': 'http://localhost:9090'
          }
        ),
        proxy('/socket.io', {
            'target': 'http://localhost:9090',
            'ws': true
          }
        )
    );
};
