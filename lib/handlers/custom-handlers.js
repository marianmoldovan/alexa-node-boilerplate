const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent'
  },
  async handle(handlerInput) {
    let response = handlerInput.responseBuilder
    const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
    let speechText = requestAttributes.t('GREETING')
    return response
        .speak(speechText)
        .reprompt(speechText)
        .getResponse()
    }
}

module.exports = {
  HelloWorldIntentHandler
}
