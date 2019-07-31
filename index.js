const Alexa = require('ask-sdk-core');

const handlers = require('./lib/handlers')

const {
    HelloWorldIntentHandler,
    AMAZON_CancelIntent_Handler,
    AMAZON_HelpIntent_Handler,
    AMAZON_StopIntent_Handler,
    AMAZON_NavigateHomeIntent_Handler,
    LaunchRequestHandler,
    SessionEndedHandler,
    ErrorHandler
} = require('./lib/handlers')

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    HelloWorldIntentHandler,
    AMAZON_CancelIntent_Handler,
    AMAZON_HelpIntent_Handler,
    AMAZON_StopIntent_Handler,
    AMAZON_NavigateHomeIntent_Handler,
    LaunchRequestHandler,
    SessionEndedHandler,
    ErrorHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();
