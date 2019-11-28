const LaunchRequestHandler = {
    canHandle(handlerInput) {
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      let speech = 'Launch'
      return handlerInput.responseBuilder
        .speak(speech)
        .reprompt(speech)
        .getResponse()
    }
}

const SessionEndedHandler = {
    canHandle(handlerInput) {
      console.log('SESSION ENDED',handlerInput.requestEnvelope.request)
      const request = handlerInput.requestEnvelope.request;
      return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
      if(handlerInput.requestEnvelope.request.error) {
        console.log(JSON.stringify(handlerInput.requestEnvelope.request.error));
      }
      let userID = handlerInput.requestEnvelope.session.user.userId;
      console.log("[SessionEnded] userID: " + userID);
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
      console.log("Session new? "+handlerInput.requestEnvelope.session.new);
      return handlerInput.responseBuilder.getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
      return true
    },
    handle(handlerInput, error) {
      if(handlerInput.requestEnvelope.request && handlerInput.requestEnvelope.request.error) {
        console.log(JSON.stringify(handlerInput.requestEnvelope.request.error));
      }
      console.log("[Error] request: " + JSON.stringify(handlerInput.requestEnvelope.request));
      console.log(`Error handled: ${error.message}`);
      const speechText = 'Error'
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withShouldEndSession(false)
        .getResponse()
    }
};

module.exports = {
  LaunchRequestHandler,
  SessionEndedHandler,
  ErrorHandler
}
