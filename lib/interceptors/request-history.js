const maxHistorySize = 20

const RequestHistoryInterceptor = {
    process(handlerInput) {
        const thisRequest = handlerInput.requestEnvelope.request
        let sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        let history = sessionAttributes['history'] || []
        let IntentRequest = {}
        if (thisRequest.type === 'IntentRequest') {
            let slots = []
            IntentRequest = {
                'IntentRequest': thisRequest.intent.name
            }
            if (thisRequest.intent.slots) {
                for (let slot in thisRequest.intent.slots) {
                    let slotObj = {}
                    slotObj[slot] = thisRequest.intent.slots[slot].value
                    slots.push(slotObj)
                }
                IntentRequest = {
                    'IntentRequest': thisRequest.intent.name,
                    'slots': slots
                }
            }
        } else {
            IntentRequest = { 'IntentRequest': thisRequest.type }
        }
        if (history.length > maxHistorySize - 1) {
            history.shift()
        }
        history.push(IntentRequest)
        handlerInput.attributesManager.setSessionAttributes(sessionAttributes)
    }
}

module.exports = RequestHistoryInterceptor
