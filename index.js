const Alexa = require('ask-sdk');

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

const {
  LocalizationInterceptor
} = require('./lib/interceptors')

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    HelloWorldIntentHandler,
    AMAZON_NavigateHomeIntent_Handler,
    AMAZON_CancelIntent_Handler,
    AMAZON_HelpIntent_Handler,
    AMAZON_StopIntent_Handler,
    LaunchRequestHandler,
    SessionEndedHandler,
    ErrorHandler)
  .addErrorHandlers(ErrorHandler)
  .addRequestInterceptors(LocalizationInterceptor)
  .lambda();
