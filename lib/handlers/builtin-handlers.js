const AMAZON_CancelIntent_Handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent';
    },
    handle(handlerInput) {
      let response = handlerInput.responseBuilder
      const speechText = 'Cancel'
      return response
          .speak(speechText)
          .withShouldEndSession(true)
          .getResponse();
    }
};

const AMAZON_HelpIntent_Handler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request
      return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent'
    },
    handle(handlerInput) {
      let response = handlerInput.responseBuilder
      const speechText = 'Help'
      return response
          .speak(speechText)
          .reprompt(repromptSay)
          .getResponse()
    }
};

const AMAZON_StopIntent_Handler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request
        return request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent'
    },

    handle(handlerInput) {
      let response = handlerInput.responseBuilder
      const speechText = 'Stop'
      return response
          .speak(speechText)
          .withShouldEndSession(true)
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

module.exports = {
  AMAZON_CancelIntent_Handler,
  AMAZON_HelpIntent_Handler,
  AMAZON_StopIntent_Handler,
  AMAZON_NavigateHomeIntent_Handler
}
