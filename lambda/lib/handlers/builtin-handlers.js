const AMAZON_CancelIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent'
  },
  handle(handlerInput) {
    let speech = 'Cancel'
    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(speech)
      .getResponse()
  }
};

const AMAZON_HelpIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent'
  },
  handle(handlerInput) {
    let speech = 'Help'
    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(speech)
      .getResponse()
  }
};

const AMAZON_StopIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent'
  },
  handle(handlerInput) {
    let speech = 'Stop'
    return handlerInput.responseBuilder
      .speak(speech)
      .getResponse()
  }
};

const AMAZON_NavigateHomeIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.NavigateHomeIntent'
  },
  handle(handlerInput) {
    let response = handlerInput.responseBuilder
    const speechText = 'Home'
    return response
        .speak(speechText)
        .reprompt(speechText)
        .getResponse()
  }
}

const AMAZON_StartOverIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StartOverIntent'
  },
  handle(handlerInput) {
    let response = handlerInput.responseBuilder
    let speechText = 'StartOverIntent'
    return response
        .speak(speechText)
        .reprompt(speechText)
        .getResponse()
  }
}

const AMAZON_FallbackIntent_Handler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request
    return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.FallbackIntent'
  },
  handle(handlerInput) {
    let speech = 'Fallback'
    return handlerInput.responseBuilder
      .speak(speech)
      .reprompt(speech)
      .getResponse()
  }
}

module.exports = {
  AMAZON_CancelIntent_Handler,
  AMAZON_HelpIntent_Handler,
  AMAZON_StopIntent_Handler,
  AMAZON_NavigateHomeIntent_Handler,
  AMAZON_StartOverIntent_Handler,
  AMAZON_FallbackIntent_Handler
}
