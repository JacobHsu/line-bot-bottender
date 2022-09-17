module.exports = async function App(context) {
  await context.sendText(context.event.text);
};
