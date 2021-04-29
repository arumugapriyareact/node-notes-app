const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.inverse.green("Note added successfully!"));
  } else {
    console.log(chalk.inverse.yellow("Note title taken !"));
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  const titleToRemove = title;

  const filteredNotes = notes.filter(item => item.title !== titleToRemove);
  if (notes.length > filteredNotes.length) {
    console.log(chalk.inverse.red("Note removed successfully!"));
  } else {
    console.log(chalk.inverse.yellow("Note not found!"));
  }
  saveNotes(filteredNotes);
  // console.log(filteredNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.red("your Notes"));
  notes.map(each => {
    let title = each.title;
    let body = each.body;
    return console.log(chalk.inverse.yellow(title));
  });
};

const readNotes = title => {
  const notes = loadNotes();
  var readNote = notes.map(each => {
    if (each.title == title) {
      return each;
    }
  });
  var findNote = readNote.filter(ele => {
    return ele !== undefined;
  });
  if (findNote.length > 0) {
    findNote.map(each => {
      console.log(chalk.inverse.green(each.title + " " + each.body));
    });
  } else {
    console.log(chalk.inverse.red("Note Not Found"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};
