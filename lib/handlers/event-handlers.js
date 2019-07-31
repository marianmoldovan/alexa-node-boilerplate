
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
      let response = handlerInput.responseBuilder
      const speechText = 'Launch'
      return response
          .speak(speechText)
          .reprompt(speechText)
          .getResponse()
    }
}

const SessionEndedHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
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
      let response = handlerInput.responseBuilder
      const speechText = 'Error'
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse()
    }
};

module.exports = {
  LaunchRequestHandler,
  SessionEndedHandler,
  ErrorHandler
}
