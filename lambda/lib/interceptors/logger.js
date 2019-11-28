const LogRequestInterceptor = {
  process(handlerInput) {
    console.log('REQUEST', handlerInput.requestEnvelope.request)
    let sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
    console.log('SESSION ATTRIBUTES', sessionAttributes)
  }
}

const LogResponseInterceptor = {
  process(handlerInput, responseOutput) {
    console.log('RESPONSE', responseOutput)
  }
}

module.exports = {LogRequestInterceptor, LogResponseInterceptor}
