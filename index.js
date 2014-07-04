var connect       = require('connect'),
  fs           = require('fs'),
  connectRoute = require('connect-route'),
  serveStatic  = require('serve-static');

connect().use(connectRoute(function (router) {
  fs.readFile(__dirname + '/assets/index.html', 'utf8', function (err, template) {
    fs.readFile(__dirname + '/assets/css/critical.css', 'utf8', function (err, css) {
      router.get('/', function (req, res) {
        res.end(template.replace('/* INLINE_HERE */', css));
      });
    });
  });
})).use(serveStatic(__dirname + '/assets')).listen(process.env.PORT || 8080);
