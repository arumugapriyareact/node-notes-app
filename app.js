const validator = require("validator");
const getNotes = require("./notes.js");

const transport = getNotes();
console.log(transport);
console.log(validator.isEmail("am@app.com"));
