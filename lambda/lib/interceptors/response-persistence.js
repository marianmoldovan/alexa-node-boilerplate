const ResponsePersistenceInterceptor = {
  process(handlerInput, responseOutput) {
    const ses = (typeof responseOutput.shouldEndSession == "undefined" ? true : responseOutput.shouldEndSession)
    if (ses || handlerInput.requestEnvelope.request.type == 'SessionEndedRequest') {
      let sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
      sessionAttributes['lastUseTimestamp'] = new Date(handlerInput.requestEnvelope.request.timestamp).getTime()
      handlerInput.attributesManager.setPersistentAttributes(sessionAttributes)
      return new Promise((resolve, reject) => {
        handlerInput.attributesManager.savePersistentAttributes()
          .then(() => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          })
      })
    }
  }
}

module.exports = ResponsePersistenceInterceptor
