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
      this.destinationPath('.editorconfig'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath('.eslintignore'),
      this.destinationPath('.eslintignore'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath('.eslintrc'),
      this.destinationPath('.eslintrc'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath('.mocharc'),
      this.destinationPath('.mocharc'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copy(
      this.templatePath('Objects/.keep'),
      this.destinationPath('Objects/.keep'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        description: this.props.description,
        author: this.props.author
      }
    );
  }

  install() {
    this.installDependencies({
      npm: false,
      bower: false,
      yarn: true
    });
    this.spawnCommand('git', ['init']);
  }
};
