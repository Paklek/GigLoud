module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('$!../client/views', server.loopback.status());
  server.use(router);
};
