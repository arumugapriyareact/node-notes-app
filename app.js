const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");
const yargs = require("yargs");

const transport = getNotes();
// console.log(transport);
// console.log(validator.isEmail("am@app.com"));
console.log(chalk.inverse.green("Success!"));
// const cmd = process.argv[2];
var argv = yargs.argv;
var command = argv._[0];

if (command == "add") {
  console.log(argv.title);
  console.log(argv.body);
  console.log("Adding note");
} else if (command == "remove") {
  console.log("Removing a note!");
} else if (command == "list") {
  console.log("list a note!");
} else if (command == "read") {
  console.log("Read the note!");
}
