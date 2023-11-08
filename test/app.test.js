const {expect} = require('chai')
const appD = require('../app')


describe("when open test", function() {
    it("should start one", function() {
        let a = 4
        let b = 4
        expect(a).to.equal(b)
    })
    it("should start two", function() {
        let a = 4
        let b = 3
        expect(a).not.to.equal(b)
    })
    it("should start three", function() {
        let a = appD.test(12,2,3)
        let b = 16
        expect(a).to.equal(b)
    })

})