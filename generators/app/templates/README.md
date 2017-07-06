## NetSuite Non-SDF Scaffolding

Project scaffold for a non-SDF NetSuite project

#### SuiteScripts Folder: Example Directory Structure
```
/
  project1/ - The top-level directory for a particular customization project
    lib/ - Common/helper modules for your project
      module1/ - source files for module named "module1"
      anotherModule/ - source files for module named "anotherModule"
    mySuitelet.js - Suitelet entry point script
    aUserEvent.js - User Event entry point script
  test/ - Test source
    project1/ - test files for project1
      module1/ - test files for module named "module1"
        doCalculationTest.js - test file for "doCalculation" function in module1
        doAnotherCalculationTest.js - test file for "doAnotherCalculation" function in module1
      anotherModule/ - test files for "anotherModule" module
  doc/ - Documentation for the account
```

*Recommendations*
* Maintain files for separate business process in separate project folders in the file cabinet.
* Each project should have its own separate `lib` and `test` structures.
* Place your NetSuite entry-point source files (e.g. User Events, Suitelets, etc) in the root of the project folder
* Extract the common business logic into library files/modules where possible, and place them in their own module folders under `lib`
* Organize your `test` directory by the file and function under test

#### Default dependencies
* [eslint](https://www.npmjs.com/package/eslint) - Code linter
* [eslint-plugin-suitescript](https://www.npmjs.com/package/eslint-plugin-suitescript) - Environment plugin for `eslint` that adds SuiteScript globals
* [jsdoc](https://www.npmjs.com/package/jsdoc) - Documentation generator
* [jsdoc-plugin-suitescript](https://www.npmjs.com/package/jsdoc-plugin-suitescript) - NetSuite tag support for jsdoc
* [mocha](https://www.npmjs.com/package/mocha) - Test framework
* [should](https://www.npmjs.com/package/should) - BDD-style assertion library
