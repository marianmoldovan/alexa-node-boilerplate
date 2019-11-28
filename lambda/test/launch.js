const va = require("virtual-alexa")

const expect = require('chai').expect
const assert = require('chai').assert
describe('Launch', () => {
  const alexa = va.VirtualAlexa.Builder()
    .handler("index.handler")
    .interactionModelFile("../models/es-ES.json")
    .create()

  alexa.dynamoDB().mock()

  let launchResponse
  before(async() => {
    launchResponse = await alexa.launch()
  })
  it('Should be a string', async () => {
      expect(launchResponse.response.outputSpeech.ssml).to.be.a('string')
  })
  it('Session should not end', async () => {
      assert.equal(launchResponse.response.shouldEndSession, false)
  })

})
