## NetSuite SDF Account Customization Scaffolding

Project scaffold for SDF Account Customization projects

#### Example Directory structure
```
/
  FileCabinet/SuiteScripts/ - Corresponds to the SuiteScripts directory of the NetSuite account
    app1/ - The top-level directory for your SuiteApp source
      lib/ - Common/helper modules for your SuiteApp
        module1/ - source files for module named "module1"
        anotherModule/ - source files for module named "anotherModule"
      mySuitelet.js - Suitelet entry point script
      aUserEvent.js - User Event entry point script
  test/ - Test source
    module1/ - test files for module named "module1"
        doCalculationTest.js - test file for "doCalculation" function in module1
        doAnotherCalculationTest.js - test file for "doAnotherCalculation" function in module1
    anotherModule/ - test files for "anotherModule" module
  doc/ - Documentation for your SuiteApp
  examples/ - Example scripts/code for using your SuiteApp
```

*Recommendations*

* Place your NetSuite entry-point source files (e.g. User Events, Suitelets, etc) in the root of the SuiteApp source folder
* Extract the common business logic into library files/modules, and place them in their own module folders under `lib`
* Organize your `test` directory by the file and function under test

#### Default dependencies
* [eslint](https://www.npmjs.com/package/eslint) - Code linter
* [eslint-plugin-suitescript](https://www.npmjs.com/package/eslint-plugin-suitescript) - Environment plugin for `eslint` that adds SuiteScript globals
* [jsdoc](https://www.npmjs.com/package/jsdoc) - Documentation generator
* [jsdoc-plugin-suitescript](https://www.npmjs.com/package/jsdoc-plugin-suitescript) - NetSuite tag support for jsdoc
* [mocha](https://www.npmjs.com/package/mocha) - Test framework
* [should](https://www.npmjs.com/package/should) - BDD-style assertion library
