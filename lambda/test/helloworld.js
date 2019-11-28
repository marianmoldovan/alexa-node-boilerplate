const va = require("virtual-alexa")

const expect = require('chai').expect
const assert = require('chai').assert
describe('Launch', () => {
  const alexa = va.VirtualAlexa.Builder()
    .handler("index.handler")
    .interactionModelFile("../models/es-ES.json")
    .create()

  alexa.dynamoDB().mock()

  let launchResponse, helloworldResponse
  before(async() => {
    launchResponse = await alexa.launch()
    helloworldResponse = await alexa.intend('HelloWorldIntent')
  })
  it('Should be a string', async () => {
      expect(helloworldResponse.response.outputSpeech.ssml).to.be.a('string')
  })
  it('Should contain text "hello world"', async () => {
    assert.include(helloworldResponse.response.outputSpeech.ssml, 'Hello World')
  })
  it('Session should not end', async () => {
      assert.equal(helloworldResponse.response.shouldEndSession, false)
  })

})
