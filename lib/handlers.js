
const eventHandlers = require('./handlers/event-handlers')
const customHandlers = require('./handlers/custom-handlers')
const builtInHandlers = require('./handlers/builtin-handlers')

module.exports = {...customHandlers, ...builtInHandlers, ...eventHandlers}
