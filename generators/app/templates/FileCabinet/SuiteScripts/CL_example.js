define(["N/search"], function (s) {

    /**
     * Test for ESLint validation
     *
     * @exports stoic/eslint-test
     *
     * @copyright 2016 Stoic Software
     * @author Eric T Grubaugh <eric@stoic.software>
     *
     * @NApiVersion 2.x
     * @NModuleScope Public
     * @NScriptType ClientScript
     *
     * @see [NetSuite Help: Client Script Type]{@link /app/help/helpcenter.nl?fid=section_4387798404.html}
     */
    var exports = {};

    function pageInit() {
        s.load({"id": "customsearch_nonexistent"});
    }

    function add(a, b) {
        return a + b;
    }

    exports.pageInit = pageInit;
    exports.add = add;

    return exports;
});
