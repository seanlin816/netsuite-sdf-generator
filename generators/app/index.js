'use strict';

var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description'
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author Name'
    }]).then(answers => {
      this.props = answers;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    );
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore')
    );
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('.mocharc'),
      this.destinationPath('.mocharc')
    );
    this.fs.copy(
      this.templatePath('Objects/.keep'),
      this.destinationPath('Objects/.keep')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copyTpl(
      this.templatePath('manifest.xml'),
      this.destinationPath('manifest.xml'), {
        name: this.props.name

      }
    );
  }

  install() {
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['add',"."]);
    this.spawnCommandSync('git', ['commit','-m','"first time commit"']);
    // this.installDependencies({
    //
    //   npm: false,
    //   bower: false,
    //   yarn: true
    // });
    //this.spawnCommand('git', ['init']);
    //this.spawnCommand('git', ['add',"."]);
    //this.spawnCommand('git', ['commit','-m','"first time commit"']);
  }
};
