const fs = require("fs");
const chalk = require("chalk");

const getnotes = () => {
  return "your notes ...";
};

const addnotes = (title, body) => {
  const notes = loadData();

  // const duplicateData = notes.filter((note) => {
  // return note.title === title;
  // });
  const duplicateData = notes.find((note) => {
    return note.title === title;
  });

  if (!duplicateData) {
    notes.push({
      title: title,
      body: body,
    });
    saveData(notes);
    console.log(chalk.green.inverse("note added"));
  } else {
    console.log(chalk.red.inverse("the note title is taken"));
  }
};

const removenotes = (title) => {
  const notes = loadData();

  const removenote = notes.filter((note) => {
    return note.title !== title;
  });

  if (removenote.length === notes.length) {
    console.log(chalk.bgRed("no note found to remove"));
  } else {
    saveData(removenote);
    console.log(chalk.bgGreen("note removed sucessfully"));
  }
};

const listnotes = () => {
  const notes = loadData();

  console.log(chalk.inverse("your notes"));

  notes.map((note) => {
    console.log(note.title);
    console.log(note.body);
    console.log("\n");
  });
};

const readNote = (heading) => {
  const notes = loadData();

  // const [{ body }] = notes.filter((note) => {
  //   return note.title === title;
  // });

  const note = notes.find((note) => {
    return note.title === heading;
  });

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("no note found"));
  }
};

const saveData = (note) => {
  const data = JSON.stringify(note);
  fs.writeFileSync("notes.json", data);
};

const loadData = () => {
  try {
    const Bufferdata = fs.readFileSync("notes.json");
    const jsondata = Bufferdata.toString();
    return JSON.parse(jsondata);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getnotes: getnotes,
  addnotes: addnotes,
  removenotes: removenotes,
  listnotes: listnotes,
  readnote: readNote,
};
