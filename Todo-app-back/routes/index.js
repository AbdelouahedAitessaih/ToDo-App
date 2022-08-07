const todoRouter = require('./todoRoute');

module.exports = (app) => {
    app.use(todoRouter);
}