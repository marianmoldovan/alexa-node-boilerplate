const RequestPersistenceInterceptor = {
    process(handlerInput) {
        if (handlerInput.requestEnvelope.session['new']) {
            return new Promise((resolve, reject) => {
                handlerInput.attributesManager.getPersistentAttributes()
                .then((sessionAttributes) => {
                    sessionAttributes = sessionAttributes || {};
                    if ( isNaN( sessionAttributes['launchCount'] ) ) {
                        sessionAttributes['launchCount'] = 1;
                    } else {
                        sessionAttributes['launchCount'] += 1;
                    }
                    //sessionAttributes.data = null;
                    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
                    handlerInput.attributesManager.savePersistentAttributes()
                        .then(() => {
                            resolve();
                        })
                        .catch((err) => {
                            reject(err);
                        });
                });

            });

        }
    }
}

module.exports = RequestPersistenceInterceptor
