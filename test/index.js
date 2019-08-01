const clearRequire = require('clear-require')
const expect = require('chai').expect
const assert = require('chai').assert

describe('Skill Tests', function () {

    context('LaunchRequest', function () {
        let done, err

        before(function (cb) {
            const lambdalocal = require("lambda-local")
            const lambda = require('../index.js')
            let event = require('./handlers/LaunchRequest.json')

            lambdalocal.execute({
                event: event,
                lambdaFunc: lambda,
                callbackWaitsForEmptyEventLoop: false,
                timeoutMs: 7000,
                callback: function (_err, _done) {
                    done = _done
                    err = _err
                    if (done) {
                        console.log('context.done')
                        console.log(done)
                    }
                    if (err) {
                        console.log('context.err')
                        console.log(err)
                    }
                    cb()
                }
            });
        })

        after(function () {
            clearRequire('../index.js');
        })

        it('should return outputSpeech', function () {
            expect(done.response.outputSpeech.ssml).to.be.a('string')
        });

        it('should have shouldEndSession equal to false', function () {
            assert.equal(done.response.shouldEndSession, false)
        });

    });

    context('HelloWorldIntent', function () {
        let done, err;

        before(function (cb) {
          const lambdalocal = require("lambda-local")
          const lambda = require('../index.js')
          let event = require('./handlers/HelloWorldIntent.json')

            lambdalocal.execute({
                event: event,
                lambdaFunc: lambda,
                timeoutMs: 7000,
                callback: function (_err, _done) {
                    done = _done;
                    err = _err;

                    if (done) {
                        console.log('context.done');
                        console.log(done);
                    }

                    if (err) {
                        console.log('context.err');
                        console.log(err);
                    }

                    cb();
                }
            });
        })

        after(function () {
            clearRequire('../index.js');
        })


        it('should return outputSpeech', function () {
            expect(done.response.outputSpeech.ssml).to.be.a('string')
        });

        it('should have shouldEndSession equal to false', function () {
            assert.equal(done.response.shouldEndSession, false)
        });
      });


    context('AMAZON.StopIntent', function () {
        let done, err;

        before(function (cb) {
          const lambdalocal = require("lambda-local")
          const lambda = require('../index.js')
          let event = require('./handlers/StopIntent.json')

            lambdalocal.execute({
                event: event,
                lambdaFunc: lambda,
                timeoutMs: 7000,
                callback: function (_err, _done) {
                    done = _done;
                    err = _err;

                    if (done) {
                        console.log('context.done');
                        console.log(done);
                    }

                    if (err) {
                        console.log('context.err');
                        console.log(err);
                    }

                    cb();
                }
            });
        })

        after(function () {
            clearRequire('../index.js');
        })
        it('should not return reprompt outputSpeech', function () {
            expect(done.response.reprompt).to.not.exist;
        });

        it('should have shouldEndSession equal to true', function () {
            assert.equal(done.response.shouldEndSession, true);
        });
      });

});
