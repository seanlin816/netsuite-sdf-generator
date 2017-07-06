require("amd-loader");

var m = require("../../FileCabinet/SuiteScripts/CL_example.js");

describe("CL_example.js", function () {
    describe("#add()", function () {
        it("should add two numbers", function () {
            m.add(5, 7).should.equal(12);
        });
    });
});
