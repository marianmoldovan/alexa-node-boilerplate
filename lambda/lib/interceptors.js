const LocalizationInterceptor = require('./interceptors/localization')
const InitMemoryAttributesInterceptor = require('./interceptors/initmemory-attributes')
const RequestHistoryInterceptor = require('./interceptors/request-history')
const RequestPetitionInterceptor = require('./interceptors/request-petition')
const ResponseRecordSpeechOutputInterceptor = require('./interceptors/response-record')
const RequestPersistenceInterceptor = require('./interceptors/request-persistence')
const ResponsePersistenceInterceptor = require('./interceptors/response-persistence')
const {LogRequestInterceptor, LogResponseInterceptor} = require('./interceptors/logger')

module.exports = {
  LocalizationInterceptor,
  InitMemoryAttributesInterceptor,
  RequestPersistenceInterceptor,
  RequestPetitionInterceptor,
  ResponseRecordSpeechOutputInterceptor,
  RequestHistoryInterceptor,
  ResponsePersistenceInterceptor,
  LogRequestInterceptor,
  LogResponseInterceptor
}
