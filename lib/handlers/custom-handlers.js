const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent'
  },
  async handle(handlerInput) {
    let response = handlerInput.responseBuilder
    let speechText = 'Hello World'
    return response
        .speak(speechText)
        .reprompt(speechText)
        .getResponse()
    }
}

module.exports = {
  HelloWorldIntentHandler
}
