function getMemoryAttributes() {
  const memoryAttributes = {
    "history": [],
    "launchCount": 0,
    "lastUseTimestamp": 0,
    "lastSpeechOutput": {}
  }
  return memoryAttributes
}

const InitMemoryAttributesInterceptor = {
  process(handlerInput) {
    let sessionAttributes = {}
    if (handlerInput.requestEnvelope.session['new']) {
      sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
      let memoryAttributes = getMemoryAttributes()
      if (Object.keys(sessionAttributes).length === 0) {
        Object.keys(memoryAttributes).forEach(function(key) {
          sessionAttributes[key] = memoryAttributes[key]
        })
      }
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes)
    }
  }
}

module.exports = InitMemoryAttributesInterceptor
