const Alexa = require('ask-sdk');

const {
  HelloWorldHandler,
  AMAZON_YesIntent_Handler,
  AMAZON_NoIntent_Handler,
  AMAZON_StartOverIntent_Handler,
  AMAZON_CancelIntent_Handler,
  AMAZON_HelpIntent_Handler,
  AMAZON_StopIntent_Handler,
  AMAZON_NavigateHomeIntent_Handler,
  AMAZON_FallbackIntent_Handler,
  LaunchRequestHandler,
  SessionEndedHandler,
  ErrorHandler
} = require('./lib/handlers')

const {
  InitMemoryAttributesInterceptor,
  RequestHistoryInterceptor,
  RequestPersistenceInterceptor,
  ResponsePersistenceInterceptor,
  RequestPetitionInterceptor,
  ResponseRecordSpeechOutputInterceptor,
  LocalizationInterceptor,
  LogRequestInterceptor,
  LogResponseInterceptor
} = require('./lib/interceptors')

exports.handler = Alexa.SkillBuilders.standard()
  .addRequestHandlers(
    HelloWorldHandler,
    AMAZON_StartOverIntent_Handler,
    AMAZON_NavigateHomeIntent_Handler,
    AMAZON_CancelIntent_Handler,
    AMAZON_HelpIntent_Handler,
    AMAZON_StopIntent_Handler,
    AMAZON_FallbackIntent_Handler,
    LaunchRequestHandler,
    SessionEndedHandler,
    ErrorHandler)
  .addErrorHandlers(ErrorHandler)
  .addRequestInterceptors(LogRequestInterceptor)
  .addRequestInterceptors(InitMemoryAttributesInterceptor)
  .addRequestInterceptors(RequestPersistenceInterceptor)
  .addRequestInterceptors(LocalizationInterceptor)
  .addRequestInterceptors(RequestPetitionInterceptor)
  .addResponseInterceptors(LogResponseInterceptor)
  .addResponseInterceptors(RequestHistoryInterceptor)
  .addResponseInterceptors(ResponseRecordSpeechOutputInterceptor)
  .addResponseInterceptors(ResponsePersistenceInterceptor)
  .withTableName("ask-helloworld")
  .withAutoCreateTable(true)
  .lambda();
