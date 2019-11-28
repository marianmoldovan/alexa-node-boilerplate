const HelloWorldHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'HelloWorldIntent'
  },
  async handle(handlerInput) {
    let speech = 'Hello World'
    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(speech)
      .getResponse()
  }
}

module.exports = {
  HelloWorldHandler
}
