const RequestPetitionInterceptor = {
    process(handlerInput) {
        const thisRequest = handlerInput.requestEnvelope.request;
        const thisSession = handlerInput.requestEnvelope.session;
        if (thisSession['new']) {
            console.log("[RequestPetitionInterceptor] Sesión nueva")
            let sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
            if (!sessionAttributes.launched_via){
                let strIntent = thisRequest.type;
                if(thisRequest.intent && thisRequest.intent.name){
                    strIntent += "-" + thisRequest.intent.name;
                }
                sessionAttributes.launched_via = strIntent;
                handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
            }
        }
        else {
            console.log("[RequestPetitionInterceptor] Sesión antigua")
        }
    }
}

module.exports = RequestPetitionInterceptor
