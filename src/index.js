const { router, route } = require('bottender/router');
const HandleMessage = require('./dialogs/HandleMessage');
module.exports = async function App() {
  return router([route((context) => context.event.isText, HandleMessage)]);
};
