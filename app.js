const validator = require("validator");
const chalk = require("chalk");
const getNotes = require("./notes.js");

const transport = getNotes();
console.log(transport);
console.log(validator.isEmail("am@app.com"));
console.log(chalk.inverse.green("Success!"));
