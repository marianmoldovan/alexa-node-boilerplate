const ResponseRecordSpeechOutputInterceptor = {
    process(handlerInput, responseOutput) {
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        let lastSpeechOutput = {
            "outputSpeech": responseOutput.outputSpeech.ssml
        }
        if(responseOutput.reprompt)
          lastSpeechOutput.reprompt = responseOutput.reprompt.outputSpeech.ssml
        sessionAttributes['lastSpeechOutput'] = lastSpeechOutput
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes)
    }
}

module.exports = ResponseRecordSpeechOutputInterceptor
