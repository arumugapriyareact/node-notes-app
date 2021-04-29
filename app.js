const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

// const transport = getNotes();
// console.log(transport);
// console.log(validator.isEmail("am@app.com"));
// console.log(chalk.inverse.green("Success!"));
// const cmd = process.argv[2];
var argv = yargs.argv;
var command = argv._[0];
var title = argv.title;
var body = argv.body;
if (command == "add") {
  notes.addNotes(title, body);
} else if (command == "remove") {
  notes.removeNotes(title);
} else if (command == "list") {
  notes.listNotes();
} else if (command == "read") {
  notes.readNotes(title);
}
